# V2KvLedgerArchiveDigest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **string** | digests/&lt;org&gt;/&lt;store&gt;/&lt;period&gt;.json (a supplementary digest is &lt;period&gt;_&lt;n&gt;.json). | [default to undefined]
**url** | **string** |  | [default to undefined]
**sigUrl** | **string** | Presigned URL of &lt;key&gt;.sig; absent if the signature does not exist yet. | [optional] [default to undefined]
**period** | **string** |  | [default to undefined]
**name** | **string** |  | [default to undefined]

## Example

```typescript
import { V2KvLedgerArchiveDigest } from '@quantcdn/quant-client';

const instance: V2KvLedgerArchiveDigest = {
    key,
    url,
    sigUrl,
    period,
    name,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
