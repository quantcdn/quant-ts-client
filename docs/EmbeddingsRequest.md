# EmbeddingsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**input** | [**EmbeddingsRequestInput**](EmbeddingsRequestInput.md) |  | [default to undefined]
**modelId** | **string** | Embedding model to use | [optional] [default to 'amazon.titan-embed-text-v2:0']
**dimensions** | **number** | Output embedding dimensions. Titan v2 supports: 256, 512, 1024, 8192 | [optional] [default to DimensionsEnum_NUMBER_1024]
**normalize** | **boolean** | Normalize embeddings to unit length (magnitude &#x3D; 1.0) | [optional] [default to true]

## Example

```typescript
import { EmbeddingsRequest } from '@quantcdn/quant-client';

const instance: EmbeddingsRequest = {
    input,
    modelId,
    dimensions,
    normalize,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
