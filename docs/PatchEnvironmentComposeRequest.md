# PatchEnvironmentComposeRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**architecture** | **string** |  | [optional] [default to undefined]
**taskCpu** | **string** |  | [optional] [default to undefined]
**taskMemory** | **string** |  | [optional] [default to undefined]
**minCapacity** | **number** |  | [optional] [default to undefined]
**maxCapacity** | **number** |  | [optional] [default to undefined]
**singleTaskOnly** | **boolean** | Forces single-task mode (max one running task). Omitted &#x3D; auto-detect from stateful containers. | [optional] [default to undefined]
**startupGracePeriodSeconds** | **number** | Seconds the load balancer waits after a task starts before an unhealthy health check can replace it. Default 120. | [optional] [default to undefined]
**containers** | **Array&lt;object&gt;** |  | [optional] [default to undefined]
**spotConfiguration** | [**PatchEnvironmentComposeRequestSpotConfiguration**](PatchEnvironmentComposeRequestSpotConfiguration.md) |  | [optional] [default to undefined]
**enableCrossEnvNetworking** | **boolean** |  | [optional] [default to undefined]
**enableCrossAppNetworking** | **boolean** |  | [optional] [default to undefined]

## Example

```typescript
import { PatchEnvironmentComposeRequest } from '@quantcdn/quant-client';

const instance: PatchEnvironmentComposeRequest = {
    architecture,
    taskCpu,
    taskMemory,
    minCapacity,
    maxCapacity,
    singleTaskOnly,
    startupGracePeriodSeconds,
    containers,
    spotConfiguration,
    enableCrossEnvNetworking,
    enableCrossAppNetworking,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
