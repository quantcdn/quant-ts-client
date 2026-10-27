# V2KvUsage

Consumed read and write units per UTC day for the last 30 full days (ending yesterday), the table size and a list-price estimate (USD). Item count and size are updated by DynamoDB about every 6 hours. Never contains item values.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**storeName** | **string** |  | [default to undefined]
**format** | **number** |  | [default to undefined]
**state** | **string** |  | [default to undefined]
**table** | [**V2KvUsageTable**](V2KvUsageTable.md) |  | [default to undefined]
**retainedTable** | [**V2KvUsageRetainedTable**](V2KvUsageRetainedTable.md) |  | [optional] [default to undefined]
**period** | [**V2KvUsagePeriod**](V2KvUsagePeriod.md) |  | [default to undefined]
**daily** | [**Array&lt;V2KvUsageDailyInner&gt;**](V2KvUsageDailyInner.md) | Exactly period.days rows, oldest first. Units are rounded to 1 decimal. | [default to undefined]
**totals** | [**V2KvUsageTotals**](V2KvUsageTotals.md) |  | [default to undefined]
**estimate** | [**V2KvUsageEstimate**](V2KvUsageEstimate.md) |  | [default to undefined]

## Example

```typescript
import { V2KvUsage } from '@quantcdn/quant-client';

const instance: V2KvUsage = {
    storeName,
    format,
    state,
    table,
    retainedTable,
    period,
    daily,
    totals,
    estimate,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
