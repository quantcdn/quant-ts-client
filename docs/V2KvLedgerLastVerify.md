# V2KvLedgerLastVerify

The last verify result of the ledger (the daily scheduled full verify, or the last complete API or dashboard verify). ok is true only when complete is true and no shard failed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The verification record; KV_ledgers_verifications_report returns it signed. | [optional] [default to undefined]
**at** | **string** |  | [default to undefined]
**startedAt** | **string** |  | [default to undefined]
**durationMs** | **number** |  | [optional] [default to undefined]
**ok** | **boolean** |  | [default to undefined]
**entries** | **number** |  | [default to undefined]
**shardsFailed** | **number** |  | [default to undefined]
**complete** | **boolean** |  | [default to undefined]
**pages** | **number** |  | [optional] [default to undefined]
**trigger** | **string** |  | [default to undefined]
**scope** | [**V2KvLedgerLastVerifyScope**](V2KvLedgerLastVerifyScope.md) |  | [default to undefined]
**firstFailure** | [**V2KvLedgerFailure**](V2KvLedgerFailure.md) |  | [optional] [default to undefined]

## Example

```typescript
import { V2KvLedgerLastVerify } from '@quantcdn/quant-client';

const instance: V2KvLedgerLastVerify = {
    id,
    at,
    startedAt,
    durationMs,
    ok,
    entries,
    shardsFailed,
    complete,
    pages,
    trigger,
    scope,
    firstFailure,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
