# ComposeApi

All URIs are relative to *https://dashboard.quantcdn.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getEnvironmentCompose**](#getenvironmentcompose) | **GET** /api/v3/organisations/{organisation}/environments/{environment}/compose | Get the compose file for an environment|
|[**validateCompose**](#validatecompose) | **POST** /api/v3/organisations/{organisation}/compose/validate | Validate a compose file|

# **getEnvironmentCompose**
> Compose getEnvironmentCompose()


### Example

```typescript
import {
    ComposeApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new ComposeApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let application: string; //The application ID (default to undefined)
let environment: string; //The environment ID (default to undefined)

const { status, data } = await apiInstance.getEnvironmentCompose(
    organisation,
    application,
    environment
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] | The organisation ID | defaults to undefined|
| **application** | [**string**] | The application ID | defaults to undefined|
| **environment** | [**string**] | The environment ID | defaults to undefined|


### Return type

**Compose**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The compose file |  -  |
|**404** | The compose file not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **validateCompose**
> ValidateCompose200Response validateCompose(validateComposeRequest)


### Example

```typescript
import {
    ComposeApi,
    Configuration,
    ValidateComposeRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new ComposeApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let validateComposeRequest: ValidateComposeRequest; //

const { status, data } = await apiInstance.validateCompose(
    organisation,
    validateComposeRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **validateComposeRequest** | **ValidateComposeRequest**|  | |
| **organisation** | [**string**] | The organisation ID | defaults to undefined|


### Return type

**ValidateCompose200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The validated compose file |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

