# V2KvLedgerMeta

Ledger metadata of an entry. Present only on ledger entries.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The ledger name. | [optional] [default to undefined]
**id** | **string** | A ULID, a hyphen and the two-digit shard. | [default to undefined]
**shard** | **string** |  | [default to undefined]
**seq** | **number** | The sequence number in the shard. | [default to undefined]
**at** | **number** | Server time, epoch milliseconds. | [default to undefined]
**hash** | **string** |  | [default to undefined]
**prevHash** | **string** | The hash of the previous entry in the same shard. | [default to undefined]
**source** | [**V2KvLedgerProvenance**](V2KvLedgerProvenance.md) |  | [optional] [default to undefined]
**subject** | **string** | Present when the ledger has a subjectField: what the subject field holds. | [optional] [default to undefined]

## Example

```typescript
import { V2KvLedgerMeta } from '@quantcdn/quant-client';

const instance: V2KvLedgerMeta = {
    name,
    id,
    shard,
    seq,
    at,
    hash,
    prevHash,
    source,
    subject,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
