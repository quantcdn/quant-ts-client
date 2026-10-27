# V2KvBatchGetRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**keys** | **Array&lt;string&gt;** | 1 to 100 keys. Duplicates are read once. More than 100 is 400 LIMIT_EXCEEDED. | [default to undefined]
**consistent** | **boolean** | false for an eventually consistent read. | [optional] [default to true]

## Example

```typescript
import { V2KvBatchGetRequest } from '@quantcdn/quant-client';

const instance: V2KvBatchGetRequest = {
    keys,
    consistent,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
