# DownloadBackup200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**downloadUrl** | **string** | Pre-signed S3 URL for download | [optional] [default to undefined]
**expiresAt** | **string** | URL expiration time | [optional] [default to undefined]
**filename** | **string** | Suggested filename for download | [optional] [default to undefined]

## Example

```typescript
import { DownloadBackup200Response } from '@quantcdn/quant-client';

const instance: DownloadBackup200Response = {
    downloadUrl,
    expiresAt,
    filename,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
