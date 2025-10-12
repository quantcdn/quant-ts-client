# ContainerImageReference


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** | Specifies whether the image is internal (ECR) or external (e.g., Docker Hub) | [default to undefined]
**identifier** | **string** | The image identifier. For \&#39;internal\&#39; type, this is the image tag. For \&#39;external\&#39; type, this is the full image name. | [default to undefined]

## Example

```typescript
import { ContainerImageReference } from '@quantcdn/quant-client';

const instance: ContainerImageReference = {
    type,
    identifier,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
