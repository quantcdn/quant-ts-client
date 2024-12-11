import { type Buffer } from 'buffer'

export interface Config {
  organization: string
  token?: string
  project?: string
  bearer?: string
  endpoint?: string
}

export interface ProxyPayload {
  url: string
  destination: string
  published: boolean
}

export interface MarkupPayload {
  data: Buffer
  url: string
  published: boolean
  findAttachments?: boolean
  skipPurge?: boolean
}

export interface FilePayload {
  data: Buffer
  url: string
  skipPurge?: boolean
}

export interface PublishPayload {
  location: string
  revision: number
}

export enum RedirectStatus {
  Permanent = 301,
  Termporary = 302
}

export interface RedirectPayload {
  url: string
  redirect_url: string
  redirect_http_code: RedirectStatus
  published: boolean
}

export interface URLPayload {
  url: string
}

// eslint-disable-next-line
export interface WafLogsPayload {
  project: string
}

export interface SearchIndexPayload {
  data: Buffer
}

export interface WafLog {
  timestamp: string
  ip_address: string
  location: string
  type: string
  mode: string
  rule_id: string
  domain: string
  url: string
  method: string
  user_agent: string
}

export interface MetaFilters {
  sort_field: string
  sort_direction: string
}
