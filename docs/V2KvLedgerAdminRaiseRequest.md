# V2KvLedgerAdminRaiseRequest

Raise only. Send at least one field. A value lower than the current value is 400 LEDGER_DIRECTION. Any other field is 400 VALIDATION.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chains** | **number** | Not lower than the current value. | [optional] [default to undefined]
**retentionDays** | **number** | Not lower than the current value. The archive worker extends the retention of the existing archive objects. | [optional] [default to undefined]
**lockMode** | **string** | governance can become compliance, never back. | [optional] [default to undefined]

## Example

```typescript
import { V2KvLedgerAdminRaiseRequest } from '@quantcdn/quant-client';

const instance: V2KvLedgerAdminRaiseRequest = {
    chains,
    retentionDays,
    lockMode,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
