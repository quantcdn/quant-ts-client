# QueryVectorCollectionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**query** | **string** | Natural language search query (mutually exclusive with vector) | [optional] [default to undefined]
**vector** | **Array&lt;number&gt;** | Pre-computed embedding vector (mutually exclusive with query). Array length must match collection dimension. | [optional] [default to undefined]
**limit** | **number** | Maximum number of results to return | [optional] [default to 5]
**threshold** | **number** | Minimum similarity score (0-1, higher &#x3D; more relevant) | [optional] [default to 0.7]
**includeEmbeddings** | **boolean** | Include embedding vectors in response (for debugging) | [optional] [default to false]
**filter** | [**QueryVectorCollectionRequestFilter**](QueryVectorCollectionRequestFilter.md) |  | [optional] [default to undefined]
**listByMetadata** | **boolean** | If true, skip semantic search and return all documents matching the filter. Requires filter. Supports cursor pagination. | [optional] [default to false]
**cursor** | **string** | Pagination cursor for listByMetadata mode. Use nextCursor from previous response. Opaque format - do not construct manually. | [optional] [default to undefined]
**sortBy** | **string** | Field to sort by in listByMetadata mode | [optional] [default to SortByEnum_CreatedAt]
**sortOrder** | **string** | Sort direction in listByMetadata mode | [optional] [default to SortOrderEnum_Desc]

## Example

```typescript
import { QueryVectorCollectionRequest } from '@quantcdn/quant-client';

const instance: QueryVectorCollectionRequest = {
    query,
    vector,
    limit,
    threshold,
    includeEmbeddings,
    filter,
    listByMetadata,
    cursor,
    sortBy,
    sortOrder,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
