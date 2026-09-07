# GetEnvironmentLogs200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**logEvents** | [**Array&lt;GetEnvironmentLogs200ResponseLogEventsInner&gt;**](GetEnvironmentLogs200ResponseLogEventsInner.md) | Array of log events | [optional] [default to undefined]
**logGroupName** | **string** | CloudWatch log group the events were read from | [optional] [default to undefined]
**pagination** | [**GetEnvironmentLogs200ResponsePagination**](GetEnvironmentLogs200ResponsePagination.md) |  | [optional] [default to undefined]
**nextToken** | **string** | Same as pagination.nextToken; kept for backward compatibility | [optional] [default to undefined]

## Example

```typescript
import { GetEnvironmentLogs200Response } from '@quantcdn/quant-client';

const instance: GetEnvironmentLogs200Response = {
    logEvents,
    logGroupName,
    pagination,
    nextToken,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
