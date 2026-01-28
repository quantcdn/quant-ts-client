# GetTask200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**taskId** | **string** |  | [optional] [default to undefined]
**orgId** | **string** |  | [optional] [default to undefined]
**taskListId** | **string** |  | [optional] [default to undefined]
**title** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**status** | **string** |  | [optional] [default to undefined]
**assignedAgentId** | **string** |  | [optional] [default to undefined]
**createdByAgentId** | **string** |  | [optional] [default to undefined]
**dependsOn** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**metadata** | **object** |  | [optional] [default to undefined]
**progress** | **number** |  | [optional] [default to undefined]
**progressMessage** | **string** |  | [optional] [default to undefined]
**result** | **object** | Task result data when completed | [optional] [default to undefined]
**error** | **string** | Error message if status is failed | [optional] [default to undefined]
**retryCount** | **number** |  | [optional] [default to undefined]
**maxRetries** | **number** |  | [optional] [default to undefined]
**createdAt** | **number** | Unix timestamp in milliseconds | [optional] [default to undefined]
**updatedAt** | **number** | Unix timestamp in milliseconds | [optional] [default to undefined]
**startedAt** | **number** | When status changed to in_progress | [optional] [default to undefined]
**completedAt** | **number** | When task completed/failed/cancelled | [optional] [default to undefined]
**expiresAt** | **number** | TTL timestamp for completed tasks | [optional] [default to undefined]
**blockedReason** | **string** | Reason task is blocked | [optional] [default to undefined]
**blockedByTaskIds** | **Array&lt;string&gt;** | Task IDs that are blocking this task | [optional] [default to undefined]
**blockedAt** | **number** | When status changed to blocked | [optional] [default to undefined]

## Example

```typescript
import { GetTask200Response } from '@quantcdn/quant-client';

const instance: GetTask200Response = {
    taskId,
    orgId,
    taskListId,
    title,
    description,
    status,
    assignedAgentId,
    createdByAgentId,
    dependsOn,
    metadata,
    progress,
    progressMessage,
    result,
    error,
    retryCount,
    maxRetries,
    createdAt,
    updatedAt,
    startedAt,
    completedAt,
    expiresAt,
    blockedReason,
    blockedByTaskIds,
    blockedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
