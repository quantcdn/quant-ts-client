# V2CrawlerRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Crawler name | [optional] [default to undefined]
**domain** | **string** | Domain to crawl | [default to undefined]
**browser_mode** | **boolean** | Enable browser mode | [optional] [default to false]
**execute_js** | **boolean** | Execute JavaScript during asset collection (only when browser_mode is enabled) | [optional] [default to false]
**urls** | **Array&lt;string&gt;** | URLs to crawl | [optional] [default to undefined]
**start_urls** | **Array&lt;string&gt;** | Starting URLs for crawl | [optional] [default to undefined]
**headers** | **{ [key: string]: string; }** | Custom headers | [optional] [default to undefined]
**exclude** | **Array&lt;string&gt;** | URL patterns to exclude (regex) | [optional] [default to undefined]
**include** | **Array&lt;string&gt;** | URL patterns to include (regex) | [optional] [default to undefined]
**webhook_url** | **string** | Webhook URL for notifications | [optional] [default to undefined]
**webhook_auth_header** | **string** | Authorization header for webhook | [optional] [default to undefined]
**webhook_extra_vars** | **string** | Extra variables for webhook | [optional] [default to undefined]
**workers** | **number** | Number of concurrent workers (default: 2, non-default requires verification) | [optional] [default to undefined]
**delay** | **number** | Delay between requests in seconds (default: 4, non-default requires verification) | [optional] [default to undefined]
**depth** | **number** | Maximum crawl depth, -1 for unlimited | [optional] [default to undefined]
**max_hits** | **number** | Maximum total requests, 0 for unlimited (default: 0, non-default requires verification) | [optional] [default to undefined]
**max_html** | **number** | Maximum HTML pages, 0 for unlimited (default: org limit, non-default requires verification) | [optional] [default to undefined]
**status_ok** | **Array&lt;number&gt;** | HTTP status codes that will result in content being captured and pushed to Quant | [optional] [default to undefined]
**sitemap** | **Array&lt;object&gt;** | Sitemap configuration | [optional] [default to undefined]
**allowed_domains** | **Array&lt;string&gt;** | Allowed domains for multi-domain crawling, automatically enables merge_domains | [optional] [default to undefined]
**user_agent** | **string** | Custom user agent, only when browser_mode is false | [optional] [default to undefined]
**assets** | **object** | Asset harvesting configuration | [optional] [default to undefined]
**max_errors** | **number** | Maximum errors before stopping crawl | [optional] [default to undefined]

## Example

```typescript
import { V2CrawlerRequest } from '@quantcdn/quant-client';

const instance: V2CrawlerRequest = {
    name,
    domain,
    browser_mode,
    execute_js,
    urls,
    start_urls,
    headers,
    exclude,
    include,
    webhook_url,
    webhook_auth_header,
    webhook_extra_vars,
    workers,
    delay,
    depth,
    max_hits,
    max_html,
    status_ok,
    sitemap,
    allowed_domains,
    user_agent,
    assets,
    max_errors,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
