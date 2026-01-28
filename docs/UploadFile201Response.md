# UploadFile201Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fileId** | **string** |  | [optional] [default to undefined]
**s3Uri** | **string** | S3 URI (direct upload only) | [optional] [default to undefined]
**url** | **string** | Presigned download URL (direct upload only) | [optional] [default to undefined]
**uploadUrl** | **string** | Presigned PUT URL (presigned upload only) | [optional] [default to undefined]
**s3Key** | **string** | S3 object key (presigned upload only) | [optional] [default to undefined]
**expiresIn** | **number** | URL expiry in seconds (presigned upload only) | [optional] [default to undefined]
**filename** | **string** |  | [optional] [default to undefined]
**contentType** | **string** |  | [optional] [default to undefined]
**size** | **number** |  | [optional] [default to undefined]
**metadata** | **object** |  | [optional] [default to undefined]
**createdAt** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { UploadFile201Response } from '@quantcdn/quant-client';

const instance: UploadFile201Response = {
    fileId,
    s3Uri,
    url,
    uploadUrl,
    s3Key,
    expiresIn,
    filename,
    contentType,
    size,
    metadata,
    createdAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
