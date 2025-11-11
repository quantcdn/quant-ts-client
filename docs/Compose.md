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
**enableCrossEnvNetworking** | **boolean** | Optional. Enable cross-environment networking within the same application. When false (default): Uses shared security group for complete isolation (most secure). When true: Uses app-specific security group to enable communication between environments of the same application (e.g., staging can connect to production database). Note: If enableCrossAppNetworking is true, this setting is overridden. | [optional] [default to false]
**enableCrossAppNetworking** | **boolean** | Optional. Enable cross-application networking within the same organization. When false (default): Uses shared/app-specific security group based on enableCrossEnvNetworking. When true: Uses org-specific security group to enable container-to-container communication with ALL applications in the same organization via service discovery (microservices architecture). This setting takes priority over enableCrossEnvNetworking. | [optional] [default to false]

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
    enableCrossEnvNetworking,
    enableCrossAppNetworking,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
