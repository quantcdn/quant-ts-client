# UpsertAgentOverlayRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**modelId** | **string** | Override the base agent\&#39;s model | [optional] [default to undefined]
**temperature** | **number** | Override temperature | [optional] [default to undefined]
**maxTokens** | **number** | Override max tokens | [optional] [default to undefined]
**disabledSkills** | **Array&lt;string&gt;** | Global skill IDs to exclude | [optional] [default to undefined]
**additionalSkills** | **Array&lt;string&gt;** | Org-owned skill IDs to add | [optional] [default to undefined]
**additionalTools** | **Array&lt;string&gt;** | Tool names to add | [optional] [default to undefined]
**disabledTools** | **Array&lt;string&gt;** | Tool names to remove | [optional] [default to undefined]
**systemPromptAppend** | **string** | Text appended to base system prompt | [optional] [default to undefined]
**allowedCollections** | **Array&lt;string&gt;** | Vector DB collections | [optional] [default to undefined]
**guardrailPreset** | **string** | Guardrail preset | [optional] [default to undefined]
**version** | **number** | Current version for optimistic concurrency | [optional] [default to undefined]

## Example

```typescript
import { UpsertAgentOverlayRequest } from '@quantcdn/quant-client';

const instance: UpsertAgentOverlayRequest = {
    modelId,
    temperature,
    maxTokens,
    disabledSkills,
    additionalSkills,
    additionalTools,
    disabledTools,
    systemPromptAppend,
    allowedCollections,
    guardrailPreset,
    version,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
