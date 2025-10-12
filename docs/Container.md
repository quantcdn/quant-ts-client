# Container


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  | [default to undefined]
**imageReference** | [**ContainerImageReference**](ContainerImageReference.md) |  | [default to undefined]
**cpu** | **number** |  | [optional] [default to undefined]
**memory** | **number** |  | [optional] [default to undefined]
**memoryReservation** | **number** |  | [optional] [default to undefined]
**exposedPorts** | **Array&lt;number&gt;** |  | [optional] [default to undefined]
**mountPoints** | [**Array&lt;ContainerMountPointsInner&gt;**](ContainerMountPointsInner.md) |  | [optional] [default to undefined]
**environment** | [**Array&lt;ContainerEnvironmentInner&gt;**](ContainerEnvironmentInner.md) |  | [optional] [default to undefined]
**command** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**entryPoint** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**essential** | **boolean** |  | [optional] [default to undefined]

## Example

```typescript
import { Container } from '@quantcdn/quant-client';

const instance: Container = {
    name,
    imageReference,
    cpu,
    memory,
    memoryReservation,
    exposedPorts,
    mountPoints,
    environment,
    command,
    entryPoint,
    essential,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
