# CiCacheStats


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**days** | **number** |  | [default to undefined]
**hits** | **number** | Cache lookups that found an entry. | [default to undefined]
**misses** | **number** | Cache lookups that found no entry. | [default to undefined]
**saves** | **number** | Entries saved. | [default to undefined]
**bytesIn** | **number** | Bytes saved to the cache. | [default to undefined]
**bytesOut** | **number** | Bytes restored from the cache. | [default to undefined]
**hitRate** | **number** | hits / (hits + misses); null when both are 0. | [default to undefined]

## Example

```typescript
import { CiCacheStats } from '@quantcdn/quant-client';

const instance: CiCacheStats = {
    days,
    hits,
    misses,
    saves,
    bytesIn,
    bytesOut,
    hitRate,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
