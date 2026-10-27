# AiSlackBotApiError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **string** |  | [default to undefined]
**error** | **boolean** | Thin proxy for the Slack bot API: list API-enabled bots, read channel messages and threads, and post as the bot. The portal validates the request, requires a verified email, calls the platform and passes its status and body through. The platform owns the bot, channel and rate-limit rules and their error codes.  Only the values that SlackBotApiRequest returns go to the platform, never raw input. The activity entry (ai_slack_api) never holds message text. | [default to undefined]
**code** | **string** |  | [default to undefined]
**retryable** | **boolean** |  | [default to undefined]
**slackError** | **string** | The Slack error string. Only with code SLACK_ERROR. | [optional] [default to undefined]

## Example

```typescript
import { AiSlackBotApiError } from '@quantcdn/quant-client';

const instance: AiSlackBotApiError = {
    message,
    error,
    code,
    retryable,
    slackError,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
