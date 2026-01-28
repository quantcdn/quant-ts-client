# ListTasks200ResponseTasksInner


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
**progress** | **number** |  | [optional] [default to undefined]
**blockedReason** | **string** |  | [optional] [default to undefined]
**blockedByTaskIds** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**createdAt** | **number** |  | [optional] [default to undefined]
**updatedAt** | **number** |  | [optional] [default to undefined]

## Example

```typescript
import { ListTasks200ResponseTasksInner } from '@quantcdn/quant-client';

const instance: ListTasks200ResponseTasksInner = {
    taskId,
    orgId,
    taskListId,
    title,
    description,
    status,
    assignedAgentId,
    progress,
    blockedReason,
    blockedByTaskIds,
    createdAt,
    updatedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
