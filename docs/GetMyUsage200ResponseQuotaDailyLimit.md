# GetMyUsage200ResponseQuotaDailyLimit

Per-user daily spend cap (object form, present when an org-level perUserDailyBudget is configured)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**limitCents** | **number** | The configured daily cap in US cents | [optional] [default to undefined]
**usedPercent** | **number** | Percentage of the cap consumed today (0–100+) | [optional] [default to undefined]
**remainingCents** | **number** | Cents remaining before the cap is hit; can be negative if overspent | [optional] [default to undefined]
**resetsAt** | **string** | UTC timestamp when the daily counter resets (always next UTC midnight) | [optional] [default to undefined]

## Example

```typescript
import { GetMyUsage200ResponseQuotaDailyLimit } from '@quantcdn/quant-client';

const instance: GetMyUsage200ResponseQuotaDailyLimit = {
    limitCents,
    usedPercent,
    remainingCents,
    resetsAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
