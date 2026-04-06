# UpdateFilterPolicyRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**enabled** | **boolean** |  | [optional] [default to undefined]
**rules** | [**Array&lt;CreateFilterPolicyRequestRulesInner&gt;**](CreateFilterPolicyRequestRulesInner.md) |  | [optional] [default to undefined]

## Example

```typescript
import { UpdateFilterPolicyRequest } from '@quantcdn/quant-client';

const instance: UpdateFilterPolicyRequest = {
    name,
    description,
    enabled,
    rules,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
