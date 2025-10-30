# ImageGeneration200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**images** | **Array&lt;string&gt;** | Array of base64-encoded generated images | [default to undefined]
**maskImage** | **string** | Base64-encoded mask image (for virtual try-on) | [optional] [default to undefined]
**error** | **string** | Error message if any images were blocked by content moderation | [optional] [default to undefined]

## Example

```typescript
import { ImageGeneration200Response } from '@quantcdn/quant-client';

const instance: ImageGeneration200Response = {
    images,
    maskImage,
    error,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
