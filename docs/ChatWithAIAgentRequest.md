# ChatWithAIAgentRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **string** | The user\&#39;s message to the agent | [default to undefined]
**sessionId** | **string** | Optional session ID to continue a conversation | [optional] [default to undefined]
**userId** | **string** | Optional user identifier for session isolation | [optional] [default to undefined]
**stream** | **boolean** | Whether to stream the response (SSE) | [optional] [default to false]
**async** | **boolean** | Enable async/durable execution mode. When true, returns 202 with pollUrl. Use for long-running agent tasks. | [optional] [default to false]
**system** | **string** | Optional additional system prompt (appended to agent\&#39;s configured prompt) | [optional] [default to undefined]
**longContext** | **boolean** | Per-request override to force 1M context window routing | [optional] [default to false]
**maxToolIterations** | **number** | Maximum tool auto-execution iterations for this request | [optional] [default to undefined]
**allowedCollections** | **Array&lt;string&gt;** | Per-request override for vector DB collections the agent can query | [optional] [default to undefined]

## Example

```typescript
import { ChatWithAIAgentRequest } from '@quantcdn/quant-client';

const instance: ChatWithAIAgentRequest = {
    message,
    sessionId,
    userId,
    stream,
    async,
    system,
    longContext,
    maxToolIterations,
    allowedCollections,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
