# CreateEnvironmentRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**envName** | **string** | Environment name (e.g., \&#39;staging\&#39;, \&#39;development\&#39;) | [default to undefined]
**minCapacity** | **number** | Minimum number of instances | [optional] [default to undefined]
**maxCapacity** | **number** | Maximum number of instances | [optional] [default to undefined]
**singleTaskOnly** | **boolean** | Optional. Forces single-task mode (max one running task). When omitted, the platform auto-detects stateful containers. | [optional] [default to undefined]
**startupGracePeriodSeconds** | **number** | Optional. Seconds the load balancer waits after a task starts before an unhealthy health check can replace it. If not set, the value from composeDefinition (or default 120) is used. | [optional] [default to 120]
**cloneConfigurationFrom** | **string** | Clone configuration from an existing environment | [optional] [default to undefined]
**composeDefinition** | [**Compose**](Compose.md) |  | [optional] [default to undefined]
**imageSuffix** | **string** | Optional image tag suffix for cloning | [optional] [default to undefined]
**spotConfiguration** | [**SpotConfiguration**](SpotConfiguration.md) |  | [optional] [default to undefined]
**environment** | [**Array&lt;CreateEnvironmentRequestEnvironmentInner&gt;**](CreateEnvironmentRequestEnvironmentInner.md) | Environment variables to inject | [optional] [default to undefined]
**mergeEnvironment** | **boolean** | Whether to merge environment variables with cloned ones (true) or replace them (false). Default: false | [optional] [default to undefined]

## Example

```typescript
import { CreateEnvironmentRequest } from '@quantcdn/quant-client';

const instance: CreateEnvironmentRequest = {
    envName,
    minCapacity,
    maxCapacity,
    singleTaskOnly,
    startupGracePeriodSeconds,
    cloneConfigurationFrom,
    composeDefinition,
    imageSuffix,
    spotConfiguration,
    environment,
    mergeEnvironment,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
