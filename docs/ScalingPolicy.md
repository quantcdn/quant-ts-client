# ScalingPolicy


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metric** | **string** |  | [optional] [default to undefined]
**targetValue** | **number** |  | [optional] [default to undefined]
**scaleInCooldownSeconds** | **number** |  | [optional] [default to undefined]
**scaleOutCooldownSeconds** | **number** |  | [optional] [default to undefined]

## Example

```typescript
import { ScalingPolicy } from '@quantcdn/quant-client';

const instance: ScalingPolicy = {
    metric,
    targetValue,
    scaleInCooldownSeconds,
    scaleOutCooldownSeconds,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
