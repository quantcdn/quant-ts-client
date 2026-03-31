# GetGovernanceConfig200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**orgId** | **string** |  | [optional] [default to undefined]
**aiEnabled** | **boolean** |  | [optional] [default to undefined]
**modelPolicy** | **string** |  | [optional] [default to undefined]
**modelList** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**mandatoryGuardrailPreset** | **string** |  | [optional] [default to undefined]
**mandatoryFilterPolicies** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**spendLimits** | [**GetGovernanceConfig200ResponseSpendLimits**](GetGovernanceConfig200ResponseSpendLimits.md) |  | [optional] [default to undefined]
**version** | **number** |  | [optional] [default to undefined]

## Example

```typescript
import { GetGovernanceConfig200Response } from '@quantcdn/quant-client';

const instance: GetGovernanceConfig200Response = {
    orgId,
    aiEnabled,
    modelPolicy,
    modelList,
    mandatoryGuardrailPreset,
    mandatoryFilterPolicies,
    spendLimits,
    version,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
