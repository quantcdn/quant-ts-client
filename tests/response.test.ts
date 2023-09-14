import { Client } from "../src/interfaces";
import { PaginatedResponse } from "../src/response";

import * as request from '@cypress/request';

import * as fs from 'fs';
const stub1 = JSON.parse(fs.readFileSync('./tests/fixtures/stub-page1.json', 'utf8'));
const stub2 = JSON.parse(fs.readFileSync('./tests/fixtures/stub-page2.json', 'utf8'));
const metaStub1 = JSON.parse(fs.readFileSync('./tests/fixtures/stub-global-meta-page1.json', 'utf8'));
const metaStub2 = JSON.parse(fs.readFileSync('./tests/fixtures/stub-global-meta-page2.json', 'utf8'));

class TestClient implements Client {
  public baseUrl:string;
  public headers:object;
  public reject:boolean = false;

  constructor(baseUrl:string, headers:object) {
    this.baseUrl = baseUrl
    this.headers = headers
    this.reject = false
  }

  public do(options: request.Options): Promise<any> {
    return new Promise((resolve, reject) => {
      if (options.url == "https://test.com/meta-test") {
        if (options.qs.page == 1) {
          resolve(metaStub1)
        } else {
          resolve(metaStub2)
        }
      } else {
        if (options.qs.page == 1) {
          resolve(stub1)
        } else {
          resolve(stub2)
        }
      }
    });
  }

  public get(path:string, qs?: object, headers?: object): Promise<any> {
    const options:request.Options = {
      url: `${this.baseUrl}/${path}`,
      method: 'GET',
      headers: { ...this.headers, ...headers },
      json: true,
      qs
    }
    let res = new PaginatedResponse(this, options)
    return new Promise(resolve => resolve(res))
  }

  public post(path:string, body?:any, headers?:object, formData?: object, qs?:object):Promise<any> {
    const options:request.Options = {
      url: `${this.baseUrl}/${path}`,
      method: 'POST',
      headers: { ...this.headers, ...headers },
      json: true,
      body,
      formData,
      qs
    }

    let res = new PaginatedResponse(this, options)
    return new Promise(resolve => resolve(res))
  }

  public delete(path: string, body?:any, headers?:object):Promise<any> {
    const options:request.Options = {
      url: `${this.baseUrl}/${path}`,
      method: 'DELETE',
      headers: {...this.headers, ...headers},
      json: true,
      body
    }

    let res = new PaginatedResponse(this, options)
    return new Promise(resolve => resolve(res))
  }

  public patch(path:string, body?:any, headers?:object):Promise<any> {
    const options:request.Options = {
      url: `${this.baseUrl}/${path}`,
      method: 'PATCH',
      headers: {...this.headers, ...headers},
      json: true,
      body
    }

    let res = new PaginatedResponse(this, options)
    return new Promise(resolve => resolve(res))
  }
}

describe('response test', () => {
  test('global meta paginated', async () => {
    let a = new TestClient('https://test.com', {})
    let b = await a.get('meta-test')
    let i = 0
    for await (const records of b) {
      for (const r in records) {
        i++;
      }
    }
    expect(i).toBe(20)
  })
  test('paginated response', async () => {
    let a = new TestClient('https://test.com', {})
    let b = await a.get('paginated')
    let i = 0
    for await (const records of b) {
      for (const r in records) {
        i++;
      }
    }
    expect(i).toBe(20)
  })
})
