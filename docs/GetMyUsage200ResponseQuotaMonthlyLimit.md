# GetMyUsage200ResponseQuotaMonthlyLimit

Per-user monthly spend cap (object form, present when an org-level perUserMonthlyBudget is configured)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**limitCents** | **number** | The configured monthly cap in US cents | [optional] [default to undefined]
**usedPercent** | **number** | Percentage of the cap consumed this month (0–100+) | [optional] [default to undefined]
**remainingCents** | **number** | Cents remaining before the cap is hit; can be negative if overspent | [optional] [default to undefined]

## Example

```typescript
import { GetMyUsage200ResponseQuotaMonthlyLimit } from '@quantcdn/quant-client';

const instance: GetMyUsage200ResponseQuotaMonthlyLimit = {
    limitCents,
    usedPercent,
    remainingCents,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
