# V2KvIndex

A declared index. States: BUILDING (declared; writes maintain it after about 40 seconds and the backfill runs after about 75 seconds; lookup and count answer 409 INDEX_NOT_READY), ACTIVE (built; lookup, count and index list queries work), FAILED (the build stopped; see error and conflicts; drop and declare again), DROPPING (a drop is in progress; the index then disappears and KV_indexes_show answers 404 INDEX_NOT_FOUND). Terraform and other clients wait for ACTIVE by polling KV_indexes_show; FAILED is terminal.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  | [default to undefined]
**collection** | **string** |  | [default to undefined]
**fields** | **Array&lt;string&gt;** |  | [default to undefined]
**sortBy** | **string** |  | [optional] [default to undefined]
**unique** | **boolean** |  | [optional] [default to undefined]
**count** | **boolean** |  | [optional] [default to undefined]
**slot** | **number** | The secondary index slot that serves the index. | [default to undefined]
**state** | **string** |  | [default to undefined]
**createdAt** | **string** |  | [default to undefined]
**error** | **string** | FAILED only: the code of the first problem the build found. | [optional] [default to undefined]
**conflicts** | **Array&lt;string&gt;** | FAILED only: up to 20 keys (16 KiB) that caused the failure, without duplicates. | [optional] [default to undefined]
**job** | [**V2KvIndexJob**](V2KvIndexJob.md) |  | [optional] [default to undefined]

## Example

```typescript
import { V2KvIndex } from '@quantcdn/quant-client';

const instance: V2KvIndex = {
    name,
    collection,
    fields,
    sortBy,
    unique,
    count,
    slot,
    state,
    createdAt,
    error,
    conflicts,
    job,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
