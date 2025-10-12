# VariablesApi

All URIs are relative to *https://dashboard.quantcdn.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteEnvironmentVariable**](#deleteenvironmentvariable) | **DELETE** /api/v3/organisations/{api_organisation}/applications/{api_application}/environments/{api_environment}/variables/{api_variable} | Delete a variable|
|[**listEnvironmentVariables**](#listenvironmentvariables) | **GET** /api/v3/organisations/{api_organisation}/applications/{api_application}/environments/{api_environment}/variables | Get all variables for an environment|
|[**updateEnvironmentVariable**](#updateenvironmentvariable) | **PUT** /api/v3/organisations/{api_organisation}/applications/{api_application}/environments/{api_environment}/variables/{api_variable} | Update a variable|

# **deleteEnvironmentVariable**
> deleteEnvironmentVariable()


### Example

```typescript
import {
    VariablesApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new VariablesApi(configuration);

let apiOrganisation: string; //The organisation ID (default to undefined)
let apiApplication: string; //The application ID (default to undefined)
let apiEnvironment: string; //The environment ID (default to undefined)
let apiVariable: string; //The variable key (default to undefined)

const { status, data } = await apiInstance.deleteEnvironmentVariable(
    apiOrganisation,
    apiApplication,
    apiEnvironment,
    apiVariable
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **apiOrganisation** | [**string**] | The organisation ID | defaults to undefined|
| **apiApplication** | [**string**] | The application ID | defaults to undefined|
| **apiEnvironment** | [**string**] | The environment ID | defaults to undefined|
| **apiVariable** | [**string**] | The variable key | defaults to undefined|


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
|**204** | The variable deleted |  -  |
|**404** | The variable not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listEnvironmentVariables**
> listEnvironmentVariables()


### Example

```typescript
import {
    VariablesApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new VariablesApi(configuration);

let apiOrganisation: string; //The organisation ID (default to undefined)
let apiApplication: string; //The application ID (default to undefined)
let apiEnvironment: string; //The environment ID (default to undefined)

const { status, data } = await apiInstance.listEnvironmentVariables(
    apiOrganisation,
    apiApplication,
    apiEnvironment
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **apiOrganisation** | [**string**] | The organisation ID | defaults to undefined|
| **apiApplication** | [**string**] | The application ID | defaults to undefined|
| **apiEnvironment** | [**string**] | The environment ID | defaults to undefined|


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
|**200** | A list of variables |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateEnvironmentVariable**
> updateEnvironmentVariable(updateEnvironmentVariableRequest)


### Example

```typescript
import {
    VariablesApi,
    Configuration,
    UpdateEnvironmentVariableRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new VariablesApi(configuration);

let apiOrganisation: string; //The organisation ID (default to undefined)
let apiApplication: string; //The application ID (default to undefined)
let apiEnvironment: string; //The environment ID (default to undefined)
let apiVariable: string; //The variable key (default to undefined)
let updateEnvironmentVariableRequest: UpdateEnvironmentVariableRequest; //

const { status, data } = await apiInstance.updateEnvironmentVariable(
    apiOrganisation,
    apiApplication,
    apiEnvironment,
    apiVariable,
    updateEnvironmentVariableRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateEnvironmentVariableRequest** | **UpdateEnvironmentVariableRequest**|  | |
| **apiOrganisation** | [**string**] | The organisation ID | defaults to undefined|
| **apiApplication** | [**string**] | The application ID | defaults to undefined|
| **apiEnvironment** | [**string**] | The environment ID | defaults to undefined|
| **apiVariable** | [**string**] | The variable key | defaults to undefined|


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The variable updated |  -  |
|**404** | The variable not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

