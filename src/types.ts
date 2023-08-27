import { Buffer } from 'buffer';

export type Config = {
  organization:string;
  token?:string;
  project?:string;
  bearer?:string;
}

export type ProxyPayload = {
  url:string;
  destination:string;
  published:boolean;
}

export type MarkupPayload = {
  data:Buffer;
  url:string;
  published:boolean;
  findAttachments?:boolean;
  skipPurge?:boolean
}

export type FilePayload = {
  data:Buffer;
  location: string;
  skipPurge?:boolean
}

export type PublishPayload = {
  location: string;
  revision: number;
}

export enum RedirectStatus {
  Permanent = 301,
  Termporary = 302
}

export type RedirectPayload = {
  url:string;
  redirect_url:string;
  redirect_http_code:RedirectStatus;
  published:boolean
}

export type URLPayload = {
  url:string
}

export type WafLogsPayload = {}

export type SearchIndexPayload = {
  data: Buffer;
}

export type WafLog = {
  timestamp: string; // "2023-06-22T14:17:12",
  ip_address: string; // "54.66.235.141",
  location: string; // "AU",
  type: string; // "headerrate",
  mode: string; // "report",
  rule_id: string; // "10010",
  domain: string; // "api.quantcdn.io",
  url: string; // "\/v1\/global-meta?page_size=200",
  method: string; // "POST",
  user_agent: string; // "PyQuantCrawl"
}