# V2Crawler


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Crawler ID | [default to undefined]
**name** | **string** | Crawler name | [optional] [default to undefined]
**project_id** | **number** | Project ID | [default to undefined]
**uuid** | **string** | Crawler UUID | [default to undefined]
**config** | **string** | Crawler configuration (YAML) | [default to undefined]
**domain** | **string** | Crawler domain | [default to undefined]
**domain_verified** | **number** | Domain verification status | [optional] [default to 0]
**urls_list** | **string** | URLs list (YAML) | [optional] [default to undefined]
**webhook_url** | **string** | Webhook URL for notifications | [optional] [default to undefined]
**webhook_auth_header** | **string** | Authorization header for webhook | [optional] [default to undefined]
**webhook_extra_vars** | **string** | Extra variables for webhook | [optional] [default to undefined]
**browser_mode** | **boolean** | Browser mode enabled | [optional] [default to undefined]
**workers** | **number** | Number of concurrent workers | [optional] [default to undefined]
**delay** | **number** | Delay between requests in seconds | [optional] [default to undefined]
**depth** | **number** | Maximum crawl depth | [optional] [default to undefined]
**max_hits** | **number** | Maximum total requests | [optional] [default to undefined]
**max_html** | **number** | Maximum HTML pages | [optional] [default to undefined]
**status_ok** | **Array&lt;number&gt;** | HTTP status codes for content capture | [optional] [default to undefined]
**user_agent** | **string** | Custom user agent | [optional] [default to undefined]
**max_errors** | **number** | Maximum errors before stopping | [optional] [default to undefined]
**start_urls** | **Array&lt;string&gt;** | Starting URLs | [optional] [default to undefined]
**urls** | **Array&lt;string&gt;** | URLs list | [optional] [default to undefined]
**headers** | **{ [key: string]: string; }** | Custom headers | [optional] [default to undefined]
**exclude** | **Array&lt;string&gt;** | URL patterns to exclude | [optional] [default to undefined]
**include** | **Array&lt;string&gt;** | URL patterns to include | [optional] [default to undefined]
**sitemap** | [**Array&lt;V2CrawlerSitemapInner&gt;**](V2CrawlerSitemapInner.md) | Sitemap configuration | [optional] [default to undefined]
**allowed_domains** | **Array&lt;string&gt;** | Allowed domains | [optional] [default to undefined]
**assets** | [**V2CrawlerAssets**](V2CrawlerAssets.md) |  | [optional] [default to undefined]
**created_at** | **string** | Creation timestamp | [optional] [default to undefined]
**updated_at** | **string** | Last update timestamp | [optional] [default to undefined]
**deleted_at** | **string** | Deletion timestamp | [optional] [default to undefined]

## Example

```typescript
import { V2Crawler } from '@quantcdn/quant-client';

const instance: V2Crawler = {
    id,
    name,
    project_id,
    uuid,
    config,
    domain,
    domain_verified,
    urls_list,
    webhook_url,
    webhook_auth_header,
    webhook_extra_vars,
    browser_mode,
    workers,
    delay,
    depth,
    max_hits,
    max_html,
    status_ok,
    user_agent,
    max_errors,
    start_urls,
    urls,
    headers,
    exclude,
    include,
    sitemap,
    allowed_domains,
    assets,
    created_at,
    updated_at,
    deleted_at,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
