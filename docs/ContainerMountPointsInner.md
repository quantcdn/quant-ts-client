# ContainerMountPointsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sourceVolume** | **string** | The name of the logical volume | [default to undefined]
**containerPath** | **string** | The path inside the container where the volume is mounted | [default to undefined]
**readOnly** | **boolean** |  | [optional] [default to false]

## Example

```typescript
import { ContainerMountPointsInner } from '@quantcdn/quant-client';

const instance: ContainerMountPointsInner = {
    sourceVolume,
    containerPath,
    readOnly,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
