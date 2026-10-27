# V2KvLedgerErasureShredReceiptBody

The parsed form of json (a convenience copy; only json is signed).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**v** | **number** |  | [default to undefined]
**type** | **string** |  | [default to undefined]
**id** | **string** | The shredId. | [default to undefined]
**org** | **string** |  | [default to undefined]
**store** | **string** |  | [default to undefined]
**ledger** | **string** |  | [default to undefined]
**subjectRef** | **string** |  | [default to undefined]
**refKeyVersion** | **number** | The version of the reference key that made subjectRef. | [default to undefined]
**shreddedAt** | **string** |  | [default to undefined]
**fullyErasedAfter** | **string** |  | [default to undefined]
**reason** | **string** |  | [default to undefined]
**authority** | **string** |  | [default to undefined]
**requestedBy** | **string** |  | [default to undefined]
**entryCount** | **number** | The number of shred entries (0 for a forked store or a DROPPED ledger). | [default to undefined]
**entriesSha256** | **string** | SHA-256 (hex) of the JCS of the shred entries, sorted by key. | [default to undefined]
**entries** | [**Array&lt;V2KvLedgerErasureShredEntry&gt;**](V2KvLedgerErasureShredEntry.md) | Left out when the receipt would pass 300 KB: then KV_ledgers_shreds_entries serves them. | [optional] [default to undefined]
**ledgerForked** | **boolean** |  | [optional] [default to undefined]
**supersedes** | **string** | The id of the forked record that this re-shred supersedes. | [optional] [default to undefined]

## Example

```typescript
import { V2KvLedgerErasureShredReceiptBody } from '@quantcdn/quant-client';

const instance: V2KvLedgerErasureShredReceiptBody = {
    v,
    type,
    id,
    org,
    store,
    ledger,
    subjectRef,
    refKeyVersion,
    shreddedAt,
    fullyErasedAfter,
    reason,
    authority,
    requestedBy,
    entryCount,
    entriesSha256,
    entries,
    ledgerForked,
    supersedes,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
