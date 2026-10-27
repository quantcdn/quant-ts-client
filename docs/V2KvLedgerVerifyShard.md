# V2KvLedgerVerifyShard


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**collection** | **string** |  | [default to undefined]
**shard** | **string** |  | [default to undefined]
**fromSeq** | **number** | The first seq checked in this call (0 when no entry was in range). | [default to undefined]
**toSeq** | **number** |  | [default to undefined]
**ok** | **boolean** |  | [default to undefined]
**firstBrokenSeq** | **number** |  | [optional] [default to undefined]
**reason** | **string** |  | [optional] [default to undefined]
**objectFromSeq** | **number** |  | [optional] [default to undefined]
**objectToSeq** | **number** |  | [optional] [default to undefined]

## Example

```typescript
import { V2KvLedgerVerifyShard } from '@quantcdn/quant-client';

const instance: V2KvLedgerVerifyShard = {
    collection,
    shard,
    fromSeq,
    toSeq,
    ok,
    firstBrokenSeq,
    reason,
    objectFromSeq,
    objectToSeq,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
