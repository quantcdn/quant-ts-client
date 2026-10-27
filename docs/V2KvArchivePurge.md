# V2KvArchivePurge

One purge of a retained archive. The reason text is the one the caller sent; requestedBy is set by Quant (user:<id> or token:<id>).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**purgeId** | **string** | OpenAPI schemas and path parameters for the retained ledger archive routes of deleted stores (A5). Shapes follow the backend contract C-1 (ArchiveStatus, DryRun, Purge, PurgeReceipt, manifest). The list uses the KV page envelope (data, next_cursor, has_more, page_end). | [optional] [default to undefined]
**store** | **string** |  | [optional] [default to undefined]
**state** | **string** | COMPLETE, RETAINED, BLOCKED and CANCELLED are final. RETAINED: a lock or the quiet period was found at the gate, nothing was deleted. BLOCKED: needs an operator. | [optional] [default to undefined]
**requestedBy** | **string** |  | [optional] [default to undefined]
**requestedAt** | **string** |  | [optional] [default to undefined]
**reason** | **string** |  | [optional] [default to undefined]
**updatedAt** | **string** |  | [optional] [default to undefined]
**completedAt** | **string** |  | [optional] [default to undefined]
**retainedUntil** | **string** | On a RETAINED purge, the latest lock found. | [optional] [default to undefined]
**counts** | [**V2KvArchivePurgeCounts**](V2KvArchivePurgeCounts.md) |  | [optional] [default to undefined]
**lastError** | [**V2KvArchivePurgeLastError**](V2KvArchivePurgeLastError.md) |  | [optional] [default to undefined]

## Example

```typescript
import { V2KvArchivePurge } from '@quantcdn/quant-client';

const instance: V2KvArchivePurge = {
    purgeId,
    store,
    state,
    requestedBy,
    requestedAt,
    reason,
    updatedAt,
    completedAt,
    retainedUntil,
    counts,
    lastError,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
