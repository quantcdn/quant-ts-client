# SecretWriteResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **string** | The secret name | [default to undefined]
**warnings** | **Array&lt;string&gt;** | Notices from Quant Cloud about the change. Present only when there is at least one. | [optional] [default to undefined]

## Example

```typescript
import { SecretWriteResult } from '@quantcdn/quant-client';

const instance: SecretWriteResult = {
    key,
    warnings,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
