# V2KvLedgerErasureSubjectPreviewCollectionsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**collection** | **string** |  | [default to undefined]
**entries** | **number** | At least this many entries of the subject (shred entries not counted). | [default to undefined]
**complete** | **boolean** | false: the time budget ended before this collection was counted to its end. | [default to undefined]
**firstAt** | **string** |  | [optional] [default to undefined]
**lastAt** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { V2KvLedgerErasureSubjectPreviewCollectionsInner } from '@quantcdn/quant-client';

const instance: V2KvLedgerErasureSubjectPreviewCollectionsInner = {
    collection,
    entries,
    complete,
    firstAt,
    lastAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
