# CreateSlackInteractionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel** | **string** |  | [default to undefined]
**threadTs** | **string** |  | [optional] [default to undefined]
**text** | **string** |  | [default to undefined]
**actions** | [**Array&lt;CreateSlackInteractionRequestActionsInner&gt;**](CreateSlackInteractionRequestActionsInner.md) |  | [default to undefined]
**responseMode** | **string** |  | [optional] [default to undefined]
**expiresInSeconds** | **number** |  | [optional] [default to 3600]
**allowedUsers** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**metadata** | **object** | Opaque caller data, at most 4096 bytes of canonical JSON | [optional] [default to undefined]

## Example

```typescript
import { CreateSlackInteractionRequest } from '@quantcdn/quant-client';

const instance: CreateSlackInteractionRequest = {
    channel,
    threadTs,
    text,
    actions,
    responseMode,
    expiresInSeconds,
    allowedUsers,
    metadata,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
