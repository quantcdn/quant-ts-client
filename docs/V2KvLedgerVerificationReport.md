# V2KvLedgerVerificationReport

A verification record signed with the ledger key: signature is the base64 DER ECDSA P-256 signature over the SHA-256 of the UTF-8 bytes of json (the RFC 8785 form of report). The body is the KV service bytes unchanged; save it as is and check it offline (kv-ledger-verify verify-signed --doc report.json --public-key key.pem). Trust only json.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**report** | [**V2KvLedgerVerificationReportReport**](V2KvLedgerVerificationReportReport.md) |  | [default to undefined]
**json** | **string** | The exact signed text. | [default to undefined]
**signature** | **string** |  | [default to undefined]
**keyId** | **string** |  | [default to undefined]
**algorithm** | **string** |  | [default to undefined]

## Example

```typescript
import { V2KvLedgerVerificationReport } from '@quantcdn/quant-client';

const instance: V2KvLedgerVerificationReport = {
    report,
    json,
    signature,
    keyId,
    algorithm,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
