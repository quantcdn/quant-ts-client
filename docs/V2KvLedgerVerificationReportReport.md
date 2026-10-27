# V2KvLedgerVerificationReportReport


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**v** | **number** |  | [default to undefined]
**type** | **string** |  | [default to undefined]
**org** | **string** |  | [default to undefined]
**store** | **string** |  | [default to undefined]
**ledger** | **string** |  | [default to undefined]
**id** | **string** |  | [default to undefined]
**at** | **string** |  | [default to undefined]
**startedAt** | **string** |  | [default to undefined]
**trigger** | **string** |  | [default to undefined]
**scope** | **{ [key: string]: any; }** |  | [default to undefined]
**complete** | **boolean** |  | [default to undefined]
**ok** | **boolean** |  | [default to undefined]
**entries** | **number** |  | [default to undefined]
**shardsFailed** | **number** |  | [default to undefined]
**failures** | [**Array&lt;V2KvLedgerFailure&gt;**](V2KvLedgerFailure.md) |  | [default to undefined]

## Example

```typescript
import { V2KvLedgerVerificationReportReport } from '@quantcdn/quant-client';

const instance: V2KvLedgerVerificationReportReport = {
    v,
    type,
    org,
    store,
    ledger,
    id,
    at,
    startedAt,
    trigger,
    scope,
    complete,
    ok,
    entries,
    shardsFailed,
    failures,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
