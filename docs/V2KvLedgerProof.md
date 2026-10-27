# V2KvLedgerProof

status pending: the entry is not archived and signed yet (about 10 minutes). status archived: the inclusion proof (RFC 9162 audit path). The body is the KV service bytes unchanged: digest is the signed RFC 8785 object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **string** |  | [default to undefined]
**entry** | [**V2KvLedgerProofEntry**](V2KvLedgerProofEntry.md) |  | [optional] [default to undefined]
**hash** | **string** |  | [optional] [default to undefined]
**source** | [**V2KvLedgerProvenance**](V2KvLedgerProvenance.md) |  | [optional] [default to undefined]
**period** | **string** | Archive period label, YYYYMMDDTHHmmZ. | [optional] [default to undefined]
**archiveKey** | **string** |  | [optional] [default to undefined]
**leafIndex** | **number** |  | [optional] [default to undefined]
**treeSize** | **number** |  | [optional] [default to undefined]
**merkleRoot** | **string** |  | [optional] [default to undefined]
**auditPath** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**digest** | **{ [key: string]: any; }** |  | [optional] [default to undefined]
**digestKey** | **string** |  | [optional] [default to undefined]
**signature** | **string** | Base64 DER ECDSA P-256 over SHA-256 of the digest bytes. | [optional] [default to undefined]
**keyId** | **string** |  | [optional] [default to undefined]
**digestSignedAt** | **string** |  | [optional] [default to undefined]
**anchor** | [**V2KvLedgerProofAnchor**](V2KvLedgerProofAnchor.md) |  | [optional] [default to undefined]
**anchorUnavailable** | **boolean** |  | [optional] [default to undefined]

## Example

```typescript
import { V2KvLedgerProof } from '@quantcdn/quant-client';

const instance: V2KvLedgerProof = {
    status,
    entry,
    hash,
    source,
    period,
    archiveKey,
    leafIndex,
    treeSize,
    merkleRoot,
    auditPath,
    digest,
    digestKey,
    signature,
    keyId,
    digestSignedAt,
    anchor,
    anchorUnavailable,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
