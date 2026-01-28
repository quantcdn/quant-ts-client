# GetDurableExecutionStatus200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requestId** | **string** |  | [optional] [default to undefined]
**executionArn** | **string** |  | [optional] [default to undefined]
**status** | **string** |  | [optional] [default to undefined]
**awsStatus** | **string** | Raw AWS Step Functions status | [optional] [default to undefined]
**callbackId** | **string** | Present when status is waiting_callback - use with /chat/callback | [optional] [default to undefined]
**pendingTools** | [**Array&lt;GetDurableExecutionStatus200ResponsePendingToolsInner&gt;**](GetDurableExecutionStatus200ResponsePendingToolsInner.md) | Present when status is waiting_callback - tools waiting for results | [optional] [default to undefined]
**result** | [**GetDurableExecutionStatus200ResponseResult**](GetDurableExecutionStatus200ResponseResult.md) |  | [optional] [default to undefined]
**error** | [**GetDurableExecutionStatus200ResponseError**](GetDurableExecutionStatus200ResponseError.md) |  | [optional] [default to undefined]

## Example

```typescript
import { GetDurableExecutionStatus200Response } from '@quantcdn/quant-client';

const instance: GetDurableExecutionStatus200Response = {
    requestId,
    executionArn,
    status,
    awsStatus,
    callbackId,
    pendingTools,
    result,
    error,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
