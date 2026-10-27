# V2KvLedgerSubjectEntriesRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**subjectId** | [**V2KvLedgerSubjectId**](V2KvLedgerSubjectId.md) |  | [default to undefined]
**collection** | **string** | Read only this collection of the ledger. | [optional] [default to undefined]
**since** | **string** | Only entries at or after this time. | [optional] [default to undefined]
**until** | **string** | Only entries before this time. | [optional] [default to undefined]
**limit** | **number** | Entries per page, 1 to 1000. The default is 100. | [optional] [default to undefined]
**nextToken** | **string** | The nextToken of the previous page. | [optional] [default to undefined]
**personal** | **string** | sealed (the default): personal fields read \&quot;[PERSONAL]\&quot; and the subject field shows the subject token. decrypted: personal fields in clear; needs the ledger_reveal permission and is logged as kv.ledger.reveal. | [optional] [default to undefined]

## Example

```typescript
import { V2KvLedgerSubjectEntriesRequest } from '@quantcdn/quant-client';

const instance: V2KvLedgerSubjectEntriesRequest = {
    subjectId,
    collection,
    since,
    until,
    limit,
    nextToken,
    personal,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
