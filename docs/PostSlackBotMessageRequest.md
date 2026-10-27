# PostSlackBotMessageRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel** | **string** |  | [default to undefined]
**threadTs** | **string** | Absent: a root post | [optional] [default to undefined]
**text** | **string** | 1-8000 characters after trim | [default to undefined]

## Example

```typescript
import { PostSlackBotMessageRequest } from '@quantcdn/quant-client';

const instance: PostSlackBotMessageRequest = {
    channel,
    threadTs,
    text,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
