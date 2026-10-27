# V2KvKeysPage

One page of keys. A page can hold fewer rows than limit while has_more is true (byte or read budget; see page_end): follow next_cursor while has_more is true.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**Array&lt;V2KvEntry&gt;**](V2KvEntry.md) |  | [default to undefined]
**next_cursor** | **string** | Signed; valid 24 hours; bound to the store and the query. Null on the last page. | [default to undefined]
**has_more** | **boolean** |  | [default to undefined]
**page_end** | [**V2KvPageEnd**](V2KvPageEnd.md) |  | [default to undefined]
**indexed** | **boolean** | Present when collection or index was sent. True for an indexed query on a format 2 store. | [optional] [default to undefined]
**ledger** | **string** | Present on a ledger list (the collection of a ledger): the ledger name. | [optional] [default to undefined]
**hidden_ledger_collections** | **number** | Present when ledger rows were left out because the role does not have ledger_read: the number of ledger collections hidden from this page. | [optional] [default to undefined]
**notice** | **string** | Present with hidden_ledger_collections. | [optional] [default to undefined]

## Example

```typescript
import { V2KvKeysPage } from '@quantcdn/quant-client';

const instance: V2KvKeysPage = {
    data,
    next_cursor,
    has_more,
    page_end,
    indexed,
    ledger,
    hidden_ledger_collections,
    notice,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
