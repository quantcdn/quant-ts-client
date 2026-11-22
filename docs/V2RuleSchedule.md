# V2RuleSchedule

Weekly windows and one-off ranges in local wall time for one IANA time zone. Start is inclusive, end is exclusive. A weekly window whose end is not later than its start crosses midnight. With no windows the rule always applies.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**timezone** | **string** | IANA time zone name, or UTC. Invalid values return 422. | [default to undefined]
**mode** | **string** | active_during: the rule applies only inside the windows. inactive_during: the rule applies only outside them. | [default to undefined]
**weekly** | [**Array&lt;V2RuleScheduleWeeklyInner&gt;**](V2RuleScheduleWeeklyInner.md) | Weekly windows. Stored as an empty list when omitted. | [optional] [default to undefined]
**once** | [**Array&lt;V2RuleScheduleOnceInner&gt;**](V2RuleScheduleOnceInner.md) | One-off ranges. Stored as an empty list when omitted. | [optional] [default to undefined]

## Example

```typescript
import { V2RuleSchedule } from '@quantcdn/quant-client';

const instance: V2RuleSchedule = {
    timezone,
    mode,
    weekly,
    once,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
