# ListTasks200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tasks** | [**Array&lt;ListTasks200ResponseTasksInner&gt;**](ListTasks200ResponseTasksInner.md) |  | [optional] [default to undefined]
**taskIds** | **Array&lt;string&gt;** | Task IDs (only with dependsOn filter) | [optional] [default to undefined]
**count** | **number** |  | [optional] [default to undefined]
**dependsOn** | **string** | The queried task ID (only with dependsOn filter) | [optional] [default to undefined]

## Example

```typescript
import { ListTasks200Response } from '@quantcdn/quant-client';

const instance: ListTasks200Response = {
    tasks,
    taskIds,
    count,
    dependsOn,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
