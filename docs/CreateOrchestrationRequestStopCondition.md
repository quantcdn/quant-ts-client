# CreateOrchestrationRequestStopCondition


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** |  | [optional] [default to TypeEnum_AllComplete]
**maxIterations** | **number** | Max iterations (for type&#x3D;max_iterations) | [optional] [default to undefined]
**conditionPrompt** | **string** | AI prompt to evaluate stop (for type&#x3D;condition) | [optional] [default to undefined]

## Example

```typescript
import { CreateOrchestrationRequestStopCondition } from '@quantcdn/quant-client';

const instance: CreateOrchestrationRequestStopCondition = {
    type,
    maxIterations,
    conditionPrompt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
