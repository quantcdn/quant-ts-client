import { PaginatedResponse } from '../src/response'
import { Client } from '../src/interfaces'
import { expect } from 'chai'
import * as request from '@cypress/request'

class TestClient implements Client {
  public baseUrl: string
  public headers: object
  private testData: any

  constructor(baseUrl: string, headers: object, testData?: any) {
    this.baseUrl = baseUrl
    this.headers = headers
    this.testData = testData || {
      data: [1, 2, 3],
      pagination: {
        current_page: 1,
        from: 1,
        total_pages: 1,
        per_page: 3,
        to: 3,
        total: 3
      }
    }
  }

  public async do(options: request.Options): Promise<any> {
    return await Promise.resolve(this.testData)
  }

  public async get(path: string, qs?: object, headers?: object): Promise<any> {
    return await Promise.resolve({})
  }

  public async post(path: string, body?: any, headers?: object, formData?: object, qs?: object): Promise<any> {
    return await Promise.resolve({})
  }

  public async delete(path: string, body?: any, headers?: object): Promise<any> {
    return await Promise.resolve({})
  }

  public async patch(path: string, body?: any, headers?: object): Promise<any> {
    return await Promise.resolve({})
  }
}

describe('PaginatedResponse', () => {
  const client = new TestClient('https://api.quantcdn.io/v1', {})

  const options = {
    url: 'https://api.quantcdn.io/v1/test',
    method: 'GET'
  }

  it('should paginate through results', async () => {
    const response = new PaginatedResponse(client, options)
    let results: any[] = []

    for await (const items of response) {
      if (Array.isArray(items)) {
        results = results.concat(items)
      } else {
        results.push(items)
      }
    }

    expect(results).to.deep.equal([1, 2, 3])
  })

  it('should handle empty responses', async () => {
    const emptyData = {
      data: [],
      pagination: {
        current_page: 1,
        from: null,
        total_pages: 1,
        per_page: 10,
        to: null,
        total: 0
      }
    }
    const emptyClient = new TestClient('https://api.quantcdn.io/v1', {}, emptyData)

    const response = new PaginatedResponse(emptyClient, options)
    let results: any[] = []

    for await (const items of response) {
      if (Array.isArray(items)) {
        results = results.concat(items)
      } else {
        results.push(items)
      }
    }

    expect(results).to.deep.equal([])
  })
})
