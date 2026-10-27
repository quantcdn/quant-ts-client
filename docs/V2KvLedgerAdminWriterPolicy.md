# V2KvLedgerAdminWriterPolicy

Immutable allowlist of internal Quant platform writers, included in definitionHash. With a writer policy, appends through the API are refused (only the listed platform services can write). Without it, appends work as usual. A ledger with personalFields must list quant-ledger, which writes the shred entries. This is not a read or management access policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**platformPrincipals** | **Set&lt;string&gt;** | The platform service principals that may append (1 to 16, unique). | [default to undefined]

## Example

```typescript
import { V2KvLedgerAdminWriterPolicy } from '@quantcdn/quant-client';

const instance: V2KvLedgerAdminWriterPolicy = {
    platformPrincipals,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
