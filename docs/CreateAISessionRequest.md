# CreateAISessionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**userId** | **string** | User identifier for this session | [default to undefined]
**sessionGroup** | **string** | Optional user-defined grouping identifier (e.g., app name, environment, tenant). Use any format that makes sense for your application. | [optional] [default to undefined]
**metadata** | **{ [key: string]: any; }** | Optional custom metadata for additional context | [optional] [default to undefined]
**expirationMinutes** | **number** | Session expiration in minutes | [optional] [default to 60]
**initialMessages** | [**Array&lt;CreateAISessionRequestInitialMessagesInner&gt;**](CreateAISessionRequestInitialMessagesInner.md) | Initial conversation messages (e.g., system prompt) | [optional] [default to undefined]

## Example

```typescript
import { CreateAISessionRequest } from '@quantcdn/quant-client';

const instance: CreateAISessionRequest = {
    userId,
    sessionGroup,
    metadata,
    expirationMinutes,
    initialMessages,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
