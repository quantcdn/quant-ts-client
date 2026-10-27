# V2KvLedger

A ledger definition and its state.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  | [default to undefined]
**collection** | **string** | A collection, or a pattern where * is one whole segment. | [default to undefined]
**chains** | **number** |  | [default to undefined]
**retentionDays** | **number** |  | [default to undefined]
**lockMode** | **string** |  | [default to undefined]
**personalFields** | **Array&lt;string&gt;** |  | [default to undefined]
**subjectField** | **string** |  | [optional] [default to undefined]
**subjectMode** | **string** | Present when subjectField is set. | [optional] [default to undefined]
**subjectCase** | **string** | Present when subjectField is set. | [optional] [default to undefined]
**anchor** | [**V2KvLedgerAnchor**](V2KvLedgerAnchor.md) |  | [default to undefined]
**writerPolicy** | [**V2KvLedgerAdminWriterPolicy**](V2KvLedgerAdminWriterPolicy.md) |  | [optional] [default to undefined]
**state** | **string** | PENDING for 75 seconds after a declare, then ACTIVE or FAILED. DROPPED after KV_ledgers_delete. | [default to undefined]
**createdAt** | **string** |  | [default to undefined]
**activeAfter** | **string** | When a PENDING ledger is checked again and becomes ACTIVE or FAILED. | [default to undefined]
**definitionHash** | **string** | Hex SHA-256 of the canonical (RFC 8785) definition. | [default to undefined]
**updatedAt** | **string** |  | [optional] [default to undefined]
**error** | **string** | FAILED only: why the ledger failed. | [optional] [default to undefined]
**droppedAt** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { V2KvLedger } from '@quantcdn/quant-client';

const instance: V2KvLedger = {
    name,
    collection,
    chains,
    retentionDays,
    lockMode,
    personalFields,
    subjectField,
    subjectMode,
    subjectCase,
    anchor,
    writerPolicy,
    state,
    createdAt,
    activeAfter,
    definitionHash,
    updatedAt,
    error,
    droppedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
