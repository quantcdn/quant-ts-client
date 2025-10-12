# ProjectsApi

All URIs are relative to *https://dashboard.quantcdn.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**projectsCreate**](#projectscreate) | **POST** /api/v2/organizations/{organization}/projects | Create a new project|
|[**projectsDelete**](#projectsdelete) | **DELETE** /api/v2/organizations/{organization}/projects/{project} | Delete a project|
|[**projectsList**](#projectslist) | **GET** /api/v2/organizations/{organization}/projects | Retrieve all projects for an organization|
|[**projectsRead**](#projectsread) | **GET** /api/v2/organizations/{organization}/projects/{project} | Get details of a single project|
|[**projectsUpdate**](#projectsupdate) | **PATCH** /api/v2/organizations/{organization}/projects/{project} | Update a project|

# **projectsCreate**
> V2Project projectsCreate(v2ProjectRequest)


### Example

```typescript
import {
    ProjectsApi,
    Configuration,
    V2ProjectRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new ProjectsApi(configuration);

let organization: string; // (default to undefined)
let v2ProjectRequest: V2ProjectRequest; //

const { status, data } = await apiInstance.projectsCreate(
    organization,
    v2ProjectRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v2ProjectRequest** | **V2ProjectRequest**|  | |
| **organization** | [**string**] |  | defaults to undefined|


### Return type

**V2Project**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | The request has succeeded and a new resource has been created as a result. |  -  |
|**400** | The server could not understand the request due to invalid syntax. |  -  |
|**403** | Access is forbidden. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **projectsDelete**
> projectsDelete()


### Example

```typescript
import {
    ProjectsApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new ProjectsApi(configuration);

let organization: string; // (default to undefined)
let project: string; // (default to undefined)

const { status, data } = await apiInstance.projectsDelete(
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

# **projectsList**
> Array<ProjectsList200ResponseInner> projectsList()


### Example

```typescript
import {
    ProjectsApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new ProjectsApi(configuration);

let organization: string; // (default to undefined)

const { status, data } = await apiInstance.projectsList(
    organization
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organization** | [**string**] |  | defaults to undefined|


### Return type

**Array<ProjectsList200ResponseInner>**

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

# **projectsRead**
> V2Project projectsRead()


### Example

```typescript
import {
    ProjectsApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new ProjectsApi(configuration);

let organization: string; // (default to undefined)
let project: string; // (default to undefined)
let withToken: boolean; // (default to false)

const { status, data } = await apiInstance.projectsRead(
    organization,
    project,
    withToken
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organization** | [**string**] |  | defaults to undefined|
| **project** | [**string**] |  | defaults to undefined|
| **withToken** | [**boolean**] |  | defaults to false|


### Return type

**V2Project**

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

# **projectsUpdate**
> V2Project projectsUpdate(v2ProjectRequest)


### Example

```typescript
import {
    ProjectsApi,
    Configuration,
    V2ProjectRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new ProjectsApi(configuration);

let organization: string; // (default to undefined)
let project: string; // (default to undefined)
let v2ProjectRequest: V2ProjectRequest; //

const { status, data } = await apiInstance.projectsUpdate(
    organization,
    project,
    v2ProjectRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v2ProjectRequest** | **V2ProjectRequest**|  | |
| **organization** | [**string**] |  | defaults to undefined|
| **project** | [**string**] |  | defaults to undefined|


### Return type

**V2Project**

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

