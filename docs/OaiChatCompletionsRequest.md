# OaiChatCompletionsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**model** | **string** | A model id from GET /oai/v1/models | [default to undefined]
**messages** | [**Array&lt;OaiChatCompletionsRequestMessagesInner&gt;**](OaiChatCompletionsRequestMessagesInner.md) |  | [default to undefined]
**stream** | **boolean** | Stream the response as SSE chat.completion.chunk events | [optional] [default to false]
**max_tokens** | **number** |  | [optional] [default to undefined]
**temperature** | **number** |  | [optional] [default to undefined]
**top_p** | **number** |  | [optional] [default to undefined]
**tools** | **Array&lt;object&gt;** | OpenAI function tool definitions | [optional] [default to undefined]
**tool_choice** | **any** | auto | none | required | {type:function, function:{name}} | [optional] [default to undefined]
**stream_options** | **object** | {include_usage: true} to emit a final usage chunk when streaming | [optional] [default to undefined]

## Example

```typescript
import { OaiChatCompletionsRequest } from '@quantcdn/quant-client';

const instance: OaiChatCompletionsRequest = {
    model,
    messages,
    stream,
    max_tokens,
    temperature,
    top_p,
    tools,
    tool_choice,
    stream_options,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
