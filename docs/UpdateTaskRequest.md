# UpdateTaskRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**taskListId** | **string** | Move task to different list or remove from list (set null) | [optional] [default to undefined]
**status** | **string** | Task status (triggers automatic timestamp updates) | [optional] [default to undefined]
**assignedAgentId** | **string** | Reassign task to different agent | [optional] [default to undefined]
**dependsOn** | **Array&lt;string&gt;** | Update task dependencies | [optional] [default to undefined]
**metadata** | **object** | Update task metadata (replaces entire metadata object) | [optional] [default to undefined]
**progress** | **number** | Progress from 0.0 to 1.0 | [optional] [default to undefined]
**progressMessage** | **string** | Human-readable progress message | [optional] [default to undefined]
**result** | **object** | Task result data (set when completing task) | [optional] [default to undefined]
**error** | **string** | Error message (set when task fails) | [optional] [default to undefined]
**retryCount** | **number** | Update retry count | [optional] [default to undefined]
**maxRetries** | **number** | Update maximum retry attempts | [optional] [default to undefined]
**blockedReason** | **string** | Reason task is blocked (set when status is blocked) | [optional] [default to undefined]
**blockedByTaskIds** | **Array&lt;string&gt;** | Task IDs that are blocking this task | [optional] [default to undefined]

## Example

```typescript
import { UpdateTaskRequest } from '@quantcdn/quant-client';

const instance: UpdateTaskRequest = {
    title,
    description,
    taskListId,
    status,
    assignedAgentId,
    dependsOn,
    metadata,
    progress,
    progressMessage,
    result,
    error,
    retryCount,
    maxRetries,
    blockedReason,
    blockedByTaskIds,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
