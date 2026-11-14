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

[BearerAuth](../README.md#BearerAuth)

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
> Container updateContainer(container2)

Updates one container in the environment\'s compose definition and redeploys the environment. The fields in the request body replace the same fields of the container. Fields that the request body omits keep their current values. Other containers and the task-level settings do not change. To clear a field, send it as null. The container name in the body must match the name in the path: a container cannot be renamed. Container updates to one environment run one at a time. A compose change made at the same moment through another endpoint can still overwrite this update.

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
let container: string; //The container name (default to undefined)
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
| **container** | [**string**] | The container name | defaults to undefined|


### Return type

**Container**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The updated container. The environment redeploys in the background. |  -  |
|**400** | Quant Cloud refused the updated definition |  -  |
|**403** | Permission or token scope missing |  -  |
|**404** | The environment has no container with this name |  -  |
|**409** | Another container update for this environment is in progress |  -  |
|**422** | Invalid container definition, or the body name does not match the path name |  -  |
|**502** | Quant Cloud did not accept the request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

