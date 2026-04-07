# UpdateGovernanceConfigRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aiEnabled** | **boolean** |  | [default to undefined]
**modelPolicy** | **string** |  | [default to undefined]
**modelList** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**mandatoryGuardrailPreset** | **string** |  | [optional] [default to undefined]
**mandatoryFilterPolicies** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**spendLimits** | [**GetGovernanceConfig200ResponseSpendLimits**](GetGovernanceConfig200ResponseSpendLimits.md) |  | [optional] [default to undefined]
**version** | **number** |  | [optional] [default to undefined]

## Example

```typescript
import { UpdateGovernanceConfigRequest } from '@quantcdn/quant-client';

const instance: UpdateGovernanceConfigRequest = {
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
