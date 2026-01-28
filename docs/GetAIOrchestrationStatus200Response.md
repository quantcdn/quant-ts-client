# GetAIOrchestrationStatus200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**orchestrationId** | **string** | Unique orchestration identifier | [default to undefined]
**status** | **string** | Current orchestration status | [default to undefined]
**toolCount** | **number** | Total number of async tools in this orchestration | [default to undefined]
**completedTools** | **number** | Number of tools that have completed | [optional] [default to undefined]
**synthesizedResponse** | **string** | AI-synthesized response combining all tool results (only present when status&#x3D;complete) | [optional] [default to undefined]
**tools** | [**Array&lt;GetAIOrchestrationStatus200ResponseToolsInner&gt;**](GetAIOrchestrationStatus200ResponseToolsInner.md) | Status of individual tool executions | [optional] [default to undefined]
**error** | **string** | Error message (only present when status&#x3D;failed) | [optional] [default to undefined]
**createdAt** | **string** | When orchestration was created | [default to undefined]
**completedAt** | **string** | When orchestration completed (if status in complete or failed) | [optional] [default to undefined]

## Example

```typescript
import { GetAIOrchestrationStatus200Response } from '@quantcdn/quant-client';

const instance: GetAIOrchestrationStatus200Response = {
    orchestrationId,
    status,
    toolCount,
    completedTools,
    synthesizedResponse,
    tools,
    error,
    createdAt,
    completedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
