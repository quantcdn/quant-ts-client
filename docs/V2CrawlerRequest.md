# V2CrawlerRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mode** | **string** | WAF operation mode | [optional] [default to ModeEnum_Report]
**paranoia_level** | **number** | OWASP paranoia level | [optional] [default to 1]
**allow_rules** | **Array&lt;string&gt;** | WAF rule IDs to allow/whitelist | [optional] [default to undefined]
**allow_ip** | **Array&lt;string&gt;** | IP addresses to allow | [optional] [default to undefined]
**block_ip** | **Array&lt;string&gt;** | IP addresses to block | [optional] [default to undefined]
**block_asn** | **Array&lt;string&gt;** | ASN numbers to block | [optional] [default to undefined]
**block_ua** | **Array&lt;string&gt;** | User agent patterns to block | [optional] [default to undefined]
**block_referer** | **Array&lt;string&gt;** | Referer patterns to block | [optional] [default to undefined]
**notify_slack** | **string** | Slack webhook URL for notifications | [optional] [default to undefined]
**notify_slack_hits_rpm** | **number** | Minimum hits per minute to trigger Slack notification | [optional] [default to undefined]
**notify_email** | **Array&lt;string&gt;** | Email addresses for notifications | [optional] [default to undefined]
**httpbl** | [**WafConfigHttpbl**](WafConfigHttpbl.md) |  | [optional] [default to undefined]
**block_lists** | [**WafConfigBlockLists**](WafConfigBlockLists.md) |  | [optional] [default to undefined]
**thresholds** | [**Array&lt;WafConfigThresholdsInner&gt;**](WafConfigThresholdsInner.md) | Rate limiting thresholds | [optional] [default to undefined]
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
**workers** | **number** | Number of concurrent workers (verified domains only) | [optional] [default to undefined]
**delay** | **number** | Delay between requests in seconds (verified domains only) | [optional] [default to undefined]
**depth** | **number** | Maximum crawl depth, -1 for unlimited (verified domains only) | [optional] [default to undefined]
**max_hits** | **number** | Maximum total requests, 0 for unlimited (verified domains only) | [optional] [default to undefined]
**max_html** | **number** | Maximum HTML pages, 0 for unlimited (verified domains only) | [optional] [default to undefined]
**status_ok** | **Array&lt;number&gt;** | HTTP status codes that will result in content being captured and pushed to Quant (verified domains only) | [optional] [default to undefined]
**sitemap** | **Array&lt;object&gt;** | Sitemap configuration (verified domains only) | [optional] [default to undefined]
**allowed_domains** | **Array&lt;string&gt;** | Allowed domains for multi-domain crawling, automatically enables merge_domains (verified domains only) | [optional] [default to undefined]
**user_agent** | **string** | Custom user agent, only when browser_mode is false (verified domains only) | [optional] [default to undefined]
**assets** | **object** | Asset harvesting configuration (verified domains only) | [optional] [default to undefined]
**max_errors** | **number** | Maximum errors before stopping crawl (verified domains only) | [optional] [default to undefined]

## Example

```typescript
import { V2CrawlerRequest } from '@quantcdn/quant-client';

const instance: V2CrawlerRequest = {
    mode,
    paranoia_level,
    allow_rules,
    allow_ip,
    block_ip,
    block_asn,
    block_ua,
    block_referer,
    notify_slack,
    notify_slack_hits_rpm,
    notify_email,
    httpbl,
    block_lists,
    thresholds,
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
