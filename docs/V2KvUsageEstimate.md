# V2KvUsageEstimate

List-price estimate (USD, 4 decimals). Excludes the free tier, the request Lambda and data transfer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency** | **string** |  | [default to undefined]
**readCost** | **number** |  | [default to undefined]
**writeCost** | **number** |  | [default to undefined]
**requestCost30Days** | **number** | readCost + writeCost. | [default to undefined]
**storageCostPerMonth** | **number** |  | [default to undefined]
**pitrCostPerMonth** | **number** |  | [default to undefined]
**prices** | [**V2KvUsageEstimatePrices**](V2KvUsageEstimatePrices.md) |  | [default to undefined]
**note** | **string** |  | [default to undefined]

## Example

```typescript
import { V2KvUsageEstimate } from '@quantcdn/quant-client';

const instance: V2KvUsageEstimate = {
    currency,
    readCost,
    writeCost,
    requestCost30Days,
    storageCostPerMonth,
    pitrCostPerMonth,
    prices,
    note,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
