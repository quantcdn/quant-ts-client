# GetEnvironmentLogs200ResponseLogEventsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**timestamp** | **number** | Unix timestamp in milliseconds | [optional] [default to undefined]
**message** | **string** | Log message content | [optional] [default to undefined]
**ingestionTime** | **number** | Unix timestamp in milliseconds when CloudWatch ingested the event | [optional] [default to undefined]
**logStreamName** | **string** | CloudWatch log stream, named container/container/taskId | [optional] [default to undefined]

## Example

```typescript
import { GetEnvironmentLogs200ResponseLogEventsInner } from '@quantcdn/quant-client';

const instance: GetEnvironmentLogs200ResponseLogEventsInner = {
    timestamp,
    message,
    ingestionTime,
    logStreamName,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
