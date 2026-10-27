# ApplicationsApi

All URIs are relative to *https://dashboard.quantcdn.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createApplication**](#createapplication) | **POST** /api/v3/organizations/{organisation}/applications | Create a new application|
|[**deleteApplication**](#deleteapplication) | **DELETE** /api/v3/organizations/{organisation}/applications/{application} | Delete an application|
|[**getApplication**](#getapplication) | **GET** /api/v3/organizations/{organisation}/applications/{application} | Get a single application|
|[**getEcrLoginCredentials**](#getecrlogincredentials) | **GET** /api/v3/organizations/{organisation}/applications/ecr-login | Get container registry login credentials|
|[**listApplications**](#listapplications) | **GET** /api/v3/organizations/{organisation}/applications | Get all applications for an organisation|
|[**patchApplicationMetadata**](#patchapplicationmetadata) | **PATCH** /api/v3/organizations/{organisation}/applications/{application}/metadata | Merge-patch application metadata|
|[**putApplicationMetadata**](#putapplicationmetadata) | **PUT** /api/v3/organizations/{organisation}/applications/{application}/metadata | Replace application metadata|

# **createApplication**
> Application createApplication(createApplicationRequest)


### Example

```typescript
import {
    ApplicationsApi,
    Configuration,
    CreateApplicationRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new ApplicationsApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let createApplicationRequest: CreateApplicationRequest; //

const { status, data } = await apiInstance.createApplication(
    organisation,
    createApplicationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createApplicationRequest** | **CreateApplicationRequest**|  | |
| **organisation** | [**string**] | The organisation ID | defaults to undefined|


### Return type

**Application**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | The created application |  -  |
|**400** | The request is invalid |  -  |
|**403** | Application limit reached - organisation has reached the maximum number of allowed applications |  -  |

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

[BearerAuth](../README.md#BearerAuth)

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

[BearerAuth](../README.md#BearerAuth)

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

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The container registry login credentials |  -  |

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
let metadata: { [key: string]: string; }; //Filter by metadata, e.g. metadata[team]=web. Exact, case-sensitive match; multiple pairs are ANDed. (optional) (default to undefined)

const { status, data } = await apiInstance.listApplications(
    organisation,
    metadata
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] | The organisation ID | defaults to undefined|
| **metadata** | **{ [key: string]: string; }** | Filter by metadata, e.g. metadata[team]&#x3D;web. Exact, case-sensitive match; multiple pairs are ANDed. | (optional) defaults to undefined|


### Return type

**Array<Application>**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A list of applications |  -  |
|**422** | The metadata filter is not a map of strings |  -  |
|**503** | Metadata is temporarily unavailable, so a filtered list cannot be returned |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patchApplicationMetadata**
> ApplicationMetadataResponse patchApplicationMetadata(requestBody)

Sets the given keys and removes keys whose value is null. A request that breaks any rule is rejected whole.

### Example

```typescript
import {
    ApplicationsApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new ApplicationsApi(configuration);

let organisation: string; // (default to undefined)
let application: string; // (default to undefined)
let requestBody: { [key: string]: string | null; }; //

const { status, data } = await apiInstance.patchApplicationMetadata(
    organisation,
    application,
    requestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestBody** | **{ [key: string]: string | null; }**|  | |
| **organisation** | [**string**] |  | defaults to undefined|
| **application** | [**string**] |  | defaults to undefined|


### Return type

**ApplicationMetadataResponse**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The resulting metadata |  -  |
|**400** | Invalid metadata |  -  |
|**404** | The application was not found |  -  |
|**409** | The write conflicts with the current metadata |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putApplicationMetadata**
> ApplicationMetadataResponse putApplicationMetadata(requestBody)

Replaces the whole metadata set. An empty object removes all metadata.

### Example

```typescript
import {
    ApplicationsApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new ApplicationsApi(configuration);

let organisation: string; // (default to undefined)
let application: string; // (default to undefined)
let requestBody: { [key: string]: string; }; //

const { status, data } = await apiInstance.putApplicationMetadata(
    organisation,
    application,
    requestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestBody** | **{ [key: string]: string; }**|  | |
| **organisation** | [**string**] |  | defaults to undefined|
| **application** | [**string**] |  | defaults to undefined|


### Return type

**ApplicationMetadataResponse**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The resulting metadata |  -  |
|**400** | Invalid metadata |  -  |
|**404** | The application was not found |  -  |
|**409** | The write conflicts with the current metadata |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

