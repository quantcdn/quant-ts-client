import { QuantClient } from "../src"
import * as types from "../src/types"
import { Client } from "../src/interfaces"
import * as request from '@cypress/request';
import { Buffer } from "buffer"

class TestClient implements Client {
  public baseUrl:string;
  public headers:object;
  public reject:boolean = false;

  constructor(baseUrl:string, headers:object) {
    this.baseUrl = baseUrl
    this.headers = headers
    this.reject = false
  }

  public do(options:request.Options): Promise<any> {
    return new Promise(resolve => resolve('okay!'))
  }

  public get(path:string, qs?: object, headers?: object): Promise<any> {
    return new Promise((resolve, reject) => {
      const options:request.Options = {
        url: `${this.baseUrl}/${path}`,
        method: 'GET',
        headers: { ...this.headers, ...headers },
        json: true,
        qs
      }
      this.reject ? reject(new Error('failure')) : resolve(options)
    })
  }

  public post(path:string, body?:any, headers?:object, formData?: object, qs?:object):Promise<any> {
    return new Promise((resolve, reject) => {
      const options:request.Options = {
        url: `${this.baseUrl}/${path}`,
        method: 'POST',
        headers: { ...this.headers, ...headers },
        json: true,
        body,
        formData,
        qs
      }
      this.reject ? reject(new Error('failure')) : resolve(options)
    })
  }

  public delete(path: string, body?:any, headers?:object):Promise<any> {
    return new Promise((resolve, reject) => {
      const options:request.Options = {
        url: `${this.baseUrl}/${path}`,
        method: 'DELETE',
        headers: {...this.headers, ...headers},
        json: true,
        body
      }
      this.reject ? reject(new Error('failure')) : resolve(options)
    })
  }

  public patch(path:string, body?:any, headers?:object):Promise<any> {
    return new Promise((resolve, reject) => {
      const options:request.Options = {
        url: `${this.baseUrl}/${path}`,
        method: 'PATCH',
        headers: {...this.headers, ...headers},
        json: true,
        body
      }
      this.reject ? reject(new Error('failure')) : resolve(options)
    })
  }
}

describe("Testing QuantClient", () => {
  const config:types.Config = {
    organization: "test",
    bearer: "testbearertoken",
    project: "test-project",
    token: "testprojecttoken"
  }

  const t = new QuantClient(config, TestClient)

  test("constructing a new instance", () => {
    expect(t.getClient('project').headers).toMatchObject({
      'User-Agent': 'Quant (+http://api.quantcdn.io)',
      'Quant-Token': config.token,
      'Quant-Customer': config.organization,
      'Quant-Project': config.project,
      'Content-Type': 'application/json',
    })
    expect(t.getClient('search').headers).toMatchObject({
      'User-Agent': 'Quant (+http://api.quantcdn.io)',
      'Quant-Token': config.token,
      'Quant-Customer': config.organization,
      'Quant-Project': config.project,
      'Content-Type': 'application/json',
    })
    expect(t.getClient('organization').headers).toMatchObject({
      'User-Agent': 'Quant (+http://api.quantcdn.io)',
      'Quant-Organisation': config.organization,
      'Authorization': `Bearer ${config.bearer}`,
    })
  })

  describe('project', () => {
    describe('ping', () => {
      test('success', () => {
        t.project.ping().then(r => {
          expect(r.url).toBe('https://api.quantcdn.io/v1/ping')
          expect(r.method).toBe('GET')
        })
      })
    })
    test('meta', () => {
      t.project.meta().then(r => {
        expect(r.url).toBe('https://api.quantcdn.io/v1/global-meta')
        expect(r.method).toBe('GET')
      })
    })
    describe('markup', () => {
      let payload:types.MarkupPayload = {
        url: "/test/markup",
        data: Buffer.from("this is a test"),
        published: true
      }
      test('default', () => {
        t.project.markup(payload).then(r => {
          expect(r.url).toBe('https://api.quantcdn.io/v1/markup')
          expect(r.body.content).toBe('this is a test')
          expect(r.body.url).toBe('/test/markup')
          expect(r.body.published).toBe(true)
          expect(r.body.find_attachments).toBe(false)
        })
      })
      test('skip cache', () => {
        payload.skipPurge = true
        t.project.markup(payload).then(r => {
          expect(r.headers['Quant-Skip-Purge']).toBe(true)
        })
        payload.skipPurge = false
      })
      test('find attachments', () => {
        payload.findAttachments = true
        t.project.markup(payload).then(r => {
          expect(r.body.find_attachments).toBe(true)
        })
      })
    })
    test('file', () => {
      const payload:types.FilePayload = {
        url: "/test/image.jpg",
        data: Buffer.from('image')
      }
    })
    describe('publish', () => {
      const payload:types.PublishPayload = {
        location: '/test',
        revision: 1
      }
      test('default', () => {
        t.project.publish(payload).then(r => {
          expect(r.url).toBe('https://api.quantcdn.io/v1/publish/1')
          expect(r.method).toBe('PATCH')
        })
      })
    })
    describe('unpublish', () => {
      const payload:types.PublishPayload = {
        location: '/test',
        revision: 1,
      }
      test('default', () => {
        t.project.unpublish(payload).then(r => {
          expect(r.url).toBe('https://api.quantcdn.io/v1/unpublish/1')
          expect(r.method).toBe('PATCH')
        })
      })
    })
    describe('redirect', () => {
      const payload:types.RedirectPayload = {
        url: "/from",
        redirect_url: "/to",
        redirect_http_code: types.RedirectStatus.Permanent,
        published: true
      }
      test('enabled', () => {
        t.project.redirect(payload).then(r => {
          expect(r.method).toBe('POST')
          expect(r.body.published).toBe(true)
          expect(r.body.redirect_http_code).toBe(types.RedirectStatus.Permanent)
        })
      })
      test('disabled', () => {
        payload.published = false
        t.project.redirect(payload).then(r => {
          expect(r.method).toBe('POST')
          expect(r.body.published).toBe(false)
        })
      })
    })
    describe('proxy', () => {
      const payload:types.ProxyPayload = {
        url: '/path-to-proxy',
        destination: 'https://location-to-proxy-to.com',
        published: true,
      }
      test('enabled', () => {
        t.project.proxy(payload).then(r => {
          expect(r.url).toBe('https://api.quantcdn.io/v1/proxy')
          expect(r.method).toBe('POST')
          expect(r.body.destination).toBe('https://location-to-proxy-to.com')
          expect(r.body.url).toBe('/path-to-proxy')
        })
      })
    })
    describe('delete', () => {})
    describe('revisions', () => {
      const payload:types.URLPayload = {
        url: "/test"
      }
      test('default', () => {
        t.project.revisions(payload).then(r => {
          expect(r.url).toBe('https://api.quantcdn.io/v1/revisions/latest')
          expect(r.headers['Quant-Url']).toBe('/test');
        })
      })
    })
    describe('purge', () => {
      const payload:types.URLPayload = {
        url: '/test'
      }
      test('default', () => {
        t.project.purge(payload).then(r => {
          expect(r.url).toBe('https://api.quantcdn.io/v1/purge')
          expect(r.headers['Quant-Url']).toBe('/test');
        })
      })
    })
  })

  describe('organization', () => {
    describe('waf-logs', () => {})
  })

  describe('search', () => {
    describe('index', () => {})
    describe('remove', () => {})
    describe('clear', () => {})
    describe('status', () => {})
  })
})
