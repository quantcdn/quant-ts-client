# V2KvLedgerErasureShredRecord


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The shredId. | [default to undefined]
**subjectRef** | **string** | The subject reference (never the subject id). | [default to undefined]
**shreddedAt** | **string** |  | [default to undefined]
**fullyErasedAfter** | **string** |  | [default to undefined]
**entries** | **number** | The number of shred entries recorded. | [default to undefined]
**reason** | **string** |  | [default to undefined]
**authority** | **string** |  | [default to undefined]
**requestedBy** | **string** |  | [default to undefined]
**ledgerForked** | **boolean** |  | [optional] [default to undefined]
**supersedes** | **string** |  | [optional] [default to undefined]
**refKeyVersion** | **number** | The version of the reference key that made subjectRef. | [optional] [default to undefined]

## Example

```typescript
import { V2KvLedgerErasureShredRecord } from '@quantcdn/quant-client';

const instance: V2KvLedgerErasureShredRecord = {
    id,
    subjectRef,
    shreddedAt,
    fullyErasedAfter,
    entries,
    reason,
    authority,
    requestedBy,
    ledgerForked,
    supersedes,
    refKeyVersion,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
