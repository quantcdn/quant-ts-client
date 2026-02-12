# ChatInferenceStreamRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**messages** | [**Array&lt;ChatInferenceStreamRequestMessagesInner&gt;**](ChatInferenceStreamRequestMessagesInner.md) | Array of chat messages. Content can be a simple string or an array of content blocks for multimodal input. | [default to undefined]
**modelId** | **string** | Model ID. Use Nova models for multimodal support. | [default to undefined]
**temperature** | **number** |  | [optional] [default to 0.7]
**maxTokens** | **number** | Max tokens. Claude 4.5 supports up to 64k. | [optional] [default to 4096]
**topP** | **number** |  | [optional] [default to undefined]
**systemPrompt** | **string** | Optional custom system prompt. When tools are enabled, this is prepended with tool usage guidance. | [optional] [default to undefined]
**stopSequences** | **Array&lt;string&gt;** | Custom stop sequences | [optional] [default to undefined]
**responseFormat** | [**ChatInferenceRequestResponseFormat**](ChatInferenceRequestResponseFormat.md) |  | [optional] [default to undefined]
**toolConfig** | [**ChatInferenceRequestToolConfig**](ChatInferenceRequestToolConfig.md) |  | [optional] [default to undefined]
**sessionId** | **string** | Optional session ID for conversation continuity. Omit to use stateless mode, include to continue an existing session. | [optional] [default to undefined]
**async** | **boolean** | Enable async/durable execution mode. When true, returns 202 with pollUrl instead of streaming. Use for long-running inference, client-executed tools, or operations &gt;30 seconds. | [optional] [default to false]
**allowedTools** | **Array&lt;string&gt;** | Top-level convenience alias for toolConfig.allowedTools. Whitelists which tools can be auto-executed. | [optional] [default to undefined]
**guardrails** | [**ChatInferenceRequestGuardrails**](ChatInferenceRequestGuardrails.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ChatInferenceStreamRequest } from '@quantcdn/quant-client';

const instance: ChatInferenceStreamRequest = {
    messages,
    modelId,
    temperature,
    maxTokens,
    topP,
    systemPrompt,
    stopSequences,
    responseFormat,
    toolConfig,
    sessionId,
    async,
    allowedTools,
    guardrails,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
