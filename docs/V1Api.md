# V1Api

All URIs are relative to *https://dashboard.quantcdn.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**listContent**](#listcontent) | **POST** /api/v1/content/{type} | List content by type|
|[**listRedirects**](#listredirects) | **POST** /api/v1/redirect | List redirects|
|[**uploadFile**](#uploadfile) | **POST** /api/v1/upload | Upload a file|

# **listContent**
> V1ContentListResponse listContent()

Retrieve content via API.

### Example

```typescript
import {
    V1Api,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new V1Api(configuration);

let type: 'content' | 'redirect' | 'file' | 'edge_function' | 'edge_filter' | 'edge_auth'; // (default to undefined)
let body: object; // (optional)

const { status, data } = await apiInstance.listContent(
    type,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |
| **type** | [**&#39;content&#39; | &#39;redirect&#39; | &#39;file&#39; | &#39;edge_function&#39; | &#39;edge_filter&#39; | &#39;edge_auth&#39;**]**Array<&#39;content&#39; &#124; &#39;redirect&#39; &#124; &#39;file&#39; &#124; &#39;edge_function&#39; &#124; &#39;edge_filter&#39; &#124; &#39;edge_auth&#39;>** |  | defaults to undefined|


### Return type

**V1ContentListResponse**

### Authorization

[headerAuth](../README.md#headerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listRedirects**
> V1RedirectListResponse listRedirects()

Retrieve redirects via API.

### Example

```typescript
import {
    V1Api,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new V1Api(configuration);

let body: object; // (optional)

const { status, data } = await apiInstance.listRedirects(
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |


### Return type

**V1RedirectListResponse**

### Authorization

[headerAuth](../README.md#headerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**400** | Bad Request |  -  |
|**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **uploadFile**
> V1UploadResponse uploadFile()

Upload a file via API.

### Example

```typescript
import {
    V1Api,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new V1Api(configuration);

let quantUri: string; // (default to undefined)
let quantPrefix: string; // (optional) (default to undefined)
let body: object; // (optional)

const { status, data } = await apiInstance.uploadFile(
    quantUri,
    quantPrefix,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |
| **quantUri** | [**string**] |  | defaults to undefined|
| **quantPrefix** | [**string**] |  | (optional) defaults to undefined|


### Return type

**V1UploadResponse**

### Authorization

[headerAuth](../README.md#headerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

