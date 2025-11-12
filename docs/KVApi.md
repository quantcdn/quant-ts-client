# KVApi

All URIs are relative to *https://dashboard.quantcdn.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**kVCreate**](#kvcreate) | **POST** /api/v2/organizations/{organization}/projects/{project}/kv | Add a kv store|
|[**kVDelete**](#kvdelete) | **DELETE** /api/v2/organizations/{organization}/projects/{project}/kv/{store_id} | Delete a kv store|
|[**kVItemsCreate**](#kvitemscreate) | **POST** /api/v2/organizations/{organization}/projects/{project}/kv/{store_id}/items | Add an item to a kv store|
|[**kVItemsDelete**](#kvitemsdelete) | **DELETE** /api/v2/organizations/{organization}/projects/{project}/kv/{store_id}/items/{key} | Delete an item from a kv store|
|[**kVItemsList**](#kvitemslist) | **GET** /api/v2/organizations/{organization}/projects/{project}/kv/{store_id}/items | List items in a kv store|
|[**kVItemsShow**](#kvitemsshow) | **GET** /api/v2/organizations/{organization}/projects/{project}/kv/{store_id}/items/{key} | Get an item from a kv store|
|[**kVItemsUpdate**](#kvitemsupdate) | **PUT** /api/v2/organizations/{organization}/projects/{project}/kv/{store_id}/items/{key} | Update an item in a kv store|
|[**kVList**](#kvlist) | **GET** /api/v2/organizations/{organization}/projects/{project}/kv | List key-value stores|
|[**kVShow**](#kvshow) | **GET** /api/v2/organizations/{organization}/projects/{project}/kv/{store_id} | Get a kv store|

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

[BearerAuth](../README.md#BearerAuth)

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

# **kVItemsCreate**
> KVItemsCreate200Response kVItemsCreate(v2StoreItemRequest)


### Example

```typescript
import {
    KVApi,
    Configuration,
    V2StoreItemRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new KVApi(configuration);

let organization: string; // (default to undefined)
let project: string; // (default to undefined)
let storeId: string; // (default to undefined)
let v2StoreItemRequest: V2StoreItemRequest; //

const { status, data } = await apiInstance.kVItemsCreate(
    organization,
    project,
    storeId,
    v2StoreItemRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v2StoreItemRequest** | **V2StoreItemRequest**|  | |
| **organization** | [**string**] |  | defaults to undefined|
| **project** | [**string**] |  | defaults to undefined|
| **storeId** | [**string**] |  | defaults to undefined|


### Return type

**KVItemsCreate200Response**

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
|**422** | Validation error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **kVItemsDelete**
> KVItemsDelete200Response kVItemsDelete()


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
let key: string; // (default to undefined)

const { status, data } = await apiInstance.kVItemsDelete(
    organization,
    project,
    storeId,
    key
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organization** | [**string**] |  | defaults to undefined|
| **project** | [**string**] |  | defaults to undefined|
| **storeId** | [**string**] |  | defaults to undefined|
| **key** | [**string**] |  | defaults to undefined|


### Return type

**KVItemsDelete200Response**

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

# **kVItemsList**
> V2StoreItemsListResponse kVItemsList()


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
let cursor: string; //Cursor for pagination (optional) (default to undefined)
let limit: number; //Number of items to return (optional) (default to 10)
let search: string; //Search filter for keys (optional) (default to undefined)
let includeValues: boolean; //Include values in the response. Secret values will be redacted as \'[ENCRYPTED]\' for security. (optional) (default to false)

const { status, data } = await apiInstance.kVItemsList(
    organization,
    project,
    storeId,
    cursor,
    limit,
    search,
    includeValues
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organization** | [**string**] |  | defaults to undefined|
| **project** | [**string**] |  | defaults to undefined|
| **storeId** | [**string**] |  | defaults to undefined|
| **cursor** | [**string**] | Cursor for pagination | (optional) defaults to undefined|
| **limit** | [**number**] | Number of items to return | (optional) defaults to 10|
| **search** | [**string**] | Search filter for keys | (optional) defaults to undefined|
| **includeValues** | [**boolean**] | Include values in the response. Secret values will be redacted as \&#39;[ENCRYPTED]\&#39; for security. | (optional) defaults to false|


### Return type

**V2StoreItemsListResponse**

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

# **kVItemsShow**
> KVItemsShow200Response kVItemsShow()

Retrieves an item from the KV store. **Security Note:** If the item was stored as a secret (secret=true), the value will be redacted and returned as \'[ENCRYPTED]\' for security. Secrets should be accessed directly via the Quant Cloud platform KVStore abstraction.

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
let key: string; // (default to undefined)

const { status, data } = await apiInstance.kVItemsShow(
    organization,
    project,
    storeId,
    key
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organization** | [**string**] |  | defaults to undefined|
| **project** | [**string**] |  | defaults to undefined|
| **storeId** | [**string**] |  | defaults to undefined|
| **key** | [**string**] |  | defaults to undefined|


### Return type

**KVItemsShow200Response**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The request has succeeded. |  -  |
|**404** | Item not found. |  -  |
|**403** | Access is forbidden. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **kVItemsUpdate**
> KVItemsCreate200Response kVItemsUpdate(v2StoreItemUpdateRequest)


### Example

```typescript
import {
    KVApi,
    Configuration,
    V2StoreItemUpdateRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new KVApi(configuration);

let organization: string; // (default to undefined)
let project: string; // (default to undefined)
let storeId: string; // (default to undefined)
let key: string; // (default to undefined)
let v2StoreItemUpdateRequest: V2StoreItemUpdateRequest; //

const { status, data } = await apiInstance.kVItemsUpdate(
    organization,
    project,
    storeId,
    key,
    v2StoreItemUpdateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v2StoreItemUpdateRequest** | **V2StoreItemUpdateRequest**|  | |
| **organization** | [**string**] |  | defaults to undefined|
| **project** | [**string**] |  | defaults to undefined|
| **storeId** | [**string**] |  | defaults to undefined|
| **key** | [**string**] |  | defaults to undefined|


### Return type

**KVItemsCreate200Response**

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
|**422** | Validation error. |  -  |

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

# **kVShow**
> V2Store kVShow()


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

const { status, data } = await apiInstance.kVShow(
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

**V2Store**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The request has succeeded. |  -  |
|**404** | KV store not found. |  -  |
|**403** | Access is forbidden. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

