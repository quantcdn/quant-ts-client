# UpdateSlackBotRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Display name for the bot | [optional] [default to undefined]
**status** | **string** | Enable or disable the bot | [optional] [default to undefined]
**systemPrompt** | **string** | System prompt for the backing AI agent | [optional] [default to undefined]
**modelId** | **string** | AI model identifier | [optional] [default to undefined]
**temperature** | **number** | Sampling temperature | [optional] [default to undefined]
**maxTokens** | **number** | Maximum response tokens | [optional] [default to undefined]
**allowedTools** | **Array&lt;string&gt;** | Tools the agent may use | [optional] [default to undefined]
**assignedSkills** | **Array&lt;string&gt;** | Skills assigned to the agent | [optional] [default to undefined]
**allowedCollections** | **Array&lt;string&gt;** | Vector DB collections the agent may query | [optional] [default to undefined]
**allowedSubAgents** | **Array&lt;string&gt;** | Sub-agents the agent may call | [optional] [default to undefined]
**guardrailPreset** | **string** | Guardrail preset name | [optional] [default to undefined]
**filterPolicies** | **Array&lt;string&gt;** | Content filter policies | [optional] [default to undefined]
**longContext** | **boolean** | Enable long context mode | [optional] [default to undefined]
**sessionTtlDays** | **number** | Session TTL in days | [optional] [default to undefined]
**allowedChannels** | **Array&lt;string&gt;** | Slack channel IDs the bot may respond in | [optional] [default to undefined]
**allowedUsers** | **Array&lt;string&gt;** | Slack user IDs allowed to interact with the bot | [optional] [default to undefined]
**deniedUsers** | **Array&lt;string&gt;** | Slack user IDs denied from interacting with the bot | [optional] [default to undefined]
**allowGuests** | **boolean** | Whether guest users may interact with the bot | [optional] [default to undefined]
**homeTabContent** | **string** | Content shown on the bot\&#39;s Home tab in Slack | [optional] [default to undefined]
**agentAccessControl** | **object** | Agent-level access control settings | [optional] [default to undefined]
**keywordsEnabled** | **boolean** | Whether keyword triggers are enabled | [optional] [default to undefined]
**keywords** | **Array&lt;string&gt;** | Keywords that trigger the bot | [optional] [default to undefined]

## Example

```typescript
import { UpdateSlackBotRequest } from '@quantcdn/quant-client';

const instance: UpdateSlackBotRequest = {
    name,
    status,
    systemPrompt,
    modelId,
    temperature,
    maxTokens,
    allowedTools,
    assignedSkills,
    allowedCollections,
    allowedSubAgents,
    guardrailPreset,
    filterPolicies,
    longContext,
    sessionTtlDays,
    allowedChannels,
    allowedUsers,
    deniedUsers,
    allowGuests,
    homeTabContent,
    agentAccessControl,
    keywordsEnabled,
    keywords,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
