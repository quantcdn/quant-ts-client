# V2KvLedgerStatus

The chain instances (50 per page), archive lag, digest, anchor and verify state of a ledger.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ledger** | [**V2KvLedger**](V2KvLedger.md) |  | [default to undefined]
**instances** | [**Array&lt;V2KvLedgerInstance&gt;**](V2KvLedgerInstance.md) |  | [default to undefined]
**lastDigestAt** | **string** |  | [optional] [default to undefined]
**retainUntil** | **string** |  | [optional] [default to undefined]
**modeRefused** | **number** |  | [optional] [default to undefined]
**digestModeRefused** | **number** |  | [optional] [default to undefined]
**modeRetryAfter** | **string** |  | [optional] [default to undefined]
**anchor** | [**V2KvLedgerStatusAnchor**](V2KvLedgerStatusAnchor.md) |  | [default to undefined]
**lastVerify** | [**V2KvLedgerLastVerify**](V2KvLedgerLastVerify.md) |  | [optional] [default to undefined]
**verifyProgress** | **{ [key: string]: any; }** | Present while a scheduled verify runs or is paused between daily runs. | [optional] [default to undefined]
**forked** | **{ [key: string]: any; }** | Present when the store table no longer matches its archive; appends are refused with LEDGER_FORKED. | [optional] [default to undefined]
**next_cursor** | **string** | Pass as cursor for the next page of instances; null on the last page. | [default to undefined]

## Example

```typescript
import { V2KvLedgerStatus } from '@quantcdn/quant-client';

const instance: V2KvLedgerStatus = {
    ledger,
    instances,
    lastDigestAt,
    retainUntil,
    modeRefused,
    digestModeRefused,
    modeRetryAfter,
    anchor,
    lastVerify,
    verifyProgress,
    forked,
    next_cursor,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
