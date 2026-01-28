# GetDependencyGraph200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**taskListId** | **string** |  | [optional] [default to undefined]
**taskCount** | **number** |  | [optional] [default to undefined]
**roots** | **Array&lt;string&gt;** | Task IDs with no dependencies | [optional] [default to undefined]
**leaves** | **Array&lt;string&gt;** | Task IDs with no dependents | [optional] [default to undefined]
**graph** | **object** | Adjacency list with task summaries, dependsOn, and dependents arrays | [optional] [default to undefined]

## Example

```typescript
import { GetDependencyGraph200Response } from '@quantcdn/quant-client';

const instance: GetDependencyGraph200Response = {
    taskListId,
    taskCount,
    roots,
    leaves,
    graph,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
