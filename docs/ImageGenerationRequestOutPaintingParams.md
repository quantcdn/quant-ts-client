# ImageGenerationRequestOutPaintingParams

Parameters for OUTPAINTING task

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**image** | **string** |  | [optional] [default to undefined]
**maskImage** | **string** |  | [optional] [default to undefined]
**maskPrompt** | **string** |  | [optional] [default to undefined]
**outPaintingMode** | **string** |  | [optional] [default to OutPaintingModeEnum_Default]
**text** | **string** |  | [optional] [default to undefined]
**negativeText** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { ImageGenerationRequestOutPaintingParams } from '@quantcdn/quant-client';

const instance: ImageGenerationRequestOutPaintingParams = {
    image,
    maskImage,
    maskPrompt,
    outPaintingMode,
    text,
    negativeText,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
