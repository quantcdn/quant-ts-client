# V2KvErrorLedgersInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The ledger name. | [default to undefined]
**state** | **string** | The ledger state (PENDING, ACTIVE or DROPPED). | [default to undefined]
**reason** | **string** | not_dropped: drop the ledger first (after its retention ends). not_drained: the ledger is DROPPED but its last entries are not archived yet. | [default to undefined]

## Example

```typescript
import { V2KvErrorLedgersInner } from '@quantcdn/quant-client';

const instance: V2KvErrorLedgersInner = {
    name,
    state,
    reason,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
