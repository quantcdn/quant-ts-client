# CiCacheDeleteRequest

The scope to delete: either {\"all\": true} alone (the whole cache of the pool), or repoId with optionally ref, version and key, where a field needs every field before it (repoId, ref, version, key). An empty object is refused.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**all** | **boolean** | true clears the whole cache of the pool. Must be the only field. | [optional] [default to undefined]
**repoId** | **number** | GitHub repository id. A digit string is also accepted. | [optional] [default to undefined]
**ref** | **string** | Git ref; starts with refs/, a valid git ref name without %. | [optional] [default to undefined]
**version** | **string** |  | [optional] [default to undefined]
**key** | **string** | The exact cache key. Deletes only that entry, not keys that start with it. | [optional] [default to undefined]

## Example

```typescript
import { CiCacheDeleteRequest } from '@quantcdn/quant-client';

const instance: CiCacheDeleteRequest = {
    all,
    repoId,
    ref,
    version,
    key,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
