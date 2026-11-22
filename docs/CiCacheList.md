# CiCacheList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**totalBytes** | **number** | Size of every entry that matches the filter (partial when totalsComplete is false). | [default to undefined]
**entryCount** | **number** | Number of entries that match the filter (partial when totalsComplete is false). | [default to undefined]
**totalsComplete** | **boolean** | false when the count stopped at its time limit (about 10 seconds) on a very large cache; totalBytes and entryCount then cover only the part counted. | [default to undefined]
**entries** | [**Array&lt;CiCacheEntry&gt;**](CiCacheEntry.md) |  | [default to undefined]
**nextCursor** | **string** | Opaque. Pass as cursor, with the same filter, for the next page; null on the last page. | [default to undefined]

## Example

```typescript
import { CiCacheList } from '@quantcdn/quant-client';

const instance: CiCacheList = {
    totalBytes,
    entryCount,
    totalsComplete,
    entries,
    nextCursor,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
