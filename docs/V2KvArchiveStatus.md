# V2KvArchiveStatus

The archive of one deleted store.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**store** | **string** |  | [optional] [default to undefined]
**status** | **string** | purged: the latest purge is COMPLETE. purging: a purge is not final. blocked: the latest purge is BLOCKED. retained: a lock or the quiet period is in the future. eligible: otherwise. | [optional] [default to undefined]
**deletedAt** | **string** |  | [optional] [default to undefined]
**earliestPurgeAt** | **string** |  | [optional] [default to undefined]
**retainedUntil** | **string** |  | [optional] [default to undefined]
**source** | **string** |  | [optional] [default to undefined]
**project** | **string** |  | [optional] [default to undefined]
**purge** | [**V2KvArchivePurge**](V2KvArchivePurge.md) |  | [optional] [default to undefined]

## Example

```typescript
import { V2KvArchiveStatus } from '@quantcdn/quant-client';

const instance: V2KvArchiveStatus = {
    store,
    status,
    deletedAt,
    earliestPurgeAt,
    retainedUntil,
    source,
    project,
    purge,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
