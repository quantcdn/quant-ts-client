# ChatInferenceRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**messages** | [**Array&lt;ChatInferenceRequestMessagesInner&gt;**](ChatInferenceRequestMessagesInner.md) | Array of chat messages. Content can be a simple string or an array of content blocks for multimodal input. | [default to undefined]
**modelId** | **string** | Model ID. Use Nova models for multimodal support. | [default to undefined]
**temperature** | **number** |  | [optional] [default to 0.7]
**maxTokens** | **number** |  | [optional] [default to 1024]
**topP** | **number** |  | [optional] [default to undefined]
**stream** | **boolean** | Ignored in buffered mode, always returns complete response | [optional] [default to undefined]
**systemPrompt** | **string** | Optional custom system prompt. When tools are enabled, this is prepended with tool usage guidance. | [optional] [default to undefined]
**stopSequences** | **Array&lt;string&gt;** | Custom stop sequences | [optional] [default to undefined]
**responseFormat** | [**ChatInferenceRequestResponseFormat**](ChatInferenceRequestResponseFormat.md) |  | [optional] [default to undefined]
**toolConfig** | [**ChatInferenceRequestToolConfig**](ChatInferenceRequestToolConfig.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ChatInferenceRequest } from '@quantcdn/quant-client';

const instance: ChatInferenceRequest = {
    messages,
    modelId,
    temperature,
    maxTokens,
    topP,
    stream,
    systemPrompt,
    stopSequences,
    responseFormat,
    toolConfig,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
