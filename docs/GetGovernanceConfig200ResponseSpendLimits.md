# GetGovernanceConfig200ResponseSpendLimits


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**monthlyBudgetCents** | **number** |  | [optional] [default to undefined]
**dailyBudgetCents** | **number** |  | [optional] [default to undefined]
**perUserMonthlyBudgetCents** | **number** |  | [optional] [default to undefined]
**perUserDailyBudgetCents** | **number** |  | [optional] [default to undefined]
**warningThresholdPercent** | **number** |  | [optional] [default to undefined]
**interfaceLimits** | [**{ [key: string]: GetGovernanceConfig200ResponseSpendLimitsInterfaceLimitsValue; }**](GetGovernanceConfig200ResponseSpendLimitsInterfaceLimitsValue.md) | Aggregate spend caps per interface label (slack, autonomous, api-gateway, streaming, websocket, durable, orchestration, workflow, embedding, ai-search). Keys are interface labels. | [optional] [default to undefined]
**userOverrides** | [**{ [key: string]: GetGovernanceConfig200ResponseSpendLimitsUserOverridesValue; }**](GetGovernanceConfig200ResponseSpendLimitsUserOverridesValue.md) | Per-user budget overrides keyed by userId (numeric portal id, slack-&lt;id&gt;, or system:code-agent). Replaces the flat per-user budget for that user; unlimited&#x3D;true exempts them. | [optional] [default to undefined]
**perTokenMonthlyBudgetCents** | **number** | Flat monthly cap in cents applied to every API token without a named override | [optional] [default to undefined]
**perTokenDailyBudgetCents** | **number** | Flat daily cap in cents applied to every API token without a named override | [optional] [default to undefined]
**tokenOverrides** | [**{ [key: string]: GetGovernanceConfig200ResponseSpendLimitsUserOverridesValue; }**](GetGovernanceConfig200ResponseSpendLimitsUserOverridesValue.md) | Per-token budget overrides keyed by API token id. Replaces the flat per-token budget for that token; unlimited&#x3D;true exempts it. | [optional] [default to undefined]

## Example

```typescript
import { GetGovernanceConfig200ResponseSpendLimits } from '@quantcdn/quant-client';

const instance: GetGovernanceConfig200ResponseSpendLimits = {
    monthlyBudgetCents,
    dailyBudgetCents,
    perUserMonthlyBudgetCents,
    perUserDailyBudgetCents,
    warningThresholdPercent,
    interfaceLimits,
    userOverrides,
    perTokenMonthlyBudgetCents,
    perTokenDailyBudgetCents,
    tokenOverrides,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
