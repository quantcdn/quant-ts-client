import { Client } from "./interfaces";
import * as request from 'request';
import * as types from "./types";

export class PaginatedResponse implements AsyncIterator<any> {

  private client:Client;
  private request:request.Options;
  private per_page:number = 10;
  private page:number = 0;
  private total:number = 0;
  private hasNext:boolean = true;

  constructor(client:Client, options:request.Options) {
    this.client = client
    this.request = options
    this.per_page = 10
    this.page = 1;

    if (!this.request.qs) {
      this.request.qs = {}
    }
  }

  async first(): Promise<any> {
    let body:any = {data: {}}
    try {
      body = await this.client.do(this.request)
    } catch(err) {
      return new Promise((res, rej) => rej(err))
    }
    return new Promise(res => res(body))
  }

  async do(): Promise<any> {
    return this.first()
  }

  async next(): Promise<IteratorResult<any>> {
    let body:any = {data: {}}

    if (this.page > this.total && this.total !== 0) {
      this.hasNext = false
      return body
    }

    this.request.qs.page = this.page
    this.request.qs.per_page = this.per_page

    try {
      body = await this.client.do(this.request)
    } catch(err) {
      this.hasNext = false
      return body
    }

    if ("global_meta" in body) {
      this.total = body.global_meta.total_pages;
      this.page+=1
      this.hasNext = this.page <= body.global_meta.total_pages
      const v = JSON.parse(JSON.stringify(body.global_meta));
      delete v.records
      console.log(v)
      return body.global_meta.records
    } else {

      if (!("pagination" in body)) {
        this.total = 0
        return body
      }

      this.total = body.pagination.total_pages;
      this.hasNext = this.page <= body.pagination.total_pages;
      this.page+=1

      return body
    }
  }

  async * [Symbol.asyncIterator](): AsyncIterator<any> {
    while (this.hasNext) {
      const data = await this.next();
      yield data;
    }
  }
}
