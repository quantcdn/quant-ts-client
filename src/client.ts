/**
 * Quant API client.
 */

import request = require('@cypress/request')
import type * as types from './types'
import type * as interfaces from './interfaces'
import { PaginatedResponse } from './response'

class HttpClient implements interfaces.Client {
  public baseUrl: string
  public headers: object

  constructor (baseUrl: string, headers: object) {
    this.baseUrl = baseUrl
    this.headers = headers
  }

  public async do (options: request.Options): Promise<any> {
    return await new Promise((resolve, reject) => {
      request(options, (error: any, response: Response, body: any) => {
        if (error !== null) {
          reject(error)
        } else {
          resolve(body)
        }
      })
    })
  }

  public async get (path: string, qs?: object, headers?: object): Promise<any> {
    const options: request.Options = {
      url: `${this.baseUrl}/${path}`,
      method: 'GET',
      headers: { ...this.headers, ...headers },
      json: true,
      qs
    }
    const res = new PaginatedResponse(this, options)
    return await new Promise((resolve) => { resolve(res) })
  }

  public async post (path: string, body?: any, headers?: object, formData?: object, qs?: object): Promise<any> {
    const options: request.Options = {
      url: `${this.baseUrl}/${path}`,
      method: 'POST',
      headers: { ...this.headers, ...headers },
      json: true,
      body,
      formData,
      qs
    }
    const res = new PaginatedResponse(this, options)
    return await new Promise((resolve) => { resolve(res) })
  }

  public async delete (path: string, body?: any, headers?: object): Promise<any> {
    const options: request.Options = {
      url: `${this.baseUrl}/${path}`,
      method: 'DELETE',
      headers: { ...this.headers, ...headers },
      json: true,
      body
    }
    const res = new PaginatedResponse(this, options)
    return await new Promise((resolve) => { resolve(res) })
  }

  public async patch (path: string, body?: any, headers?: object): Promise<any> {
    const options: request.Options = {
      url: `${this.baseUrl}/${path}`,
      method: 'PATCH',
      headers: { ...this.headers, ...headers },
      json: true,
      body
    }
    const res = new PaginatedResponse(this, options)
    return await new Promise((resolve) => { resolve(res) })
  }
}

export class QuantClient {
  private readonly _project: interfaces.Client
  private readonly _organization: interfaces.Client
  private readonly _search: interfaces.Client

  constructor (config: types.Config, Client?: interfaces.ClientConstructor) {
    if (typeof Client === 'undefined') {
      Client = HttpClient
    }

    this._project = new Client(config.endpoint ?? 'https://api.quantcdn.io/v1', {
      'User-Agent': 'Quant (+http://api.quantcdn.io)',
      'Quant-Token': config.token,
      'Quant-Customer': config.organization,
      'Quant-Project': config.project,
      'Content-Type': 'application/json'
    })
    this._search = new Client(config.endpoint ?? 'https://api.quantcdn.io/v1', {
      'User-Agent': 'Quant (+http://api.quantcdn.io)',
      'Quant-Token': config.token,
      'Quant-Customer': config.organization,
      'Quant-Project': config.project,
      'Content-Type': 'application/json'
    })
    this._organization = new Client('https://dashboard.quantcdn.io/api/v1', {
      'User-Agent': 'Quant (+http://api.quantcdn.io)',
      // @todo: Americanise.
      'Quant-Organisation': config.organization,
      Authorization: `Bearer ${config.bearer}`
    })
  }

  public getClient (name: string): interfaces.Client {
    return this[`_${name}`]
  }

  public project: interfaces.ProjectApi = {

    /**
     * Ping and ensure the API credentials are valid.
     *
     * @returns Promise<any>
     *   The response object.
     */
    ping: async (): Promise<any> => {
      return await this._project.get('ping')
    },

    /**
     * Fetch metadata for all objects stored in Quant.
     *
     * @returns Promise<any>
     *   The repsonse object.
     */
    meta: async (filters?: types.MetaFilters): Promise<any> => {
      const qs: { sort_direction?: string, sort_field?: string, quant_type?: string, page_size?: number } = {}

      if (filters?.sort_direction != null) {
        qs.sort_direction = filters.sort_direction
      }

      if (filters?.sort_field != null) {
        qs.sort_field = filters.sort_field
      }

      if (filters?.quant_type != null) {
        qs.quant_type = filters.quant_type
      }

      if (filters?.page_size != null) {
        // Ensure page_size is between 1 and 100
        qs.page_size = Math.min(Math.max(1, filters.page_size), 100)
      }

      return await this._project.get('global-meta', qs)
    },

    /**
     * Send markup directly to the Quant API.
     *
     * @param markup MarkupPayload
     *   The markup payload data.
     *
     * @returns Promise<any>
     *   The repsonse object.
     */
    markup: async (payload: types.MarkupPayload): Promise<any> => {
      const headers = {}
      const body = {
        url: payload.url,
        content: payload.data.toString('utf-8'),
        published: payload.published,
        find_attachments: false
      }

      if (typeof payload.skipPurge !== 'undefined') {
        headers['Quant-Skip-Purge'] = true
      }

      if (typeof payload.findAttachments !== 'undefined') {
        body.find_attachments = payload.findAttachments
      }

      return await this._project.post('markup', body, headers)
    },

    /**
     * Upload a file asset to Quant.
     *
     * @param payload FilePayload
     *   The file payload data.
     *
     * @returns Promise<any>
     *   The repsonse object.
     */
    file: async (payload: types.FilePayload): Promise<any> => {
      const headers = {
        'Quant-File-Url': payload.url
      }

      if (typeof payload.skipPurge !== 'undefined') {
        headers['Quant-Skip-Purge'] = 'true'
      }

      if (typeof payload.headers !== 'undefined') {
        headers['Quant-File-Headers'] = payload.headers
      }

      const formData = {
        file: {
          value: payload.data,
          options: {
            filename: 'file',
            contentType: 'application/octet-stream'
          }
        }
      }

      return await this._project.post('file', undefined, headers, formData)
    },

    /**
     * Publish a revision.
     *
     * @param payload PublishPayload
     *   The payload object
     *
     * @returns Promise<any>
     *   The response object.
     */
    publish: async (payload: types.PublishPayload): Promise<any> => {
      const response = await this._project.patch(`publish/${payload.revision}`, {}, {
        'Quant-Url': payload.location
      })
      return response.first()
    },

    /**
     * Unpublish the current published revision.
     *
     * @param payload PublishPayload
     *   The payload object.
     *
     * @returns Promise<any>
     *   The response object.
     */
    unpublish: async (payload: types.PublishPayload): Promise<any> => {
      const response = await this._project.patch('unpublish', {}, {
        'Quant-Url': payload.location
      })
      return response.first()
    },

    /**
     * Redirect a URL.
     *
     * @param payload RedirectPayload
     *   The redirect payload.
     *
     * @returns Promise<any>
     *   The repsonse object.
     */
    redirect: async (payload: types.RedirectPayload): Promise<any> => {
      return await this._project.post('redirect', payload)
    },

    /**
     * Proxy a URL to a different origin.
     *
     * @param payload ProxyPayload
     *   The proxy API payload.
     *
     * @returns Promise<any>
     *   The repsonse object.
     */
    proxy: async (payload: types.ProxyPayload): Promise<any> => {
      return await this._project.post('proxy', payload)
    },

    /**
     * Delete a URL from Quant.
     *
     * @param payload URLPayload
     *   The API payload.
     *
     * @returns Promise<any>
     *   The repsonse object.
     */
    delete: async (payload: types.URLPayload): Promise<any> => {
      const response = await this._project.delete('delete/all', {}, {
        'Quant-Url': payload.url
      })
      return await response.first()
    },

    /**
     * Get a revision from the API.
     *
     * @param payload URLPayload
     *   The URL payload.
     *
     * @returns Promise<any>
     *   The repsonse object.
     */
    revisions: async (payload: types.URLPayload): Promise<any> => {
      return await this._project.get('revisions/latest', {}, {
        'Quant-Url': payload.url
      })
    },

    /**
     * Purge Varnish for a given URL pattern.
     *
     * @param payload URLPayload
     *   The URL payload.
     *
     * @returns Promise<any>
     *   The repsonse object.
     */
    purge: async (payload: types.URLPayload): Promise<any> => {
      return await this._project.post('purge', {}, {
        'Quant-Url': payload.url
      })
    }
  }

  public organization: interfaces.OrganizationApi = {
    /**
     * Fetch WAF logs from.
     *
     * @param payload types.WafLogsPayload
     *   The API request payload.
     *
     * @returns Promise<any>
     *   The response object.
     */
    wafLogs: async (payload: types.WafLogsPayload): Promise<any> => {
      const headers = { 'Quant-Project': payload.project }
      return await this._organization.get('waf/logs', {}, headers)
    }
  }

  public search: interfaces.SearchApi = {
    /**
     * Index search data.
     *
     * @param payload types.SearchIndexPayload
     *   The search index paylod.
     *
     * @returns Promise<any>
     *   The response.
     */
    index: async (payload: types.SearchIndexPayload): Promise<any> => {
      return await this._search.post('search', JSON.parse(payload.data.toString()))
    },

    /**
     * Remove an item from the search index.
     *
     * @param payload types.URLPayload
     *   The URL payload.
     *
     * @returns Promise<any>
     *   The response obejct.
     */
    remove: async (payload: types.URLPayload): Promise<any> => {
      return await this._search.delete('search', {}, {
        'Quant-Url': payload.url
      })
    },

    /**
     * Clear the search index.
     *
     * @returns Promise<any>
     *   The response object.
     */
    clear: async (): Promise<any> => {
      return await this._search.delete('search/all')
    },

    /**
     * Get the search index status.
     *
     * @returns Promise<any>
     *   The response object.
     */
    status: async (): Promise<any> => {
      return await this._search.get('search')
    }
  }
}
