# V2KvLedgerErasureShredResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ledger** | **string** |  | [default to undefined]
**entries** | [**Array&lt;V2KvLedgerReceipt&gt;**](V2KvLedgerReceipt.md) | The shred entry of each collection that holds the subject (empty for alreadyShredded, a DROPPED ledger and a forked store). | [default to undefined]
**shreddedAt** | **string** | When the key was destroyed (the first shred for alreadyShredded). | [default to undefined]
**fullyErasedAfter** | **string** | shreddedAt + 35 days: after this time no backup of the key remains. | [default to undefined]
**alreadyShredded** | **boolean** | Present only when the subject was shredded before this call and this call wrote nothing. | [optional] [default to undefined]
**ledgerForked** | **boolean** | Present only when the store is forked: the key is destroyed and no shred entry is recorded. | [optional] [default to undefined]
**shredId** | **string** | The id of the erasure record (the same on every repeat). | [optional] [default to undefined]
**subjectRef** | **string** | The pseudonym of the subject in the erasure records and receipts. | [default to undefined]
**refKeyVersion** | **number** | The version of the reference key that made subjectRef. | [default to undefined]
**receipt** | [**V2KvLedgerErasureSignedShredReceipt**](V2KvLedgerErasureSignedShredReceipt.md) |  | [optional] [default to undefined]

## Example

```typescript
import { V2KvLedgerErasureShredResult } from '@quantcdn/quant-client';

const instance: V2KvLedgerErasureShredResult = {
    ledger,
    entries,
    shreddedAt,
    fullyErasedAfter,
    alreadyShredded,
    ledgerForked,
    shredId,
    subjectRef,
    refKeyVersion,
    receipt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
