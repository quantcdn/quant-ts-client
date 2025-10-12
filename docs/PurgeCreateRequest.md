# PurgeCreateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cache_keys** | **Array&lt;string&gt;** | Cache keys to purge | [default to undefined]
**urls** | **Array&lt;string&gt;** | URLs to purge | [optional] [default to undefined]
**scope** | **string** | Purge scope (org or project) | [default to 'project']
**soft** | **boolean** | Soft purge | [optional] [default to true]

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
