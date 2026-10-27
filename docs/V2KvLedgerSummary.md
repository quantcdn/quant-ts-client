# V2KvLedgerSummary

A short state of the ledger, from the archive worker\'s last run (at).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**archiveLagSeconds** | **number** |  | [default to undefined]
**broken** | **boolean** |  | [default to undefined]
**retainUntil** | **string** |  | [optional] [default to undefined]
**anchorFailingSince** | **string** |  | [optional] [default to undefined]
**lastVerify** | [**V2KvLedgerLastVerify**](V2KvLedgerLastVerify.md) |  | [optional] [default to undefined]
**at** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { V2KvLedgerSummary } from '@quantcdn/quant-client';

const instance: V2KvLedgerSummary = {
    archiveLagSeconds,
    broken,
    retainUntil,
    anchorFailingSince,
    lastVerify,
    at,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
