# V2KvLedgerErasureShredRequest

An unknown field is 400 VALIDATION. reason, authority and requestedBy must not be only spaces; they are stored in the shred entries and the signed receipt.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**subjectId** | [**V2KvLedgerSubjectId**](V2KvLedgerSubjectId.md) |  | [default to undefined]
**reason** | **string** | Why the subject is shredded. | [default to undefined]
**authority** | **string** | The legal authority, for example Records authority 2023/00456 class 12. | [default to undefined]
**requestedBy** | **string** | Who asked for the shred. | [default to undefined]

## Example

```typescript
import { V2KvLedgerErasureShredRequest } from '@quantcdn/quant-client';

const instance: V2KvLedgerErasureShredRequest = {
    subjectId,
    reason,
    authority,
    requestedBy,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
