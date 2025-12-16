# UpdateAIAgentRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**group** | **string** |  | [optional] [default to undefined]
**systemPrompt** | **string** |  | [optional] [default to undefined]
**temperature** | **number** |  | [optional] [default to undefined]
**modelId** | **string** |  | [optional] [default to undefined]
**maxTokens** | **number** |  | [optional] [default to undefined]
**allowedTools** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**allowedCollections** | **Array&lt;string&gt;** |  | [optional] [default to undefined]

## Example

```typescript
import { UpdateAIAgentRequest } from '@quantcdn/quant-client';

const instance: UpdateAIAgentRequest = {
    name,
    description,
    group,
    systemPrompt,
    temperature,
    modelId,
    maxTokens,
    allowedTools,
    allowedCollections,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
