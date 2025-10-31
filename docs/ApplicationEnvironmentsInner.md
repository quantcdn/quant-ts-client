# ApplicationEnvironmentsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**envName** | **string** | Environment name | [optional] [default to undefined]
**status** | **string** | Environment status | [optional] [default to undefined]
**runningCount** | **number** | Running task count | [optional] [default to undefined]
**desiredCount** | **number** | Desired task count | [optional] [default to undefined]

## Example

```typescript
import { ApplicationEnvironmentsInner } from '@quantcdn/quant-client';

const instance: ApplicationEnvironmentsInner = {
    envName,
    status,
    runningCount,
    desiredCount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
