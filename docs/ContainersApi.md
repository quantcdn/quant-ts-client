# ContainersApi

All URIs are relative to *https://dashboard.quantcdn.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**listContainers**](#listcontainers) | **GET** /api/v3/organizations/{organisation}/applications/{application}/environments/{environment}/containers | Get the containers in an environment|
|[**updateContainer**](#updatecontainer) | **PUT** /api/v3/organizations/{organisation}/applications/{application}/environments/{environment}/containers/{container} | Update a container in an environment|

# **listContainers**
> listContainers()


### Example

```typescript
import {
    ContainersApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new ContainersApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let application: string; //The application ID (default to undefined)
let environment: string; //The environment ID (default to undefined)

const { status, data } = await apiInstance.listContainers(
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

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The containers in the environment |  -  |
|**404** | The environment not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateContainer**
> updateContainer(container2)


### Example

```typescript
import {
    ContainersApi,
    Configuration,
    Container
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new ContainersApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let application: string; //The application ID (default to undefined)
let environment: string; //The environment ID (default to undefined)
let container: string; //The container ID (default to undefined)
let container2: Container; //

const { status, data } = await apiInstance.updateContainer(
    organisation,
    application,
    environment,
    container,
    container2
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **container2** | **Container**|  | |
| **organisation** | [**string**] | The organisation ID | defaults to undefined|
| **application** | [**string**] | The application ID | defaults to undefined|
| **environment** | [**string**] | The environment ID | defaults to undefined|
| **container** | [**string**] | The container ID | defaults to undefined|


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
|**200** | The updated container |  -  |
|**404** | The container not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

