# CreateFilterPolicyRequestRulesInnerMatch

Match criteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** |  | [optional] [default to undefined]
**values** | **Array&lt;string&gt;** | Required when type&#x3D;word | [optional] [default to undefined]
**pattern** | **string** | Required when type&#x3D;regex | [optional] [default to undefined]

## Example

```typescript
import { CreateFilterPolicyRequestRulesInnerMatch } from '@quantcdn/quant-client';

const instance: CreateFilterPolicyRequestRulesInnerMatch = {
    type,
    values,
    pattern,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
