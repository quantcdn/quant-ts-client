# GetAIAgent200ResponseAgent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agentId** | **string** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**group** | **string** |  | [optional] [default to undefined]
**systemPrompt** | **string** |  | [optional] [default to undefined]
**modelId** | **string** |  | [optional] [default to undefined]
**temperature** | **number** |  | [optional] [default to undefined]
**maxTokens** | **number** |  | [optional] [default to undefined]
**allowedTools** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**allowedCollections** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**assignedSkills** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**longContext** | **boolean** | Whether 1M context window is enabled | [optional] [default to undefined]
**guardrailPreset** | **string** | Guardrail preset name | [optional] [default to undefined]
**isGlobal** | **boolean** | Whether this is a platform-managed global agent | [optional] [default to undefined]
**hasOverlay** | **boolean** | Whether the requesting org has a per-org overlay for this global agent | [optional] [default to undefined]
**createdBy** | **string** |  | [optional] [default to undefined]
**createdAt** | **string** |  | [optional] [default to undefined]
**updatedAt** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { GetAIAgent200ResponseAgent } from '@quantcdn/quant-client';

const instance: GetAIAgent200ResponseAgent = {
    agentId,
    name,
    description,
    group,
    systemPrompt,
    modelId,
    temperature,
    maxTokens,
    allowedTools,
    allowedCollections,
    assignedSkills,
    longContext,
    guardrailPreset,
    isGlobal,
    hasOverlay,
    createdBy,
    createdAt,
    updatedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
