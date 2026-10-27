# V2KvLedgerErasureSubjectPreview


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ledger** | **string** |  | [default to undefined]
**subjectRef** | **string** | The reference that the erasure records and receipts use for this subject. The answer never carries the subject id. | [default to undefined]
**refKeyVersion** | **number** | The version of the reference key that made subjectRef. | [default to undefined]
**found** | **boolean** |  | [default to undefined]
**keyState** | **string** | live: a shred would destroy the key. shredded: the subject is already shredded. | [default to undefined]
**shreddedAt** | **string** | Present only when keyState is shredded. | [optional] [default to undefined]
**complete** | **boolean** | True when every collection was counted to its end. Even then each count means at least N (eventual reads). | [default to undefined]
**entries** | **number** | The total of the collection counts. Present only when keyState is live. | [optional] [default to undefined]
**collections** | [**Array&lt;V2KvLedgerErasureSubjectPreviewCollectionsInner&gt;**](V2KvLedgerErasureSubjectPreviewCollectionsInner.md) | Every collection that holds the subject, in name order. | [default to undefined]

## Example

```typescript
import { V2KvLedgerErasureSubjectPreview } from '@quantcdn/quant-client';

const instance: V2KvLedgerErasureSubjectPreview = {
    ledger,
    subjectRef,
    refKeyVersion,
    found,
    keyState,
    shreddedAt,
    complete,
    entries,
    collections,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
