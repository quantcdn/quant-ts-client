# ChatWithAIAgent202Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requestId** | **string** | Unique request identifier for polling | [default to undefined]
**agentId** | **string** | The agent processing the request | [default to undefined]
**agentName** | **string** | Human-readable agent name | [optional] [default to undefined]
**sessionId** | **string** | Session ID (if provided) | [optional] [default to undefined]
**status** | **string** | Initial status | [default to undefined]
**message** | **string** |  | [optional] [default to undefined]
**pollUrl** | **string** | URL to poll for execution status | [default to undefined]

## Example

```typescript
import { ChatWithAIAgent202Response } from '@quantcdn/quant-client';

const instance: ChatWithAIAgent202Response = {
    requestId,
    agentId,
    agentName,
    sessionId,
    status,
    message,
    pollUrl,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
