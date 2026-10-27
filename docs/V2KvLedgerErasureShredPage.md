# V2KvLedgerErasureShredPage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**Array&lt;V2KvLedgerErasureShredRecord&gt;**](V2KvLedgerErasureShredRecord.md) | Newest first, at most 50. | [default to undefined]
**next_cursor** | **string** | Pass as cursor for the next page. Null on the last page. | [default to undefined]
**has_more** | **boolean** |  | [default to undefined]
**page_end** | [**V2KvPageEnd**](V2KvPageEnd.md) |  | [default to undefined]
**ledger** | **string** |  | [default to undefined]

## Example

```typescript
import { V2KvLedgerErasureShredPage } from '@quantcdn/quant-client';

const instance: V2KvLedgerErasureShredPage = {
    data,
    next_cursor,
    has_more,
    page_end,
    ledger,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
