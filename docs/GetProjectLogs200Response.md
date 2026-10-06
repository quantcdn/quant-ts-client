# GetProjectLogs200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**logs** | [**Array&lt;GetProjectLogs200ResponseLogsInner&gt;**](GetProjectLogs200ResponseLogsInner.md) | Structured CloudFront access log entries. Each entry carries request, response, timing and cache fields as emitted by the edge. | [optional] [default to undefined]
**count** | **number** | Number of entries in this response | [optional] [default to undefined]
**nextToken** | **string** | Token for the next page, or null when there are no more entries | [optional] [default to undefined]

## Example

```typescript
import { GetProjectLogs200Response } from '@quantcdn/quant-client';

const instance: GetProjectLogs200Response = {
    logs,
    count,
    nextToken,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
