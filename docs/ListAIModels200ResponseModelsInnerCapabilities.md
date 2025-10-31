# ListAIModels200ResponseModelsInnerCapabilities

Model capabilities and features

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**text** | **boolean** | Supports text generation | [optional] [default to undefined]
**multimodal** | **boolean** | Supports images/video | [optional] [default to undefined]
**embeddings** | **boolean** | Supports embeddings | [optional] [default to undefined]
**streaming** | **boolean** | Supports streaming responses | [optional] [default to undefined]
**toolUse** | **boolean** | Supports function calling | [optional] [default to undefined]

## Example

```typescript
import { ListAIModels200ResponseModelsInnerCapabilities } from '@quantcdn/quant-client';

const instance: ListAIModels200ResponseModelsInnerCapabilities = {
    text,
    multimodal,
    embeddings,
    streaming,
    toolUse,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
