# CrawlersRunRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**urls** | **Array&lt;string&gt;** | Optional URLs to crawl (overrides crawler\&#39;s default URL configuration). If not provided, the crawler will use its configured URLs or perform a full crawl. | [optional] [default to undefined]

## Example

```typescript
import { CrawlersRunRequest } from '@quantcdn/quant-client';

const instance: CrawlersRunRequest = {
    urls,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
