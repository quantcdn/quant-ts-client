# V2KvLedgerSubjectId

The data subject id (the value of the ledger\'s subjectField): a string of 1 to 1024 bytes or a safe integer. The server canonicalises it (trim, NFC, the ledger\'s case rule) and refuses an invalid id with VALIDATION. Error messages never contain the id.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------

## Example

```typescript
import { V2KvLedgerSubjectId } from '@quantcdn/quant-client';

const instance: V2KvLedgerSubjectId = {
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
