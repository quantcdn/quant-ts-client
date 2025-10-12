# ApplicationsApi

All URIs are relative to *https://dashboard.quantcdn.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createApplication**](#createapplication) | **POST** /api/v3/organisations/{organisation}/applications | Create a new application|
|[**deleteApplication**](#deleteapplication) | **DELETE** /api/v3/organisations/{organisation}/applications/{application} | Delete an application|
|[**getApplication**](#getapplication) | **GET** /api/v3/organisations/{organisation}/applications/{application} | Get a single application|
|[**getEcrLoginCredentials**](#getecrlogincredentials) | **GET** /api/v3/organisations/{organisation}/applications/ecr-login | Get ECR login credentials|
|[**listApplications**](#listapplications) | **GET** /api/v3/organisations/{organisation}/applications | Get all applications for an organisation|

# **createApplication**
> Application createApplication(application)


### Example

```typescript
import {
    ApplicationsApi,
    Configuration,
    Application
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new ApplicationsApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let application: Application; //

const { status, data } = await apiInstance.createApplication(
    organisation,
    application
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **application** | **Application**|  | |
| **organisation** | [**string**] | The organisation ID | defaults to undefined|


### Return type

**Application**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | The created application |  -  |
|**400** | The request is invalid |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteApplication**
> deleteApplication()


### Example

```typescript
import {
    ApplicationsApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new ApplicationsApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let application: string; //The application ID (default to undefined)

const { status, data } = await apiInstance.deleteApplication(
    organisation,
    application
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] | The organisation ID | defaults to undefined|
| **application** | [**string**] | The application ID | defaults to undefined|


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | The application deleted |  -  |
|**404** | The application not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getApplication**
> Application getApplication()


### Example

```typescript
import {
    ApplicationsApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new ApplicationsApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let application: string; //The application ID (default to undefined)

const { status, data } = await apiInstance.getApplication(
    organisation,
    application
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] | The organisation ID | defaults to undefined|
| **application** | [**string**] | The application ID | defaults to undefined|


### Return type

**Application**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The application |  -  |
|**404** | The application not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getEcrLoginCredentials**
> GetEcrLoginCredentials200Response getEcrLoginCredentials()


### Example

```typescript
import {
    ApplicationsApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new ApplicationsApi(configuration);

let organisation: string; //The organisation ID (default to undefined)

const { status, data } = await apiInstance.getEcrLoginCredentials(
    organisation
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] | The organisation ID | defaults to undefined|


### Return type

**GetEcrLoginCredentials200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The ECR login credentials |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listApplications**
> Array<Application> listApplications()


### Example

```typescript
import {
    ApplicationsApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new ApplicationsApi(configuration);

let organisation: string; //The organisation ID (default to undefined)

const { status, data } = await apiInstance.listApplications(
    organisation
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] | The organisation ID | defaults to undefined|


### Return type

**Array<Application>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A list of applications |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

