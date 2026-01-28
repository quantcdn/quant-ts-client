# AIFileStorageApi

All URIs are relative to *https://dashboard.quantcdn.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteFile**](#deletefile) | **DELETE** /api/v3/organizations/{organisation}/ai/files/{fileId} | Delete File|
|[**getFile**](#getfile) | **GET** /api/v3/organizations/{organisation}/ai/files/{fileId} | Get File|
|[**listFiles**](#listfiles) | **GET** /api/v3/organizations/{organisation}/ai/files | List Files|
|[**uploadFile**](#uploadfile) | **POST** /api/v3/organizations/{organisation}/ai/files | Upload File to S3|

# **deleteFile**
> DeleteFile200Response deleteFile()

Deletes a file from S3 storage.

### Example

```typescript
import {
    AIFileStorageApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AIFileStorageApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let fileId: string; //The file ID (default to undefined)

const { status, data } = await apiInstance.deleteFile(
    organisation,
    fileId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] | The organisation ID | defaults to undefined|
| **fileId** | [**string**] | The file ID | defaults to undefined|


### Return type

**DeleteFile200Response**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | File deleted successfully |  -  |
|**403** | Access denied |  -  |
|**404** | File not found |  -  |
|**500** | Failed to delete file |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFile**
> GetFile200Response getFile()

Retrieves file metadata and a presigned download URL (valid for 1 hour).

### Example

```typescript
import {
    AIFileStorageApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AIFileStorageApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let fileId: string; //The file ID (default to undefined)

const { status, data } = await apiInstance.getFile(
    organisation,
    fileId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] | The organisation ID | defaults to undefined|
| **fileId** | [**string**] | The file ID | defaults to undefined|


### Return type

**GetFile200Response**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | File metadata and download URL |  -  |
|**403** | Access denied |  -  |
|**404** | File not found |  -  |
|**500** | Failed to get file |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listFiles**
> ListFiles200Response listFiles()

Lists files stored in S3 for this organization with optional metadata filtering and pagination.

### Example

```typescript
import {
    AIFileStorageApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AIFileStorageApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let filter: string; //JSON-encoded metadata filter. Supports exact match and array contains filters. (optional) (default to undefined)
let limit: number; //Maximum files to return (optional) (default to 50)
let cursor: string; //Pagination cursor from previous response (optional) (default to undefined)

const { status, data } = await apiInstance.listFiles(
    organisation,
    filter,
    limit,
    cursor
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] | The organisation ID | defaults to undefined|
| **filter** | [**string**] | JSON-encoded metadata filter. Supports exact match and array contains filters. | (optional) defaults to undefined|
| **limit** | [**number**] | Maximum files to return | (optional) defaults to 50|
| **cursor** | [**string**] | Pagination cursor from previous response | (optional) defaults to undefined|


### Return type

**ListFiles200Response**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of files |  -  |
|**400** | Invalid filter parameter |  -  |
|**403** | Access denied |  -  |
|**500** | Failed to list files |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **uploadFile**
> UploadFile201Response uploadFile(uploadFileRequest)

Uploads a file to S3 storage for later retrieval.      *      * **Two Upload Modes:**      *      * 1. **Direct Upload (≤7MB):** Send base64-encoded content in request body.      *      * 2. **Presigned URL Upload (any size):** Set `requestUploadUrl: true` to get a presigned S3 PUT URL, then upload directly to S3.      *      * **Supported Content Types:**      * - Images: image/png, image/jpeg, image/gif, image/webp, image/svg+xml      * - Documents: application/pdf, text/plain, text/markdown, text/html      * - Code: text/javascript, application/json, text/css, text/yaml      * - Archives: application/zip, application/gzip      * - Video: video/mp4, video/webm (use presigned URL for large files)      *      * **Metadata:**      * Attach any custom metadata for filtering. `artifactType` is auto-populated from contentType if not provided.

### Example

```typescript
import {
    AIFileStorageApi,
    Configuration,
    UploadFileRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AIFileStorageApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let uploadFileRequest: UploadFileRequest; //

const { status, data } = await apiInstance.uploadFile(
    organisation,
    uploadFileRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uploadFileRequest** | **UploadFileRequest**|  | |
| **organisation** | [**string**] | The organisation ID | defaults to undefined|


### Return type

**UploadFile201Response**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | File uploaded or presigned URL generated |  -  |
|**400** | Invalid request parameters |  -  |
|**403** | Access denied |  -  |
|**413** | File too large (use requestUploadUrl for large files) |  -  |
|**500** | Failed to upload file |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

