# GetToolExecutionStatus200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**executionId** | **string** |  | [default to undefined]
**toolName** | **string** |  | [default to undefined]
**status** | **string** |  | [default to undefined]
**result** | [**GetToolExecutionStatus200ResponseResult**](GetToolExecutionStatus200ResponseResult.md) |  | [optional] [default to undefined]
**error** | **string** | Error message (only present when status&#x3D;\&#39;failed\&#39;) | [optional] [default to undefined]
**createdAt** | **number** | Unix timestamp when execution was created | [default to undefined]
**startedAt** | **number** | Unix timestamp when execution started (if status &gt;&#x3D; \&#39;running\&#39;) | [optional] [default to undefined]
**completedAt** | **number** | Unix timestamp when execution completed (if status in [\&#39;complete\&#39;, \&#39;failed\&#39;]) | [optional] [default to undefined]
**duration** | **number** | Execution duration in seconds (if completed) | [optional] [default to undefined]

## Example

```typescript
import { GetToolExecutionStatus200Response } from '@quantcdn/quant-client';

const instance: GetToolExecutionStatus200Response = {
    executionId,
    toolName,
    status,
    result,
    error,
    createdAt,
    startedAt,
    completedAt,
    duration,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
