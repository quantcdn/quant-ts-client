# ContainerHealthCheck

Container health check configuration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**command** | **Array&lt;string&gt;** | The command to run to determine if the container is healthy | [optional] [default to undefined]
**interval** | **number** | Time period (seconds) between health checks | [optional] [default to 30]
**timeout** | **number** | Time period (seconds) to wait for a health check to return | [optional] [default to 5]
**retries** | **number** | Number of times to retry a failed health check | [optional] [default to 3]
**startPeriod** | **number** | Grace period (seconds) to ignore unhealthy checks after container starts | [optional] [default to undefined]

## Example

```typescript
import { ContainerHealthCheck } from '@quantcdn/quant-client';

const instance: ContainerHealthCheck = {
    command,
    interval,
    timeout,
    retries,
    startPeriod,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
