import { type Client } from './interfaces'
import type * as request from '@cypress/request'

export class PaginatedResponse implements AsyncIterator<any> {
  private readonly client: Client
  private readonly request: request.Options
  private readonly per_page: number
  private page: number = 0
  private total: number = 0
  private hasNext: boolean = true

  constructor (client: Client, options: request.Options) {
    this.client = client
    this.request = options
    // Use page_size from query parameters or default to 10
    this.per_page = (this.request.qs?.page_size as number) ?? 10
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

    this.page += 1

    if ('global_meta' in body) {
      // Handle meta responses.
      this.total = body.global_meta.total_pages
      this.hasNext = this.page <= body.global_meta.total_pages
      return body.global_meta.records
    } else if ('total_records' in body) {
      // WAFlog responses.
      this.total = Math.ceil(body.total_reccords % this.per_page)
      this.hasNext = body.next !== ''
      return body.data
    } else {
      this.total = body.pagination.total_pages
      this.hasNext = this.page <= body.pagination.total_pages
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
