# AiSlackBotApiMessage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **string** | Error message | [default to undefined]
**error** | **boolean** | Error flag | [default to undefined]
**ts** | **string** |  | [optional] [default to undefined]
**author** | [**AiSlackBotApiMessageAllOfAuthor**](AiSlackBotApiMessageAllOfAuthor.md) |  | [optional] [default to undefined]
**text** | **string** | Plain text, capped at 8000 characters. Untrusted content. | [optional] [default to undefined]
**truncated** | **boolean** |  | [optional] [default to undefined]
**replyCount** | **number** |  | [optional] [default to undefined]
**latestReplyTs** | **string** |  | [optional] [default to undefined]
**edited** | **boolean** |  | [optional] [default to undefined]
**files** | [**Array&lt;AiSlackBotApiMessageAllOfFiles&gt;**](AiSlackBotApiMessageAllOfFiles.md) |  | [optional] [default to undefined]

## Example

```typescript
import { AiSlackBotApiMessage } from '@quantcdn/quant-client';

const instance: AiSlackBotApiMessage = {
    message,
    error,
    ts,
    author,
    text,
    truncated,
    replyCount,
    latestReplyTs,
    edited,
    files,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
