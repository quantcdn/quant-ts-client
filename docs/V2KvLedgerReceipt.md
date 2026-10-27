# V2KvLedgerReceipt

The receipt of an appended entry. Keep receipts: the offline verifier checks them against the archive.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **string** | collection:id | [default to undefined]
**id** | **string** | ULID, a hyphen and the two-digit shard. Increases within a shard. | [default to undefined]
**shard** | **string** |  | [default to undefined]
**seq** | **number** | Sequence number of the entry on its shard. | [default to undefined]
**at** | **number** | Epoch milliseconds (the ULID time of id). | [default to undefined]
**hash** | **string** | SHA-256 hex of this entry. | [default to undefined]
**prevHash** | **string** | SHA-256 hex of the previous entry on the shard (the genesis hash for seq 1). | [default to undefined]
**ledger** | **string** | The ledger name. | [default to undefined]
**source** | [**V2KvLedgerProvenance**](V2KvLedgerProvenance.md) |  | [optional] [default to undefined]
**replayed** | **boolean** | Present only on a retry with the same idempotencyKey: this is the first receipt. | [optional] [default to undefined]

## Example

```typescript
import { V2KvLedgerReceipt } from '@quantcdn/quant-client';

const instance: V2KvLedgerReceipt = {
    key,
    id,
    shard,
    seq,
    at,
    hash,
    prevHash,
    ledger,
    source,
    replayed,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
