# V2KvLedgerAdminDeclareRequest

A ledger definition. The collection must be empty (no keys, no ledger entries). name, collection, personalFields, subjectField, subjectMode, subjectCase, anchor and writerPolicy can never change. chains, retentionDays and lockMode can only go up (KV_ledgers_update). An unknown field is 400 VALIDATION.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Unique in the store. | [default to undefined]
**collection** | **string** | A collection name, or a pattern where * as a whole segment matches exactly one segment. Must not overlap another ledger. At most 512 UTF-8 bytes; every concrete collection appended to the ledger is at most 512 bytes too. | [default to undefined]
**chains** | **number** | Parallel hash chains (shards) per collection. | [default to undefined]
**retentionDays** | **number** | S3 Object Lock retention of the archive, in days. The ledger cannot be dropped before it ends. | [default to undefined]
**lockMode** | **string** | S3 Object Lock mode of the archive. governance can become compliance later, never back. | [default to undefined]
**personalFields** | **Set&lt;string&gt;** | Top-level value fields that are encrypted per data subject, so a shred (KV_ledgers_shred) can erase them. Needs subjectField (else 400 LEDGER_SUBJECT_REQUIRED). Any field name except at. An index cannot use a personal field (400 INDEX_FIELD_ENCRYPTED). | [optional] [default to undefined]
**subjectField** | **string** | The top-level value field that names the data subject. It is not a personal field. May be set without personal fields; such a ledger is pseudonymised and can be shredded. $subject and $subjectTag are reserved value field names. | [optional] [default to undefined]
**subjectMode** | **string** | How the subject field is stored. pseudonym (the default): a random token, and after a shred nobody can link the remaining entries to the person. clear: the value as written; after a shred the id and the activity stay. Needs subjectField. Cannot change. | [optional] [default to undefined]
**subjectCase** | **string** | exact (the default): ids that differ in case are different subjects. fold: case is ignored; use it for email addresses and usernames. Needs subjectField. Cannot change. | [optional] [default to undefined]
**anchor** | [**V2KvLedgerAnchor**](V2KvLedgerAnchor.md) |  | [optional] [default to undefined]
**writerPolicy** | [**V2KvLedgerAdminWriterPolicy**](V2KvLedgerAdminWriterPolicy.md) |  | [optional] [default to undefined]

## Example

```typescript
import { V2KvLedgerAdminDeclareRequest } from '@quantcdn/quant-client';

const instance: V2KvLedgerAdminDeclareRequest = {
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
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
