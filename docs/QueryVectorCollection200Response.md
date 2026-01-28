# QueryVectorCollection200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**results** | [**Array&lt;QueryVectorCollection200ResponseResultsInner&gt;**](QueryVectorCollection200ResponseResultsInner.md) |  | [optional] [default to undefined]
**query** | **string** | Original query text (null if vector or metadata search was used) | [optional] [default to undefined]
**searchMode** | **string** | Search mode used: text (query provided), vector (pre-computed), metadata (listByMetadata) | [optional] [default to undefined]
**filter** | **object** | Filter that was applied (if any) | [optional] [default to undefined]
**count** | **number** | Number of results returned | [optional] [default to undefined]
**executionTimeMs** | **number** | Query execution time in milliseconds | [optional] [default to undefined]
**collectionId** | **string** |  | [optional] [default to undefined]
**hasMore** | **boolean** | True if more results available (listByMetadata mode only) | [optional] [default to undefined]
**nextCursor** | **string** | Cursor for next page. Pass as cursor param to continue. Null when no more results. Only in listByMetadata mode. | [optional] [default to undefined]
**pagination** | [**QueryVectorCollection200ResponsePagination**](QueryVectorCollection200ResponsePagination.md) |  | [optional] [default to undefined]

## Example

```typescript
import { QueryVectorCollection200Response } from '@quantcdn/quant-client';

const instance: QueryVectorCollection200Response = {
    results,
    query,
    searchMode,
    filter,
    count,
    executionTimeMs,
    collectionId,
    hasMore,
    nextCursor,
    pagination,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
