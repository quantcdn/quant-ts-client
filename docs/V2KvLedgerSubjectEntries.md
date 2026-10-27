# V2KvLedgerSubjectEntries

One page of the entries of a data subject. It never holds the subjectId, a subjectRef or a subject token outside the entries.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ledger** | **string** |  | [default to undefined]
**subjectState** | **string** |  | [default to undefined]
**entries** | [**Array&lt;V2KvEntry&gt;**](V2KvEntry.md) | Empty when subjectState is shredded. | [default to undefined]
**complete** | **boolean** | False when the time budget ended first: send the request again with nextToken. | [default to undefined]
**nextToken** | **string** | Present when more entries remain. | [optional] [default to undefined]
**shreds** | **Array&lt;string&gt;** | Present when subjectState is shredded: the shred ids (KV_ledgers_shreds_receipt). | [optional] [default to undefined]
**earlierGenerationsShredded** | **number** | The number of earlier key generations of this subject that were shredded. | [default to undefined]

## Example

```typescript
import { V2KvLedgerSubjectEntries } from '@quantcdn/quant-client';

const instance: V2KvLedgerSubjectEntries = {
    ledger,
    subjectState,
    entries,
    complete,
    nextToken,
    shreds,
    earlierGenerationsShredded,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
