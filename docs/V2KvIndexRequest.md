# V2KvIndexRequest

An index definition. Definitions are immutable: to change one, drop the index and declare it again.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Unique in the store. | [default to undefined]
**collection** | **string** | A collection, or a pattern where * as one whole segment matches exactly one segment (customer:*:world). At most 512 UTF-8 bytes. | [default to undefined]
**fields** | **Array&lt;string&gt;** | Top-level fields of a plaintext JSON object value (0-3). A unique index needs at least one. A field that a ledger on the collection marks as personal cannot be indexed (INDEX_FIELD_ENCRYPTED). | [optional] [default to undefined]
**sortBy** | **string** | Optional single sort field. | [optional] [default to undefined]
**unique** | **boolean** | One key per value. Enables KV_indexes_lookup. Not allowed on a ledger collection (LEDGER_INDEX_KIND). | [optional] [default to false]
**count** | **boolean** | Keeps a live count per value. Enables KV_indexes_count. Not allowed on a ledger collection (LEDGER_INDEX_KIND) or on items with a ttl (COUNT_WITH_TTL). | [optional] [default to false]

## Example

```typescript
import { V2KvIndexRequest } from '@quantcdn/quant-client';

const instance: V2KvIndexRequest = {
    name,
    collection,
    fields,
    sortBy,
    unique,
    count,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
