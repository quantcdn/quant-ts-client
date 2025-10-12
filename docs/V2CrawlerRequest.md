# V2CrawlerRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **string** | Error message | [default to undefined]
**error** | **boolean** | Error flag | [default to undefined]
**name** | **string** | Crawler name | [optional] [default to undefined]
**domain** | **string** | Domain to crawl | [default to undefined]
**browser_mode** | **boolean** | Enable browser mode | [optional] [default to false]
**urls** | **Array&lt;string&gt;** | URLs to crawl | [optional] [default to undefined]
**headers** | **{ [key: string]: string; }** | Custom headers | [optional] [default to undefined]
**exclude** | **Array&lt;string&gt;** | URLs to exclude | [optional] [default to undefined]
**include** | **Array&lt;string&gt;** | URLs to include | [optional] [default to undefined]

## Example

```typescript
import { V2CrawlerRequest } from '@quantcdn/quant-client';

const instance: V2CrawlerRequest = {
    message,
    error,
    name,
    domain,
    browser_mode,
    urls,
    headers,
    exclude,
    include,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
