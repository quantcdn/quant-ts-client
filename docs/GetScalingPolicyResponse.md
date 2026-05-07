# GetScalingPolicyResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metric** | **string** |  | [optional] [default to undefined]
**targetValue** | **number** |  | [optional] [default to undefined]
**scaleInCooldownSeconds** | **number** |  | [optional] [default to undefined]
**scaleOutCooldownSeconds** | **number** |  | [optional] [default to undefined]
**policyName** | **string** | Name of the underlying Application Auto Scaling policy. | [optional] [default to undefined]
**resourceLabel** | **string** | ALB ResourceLabel for RPS policies (target group identifier). | [optional] [default to undefined]

## Example

```typescript
import { GetScalingPolicyResponse } from '@quantcdn/quant-client';

const instance: GetScalingPolicyResponse = {
    metric,
    targetValue,
    scaleInCooldownSeconds,
    scaleOutCooldownSeconds,
    policyName,
    resourceLabel,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
