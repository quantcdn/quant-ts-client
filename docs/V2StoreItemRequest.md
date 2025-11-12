# V2StoreItemRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **string** | Item key | [default to undefined]
**value** | **string** | Item value (can be JSON string) | [default to undefined]
**secret** | **boolean** | Store as secret with KMS encryption. Secrets cannot be retrieved via GET operations (returns [ENCRYPTED]). Ideal for API keys, passwords, and credentials. | [optional] [default to false]

## Example

```typescript
import { V2StoreItemRequest } from '@quantcdn/quant-client';

const instance: V2StoreItemRequest = {
    key,
    value,
    secret,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
