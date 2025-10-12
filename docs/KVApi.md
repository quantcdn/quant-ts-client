# KVApi

All URIs are relative to *https://dashboard.quantcdn.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**kVCreate**](#kvcreate) | **POST** /api/v2/organizations/{organization}/projects/{project}/kv | Add a kv store|
|[**kVDelete**](#kvdelete) | **DELETE** /api/v2/organizations/{organization}/projects/{project}/kv/{store_id} | Delete a kv store|
|[**kVList**](#kvlist) | **GET** /api/v2/organizations/{organization}/projects/{project}/kv | List key-value stores|

# **kVCreate**
> V2Store kVCreate(v2StoreRequest)


### Example

```typescript
import {
    KVApi,
    Configuration,
    V2StoreRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new KVApi(configuration);

let organization: string; // (default to undefined)
let project: string; // (default to undefined)
let v2StoreRequest: V2StoreRequest; //

const { status, data } = await apiInstance.kVCreate(
    organization,
    project,
    v2StoreRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v2StoreRequest** | **V2StoreRequest**|  | |
| **organization** | [**string**] |  | defaults to undefined|
| **project** | [**string**] |  | defaults to undefined|


### Return type

**V2Store**

### Authorization

No authorization required

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

# **kVDelete**
> kVDelete()


### Example

```typescript
import {
    KVApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new KVApi(configuration);

let organization: string; // (default to undefined)
let project: string; // (default to undefined)
let storeId: string; // (default to undefined)

const { status, data } = await apiInstance.kVDelete(
    organization,
    project,
    storeId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organization** | [**string**] |  | defaults to undefined|
| **project** | [**string**] |  | defaults to undefined|
| **storeId** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | The request has succeeded. |  -  |
|**400** | The server could not understand the request due to invalid syntax. |  -  |
|**403** | Access is forbidden. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **kVList**
> Array<V2Store> kVList()


### Example

```typescript
import {
    KVApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new KVApi(configuration);

let organization: string; // (default to undefined)
let project: string; // (default to undefined)

const { status, data } = await apiInstance.kVList(
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

**Array<V2Store>**

### Authorization

No authorization required

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

