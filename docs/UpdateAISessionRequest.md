# UpdateAISessionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**newMessages** | [**Array&lt;UpdateAISessionRequestNewMessagesInner&gt;**](UpdateAISessionRequestNewMessagesInner.md) | New messages to append to conversation | [optional] [default to undefined]
**tokensUsed** | **number** | Tokens consumed in this turn | [optional] [default to undefined]
**status** | **string** | Update session status | [optional] [default to undefined]
**metadata** | **object** | Update custom metadata | [optional] [default to undefined]

## Example

```typescript
import { UpdateAISessionRequest } from '@quantcdn/quant-client';

const instance: UpdateAISessionRequest = {
    newMessages,
    tokensUsed,
    status,
    metadata,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
