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
**singleTaskOnly** | **boolean** | Optional. Forces single-task mode for data-safe applications (max one running task). When true: capacity is locked to 1. When false: explicitly allows scaling. When omitted: the platform auto-detects stateful containers and enables single-task mode if found. | [optional] [default to undefined]
**startupGracePeriodSeconds** | **number** | Optional. Seconds the load balancer waits after a task starts before an unhealthy health check can replace it (applied as the ECS service\&#39;s healthCheckGracePeriodSeconds when a load balancer is attached). Raise for apps that are slow to boot, e.g. run migrations on startup. Tasks that become healthy sooner still enter service immediately. Defaults to 120 when omitted. | [optional] [default to 120]
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
    singleTaskOnly,
    startupGracePeriodSeconds,
    spotConfiguration,
    enableCrossEnvNetworking,
    enableCrossAppNetworking,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
