# ImageGenerationRequestInPaintingParams

Parameters for INPAINTING task

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**image** | **string** |  | [optional] [default to undefined]
**maskImage** | **string** |  | [optional] [default to undefined]
**maskPrompt** | **string** |  | [optional] [default to undefined]
**text** | **string** |  | [optional] [default to undefined]
**negativeText** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { ImageGenerationRequestInPaintingParams } from '@quantcdn/quant-client';

const instance: ImageGenerationRequestInPaintingParams = {
    image,
    maskImage,
    maskPrompt,
    text,
    negativeText,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
