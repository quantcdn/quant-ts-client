# GetEnvironmentLogs200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**logEvents** | [**Array&lt;GetEnvironmentLogs200ResponseLogEventsInner&gt;**](GetEnvironmentLogs200ResponseLogEventsInner.md) | Array of log events | [optional] [default to undefined]
**nextToken** | **string** | Token for fetching next page of results (null if no more pages) | [optional] [default to undefined]

## Example

```typescript
import { GetEnvironmentLogs200Response } from '@quantcdn/quant-client';

const instance: GetEnvironmentLogs200Response = {
    logEvents,
    nextToken,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
