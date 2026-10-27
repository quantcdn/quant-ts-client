# V2KvLedgerErasureSignedShredReceipt

The signed receipt of an erasure. Save the object as a file to check it with kv-ledger-verify verify-signed. Only json is signed: parse it, do not re-serialise it.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**json** | **string** | The RFC 8785 (JCS) text of the receipt that was signed. | [default to undefined]
**signature** | **string** | Base64 DER ECDSA P-256 signature over the SHA-256 of the UTF-8 bytes of json. | [default to undefined]
**keyId** | **string** | The KMS key ARN of the ledger key. | [default to undefined]
**algorithm** | **string** |  | [default to undefined]

## Example

```typescript
import { V2KvLedgerErasureSignedShredReceipt } from '@quantcdn/quant-client';

const instance: V2KvLedgerErasureSignedShredReceipt = {
    json,
    signature,
    keyId,
    algorithm,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
