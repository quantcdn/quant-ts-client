# V2KvIncrementRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **number** | A nonzero integer. The result must stay a safe integer. | [optional] [default to 1]
**ttl** | **number** | Seconds (60 to 31,536,000). Applied only when the key is created or reset after expiry. | [optional] [default to undefined]

## Example

```typescript
import { V2KvIncrementRequest } from '@quantcdn/quant-client';

const instance: V2KvIncrementRequest = {
    amount,
    ttl,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
