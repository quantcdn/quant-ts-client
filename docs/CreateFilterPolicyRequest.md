# CreateFilterPolicyRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  | [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**enabled** | **boolean** |  | [optional] [default to undefined]
**rules** | [**Array&lt;CreateFilterPolicyRequestRulesInner&gt;**](CreateFilterPolicyRequestRulesInner.md) |  | [default to undefined]

## Example

```typescript
import { CreateFilterPolicyRequest } from '@quantcdn/quant-client';

const instance: CreateFilterPolicyRequest = {
    name,
    description,
    enabled,
    rules,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
