# ImageGenerationRequestImageGenerationConfig

General image generation configuration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**width** | **number** |  | [optional] [default to undefined]
**height** | **number** |  | [optional] [default to undefined]
**quality** | **string** |  | [optional] [default to QualityEnum_Standard]
**cfgScale** | **number** |  | [optional] [default to 6.5]
**seed** | **number** |  | [optional] [default to undefined]
**numberOfImages** | **number** |  | [optional] [default to 1]

## Example

```typescript
import { ImageGenerationRequestImageGenerationConfig } from '@quantcdn/quant-client';

const instance: ImageGenerationRequestImageGenerationConfig = {
    width,
    height,
    quality,
    cfgScale,
    seed,
    numberOfImages,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
