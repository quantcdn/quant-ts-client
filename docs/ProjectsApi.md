# ProjectsApi

All URIs are relative to *https://dashboard.quantcdn.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getProjectLogs**](#getprojectlogs) | **GET** /api/v2/organizations/{organization}/projects/{project}/logs | Get CDN access logs for a project|
|[**projectsCreate**](#projectscreate) | **POST** /api/v2/organizations/{organization}/projects | Create a new project|
|[**projectsDelete**](#projectsdelete) | **DELETE** /api/v2/organizations/{organization}/projects/{project} | Delete a project|
|[**projectsList**](#projectslist) | **GET** /api/v2/organizations/{organization}/projects | Retrieve all projects for an organization|
|[**projectsRead**](#projectsread) | **GET** /api/v2/organizations/{organization}/projects/{project} | Get details of a single project|
|[**projectsUpdate**](#projectsupdate) | **PATCH** /api/v2/organizations/{organization}/projects/{project} | Update a project|

# **getProjectLogs**
> GetProjectLogs200Response getProjectLogs()

Retrieves CloudFront access log entries for an AWS-platform project. Results are always scoped to the project; the optional filter can only narrow them. Entries are returned oldest first; pass nextToken from the previous response to fetch the next page. Logs are retained for 30 days.

### Example

```typescript
import {
    ProjectsApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new ProjectsApi(configuration);

let organization: string; //The organization machine name (default to undefined)
let project: string; //The project machine name (default to undefined)
let limit: number; //Maximum number of log entries to return per page (default 100) (optional) (default to 100)
let startTime: string; //Start of the time range. ISO 8601 or Unix epoch milliseconds. (optional) (default to undefined)
let endTime: string; //End of the time range. ISO 8601 or Unix epoch milliseconds. (optional) (default to undefined)
let filter: string; //CloudWatch JSON filter expression AND-ed with the project constraint, e.g. $.status_code = 404. Outer braces are optional; nested braces are rejected. (optional) (default to undefined)
let domain: string; //Only return entries for this domain (optional) (default to undefined)
let nextToken: string; //Opaque pagination token from the previous response. Pass back unchanged to fetch the next page. (optional) (default to undefined)

const { status, data } = await apiInstance.getProjectLogs(
    organization,
    project,
    limit,
    startTime,
    endTime,
    filter,
    domain,
    nextToken
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organization** | [**string**] | The organization machine name | defaults to undefined|
| **project** | [**string**] | The project machine name | defaults to undefined|
| **limit** | [**number**] | Maximum number of log entries to return per page (default 100) | (optional) defaults to 100|
| **startTime** | [**string**] | Start of the time range. ISO 8601 or Unix epoch milliseconds. | (optional) defaults to undefined|
| **endTime** | [**string**] | End of the time range. ISO 8601 or Unix epoch milliseconds. | (optional) defaults to undefined|
| **filter** | [**string**] | CloudWatch JSON filter expression AND-ed with the project constraint, e.g. $.status_code &#x3D; 404. Outer braces are optional; nested braces are rejected. | (optional) defaults to undefined|
| **domain** | [**string**] | Only return entries for this domain | (optional) defaults to undefined|
| **nextToken** | [**string**] | Opaque pagination token from the previous response. Pass back unchanged to fetch the next page. | (optional) defaults to undefined|


### Return type

**GetProjectLogs200Response**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Access log entries |  -  |
|**400** | Invalid filter or time range |  -  |
|**401** | Unauthenticated |  -  |
|**403** | Token lacks the projects:read scope or the user lacks browse_projects |  -  |
|**404** | The project is not on the AWS platform, or its access logs are not enabled yet |  -  |
|**422** | Validation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

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

let organization: string; //Organization identifier (default to undefined)
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
| **organization** | [**string**] | Organization identifier | defaults to undefined|


### Return type

**V2Project**

### Authorization

[BearerAuth](../README.md#BearerAuth)

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

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)

const { status, data } = await apiInstance.projectsDelete(
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

# **projectsList**
> Array<V2Project> projectsList()


### Example

```typescript
import {
    ProjectsApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new ProjectsApi(configuration);

let organization: string; //Organization identifier (default to undefined)

const { status, data } = await apiInstance.projectsList(
    organization
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organization** | [**string**] | Organization identifier | defaults to undefined|


### Return type

**Array<V2Project>**

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

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)
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
| **organization** | [**string**] | Organization identifier | defaults to undefined|
| **project** | [**string**] | Project identifier | defaults to undefined|
| **withToken** | [**boolean**] |  | defaults to false|


### Return type

**V2Project**

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

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)
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
| **organization** | [**string**] | Organization identifier | defaults to undefined|
| **project** | [**string**] | Project identifier | defaults to undefined|


### Return type

**V2Project**

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

