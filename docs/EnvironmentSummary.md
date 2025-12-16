# EnvironmentSummary

Environment summary returned in list responses

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**envName** | **string** | Environment name | [optional] [default to undefined]
**status** | **string** | Environment status | [optional] [default to undefined]
**deploymentStatus** | **string** | Current deployment status | [optional] [default to undefined]
**runningCount** | **number** | Number of running tasks | [optional] [default to undefined]
**desiredCount** | **number** | Desired number of tasks | [optional] [default to undefined]
**minCapacity** | **number** | Minimum capacity for autoscaling | [optional] [default to undefined]
**maxCapacity** | **number** | Maximum capacity for autoscaling | [optional] [default to undefined]

## Example

```typescript
import { EnvironmentSummary } from '@quantcdn/quant-client';

const instance: EnvironmentSummary = {
    envName,
    status,
    deploymentStatus,
    runningCount,
    desiredCount,
    minCapacity,
    maxCapacity,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
