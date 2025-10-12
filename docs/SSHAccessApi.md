# SSHAccessApi

All URIs are relative to *https://dashboard.quantcdn.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getSshAccessCredentials**](#getsshaccesscredentials) | **GET** /api/v3/organisations/{organisation}/applications/{application}/environments/{environment}/ssh-access | Get SSH access credentials for an environment|

# **getSshAccessCredentials**
> GetSshAccessCredentials200Response getSshAccessCredentials()


### Example

```typescript
import {
    SSHAccessApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new SSHAccessApi(configuration);

let organisation: string; //The organisation machine name (default to undefined)
let application: string; //The application name (default to undefined)
let environment: string; //The environment name (default to undefined)

const { status, data } = await apiInstance.getSshAccessCredentials(
    organisation,
    application,
    environment
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] | The organisation machine name | defaults to undefined|
| **application** | [**string**] | The application name | defaults to undefined|
| **environment** | [**string**] | The environment name | defaults to undefined|


### Return type

**GetSshAccessCredentials200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | SSH access credentials |  -  |
|**403** | Insufficient permissions |  -  |
|**404** | Environment not found |  -  |
|**500** | Failed to generate SSH access credentials |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

