# CreateTaskRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **string** | Task title | [default to undefined]
**description** | **string** | Detailed task description | [optional] [default to undefined]
**taskListId** | **string** | Task list ID for grouping related tasks (implicit - lists are created automatically) | [optional] [default to undefined]
**status** | **string** | Initial task status | [optional] [default to StatusEnum_Pending]
**assignedAgentId** | **string** | Pre-assign task to specific agent | [optional] [default to undefined]
**createdByAgentId** | **string** | Agent ID that created this task | [optional] [default to undefined]
**dependsOn** | **Array&lt;string&gt;** | Task IDs that must complete before this task can start | [optional] [default to undefined]
**metadata** | **object** | Flexible JSON metadata for task-specific data | [optional] [default to undefined]
**maxRetries** | **number** | Maximum retry attempts on failure | [optional] [default to 3]
**blockedReason** | **string** | Reason task is blocked (when status is blocked) | [optional] [default to undefined]
**blockedByTaskIds** | **Array&lt;string&gt;** | Task IDs that are blocking this task | [optional] [default to undefined]

## Example

```typescript
import { CreateTaskRequest } from '@quantcdn/quant-client';

const instance: CreateTaskRequest = {
    title,
    description,
    taskListId,
    status,
    assignedAgentId,
    createdByAgentId,
    dependsOn,
    metadata,
    maxRetries,
    blockedReason,
    blockedByTaskIds,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
