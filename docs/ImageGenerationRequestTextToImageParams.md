# ImageGenerationRequestTextToImageParams

Parameters for TEXT_IMAGE task

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**text** | **string** | Text prompt | [optional] [default to undefined]
**negativeText** | **string** | What NOT to include | [optional] [default to undefined]
**style** | **string** |  | [optional] [default to undefined]
**conditionImage** | **string** | Base64-encoded conditioning image | [optional] [default to undefined]
**controlMode** | **string** |  | [optional] [default to ControlModeEnum_CannyEdge]
**controlStrength** | **number** |  | [optional] [default to 0.7]

## Example

```typescript
import { ImageGenerationRequestTextToImageParams } from '@quantcdn/quant-client';

const instance: ImageGenerationRequestTextToImageParams = {
    text,
    negativeText,
    style,
    conditionImage,
    controlMode,
    controlStrength,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
