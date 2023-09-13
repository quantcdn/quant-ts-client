# QuantCDN client API

Provides a client to common API interfaces on QuantCDN.

## Install

The preferred method for installation is via npm.

```
npm i @quantcdn/quant-client
```

## Usage

- Import `types` form '@quantcdn/quant-client' to correctly type parameters
- All responses are generated using the `PaginatedResponse` object which provides an async iterator

```
import { QuantClient, types } from '@quantcdn/quant-client'

const config:types.Config = {
  organization: process.env.QUANT_CUSTOMER,
  project: process.env.QUANT_PROJECT,
  token: process.env.QUANT_TOKEN
}

// If making organization API requests with the client you need to provide bearer
# config.bearer = process.env.QUANT_BEARER_TOKEN

// Create a new client instance.
const client = new QuantClient(config)

// Perform requests to the project API.
const p:types.URLPayload = {"url": "/*"}
client.project.purge(p).then(async res => {
   const r = await res.first()
   console.log(r)
})

// Ping the API to verify details.
client.project.ping().then(async res => {
  const b = await res.first()
  console.log(b)
})

// Access project metadata.
client.project.meta().then(async res => {
  // res.first() will return the first page of the paginated response.
  for await (const i of res) {
    console.log(i)
  }
})
```

## Available methods

The `QuantClient` class has three properties to access different APIs that are exposed by Quant. These are `project`, `organization`, `search`. Both the project and search clients are project specific.

### `client.project`

| Method    | Description                            | Parameters            |
| --------- | -------------------------------------- | --------------------- |
| ping      | Ping the API to validate credentials   |                       |
| meta      | Access the global meta for the project |                       |
| markup    | Send a HTML file                       | types.MarkupPayload   |
| file      | Send a non-HTML file                   | types.FilePayload     |
| publish   | Publish a URL                          | types.PublishPayload  |
| unpublish | Unpublish a URL                        | types.PublishPayload  |
| redirect  | Create a redirect                      | types.RedirectPayload |
| proxy     | Create an origin proxy                 | types.ProxyPayload    |
| delete    | Delete a resource                      | types.URLPayload      |
| revisions | Show revisions for a URL               | types.URLPayload      |
| purge     | Purge cache for the given URL          | types.URLPayload      |

### `client.organization`

| Method  | Description                          | Parameters           |
| ------- | ------------------------------------ | -------------------- |
| wafLogs | Access WAF logs for the organization | types.WafLogsPayload |

### `client.search`

| Method | Description                 | Parameters               |
| ------ | --------------------------- | ------------------------ |
| index  | Add a new item to the index | types.SearchIndexPayload |
| remove | Remove a URL form the index | types.URLPayload         |
| clear  | Clear the projects index    |                          |
| status | Get the index status        |                          |
