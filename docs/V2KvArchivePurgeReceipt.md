# V2KvArchivePurgeReceipt

The platform\'s signed statement that the purge ran. It is not a proof of absence. json is the canonical (JCS) text that signature covers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**json** | **string** | The canonical JSON text of the receipt. | [default to undefined]
**signature** | **string** | Base64 DER ECDSA signature over the SHA-256 of the json bytes. | [default to undefined]
**keyId** | **string** |  | [default to undefined]
**algorithm** | **string** |  | [default to undefined]

## Example

```typescript
import { V2KvArchivePurgeReceipt } from '@quantcdn/quant-client';

const instance: V2KvArchivePurgeReceipt = {
    json,
    signature,
    keyId,
    algorithm,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
