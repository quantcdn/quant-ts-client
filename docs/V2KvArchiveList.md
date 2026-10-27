# V2KvArchiveList

A page of deleted stores that still hold archive objects (the KV page envelope).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**Array&lt;V2KvArchiveStatus&gt;**](V2KvArchiveStatus.md) |  | [default to undefined]
**next_cursor** | **string** | Pass as cursor for the next page; null on the last page. | [default to undefined]
**has_more** | **boolean** |  | [default to undefined]
**page_end** | [**V2KvPageEnd**](V2KvPageEnd.md) |  | [default to undefined]

## Example

```typescript
import { V2KvArchiveList } from '@quantcdn/quant-client';

const instance: V2KvArchiveList = {
    data,
    next_cursor,
    has_more,
    page_end,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
