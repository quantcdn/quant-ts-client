# WafConfigThresholdsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** | Threshold type | [optional] [default to undefined]
**rps** | **number** | Requests per second limit (for ip/header) | [optional] [default to undefined]
**hits** | **number** | Hit count limit (for waf_hit_by_ip) | [optional] [default to undefined]
**minutes** | **number** | Time window in minutes (for waf_hit_by_ip) | [optional] [default to undefined]
**cooldown** | **number** | Cooldown period in seconds | [optional] [default to undefined]
**mode** | **string** | Threshold enforcement mode | [optional] [default to ModeEnum_Disabled]
**value** | **string** | Header name (for header type) | [optional] [default to undefined]
**notify_slack** | **string** | Slack webhook for this threshold | [optional] [default to undefined]

## Example

```typescript
import { WafConfigThresholdsInner } from '@quantcdn/quant-client';

const instance: WafConfigThresholdsInner = {
    type,
    rps,
    hits,
    minutes,
    cooldown,
    mode,
    value,
    notify_slack,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
