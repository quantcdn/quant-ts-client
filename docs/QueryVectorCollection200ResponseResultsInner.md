# QueryVectorCollection200ResponseResultsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**documentId** | **string** |  | [optional] [default to undefined]
**content** | **string** | Document text content | [optional] [default to undefined]
**similarity** | **number** | Cosine similarity score (1.0 for metadata-only queries) | [optional] [default to undefined]
**metadata** | **{ [key: string]: any; }** |  | [optional] [default to undefined]
**embedding** | **Array&lt;number&gt;** | Vector embedding (only if includeEmbeddings&#x3D;true) | [optional] [default to undefined]

## Example

```typescript
import { QueryVectorCollection200ResponseResultsInner } from '@quantcdn/quant-client';

const instance: QueryVectorCollection200ResponseResultsInner = {
    documentId,
    content,
    similarity,
    metadata,
    embedding,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
