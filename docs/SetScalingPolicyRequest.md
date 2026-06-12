# SetScalingPolicyRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metric** | **string** | Metric to track for scaling. | [default to undefined]
**targetValue** | **number** | Target value. Percentage for CPU/Memory; req/sec per task for RPS. | [default to undefined]
**scaleInCooldownSeconds** | **number** | Cooldown (seconds) before another scale-in can start. | [optional] [default to 300]
**scaleOutCooldownSeconds** | **number** | Cooldown (seconds) before another scale-out can start. | [optional] [default to 60]

## Example

```typescript
import { SetScalingPolicyRequest } from '@quantcdn/quant-client';

const instance: SetScalingPolicyRequest = {
    metric,
    targetValue,
    scaleInCooldownSeconds,
    scaleOutCooldownSeconds,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
