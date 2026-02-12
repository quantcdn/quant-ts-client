# CreateOrchestrationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Orchestration name | [default to undefined]
**description** | **string** | Optional description | [optional] [default to undefined]
**agentId** | **string** | Agent to process items | [optional] [default to undefined]
**toolId** | **string** | Tool to execute for items | [optional] [default to undefined]
**workflowId** | **string** | Workflow to run for items | [optional] [default to undefined]
**inputSource** | [**CreateOrchestrationRequestInputSource**](CreateOrchestrationRequestInputSource.md) |  | [default to undefined]
**batchSize** | **number** | Items per batch | [optional] [default to 10]
**concurrency** | **number** | Concurrent items within a batch | [optional] [default to 1]
**stopCondition** | [**CreateOrchestrationRequestStopCondition**](CreateOrchestrationRequestStopCondition.md) |  | [optional] [default to undefined]
**assignedSkills** | **Array&lt;string&gt;** | Skill IDs to assign | [optional] [default to undefined]
**autoStart** | **boolean** | Whether to start immediately | [optional] [default to true]

## Example

```typescript
import { CreateOrchestrationRequest } from '@quantcdn/quant-client';

const instance: CreateOrchestrationRequest = {
    name,
    description,
    agentId,
    toolId,
    workflowId,
    inputSource,
    batchSize,
    concurrency,
    stopCondition,
    assignedSkills,
    autoStart,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
