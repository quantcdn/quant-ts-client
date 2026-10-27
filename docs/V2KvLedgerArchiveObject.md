# V2KvLedgerArchiveObject


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **string** | ledgers/&lt;org&gt;/&lt;store&gt;/&lt;ledger&gt;/&lt;collection base64url&gt;/&lt;shard&gt;/&lt;period&gt;-&lt;fromSeq 12&gt;-&lt;toSeq 12&gt;.jsonl.gz. Save the file under this path. | [default to undefined]
**url** | **string** | Presigned GET URL, valid for up to 3600 seconds. | [default to undefined]
**collection** | **string** |  | [default to undefined]
**shard** | **string** |  | [default to undefined]
**fromSeq** | **number** |  | [default to undefined]
**toSeq** | **number** |  | [default to undefined]
**period** | **string** |  | [default to undefined]

## Example

```typescript
import { V2KvLedgerArchiveObject } from '@quantcdn/quant-client';

const instance: V2KvLedgerArchiveObject = {
    key,
    url,
    collection,
    shard,
    fromSeq,
    toSeq,
    period,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
