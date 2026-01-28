# ChatInference202Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requestId** | **string** | Unique request identifier for polling | [default to undefined]
**sessionId** | **string** | Session ID for conversation continuity | [optional] [default to undefined]
**status** | **string** | Initial execution status | [default to undefined]
**message** | **string** | Human-readable status message | [optional] [default to undefined]
**pollUrl** | **string** | URL to poll for execution status | [default to undefined]

## Example

```typescript
import { ChatInference202Response } from '@quantcdn/quant-client';

const instance: ChatInference202Response = {
    requestId,
    sessionId,
    status,
    message,
    pollUrl,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
