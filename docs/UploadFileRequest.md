# UploadFileRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | **string** | Base64-encoded file content (for direct upload). Required unless using requestUploadUrl. | [optional] [default to undefined]
**requestUploadUrl** | **boolean** | Set to true to get a presigned S3 upload URL instead of uploading directly. | [optional] [default to false]
**size** | **number** | File size in bytes. Optional but recommended for presigned uploads. | [optional] [default to undefined]
**filename** | **string** | Original filename | [optional] [default to undefined]
**contentType** | **string** | MIME type of the file | [default to undefined]
**metadata** | **{ [key: string]: any; }** | Custom metadata for filtering. Any fields allowed. | [optional] [default to undefined]

## Example

```typescript
import { UploadFileRequest } from '@quantcdn/quant-client';

const instance: UploadFileRequest = {
    content,
    requestUploadUrl,
    size,
    filename,
    contentType,
    metadata,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
