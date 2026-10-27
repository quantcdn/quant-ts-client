# V2KvLedgerErasureShredInProgress

The time budget of the call ended. Send the same request again until it answers 200; no entry is written twice.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **string** |  | [default to undefined]
**ledger** | **string** |  | [default to undefined]
**subjectRef** | **string** | The pseudonym of the subject. | [default to undefined]
**entries** | [**Array&lt;V2KvLedgerReceipt&gt;**](V2KvLedgerReceipt.md) | The shred entries recorded so far. The final 200 lists them again. | [default to undefined]

## Example

```typescript
import { V2KvLedgerErasureShredInProgress } from '@quantcdn/quant-client';

const instance: V2KvLedgerErasureShredInProgress = {
    status,
    ledger,
    subjectRef,
    entries,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
