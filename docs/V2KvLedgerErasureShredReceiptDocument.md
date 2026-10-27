# V2KvLedgerErasureShredReceiptDocument

The signed receipt with its parsed copy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**json** | **string** | The RFC 8785 (JCS) text of the receipt that was signed. | [default to undefined]
**signature** | **string** | Base64 DER ECDSA P-256 signature over the SHA-256 of the UTF-8 bytes of json. | [default to undefined]
**keyId** | **string** | The KMS key ARN of the ledger key. | [default to undefined]
**algorithm** | **string** |  | [default to undefined]
**receipt** | [**V2KvLedgerErasureShredReceiptBody**](V2KvLedgerErasureShredReceiptBody.md) |  | [default to undefined]

## Example

```typescript
import { V2KvLedgerErasureShredReceiptDocument } from '@quantcdn/quant-client';

const instance: V2KvLedgerErasureShredReceiptDocument = {
    json,
    signature,
    keyId,
    algorithm,
    receipt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
