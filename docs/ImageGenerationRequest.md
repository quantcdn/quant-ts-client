# ImageGenerationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**modelId** | **string** | Model to use for image generation | [optional] [default to 'amazon.nova-canvas-v1:0']
**taskType** | **string** | Type of image generation task | [default to undefined]
**textToImageParams** | [**ImageGenerationRequestTextToImageParams**](ImageGenerationRequestTextToImageParams.md) |  | [optional] [default to undefined]
**colorGuidedGenerationParams** | [**ImageGenerationRequestColorGuidedGenerationParams**](ImageGenerationRequestColorGuidedGenerationParams.md) |  | [optional] [default to undefined]
**imageVariationParams** | [**ImageGenerationRequestImageVariationParams**](ImageGenerationRequestImageVariationParams.md) |  | [optional] [default to undefined]
**inPaintingParams** | [**ImageGenerationRequestInPaintingParams**](ImageGenerationRequestInPaintingParams.md) |  | [optional] [default to undefined]
**outPaintingParams** | [**ImageGenerationRequestOutPaintingParams**](ImageGenerationRequestOutPaintingParams.md) |  | [optional] [default to undefined]
**backgroundRemovalParams** | [**ImageGenerationRequestBackgroundRemovalParams**](ImageGenerationRequestBackgroundRemovalParams.md) |  | [optional] [default to undefined]
**virtualTryOnParams** | **object** | Parameters for VIRTUAL_TRY_ON task | [optional] [default to undefined]
**imageGenerationConfig** | [**ImageGenerationRequestImageGenerationConfig**](ImageGenerationRequestImageGenerationConfig.md) |  | [optional] [default to undefined]
**region** | **string** | AWS region for Nova Canvas | [optional] [default to RegionEnum_UsEast1]

## Example

```typescript
import { ImageGenerationRequest } from '@quantcdn/quant-client';

const instance: ImageGenerationRequest = {
    modelId,
    taskType,
    textToImageParams,
    colorGuidedGenerationParams,
    imageVariationParams,
    inPaintingParams,
    outPaintingParams,
    backgroundRemovalParams,
    virtualTryOnParams,
    imageGenerationConfig,
    region,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
