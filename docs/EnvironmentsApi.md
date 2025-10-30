# EnvironmentsApi

All URIs are relative to *https://dashboard.quantcdn.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createEnvironment**](#createenvironment) | **POST** /api/v3/organizations/{organisation}/applications/{application}/environments | Create a new environment|
|[**deleteEnvironment**](#deleteenvironment) | **DELETE** /api/v3/organizations/{organisation}/applications/{application}/environments/{environment} | Delete an environment|
|[**getEnvironment**](#getenvironment) | **GET** /api/v3/organizations/{organisation}/applications/{application}/environments/{environment} | Get a single environment|
|[**getEnvironmentLogs**](#getenvironmentlogs) | **GET** /api/v3/organizations/{organisation}/applications/{application}/environments/{environment}/logs | Get the logs for an environment|
|[**getEnvironmentMetrics**](#getenvironmentmetrics) | **GET** /api/v3/organizations/{organisation}/applications/{application}/environments/{environment}/metrics | Get the metrics for an environment|
|[**listEnvironments**](#listenvironments) | **GET** /api/v3/organizations/{organisation}/applications/{application}/environments | Get all environments for an application|
|[**listSyncOperations**](#listsyncoperations) | **GET** /api/v3/organizations/{organisation}/applications/{application}/environments/{environment}/sync/{type} | List the sync operations for an environment|
|[**syncToEnvironment**](#synctoenvironment) | **POST** /api/v3/organizations/{organisation}/applications/{application}/environments/{environment}/sync/{type} | Perform a sync operation from a source environment to the current environment|
|[**updateEnvironment**](#updateenvironment) | **PUT** /api/v3/organizations/{organisation}/applications/{application}/environments/{environment} | Update Environment Compose Definition|
|[**updateEnvironmentState**](#updateenvironmentstate) | **PUT** /api/v3/organizations/{organisation}/applications/{application}/environments/{environment}/state | Update the state of an environment|

# **createEnvironment**
> Environment createEnvironment(createEnvironmentRequest)


### Example

```typescript
import {
    EnvironmentsApi,
    Configuration,
    CreateEnvironmentRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new EnvironmentsApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let application: string; //The application ID (default to undefined)
let createEnvironmentRequest: CreateEnvironmentRequest; //

const { status, data } = await apiInstance.createEnvironment(
    organisation,
    application,
    createEnvironmentRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createEnvironmentRequest** | **CreateEnvironmentRequest**|  | |
| **organisation** | [**string**] | The organisation ID | defaults to undefined|
| **application** | [**string**] | The application ID | defaults to undefined|


### Return type

**Environment**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | The environment created |  -  |
|**400** | The environment data is invalid |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteEnvironment**
> deleteEnvironment()


### Example

```typescript
import {
    EnvironmentsApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new EnvironmentsApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let application: string; //The application ID (default to undefined)
let environment: string; //The environment ID (default to undefined)

const { status, data } = await apiInstance.deleteEnvironment(
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
|**204** | The environment deleted |  -  |
|**404** | The environment not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getEnvironment**
> Environment getEnvironment()


### Example

```typescript
import {
    EnvironmentsApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new EnvironmentsApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let application: string; //The application ID (default to undefined)
let environment: string; //The environment ID (default to undefined)

const { status, data } = await apiInstance.getEnvironment(
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

**Environment**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The environment |  -  |
|**404** | The environment not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getEnvironmentLogs**
> GetEnvironmentLogs200Response getEnvironmentLogs()

Retrieves logs from CloudWatch for the specified environment with optional filtering by time range, container, and pattern matching. Supports pagination via nextToken.

### Example

```typescript
import {
    EnvironmentsApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new EnvironmentsApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let application: string; //The application ID (default to undefined)
let environment: string; //The environment ID (default to undefined)
let startTime: string; //Start time for log retrieval (ISO 8601 format or Unix timestamp) (optional) (default to undefined)
let endTime: string; //End time for log retrieval (ISO 8601 format or Unix timestamp) (optional) (default to undefined)
let containerName: string; //Filter logs by specific container name (optional) (default to undefined)
let filterPattern: string; //CloudWatch Logs filter pattern for searching log content (optional) (default to undefined)
let limit: number; //Maximum number of log entries to return per page (optional) (default to undefined)
let nextToken: string; //Pagination token from previous response for retrieving next page of results (optional) (default to undefined)

const { status, data } = await apiInstance.getEnvironmentLogs(
    organisation,
    application,
    environment,
    startTime,
    endTime,
    containerName,
    filterPattern,
    limit,
    nextToken
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] | The organisation ID | defaults to undefined|
| **application** | [**string**] | The application ID | defaults to undefined|
| **environment** | [**string**] | The environment ID | defaults to undefined|
| **startTime** | [**string**] | Start time for log retrieval (ISO 8601 format or Unix timestamp) | (optional) defaults to undefined|
| **endTime** | [**string**] | End time for log retrieval (ISO 8601 format or Unix timestamp) | (optional) defaults to undefined|
| **containerName** | [**string**] | Filter logs by specific container name | (optional) defaults to undefined|
| **filterPattern** | [**string**] | CloudWatch Logs filter pattern for searching log content | (optional) defaults to undefined|
| **limit** | [**number**] | Maximum number of log entries to return per page | (optional) defaults to undefined|
| **nextToken** | [**string**] | Pagination token from previous response for retrieving next page of results | (optional) defaults to undefined|


### Return type

**GetEnvironmentLogs200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The logs |  -  |
|**404** | The environment not found |  -  |
|**422** | Validation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getEnvironmentMetrics**
> object getEnvironmentMetrics()

Retrieves CloudWatch metrics for the specified environment with optional filtering by time range, container, and metric configuration.

### Example

```typescript
import {
    EnvironmentsApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new EnvironmentsApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let application: string; //The application ID (default to undefined)
let environment: string; //The environment ID (default to undefined)
let startTime: number; //Start time for metrics retrieval (Unix timestamp in milliseconds) (optional) (default to undefined)
let endTime: number; //End time for metrics retrieval (Unix timestamp in milliseconds) (optional) (default to undefined)
let period: number; //Period in seconds for metric aggregation (e.g., 60 for 1 minute, 300 for 5 minutes) (optional) (default to undefined)
let statistics: string; //Comma-separated list of CloudWatch statistics (e.g., Average, Maximum, Minimum, Sum, SampleCount) (optional) (default to undefined)
let containerName: string; //Filter metrics by specific container name (optional) (default to undefined)

const { status, data } = await apiInstance.getEnvironmentMetrics(
    organisation,
    application,
    environment,
    startTime,
    endTime,
    period,
    statistics,
    containerName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] | The organisation ID | defaults to undefined|
| **application** | [**string**] | The application ID | defaults to undefined|
| **environment** | [**string**] | The environment ID | defaults to undefined|
| **startTime** | [**number**] | Start time for metrics retrieval (Unix timestamp in milliseconds) | (optional) defaults to undefined|
| **endTime** | [**number**] | End time for metrics retrieval (Unix timestamp in milliseconds) | (optional) defaults to undefined|
| **period** | [**number**] | Period in seconds for metric aggregation (e.g., 60 for 1 minute, 300 for 5 minutes) | (optional) defaults to undefined|
| **statistics** | [**string**] | Comma-separated list of CloudWatch statistics (e.g., Average, Maximum, Minimum, Sum, SampleCount) | (optional) defaults to undefined|
| **containerName** | [**string**] | Filter metrics by specific container name | (optional) defaults to undefined|


### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The metrics |  -  |
|**404** | The environment not found |  -  |
|**422** | Validation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listEnvironments**
> Array<Environment> listEnvironments()


### Example

```typescript
import {
    EnvironmentsApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new EnvironmentsApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let application: string; //The application ID (default to undefined)

const { status, data } = await apiInstance.listEnvironments(
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

**Array<Environment>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The environments |  -  |
|**404** | The organisation or application not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listSyncOperations**
> Array<SyncOperation> listSyncOperations()


### Example

```typescript
import {
    EnvironmentsApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new EnvironmentsApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let application: string; //The application ID (default to undefined)
let environment: string; //The environment ID (default to undefined)
let type: 'database' | 'filesystem'; //The sync type (default to undefined)

const { status, data } = await apiInstance.listSyncOperations(
    organisation,
    application,
    environment,
    type
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] | The organisation ID | defaults to undefined|
| **application** | [**string**] | The application ID | defaults to undefined|
| **environment** | [**string**] | The environment ID | defaults to undefined|
| **type** | [**&#39;database&#39; | &#39;filesystem&#39;**]**Array<&#39;database&#39; &#124; &#39;filesystem&#39;>** | The sync type | defaults to undefined|


### Return type

**Array<SyncOperation>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The sync operations |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **syncToEnvironment**
> SyncOperation syncToEnvironment(syncToEnvironmentRequest)


### Example

```typescript
import {
    EnvironmentsApi,
    Configuration,
    SyncToEnvironmentRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new EnvironmentsApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let application: string; //The application ID (default to undefined)
let environment: string; //The environment ID (default to undefined)
let type: 'database' | 'filesystem'; //The sync type (default to undefined)
let syncToEnvironmentRequest: SyncToEnvironmentRequest; //

const { status, data } = await apiInstance.syncToEnvironment(
    organisation,
    application,
    environment,
    type,
    syncToEnvironmentRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **syncToEnvironmentRequest** | **SyncToEnvironmentRequest**|  | |
| **organisation** | [**string**] | The organisation ID | defaults to undefined|
| **application** | [**string**] | The application ID | defaults to undefined|
| **environment** | [**string**] | The environment ID | defaults to undefined|
| **type** | [**&#39;database&#39; | &#39;filesystem&#39;**]**Array<&#39;database&#39; &#124; &#39;filesystem&#39;>** | The sync type | defaults to undefined|


### Return type

**SyncOperation**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The sync operation details |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateEnvironment**
> updateEnvironment(updateEnvironmentRequest)

Replaces the entire task definition for the environment based on the provided multi-container compose definition. This will create a new task definition revision and update the ECS service, triggering a redeployment. Optionally accepts minCapacity and maxCapacity at the root level for convenience.

### Example

```typescript
import {
    EnvironmentsApi,
    Configuration,
    UpdateEnvironmentRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new EnvironmentsApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let application: string; //The application ID (default to undefined)
let environment: string; //The environment ID (default to undefined)
let updateEnvironmentRequest: UpdateEnvironmentRequest; //

const { status, data } = await apiInstance.updateEnvironment(
    organisation,
    application,
    environment,
    updateEnvironmentRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateEnvironmentRequest** | **UpdateEnvironmentRequest**|  | |
| **organisation** | [**string**] | The organisation ID | defaults to undefined|
| **application** | [**string**] | The application ID | defaults to undefined|
| **environment** | [**string**] | The environment ID | defaults to undefined|


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**202** | Request accepted, compose definition update is processing. |  -  |
|**400** | Invalid compose definition or validation failed. |  -  |
|**404** | Application or environment not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateEnvironmentState**
> updateEnvironmentState(updateEnvironmentStateRequest)


### Example

```typescript
import {
    EnvironmentsApi,
    Configuration,
    UpdateEnvironmentStateRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new EnvironmentsApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let application: string; //The application ID (default to undefined)
let environment: string; //The environment ID (default to undefined)
let updateEnvironmentStateRequest: UpdateEnvironmentStateRequest; //

const { status, data } = await apiInstance.updateEnvironmentState(
    organisation,
    application,
    environment,
    updateEnvironmentStateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateEnvironmentStateRequest** | **UpdateEnvironmentStateRequest**|  | |
| **organisation** | [**string**] | The organisation ID | defaults to undefined|
| **application** | [**string**] | The application ID | defaults to undefined|
| **environment** | [**string**] | The environment ID | defaults to undefined|


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
|**204** | The environment state updated |  -  |
|**400** | The environment data is invalid |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

