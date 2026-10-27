# V2KvBatchGetResponse

One entry per requested key, in input order; null for a missing or expired key. The whole response is at most 4 MiB.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**Array&lt;V2KvEntry | null&gt;**](V2KvEntry.md) |  | [default to undefined]

## Example

```typescript
import { V2KvBatchGetResponse } from '@quantcdn/quant-client';

const instance: V2KvBatchGetResponse = {
    items,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
