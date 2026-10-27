# V2KvLedgerVerifyResult

ok is true when every shard of this call is ok. Continue while next_cursor is not null; every page of one run has the same verificationId.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ok** | **boolean** |  | [default to undefined]
**entries** | **number** | Live entries checked in this call. | [default to undefined]
**shards** | [**Array&lt;V2KvLedgerVerifyShard&gt;**](V2KvLedgerVerifyShard.md) |  | [default to undefined]
**verificationId** | **string** | The verification record; KV_ledgers_verifications_report returns it signed. | [optional] [default to undefined]
**next_cursor** | **string** |  | [default to undefined]

## Example

```typescript
import { V2KvLedgerVerifyResult } from '@quantcdn/quant-client';

const instance: V2KvLedgerVerifyResult = {
    ok,
    entries,
    shards,
    verificationId,
    next_cursor,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
