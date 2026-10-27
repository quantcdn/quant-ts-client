# V2KvLedgerProofEntry

The archived line in stored form; personal fields stay sealed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **string** |  | [optional] [default to undefined]
**collection** | **string** |  | [optional] [default to undefined]
**shard** | **string** |  | [optional] [default to undefined]
**id** | **string** |  | [optional] [default to undefined]
**seq** | **number** |  | [optional] [default to undefined]
**at** | **number** |  | [optional] [default to undefined]
**value** | **string** |  | [optional] [default to undefined]
**prevHash** | **string** |  | [optional] [default to undefined]
**hash** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { V2KvLedgerProofEntry } from '@quantcdn/quant-client';

const instance: V2KvLedgerProofEntry = {
    key,
    collection,
    shard,
    id,
    seq,
    at,
    value,
    prevHash,
    hash,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
