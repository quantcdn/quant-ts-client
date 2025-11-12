# V2StoreItemUpdateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **string** | Item value (can be JSON string) | [default to undefined]
**secret** | **boolean** | Store as secret with KMS encryption. Note: Encryption status cannot be changed after initial creation - this value is preserved from the original item. | [optional] [default to undefined]

## Example

```typescript
import { V2StoreItemUpdateRequest } from '@quantcdn/quant-client';

const instance: V2StoreItemUpdateRequest = {
    value,
    secret,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
