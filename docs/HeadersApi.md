# HeadersApi

All URIs are relative to *https://dashboard.quantcdn.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**headersCreate**](#headerscreate) | **POST** /api/v2/organizations/{organization}/projects/{project}/custom-headers | Create or update custom headers|
|[**headersDelete**](#headersdelete) | **DELETE** /api/v2/organizations/{organization}/projects/{project}/custom-headers | Delete custom headers|
|[**headersList**](#headerslist) | **GET** /api/v2/organizations/{organization}/projects/{project}/custom-headers | List custom headers for a project|

# **headersCreate**
> { [key: string]: string; } headersCreate(v2CustomHeaderRequest)


### Example

```typescript
import {
    HeadersApi,
    Configuration,
    V2CustomHeaderRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new HeadersApi(configuration);

let organization: string; // (default to undefined)
let project: string; // (default to undefined)
let v2CustomHeaderRequest: V2CustomHeaderRequest; //

const { status, data } = await apiInstance.headersCreate(
    organization,
    project,
    v2CustomHeaderRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v2CustomHeaderRequest** | **V2CustomHeaderRequest**|  | |
| **organization** | [**string**] |  | defaults to undefined|
| **project** | [**string**] |  | defaults to undefined|


### Return type

**{ [key: string]: string; }**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The request has succeeded. |  -  |
|**400** | The server could not understand the request due to invalid syntax. |  -  |
|**403** | Access is forbidden. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **headersDelete**
> headersDelete(v2CustomHeaderRequest)


### Example

```typescript
import {
    HeadersApi,
    Configuration,
    V2CustomHeaderRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new HeadersApi(configuration);

let organization: string; // (default to undefined)
let project: string; // (default to undefined)
let v2CustomHeaderRequest: V2CustomHeaderRequest; //

const { status, data } = await apiInstance.headersDelete(
    organization,
    project,
    v2CustomHeaderRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v2CustomHeaderRequest** | **V2CustomHeaderRequest**|  | |
| **organization** | [**string**] |  | defaults to undefined|
| **project** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | The headers have been deleted. |  -  |
|**400** | The server could not understand the request due to invalid syntax. |  -  |
|**403** | Access is forbidden. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **headersList**
> Array<{ [key: string]: string; }> headersList()


### Example

```typescript
import {
    HeadersApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new HeadersApi(configuration);

let organization: string; // (default to undefined)
let project: string; // (default to undefined)

const { status, data } = await apiInstance.headersList(
    organization,
    project
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organization** | [**string**] |  | defaults to undefined|
| **project** | [**string**] |  | defaults to undefined|


### Return type

**Array<{ [key: string]: string; }>**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The request has succeeded. |  -  |
|**400** | The server could not understand the request due to invalid syntax. |  -  |
|**403** | Access is forbidden. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

