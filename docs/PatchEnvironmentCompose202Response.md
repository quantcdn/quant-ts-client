# PatchEnvironmentCompose202Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**architecture** | **string** |  | [optional] [default to undefined]
**taskCpu** | **string** |  | [optional] [default to undefined]
**taskMemory** | **string** |  | [optional] [default to undefined]
**minCapacity** | **number** |  | [optional] [default to undefined]
**maxCapacity** | **number** |  | [optional] [default to undefined]
**containers** | **Array&lt;object&gt;** |  | [optional] [default to undefined]
**spotConfiguration** | [**PatchEnvironmentCompose202ResponseSpotConfiguration**](PatchEnvironmentCompose202ResponseSpotConfiguration.md) |  | [optional] [default to undefined]
**enableCrossEnvNetworking** | **boolean** |  | [optional] [default to undefined]
**enableCrossAppNetworking** | **boolean** |  | [optional] [default to undefined]

## Example

```typescript
import { PatchEnvironmentCompose202Response } from '@quantcdn/quant-client';

const instance: PatchEnvironmentCompose202Response = {
    architecture,
    taskCpu,
    taskMemory,
    minCapacity,
    maxCapacity,
    containers,
    spotConfiguration,
    enableCrossEnvNetworking,
    enableCrossAppNetworking,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
