import { type Client } from './interfaces'
import type * as request from 'request'

export class PaginatedResponse implements AsyncIterator<any> {
  private readonly client: Client
  private readonly request: request.Options
  private readonly per_page: number = 10
  private page: number = 0
  private total: number = 0
  private hasNext: boolean = true

  constructor (client: Client, options: request.Options) {
    this.client = client
    this.request = options
    this.per_page = 10
    this.page = 1

    if (typeof this.request.qs !== 'object') {
      this.request.qs = {}
    }
  }

  async first (): Promise<any> {
    let body: any = { data: {} }
    try {
      body = await this.client.do(this.request)
    } catch (err) {
      return await new Promise((resolve, reject) => { reject(err) })
    }
    return await new Promise(resolve => { resolve(body) })
  }

  async do (): Promise<any> {
    return await this.first()
  }

  async next (): Promise<IteratorResult<any>> {
    let body: any = { data: {} }

    if (this.page > this.total && this.total !== 0) {
      this.hasNext = false
      return body
    }

    this.request.qs.page = this.page
    this.request.qs.per_page = this.per_page

    try {
      body = await this.client.do(this.request)
    } catch (err) {
      this.hasNext = false
      return body
    }

    if ('global_meta' in body) {
      this.total = body.global_meta.total_pages
      this.page += 1
      this.hasNext = this.page <= body.global_meta.total_pages
      // console.log(body.global_meta.records)
      return body.global_meta.records
    } else {
      if (!('pagination' in body)) {
        this.total = 0
        return body
      }

      this.total = body.pagination.total_pages
      this.hasNext = this.page <= body.pagination.total_pages
      this.page += 1

      return body.data
    }
  }

  async * [Symbol.asyncIterator] (): AsyncIterator<any> {
    while (this.hasNext) {
      const data = await this.next()
      yield data
    }
  }
}
