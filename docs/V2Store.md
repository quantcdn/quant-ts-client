# V2Store


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Store ID | [default to undefined]
**name** | **string** | Store name | [default to undefined]
**status** | **string** | KV_create and KV_show only. ready: the store accepts data requests. provisioning: the table is still being created; data requests are 503 UNAVAILABLE retryable until it is ready. | [optional] [default to undefined]

## Example

```typescript
import { V2Store } from '@quantcdn/quant-client';

const instance: V2Store = {
    id,
    name,
    status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
