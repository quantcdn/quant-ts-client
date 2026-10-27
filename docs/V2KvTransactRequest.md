# V2KvTransactRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**idempotencyKey** | **string** | A repeat of the same operations within 24 hours returns the first result with replayed true; other operations with the same key fail VALIDATION. Send it to make a lost-connection 503 retryable. | [optional] [default to undefined]
**operations** | [**Array&lt;V2KvTransactOperation&gt;**](V2KvTransactOperation.md) | 1 to 25 operations on different keys. More than 25 is 400 LIMIT_EXCEEDED. | [default to undefined]

## Example

```typescript
import { V2KvTransactRequest } from '@quantcdn/quant-client';

const instance: V2KvTransactRequest = {
    idempotencyKey,
    operations,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
