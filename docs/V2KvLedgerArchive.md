# V2KvLedgerArchive

One page of presigned download URLs (each valid for up to 3600 seconds; call again for fresh URLs). Every key is under this store\'s prefixes ledgers/<org>/<store>/<ledger>/ and digests/<org>/<store>/.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**objects** | [**Array&lt;V2KvLedgerArchiveObject&gt;**](V2KvLedgerArchiveObject.md) |  | [default to undefined]
**digests** | [**Array&lt;V2KvLedgerArchiveDigest&gt;**](V2KvLedgerArchiveDigest.md) | First page (or digest_cursor pages) only. | [default to undefined]
**timestamps** | [**Array&lt;V2KvLedgerArchiveFile&gt;**](V2KvLedgerArchiveFile.md) | RFC 3161 tokens and anchor binding files. First page (or digest_cursor pages) only. | [default to undefined]
**digestsTruncated** | **boolean** | True when more than 2,000 digest files exist: continue with next_digest_cursor. | [optional] [default to undefined]
**note** | **string** |  | [optional] [default to undefined]
**next_cursor** | **string** | Pass as cursor for the next page of objects. | [default to undefined]
**next_digest_cursor** | **string** | Pass as digest_cursor for the next page of digests. | [default to undefined]

## Example

```typescript
import { V2KvLedgerArchive } from '@quantcdn/quant-client';

const instance: V2KvLedgerArchive = {
    objects,
    digests,
    timestamps,
    digestsTruncated,
    note,
    next_cursor,
    next_digest_cursor,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
