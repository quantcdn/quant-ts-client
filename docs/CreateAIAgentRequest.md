# CreateAIAgentRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  | [default to undefined]
**description** | **string** |  | [default to undefined]
**group** | **string** |  | [optional] [default to undefined]
**systemPrompt** | **string** |  | [default to undefined]
**temperature** | **number** |  | [optional] [default to undefined]
**modelId** | **string** |  | [default to undefined]
**maxTokens** | **number** |  | [optional] [default to undefined]
**allowedTools** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**allowedCollections** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**createdBy** | **string** | User identifier who created the agent | [optional] [default to undefined]

## Example

```typescript
import { CreateAIAgentRequest } from '@quantcdn/quant-client';

const instance: CreateAIAgentRequest = {
    name,
    description,
    group,
    systemPrompt,
    temperature,
    modelId,
    maxTokens,
    allowedTools,
    allowedCollections,
    createdBy,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
