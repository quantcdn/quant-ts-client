# CreateVectorCollectionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Collection name (used for reference) | [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**embeddingModel** | **string** | Embedding model to use. Supported: amazon.titan-embed-text-v2:0, cohere.embed-english-v3, cohere.embed-multilingual-v3 | [default to undefined]
**dimensions** | **number** | Embedding dimensions (default: 1024) | [optional] [default to undefined]

## Example

```typescript
import { CreateVectorCollectionRequest } from '@quantcdn/quant-client';

const instance: CreateVectorCollectionRequest = {
    name,
    description,
    embeddingModel,
    dimensions,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
