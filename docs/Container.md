# Container


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Name of the container | [default to undefined]
**imageReference** | [**ContainerImageReference**](ContainerImageReference.md) |  | [default to undefined]
**cpu** | **number** | Container-level CPU units | [optional] [default to undefined]
**memory** | **number** | Container-level memory hard limit (MiB) | [optional] [default to undefined]
**memoryReservation** | **number** | Container-level memory soft limit (MiB) | [optional] [default to undefined]
**exposedPorts** | **Array&lt;number&gt;** | List of container ports to expose | [optional] [default to undefined]
**mountPoints** | [**Array&lt;ContainerMountPointsInner&gt;**](ContainerMountPointsInner.md) |  | [optional] [default to undefined]
**environment** | [**Array&lt;ContainerEnvironmentInner&gt;**](ContainerEnvironmentInner.md) | Environment variables specific to this container | [optional] [default to undefined]
**secrets** | [**Array&lt;ContainerSecretsInner&gt;**](ContainerSecretsInner.md) | Secrets mapped to environment variables | [optional] [default to undefined]
**healthCheck** | [**ContainerHealthCheck**](ContainerHealthCheck.md) |  | [optional] [default to undefined]
**dependsOn** | [**Array&lt;ContainerDependsOnInner&gt;**](ContainerDependsOnInner.md) | Container startup dependencies | [optional] [default to undefined]
**command** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**entryPoint** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**workingDirectory** | **string** |  | [optional] [default to undefined]
**essential** | **boolean** |  | [optional] [default to true]
**readonlyRootFilesystem** | **boolean** |  | [optional] [default to false]
**user** | **string** |  | [optional] [default to undefined]
**originProtection** | **boolean** | Enable origin protection for all exposed ports on this container | [optional] [default to false]

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
    secrets,
    healthCheck,
    dependsOn,
    command,
    entryPoint,
    workingDirectory,
    essential,
    readonlyRootFilesystem,
    user,
    originProtection,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
