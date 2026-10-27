# V2KvLedgerErasureShredEntriesPage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**Array&lt;V2KvLedgerErasureShredEntry&gt;**](V2KvLedgerErasureShredEntry.md) | Sorted by key. | [default to undefined]
**next_cursor** | **string** | Pass as cursor for the next page. Null on the last page. | [default to undefined]
**has_more** | **boolean** |  | [default to undefined]
**page_end** | [**V2KvPageEnd**](V2KvPageEnd.md) |  | [default to undefined]
**shredId** | **string** |  | [default to undefined]
**entryCount** | **number** |  | [default to undefined]

## Example

```typescript
import { V2KvLedgerErasureShredEntriesPage } from '@quantcdn/quant-client';

const instance: V2KvLedgerErasureShredEntriesPage = {
    data,
    next_cursor,
    has_more,
    page_end,
    shredId,
    entryCount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
