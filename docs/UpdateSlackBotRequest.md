# UpdateSlackBotRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agentId** | **string** | Change the backing AI agent | [optional] [default to undefined]
**status** | **string** | Enable or disable the bot | [optional] [default to undefined]
**sessionTtlDays** | **number** | Session TTL in days | [optional] [default to undefined]
**allowedChannels** | **Array&lt;string&gt;** | Slack channel IDs the bot may respond in | [optional] [default to undefined]
**keywordsEnabled** | **boolean** | Whether keyword triggers are enabled | [optional] [default to undefined]
**keywords** | **Array&lt;string&gt;** | Keywords that trigger the bot | [optional] [default to undefined]
**slashCommands** | **Array&lt;string&gt;** | Slash commands the bot responds to | [optional] [default to undefined]

## Example

```typescript
import { UpdateSlackBotRequest } from '@quantcdn/quant-client';

const instance: UpdateSlackBotRequest = {
    agentId,
    status,
    sessionTtlDays,
    allowedChannels,
    keywordsEnabled,
    keywords,
    slashCommands,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
