# KVApi

All URIs are relative to *https://dashboard.quantcdn.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**kVCreate**](#kvcreate) | **POST** /api/v2/organizations/{organization}/projects/{project}/kv | Add a kv store|
|[**kVDelete**](#kvdelete) | **DELETE** /api/v2/organizations/{organization}/projects/{project}/kv/{store_id} | Delete a kv store|
|[**kVItemsCreate**](#kvitemscreate) | **POST** /api/v2/organizations/{organization}/projects/{project}/kv/{store_id}/items | Add an item to a kv store|
|[**kVItemsDelete**](#kvitemsdelete) | **DELETE** /api/v2/organizations/{organization}/projects/{project}/kv/{store_id}/items/{key} | Delete an item from a kv store|
|[**kVItemsList**](#kvitemslist) | **GET** /api/v2/organizations/{organization}/projects/{project}/kv/{store_id}/items | List items in a kv store|
|[**kVItemsPurge**](#kvitemspurge) | **DELETE** /api/v2/organizations/{organization}/projects/{project}/kv/{store_id}/items | Delete items in bulk by prefix and/or age|
|[**kVItemsShow**](#kvitemsshow) | **GET** /api/v2/organizations/{organization}/projects/{project}/kv/{store_id}/items/{key} | Get an item from a kv store|
|[**kVItemsUpdate**](#kvitemsupdate) | **PUT** /api/v2/organizations/{organization}/projects/{project}/kv/{store_id}/items/{key} | Update an item in a kv store|
|[**kVLinkToProject**](#kvlinktoproject) | **POST** /api/v2/organizations/{organization}/projects/{project}/kv/{store_id}/link | Link a KV store to another project|
|[**kVList**](#kvlist) | **GET** /api/v2/organizations/{organization}/projects/{project}/kv | List key-value stores|
|[**kVShow**](#kvshow) | **GET** /api/v2/organizations/{organization}/projects/{project}/kv/{store_id} | Get a kv store|
|[**kVUnlinkFromProject**](#kvunlinkfromproject) | **DELETE** /api/v2/organizations/{organization}/projects/{project}/kv/{store_id}/link | Unlink a KV store from this project|

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

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)
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
| **organization** | [**string**] | Organization identifier | defaults to undefined|
| **project** | [**string**] | Project identifier | defaults to undefined|


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

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)
let storeId: string; // (default to undefined)
let force: boolean; //Delete the store even if it still holds keys. Without it a non-empty store returns 409. (optional) (default to false)

const { status, data } = await apiInstance.kVDelete(
    organization,
    project,
    storeId,
    force
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organization** | [**string**] | Organization identifier | defaults to undefined|
| **project** | [**string**] | Project identifier | defaults to undefined|
| **storeId** | [**string**] |  | defaults to undefined|
| **force** | [**boolean**] | Delete the store even if it still holds keys. Without it a non-empty store returns 409. | (optional) defaults to false|


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
|**409** | The store is not empty. Clear its keys in the dashboard or pass force&#x3D;true. |  -  |
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

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)
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
| **organization** | [**string**] | Organization identifier | defaults to undefined|
| **project** | [**string**] | Project identifier | defaults to undefined|
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

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)
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
| **organization** | [**string**] | Organization identifier | defaults to undefined|
| **project** | [**string**] | Project identifier | defaults to undefined|
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

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)
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
| **organization** | [**string**] | Organization identifier | defaults to undefined|
| **project** | [**string**] | Project identifier | defaults to undefined|
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

# **kVItemsPurge**
> KVItemsPurge200Response kVItemsPurge()

Deletes every item matching the filters. With no filters the whole store is cleared. A small purge finishes in the request and returns 200; a large one returns 202 with the counts so far and continues in the background. Idempotent.

### Example

```typescript
import {
    KVApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new KVApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)
let storeId: string; // (default to undefined)
let prefix: string; //Only delete keys that start with this string. (optional) (default to undefined)
let olderThan: string; //Only delete keys last updated before this instant. ISO 8601, or a duration with unit s, m, h or d. (optional) (default to undefined)

const { status, data } = await apiInstance.kVItemsPurge(
    organization,
    project,
    storeId,
    prefix,
    olderThan
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organization** | [**string**] | Organization identifier | defaults to undefined|
| **project** | [**string**] | Project identifier | defaults to undefined|
| **storeId** | [**string**] |  | defaults to undefined|
| **prefix** | [**string**] | Only delete keys that start with this string. | (optional) defaults to undefined|
| **olderThan** | [**string**] | Only delete keys last updated before this instant. ISO 8601, or a duration with unit s, m, h or d. | (optional) defaults to undefined|


### Return type

**KVItemsPurge200Response**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The purge finished. |  -  |
|**202** | The purge continues in the background. |  -  |
|**400** | The server could not understand the request due to invalid syntax. |  -  |
|**403** | Insufficient permissions. |  -  |

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

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)
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
| **organization** | [**string**] | Organization identifier | defaults to undefined|
| **project** | [**string**] | Project identifier | defaults to undefined|
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

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)
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
| **organization** | [**string**] | Organization identifier | defaults to undefined|
| **project** | [**string**] | Project identifier | defaults to undefined|
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

# **kVLinkToProject**
> KVLinkToProject200Response kVLinkToProject(kVLinkToProjectRequest)

Share a KV store from the source project with a target project. The store will be accessible in the target project.

### Example

```typescript
import {
    KVApi,
    Configuration,
    KVLinkToProjectRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new KVApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let project: string; //Source project identifier (default to undefined)
let storeId: string; //KV store identifier (default to undefined)
let kVLinkToProjectRequest: KVLinkToProjectRequest; //

const { status, data } = await apiInstance.kVLinkToProject(
    organization,
    project,
    storeId,
    kVLinkToProjectRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **kVLinkToProjectRequest** | **KVLinkToProjectRequest**|  | |
| **organization** | [**string**] | Organization identifier | defaults to undefined|
| **project** | [**string**] | Source project identifier | defaults to undefined|
| **storeId** | [**string**] | KV store identifier | defaults to undefined|


### Return type

**KVLinkToProject200Response**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Store linked successfully |  -  |
|**400** | Store already linked or invalid request |  -  |
|**404** | Store or target project not found |  -  |
|**403** | Access forbidden |  -  |

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

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)

const { status, data } = await apiInstance.kVList(
    organization,
    project
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organization** | [**string**] | Organization identifier | defaults to undefined|
| **project** | [**string**] | Project identifier | defaults to undefined|


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

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)
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
| **organization** | [**string**] | Organization identifier | defaults to undefined|
| **project** | [**string**] | Project identifier | defaults to undefined|
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

# **kVUnlinkFromProject**
> KVLinkToProject200Response kVUnlinkFromProject()

Remove access to a linked KV store from this project. The store must be linked (not owned by this project).

### Example

```typescript
import {
    KVApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new KVApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)
let storeId: string; //KV store identifier (default to undefined)

const { status, data } = await apiInstance.kVUnlinkFromProject(
    organization,
    project,
    storeId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organization** | [**string**] | Organization identifier | defaults to undefined|
| **project** | [**string**] | Project identifier | defaults to undefined|
| **storeId** | [**string**] | KV store identifier | defaults to undefined|


### Return type

**KVLinkToProject200Response**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Store unlinked successfully |  -  |
|**400** | Store not linked or invalid request |  -  |
|**403** | Cannot unlink store owned by this project |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

