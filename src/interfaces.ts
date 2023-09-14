import type * as types from './types'
import type * as request from '@cypress/request'

export type ClientConstructor = new (baseUrl: string, headers: object) => Client

export interface Client {
  baseUrl: string
  headers: object
  do: (options: request.Options) => Promise<any>
  get: (path: string, qs?: object, headers?: object) => Promise<any>
  post: (path: string, body?: any, headers?: object, formData?: object, qs?: object) => Promise<any>
  delete: (path: string, body?: any, headers?: object) => Promise<any>
  patch: (path: string, body?: any, headers?: object) => Promise<any>
}

export interface ProjectApi {
  ping: () => Promise<any>
  meta: () => Promise<any>
  markup: (payload: types.MarkupPayload) => Promise<any>
  file: (payload: types.FilePayload) => Promise<any>
  publish: (payload: types.PublishPayload) => Promise<any>
  unpublish: (payload: types.PublishPayload) => Promise<any>
  redirect: (payload: types.RedirectPayload) => Promise<any>
  proxy: (payload: types.ProxyPayload) => Promise<any>
  delete: (payload: types.URLPayload) => Promise<any>
  revisions: (payload: types.URLPayload) => Promise<any>
  purge: (payload: types.URLPayload) => Promise<any>
}

export interface OrganizationApi {
  wafLogs: (payload: types.WafLogsPayload) => Promise<any>
}

export interface SearchApi {
  index: (payload: types.SearchIndexPayload) => Promise<any>
  remove: (payload: types.URLPayload) => Promise<any>
  clear: () => Promise<any>
  status: () => Promise<any>
}
