/**
 * Quant API client.
 */

const request = require('request');
const util = require('util');
const fs = require('fs');
const path = require('path');
const mime = require('mime-types');
const querystring = require('querystring');

import { QuantConfig } from "./config";
import { QuantURL } from "./helper/quant-url"

export function QuantClient() {

  const req = util.promisify(request); // eslint-disable-line
  const get = util.promisify(request.get);
  const post = util.promisify(request.post);
  const patch = util.promisify(request.patch);
  const del = util.promisify(request.delete);

  let headers = {}
  let config: QuantConfig

  /**
   * Handle the response.
   *
   * @param {string} response
   *   Response body from the Quant API.
   *
   * @return {object}
   *   The API response.
   */
  const handleResponse = function (response) {
    const body = typeof response.body == 'string' ? JSON.parse(response.body) : response.body; // eslint-disable-line max-len

    if (typeof body.errors != 'undefined') {
      let msg = '';
      for (const i in body.errors) { // eslint-disable-line
        msg += body.errors[i].errorMsg + '\n';
      }
      throw new Error(msg);
    }

    if (response.statusCode == 400) {
      // @TODO: this is generally if the content is
      // streamed to the endpoint 4xx and 5xx are thrown
      // similarly, the API should respond with errors
      // otherwise.
      if (typeof body.errorMsg != 'undefined') {
        throw new Error(body.errorMsg);
      }
      throw new Error('Critical error...');
    }

    if (body.error || (typeof body.errorMsg != 'undefined' && body.errorMsg.length > 0)) { // eslint-disable-line max-len
      const msg = typeof body.errorMsg != 'undefined' ? body.errorMsg : body.msg;
      throw new Error(msg);
    }

    return body;
  };

  return {
    /**
     * Initialize the client
     */
    init: function () {
      this.config = {
        clientid: process.env.QUANT_CUSTOMER,
        project: process.env.QUANT_PROJECT,
        token: process.env.QUANT_TOKEN,
        endpoint: 'https://api.quantcdn.io/v1'
      };

      this.headers = {
        'User-Agent': 'Quant (+http://api.quantcdn.io)',
        'Quant-Token': this.config.token,
        'Quant-Customer': this.config.clientid,
        'Quant-Project': this.config.project,
        'Content-Type': 'application/json',
      };
    },
    /**
     * Ping the quant API.
     *
     * @return {object}
     *   The response object.
     *
     * @throws Error.
     */
    ping: async function () {
      try {
        this.init();

        const options = {
          url: `${this.config.endpoint}/ping`,
          json: true,
          headers,
        };

        const res = await get(options);
        return handleResponse(res);
      } catch (err) {
        console.error(err);
      }
    },

    /**
     * Access the global meta for the project.
     *
     * @param {bool} unfold
     *   Unfold the record set.
     * @param {bool} exclude
     *   Exclude delete objects from the meta result.
     * @param {object} extend
     *   Additional query parameters to send.
     *
     * @return {object}
     *   The global meta response object.
     *
     * @throws Error.
     *
     * @TODO
     *   - Async iterator for memory 21k items ~ 40mb.
     */
    meta: async function (unfold = false, exclude = true, extend = {}) {
      try {
        this.init();

        const records = [];
        const query = Object.assign({
          page_size: 500,
          published: true,
          deleted: false,
          sort_field: 'last_modified',
          sort_direction: 'desc',
        }, extend);
        const url = `${this.config.endpoint}/global-meta?${querystring.stringify(query)}`;
        const doUnfold = async function (i) {
          const res = await get({
            url: `${url}&page=${i}`,
            json: true,
            headers,
          });

          if (res.body.global_meta && res.body.global_meta.records) {
            res.body.global_meta.records.map((item) => records.push({ url: item.meta.url, md5: item.meta.md5 }));
          }
        };

        let page = 1;
        const options = {
          url: `${url}&page=${page}`,
          json: true,
          headers,
        };

        // Seed the record set.
        const res = await get(options);

        if (!res.body.global_meta) {
          // If no records have been published then global_meta is not
          // present in the response.
          return;
        }

        if (res.body.global_meta.records) {
          res.body.global_meta.records.map((item) => records.push({ url: item.meta.url, md5: item.meta.md5 }));
        }

        if (unfold) {
          page++;
          while (res.body.global_meta.total_pages >= page) {
            await doUnfold(page);
            page++;
          }
        }

        return {
          total_pages: res.body.global_meta.total_pages,
          total_records: res.body.global_meta.total_records,
          records,
        };
      } catch (err) {
        console.error(err);
      }
    },

    /**
     * Send a file to the server.
     *
     * @param {string} file
     *   The path to the file.
     * @param {string} location
     *   The path the location.
     * @param {bool} published
     *   The status.
     * @param {bool} attachments
     *   Should quant find attachments.
     * @param {bool} skipPurge
     *   Skip CDN cache purge.
     * @param {bool} includeIndex
     *   Include index.html suffix on HTML assets.
     * @param {object} extraHeaders
     *   Additional HTTP headers.
     * @param {string} encoding
     *   The encoding type.
     *
     * @return {object}
     *   The API response.
     */
    send: async function (file, location, published = true, attachments = false, skipPurge = false, includeIndex = false, extraHeaders = {}, encoding = 'utf-8') {
      try {
        this.init();

        const mimeType = mime.lookup(file);
        if (mimeType == 'text/html') {
          if (!location) {
            const p = path.resolve(process.cwd(), this.config.dir);
            // If a location isn't given, calculate it.
            location = path.relative(p, file);
          }

          location = QuantURL.prepare(location);

          if (!location.endsWith('.html') && includeIndex) {
            location = `${location}/index.html`;
            location = location.replace(/^\/\//, '/');
          }

          return await this.markup(file, location, published, attachments, extraHeaders, encoding, skipPurge);
        } else {
          return await this.file(file, location, false, extraHeaders, skipPurge);
        }
      } catch (err) {
        console.error(err);
      }
    },

    /**
     * Upload markup.
     *
     * @param {string} file
     *   Filepath on disk.
     * @param {string} location
     *   The web accessible destination.
     * @param {bool} published
     *   The status.
     * @param {bool} attachments
     *   Quant looking for attachments.
     * @param {object} extraHeaders
     *   Additional HTTP headers.
     * @param {string} encoding
     *   The encoding type.
     * @param {bool} skipPurge
     *   Skip CDN cache purge.
     *
     * @return {object}
     *   The API response.
     */
    markup: async function (file, location, published = true, attachments = false, extraHeaders = {}, encoding = 'utf-8', skipPurge = false) { // eslint-disable-line max-len
      try {
        this.init();

        if (!Buffer.isBuffer(file)) {
          if (!location) {
            const p = path.resolve(process.cwd(), this.config.dir);
            // If a location isn't given, calculate it.
            location = path.relative(p, file);
          }
          file = fs.readFileSync(file, [encoding]);
        }

        const content = file.toString('utf8');
        location = location.startsWith('/') ? location : `/${location}`;

        if (skipPurge) {
          headers['Quant-Skip-Purge'] = 'true';
        }

        const options = {
          url: `${this.config.endpoint}`,
          json: true,
          body: {
            url: location,
            find_attachments: attachments,
            content,
            published,
          },
          headers: {
            ...headers,
          },
        };

        //   if (Object.entries(extraHeaders).length > 0) {
        //     options.body.headers = extraHeaders;
        //   }

        const res = await post(options);
        return handleResponse(res);
      } catch (err) {
        console.error(err);
      }
    },

    /**
     * Send a file to the Quant API.
     *
     * @param {string} local
     *   File path on disk.
     * @param {string} location
     *   Accessible location.
     * @param {bool} absolute
     *   If the location is an absolute path.
     * @param {object} extraHeaders
     *   Additional HTTP headers.
     * @param {bool} skipPurge
     *   Skip CDN cache purge.
     *
     * @return {object}
     *   The successful payload.
     *
     * @throws Error
     */
    file: async function (local, location, absolute = false, extraHeaders = {}, skipPurge = false) {
      try {
        this.init();

        if (!Buffer.isBuffer(local)) {
          if (!location) {
            const p = path.resolve(process.cwd(), this.config.dir);
            // If a location isn't given, calculate it.
            location = path.relative(p, local);
            location.replace(path.basename(location), '');
          }
          if (!fs.existsSync(local)) {
            throw new Error('File is not accessible.');
          }
          local = fs.createReadStream(local);
        }

        const formData = {
          data: local,
        };

        location = location.startsWith('/') ? location : `/${location}`;

        if (skipPurge) {
          headers['Quant-Skip-Purge'] = 'true';
        }

        const options = {
          url: this.config.endpoint,
          json: true,
          headers: {
            ...headers,
            'Content-Type': 'multipart/form-data',
            'Quant-File-Url': location,
          },
          formData,
        };

        if (Object.entries(extraHeaders).length > 0) {
          options.headers['Quant-File-Headers'] = JSON.stringify(extraHeaders);
        }

        const res = await post(options);
        return handleResponse(res);
      } catch (err) {
        console.error(err);
      }
    },

    /**
     * Change the status of an asset.
     *
     * @param {string} location
     *   The URL location of the content.
     * @param {string} revision
     *   The revision to publish.
     *
     * @return {object}
     *   API payload.
     *
     * @throws Error.
     */
    publish: async function (location, revision) {
      try {
        this.init();

        const url = QuantURL.prepare(location);

        if (!revision) {
          throw Error('Invalid revision ID provided.');
        }

        const options = {
          url: `${this.config.endpoint}/publish/${revision}`,
          headers: {
            ...headers,
            'Quant-Url': url,
          },
          json: true,
        };
        const res = await patch(options);
        return handleResponse(res);
      } catch (err) {
        console.error(err);
      }
    },

    /**
     * Unpublish a URL.
     *
     * @param {string} url
     *   The URL to unpublish.
     *
     * @return {object}
     *
     * @throws Error.
     */
    unpublish: async function (url) {
      try {
        this.init();

        url = QuantURL.prepare(url);

        const options = {
          url: `${this.config.endpoint}/unpublish`,
          headers: {
            ...headers,
            'Quant-Url': url,
          },
          json: true,
        };

        const res = await patch(options);
        return handleResponse(res);
      } catch (err) {
        console.error(err);
      }
    },

    /**
     *
     * @param {string} from
     *   The URL to redirect form.
     * @param {string} to
     *   The URL to redirect to.
     * @param {string} author
     *   (Optional) Author.
     * @param {int} status
     *   HTTP status code.
     *
     * @return {object}
     *   API payload.
     *
     * @throws Error.
     */
    redirect: async function (from, to, author, status = 302) {
      try {
        this.init();

        const options = {
          url: `${this.config.endpoint}/redirect`,
          headers: {
            ...headers,
          },
          json: true,
          body: {
            url: from,
            redirect_url: to,
            redirect_http_code: status,
            published: true,
          },
        };

        if (status < 300 || status > 400) {
          throw new Error('A valid redirect status code is required');
        }

        //   if (author) {
        //     options.body.info = {author_user: author};
        //   }

        const res = await post(options);
        return handleResponse(res);
      } catch (err) {
        console.error(err);
      }
    },

    /**
     * Create a proxy with the Quant API.
     *
     * @param {string} url
     *   The relative URL to proxy.
     * @param {string} destination
     *   The absolute FQDN/path to proxy to.
     * @param {bool} published
     *   If the proxy is published
     * @param {string} username
     *   Basic auth user.
     * @param {string} password
     *   Basic auth password.
     *
     * @return {object}
     *   The response.
     *
     * @throws Error.
     */
    proxy: async function (url, destination, published = true, username, password) { // eslint-disable-line max-len
      try {
        this.init();

        const options = {
          url: `${this.config.endpoint}/proxy`,
          headers: {
            ...headers,
          },
          json: true,
          body: {
            url,
            destination,
            published,
          },
        };

        //   if (username) {
        //     options.body.basic_auth_user = username;
        //     options.body.basic_auth_pass = password;
        //   }

        const res = await post(options);
        return handleResponse(res);
      } catch (err) {
        console.error(err);
      }
    },

    /**
     * Delete a path from Quant.
     *
     * @param {string} path
     *
     * @return {object}
     *   The response object.
     *
     * @throw Error.
     */
    delete: async function (path) {
      try {
        this.init();
        path = path.replace('index.html', '');

        const options = {
          url: `${this.config.endpoint}/delete/all`,
          headers: {
            ...headers,
            'Quant-Url': path,
          },
        };

        const res = await del(options);
        return handleResponse(res);
      } catch (err) {
        console.error(err);
      }
    },

    /**
     * Get the revision history from Quant.
     *
     * @param {string} url
     *   The URL path to get revisions for.
     * @param {string|bool} revision
     *   Retrieve a specific revision.
     *
     * @return {object}
     *   The response.
     *
     * @throws Error.
     */
    revisions: async function (url, revision = false) {
      try {
        this.init();
        const path = revision ? revision : 'published';

        url = url.indexOf('/') == 0 ? url : `/${url}`;
        url = url.toLowerCase();
        url = url.replace(/\/?index\.html/, '');

        const options = {
          url: `${this.config.endpoint}/revisions/${path}`,
          headers: {
            ...headers,
            'Quant-Url': url,
          },
          json: true,
        };
        const res = await get(options);
        return handleResponse(res);
      } catch (err) {
        console.error(err);
      }
    },

    /**
     * Purge URL patterns from Quants Varnish.
     *
     * @param {string} urlPattern
     *
     * @throws Error
     */
    purge: async function (urlPattern) {
      try {
        this.init();

        const options = {
          url: `${this.config.endpoint}/purge`,
          headers: {
            ...this.headers,
            'Quant-Url': urlPattern,
          },
        };
        const res = await post(options);

        return handleResponse(res);
      } catch (err) {
        console.error(err);
      }
    },

    /**
      * Add/update items in search index.
      *
      * @param {string} filePath
      *
      * @throws Error
      */
    searchIndex: async function (filePath) {
      try {
        this.init();
        let data = '';

        // filePath is a JSON file we send the raw content of.
        try {
          data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        } catch (err) {
          console.error(err);
          return;
        }

        const options = {
          url: `${this.config.endpoint}/search`,
          headers: {
            ...this.headers,
          },
          json: true,
          body: data,
        };
        const res = await post(options);

        return handleResponse(res);
      } catch (err) {
        console.error(err);
      }
    },

    /**
      * Remove item from search index.
      *
      * @param {string} url
      *
      * @throws Error
      */
    searchRemove: async function (url) {
      try {
        this.init();
        const options = {
          url: `${this.config.endpoint}/search`,
          headers: {
            ...this.headers,
            'Quant-Url': url,
          },
          json: true,
        };
        const res = await del(options);

        return handleResponse(res);
      } catch (err) {
        console.error(err);
      }
    },


    /**
      * Clear search index.
      *
      * @throws Error
      */
    searchClearIndex: async function () {
      try {
        this.init();
        const options = {
          url: `${this.config.endpoint}/search/all`,
          headers: {
            ...this.headers,
          },
          json: true,
        };
        const res = await del(options);

        return handleResponse(res);
      } catch (err) {
        console.error(err);
      }
    },

    /**
      * Retrieve search index status.
      *
      * @throws Error
      */
    searchStatus: async function () {
      try {
        this.init();
        const options = {
          url: `${this.config.endpoint}/search`,
          headers: {
            ...this.headers,
          },
          json: true,
        };
        const res = await get(options);

        return handleResponse(res);
      } catch (err) {
        console.error(err);
      }
    },
  };
};
