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
**assignedSkills** | **Array&lt;string&gt;** | Skill IDs to assign to this agent | [optional] [default to undefined]
**createdBy** | **string** | User identifier who created the agent | [optional] [default to undefined]
**longContext** | **boolean** | Enable 1M context window support | [optional] [default to undefined]
**guardrailPreset** | **string** | Guardrail preset name | [optional] [default to undefined]
**filterPolicies** | **Array&lt;string&gt;** | Filter policy IDs to apply to this agent\&#39;s inference requests | [optional] [default to undefined]

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
    assignedSkills,
    createdBy,
    longContext,
    guardrailPreset,
    filterPolicies,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
