# PurgeApi

All URIs are relative to *https://dashboard.quantcdn.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**purgeCreate**](#purgecreate) | **POST** /api/v2/organizations/{organization}/projects/{project}/purge | Purge cache via URL or cache keys|

# **purgeCreate**
> string purgeCreate(purgeCreateRequest)


### Example

```typescript
import {
    PurgeApi,
    Configuration,
    PurgeCreateRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new PurgeApi(configuration);

let organization: string; // (default to undefined)
let project: string; // (default to undefined)
let purgeCreateRequest: PurgeCreateRequest; //

const { status, data } = await apiInstance.purgeCreate(
    organization,
    project,
    purgeCreateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **purgeCreateRequest** | **PurgeCreateRequest**|  | |
| **organization** | [**string**] |  | defaults to undefined|
| **project** | [**string**] |  | defaults to undefined|


### Return type

**string**

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

