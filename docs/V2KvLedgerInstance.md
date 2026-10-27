# V2KvLedgerInstance

One chain: a collection and shard that holds entries.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**collection** | **string** |  | [default to undefined]
**shard** | **string** |  | [default to undefined]
**headSeq** | **number** | Sequence number of the last entry. | [default to undefined]
**headAt** | **number** | Epoch ms of the last entry. | [optional] [default to undefined]
**archivedSeq** | **number** | Last sequence number in the archive. | [default to undefined]
**archiveLagSeconds** | **number** | Age of the oldest unarchived entry; 0 when up to date. | [default to undefined]
**broken** | **{ [key: string]: any; }** | Set when the archive worker found a chain fault (seq, reason, at). | [optional] [default to undefined]

## Example

```typescript
import { V2KvLedgerInstance } from '@quantcdn/quant-client';

const instance: V2KvLedgerInstance = {
    collection,
    shard,
    headSeq,
    headAt,
    archivedSeq,
    archiveLagSeconds,
    broken,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
