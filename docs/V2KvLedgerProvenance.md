# V2KvLedgerProvenance

Who wrote the entry, set by the KV service from the authenticated caller (never from the body) and covered by the entry hash. platform: a Quant service (quant-ledger writes the shred entries); api: an API caller (an append through this API with a portal token records principal token:<token id>); dashboard: a portal user (principal: the portal user id); edge: an edge function (principal <org>/<project>/<function id>). An API caller with the API secret only records principal api-secret. Absent on entries written before provenance existed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** |  | [default to undefined]
**principal** | **string** |  | [default to undefined]

## Example

```typescript
import { V2KvLedgerProvenance } from '@quantcdn/quant-client';

const instance: V2KvLedgerProvenance = {
    type,
    principal,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
