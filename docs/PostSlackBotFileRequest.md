# PostSlackBotFileRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel** | **string** |  | [default to undefined]
**threadTs** | **string** | Absent: a root post | [optional] [default to undefined]
**content** | **string** | The image, base64 (standard alphabet, no whitespace, no data: prefix). 1 byte to 4 MiB decoded. | [default to undefined]
**filename** | **string** | Default screenshot.&lt;ext&gt;. The extension must match the image type (png, jpg, jpeg, gif, webp). | [optional] [default to undefined]
**title** | **string** |  | [optional] [default to undefined]
**altText** | **string** |  | [optional] [default to undefined]
**text** | **string** | Caption. Same mention rules as a message. | [optional] [default to undefined]

## Example

```typescript
import { PostSlackBotFileRequest } from '@quantcdn/quant-client';

const instance: PostSlackBotFileRequest = {
    channel,
    threadTs,
    content,
    filename,
    title,
    altText,
    text,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
