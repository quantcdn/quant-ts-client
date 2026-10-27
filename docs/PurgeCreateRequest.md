# PurgeCreateRequest

Send cache_keys, urls, or both. At least one of them must be non-empty.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cache_keys** | **Array&lt;string&gt;** | Cache keys to purge. Optional when urls is set. | [optional] [default to undefined]
**urls** | **Array&lt;string&gt;** | URL paths to purge, each starting with a slash (for example /contact). Use /_* to purge the whole project. At most 100 per request; a single string is also accepted. The whole list is validated before any purge is sent. Optional when cache_keys is set. | [optional] [default to undefined]
**scope** | **string** | Purge scope for cache_keys (project or org). Not used for urls. | [optional] [default to ScopeEnum_Project]
**soft** | **boolean** | Soft purge: mark cached content stale instead of removing it. When omitted, the purge is soft (true). Send false for a hard purge. | [optional] [default to true]

## Example

```typescript
import { PurgeCreateRequest } from '@quantcdn/quant-client';

const instance: PurgeCreateRequest = {
    cache_keys,
    urls,
    scope,
    soft,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
