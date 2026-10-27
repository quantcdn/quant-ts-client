# V2KvLedgerStatusAnchor


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** |  | [default to undefined]
**lastDay** | **string** |  | [optional] [default to undefined]
**failingSince** | **string** |  | [optional] [default to undefined]
**error** | **string** |  | [optional] [default to undefined]
**bucketPolicy** | **string** | customer-bucket only: the bucket policy (JSON) that lets Quant write the witness copies. | [optional] [default to undefined]

## Example

```typescript
import { V2KvLedgerStatusAnchor } from '@quantcdn/quant-client';

const instance: V2KvLedgerStatusAnchor = {
    type,
    lastDay,
    failingSince,
    error,
    bucketPolicy,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
