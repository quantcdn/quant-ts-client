# V2KvLedgerPublicKey

The public half of the KMS key that signs ledger digests, verification reports and shred receipts. Save publicKeyPem as key.pem for the offline verifier.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**keyId** | **string** | The KMS key ARN. | [default to undefined]
**algorithm** | **string** |  | [default to undefined]
**curve** | **string** |  | [default to undefined]
**publicKeyPem** | **string** | SubjectPublicKeyInfo, PEM. | [default to undefined]
**keys** | [**Array&lt;V2KvLedgerPublicKeyKeysInner&gt;**](V2KvLedgerPublicKeyKeysInner.md) | Current and historical verification keys. Select by the signature keyId. | [optional] [default to undefined]

## Example

```typescript
import { V2KvLedgerPublicKey } from '@quantcdn/quant-client';

const instance: V2KvLedgerPublicKey = {
    keyId,
    algorithm,
    curve,
    publicKeyPem,
    keys,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
