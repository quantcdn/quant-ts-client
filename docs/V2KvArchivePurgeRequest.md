# V2KvArchivePurgeRequest

dryRun defaults to true. confirm must equal the store name, also for a dry run (else 400 CONFIRMATION_REQUIRED). requestedBy is set by Quant: a body that has the key requestedBy is 400 VALIDATION. An unknown field is 400 VALIDATION.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dryRun** | **boolean** | true: report only. false: start the purge. | [optional] [default to true]
**confirm** | **string** | The store name, exactly. | [default to undefined]
**reason** | **string** | Optional note kept with the purge and the receipt. No control characters. It is never echoed in an error message. | [optional] [default to undefined]

## Example

```typescript
import { V2KvArchivePurgeRequest } from '@quantcdn/quant-client';

const instance: V2KvArchivePurgeRequest = {
    dryRun,
    confirm,
    reason,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
