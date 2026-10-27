# ChatWithAIAgentRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **string** | The user\&#39;s message to the agent | [default to undefined]
**sessionId** | **string** | Optional session ID to continue a conversation | [optional] [default to undefined]
**userId** | **string** | Ignored by the API since 4.28.0; the portal sets the requester. | [optional] [default to undefined]
**allowedCollections** | **Array&lt;string&gt;** | Ignored by the API since 4.28.0; the portal sets the requester. | [optional] [default to undefined]
**stream** | **boolean** | Whether to stream the response (SSE) | [optional] [default to false]
**async** | **boolean** | Enable async/durable execution mode. When true, returns 202 with pollUrl. Use for long-running agent tasks. | [optional] [default to false]
**system** | **string** | Optional additional system prompt (appended to agent\&#39;s configured prompt) | [optional] [default to undefined]
**longContext** | **boolean** | Per-request override to force 1M context window routing | [optional] [default to false]
**proposalIds** | **Array&lt;string&gt;** | Tool approval proposal ids this turn relates to. Forwarded unchanged. | [optional] [default to undefined]
**clientSessionId** | **string** | Client session id used to scope tool approval grants. Forwarded unchanged. | [optional] [default to undefined]
**maxToolIterations** | **number** | Maximum tool auto-execution iterations for this request | [optional] [default to undefined]

## Example

```typescript
import { ChatWithAIAgentRequest } from '@quantcdn/quant-client';

const instance: ChatWithAIAgentRequest = {
    message,
    sessionId,
    userId,
    allowedCollections,
    stream,
    async,
    system,
    longContext,
    proposalIds,
    clientSessionId,
    maxToolIterations,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
