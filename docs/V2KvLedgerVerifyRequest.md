# V2KvLedgerVerifyRequest

All fields are optional; an empty body verifies the whole ledger. Send the same collection, since and until with cursor to continue.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**collection** | **string** | One concrete collection of the ledger (no *). Absent: every collection. | [optional] [default to undefined]
**since** | [**V2KvLedgerVerifyRequestSince**](V2KvLedgerVerifyRequestSince.md) |  | [optional] [default to undefined]
**until** | [**V2KvLedgerVerifyRequestUntil**](V2KvLedgerVerifyRequestUntil.md) |  | [optional] [default to undefined]
**cursor** | **string** | The next_cursor of the previous call (signed, bound to the range, lasts 24 hours). | [optional] [default to undefined]
**maxEntries** | **number** |  | [optional] [default to 10000]

## Example

```typescript
import { V2KvLedgerVerifyRequest } from '@quantcdn/quant-client';

const instance: V2KvLedgerVerifyRequest = {
    collection,
    since,
    until,
    cursor,
    maxEntries,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
