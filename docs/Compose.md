# Compose


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**containers** | [**Array&lt;Container&gt;**](Container.md) |  | [optional] [default to undefined]
**architecture** | **string** | CPU architecture (X86_64 or ARM64) | [optional] [default to undefined]
**taskCpu** | **number** | Task-level CPU units (e.g., 256, 512, 1024) | [optional] [default to undefined]
**taskMemory** | **number** | Task-level memory in MB | [optional] [default to undefined]
**minCapacity** | **number** | Minimum number of instances | [optional] [default to undefined]
**maxCapacity** | **number** | Maximum number of instances | [optional] [default to undefined]
**spotConfiguration** | [**SpotConfiguration**](SpotConfiguration.md) |  | [optional] [default to undefined]

## Example

```typescript
import { Compose } from '@quantcdn/quant-client';

const instance: Compose = {
    containers,
    architecture,
    taskCpu,
    taskMemory,
    minCapacity,
    maxCapacity,
    spotConfiguration,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
