# CronApi

All URIs are relative to *https://dashboard.quantcdn.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createCronJob**](#createcronjob) | **POST** /api/v3/organizations/{organisation}/applications/{application}/environments/{environment}/cron | Create a new cron job|
|[**deleteCronJob**](#deletecronjob) | **DELETE** /api/v3/organizations/{organisation}/applications/{application}/environments/{environment}/cron/{cron} | Delete a cron job|
|[**getCronJob**](#getcronjob) | **GET** /api/v3/organizations/{organisation}/applications/{application}/environments/{environment}/cron/{cron} | Get a cron job|
|[**getCronRun**](#getcronrun) | **GET** /api/v3/organizations/{organisation}/applications/{application}/environments/{environment}/cron/{cron}/runs/{run} | Get a cron run|
|[**listCronJobRuns**](#listcronjobruns) | **GET** /api/v3/organizations/{organisation}/applications/{application}/environments/{environment}/cron/{cron}/runs | Get all runs for a cron job|
|[**listCronJobs**](#listcronjobs) | **GET** /api/v3/organizations/{organisation}/applications/{application}/environments/{environment}/cron | Get all cron jobs for an environment|
|[**updateCronJob**](#updatecronjob) | **PATCH** /api/v3/organizations/{organisation}/applications/{application}/environments/{environment}/cron/{cron} | Update a cron job|

# **createCronJob**
> Cron createCronJob(createCronJobRequest)


### Example

```typescript
import {
    CronApi,
    Configuration,
    CreateCronJobRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new CronApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let application: string; //The application ID (default to undefined)
let environment: string; //The environment ID (default to undefined)
let createCronJobRequest: CreateCronJobRequest; //

const { status, data } = await apiInstance.createCronJob(
    organisation,
    application,
    environment,
    createCronJobRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createCronJobRequest** | **CreateCronJobRequest**|  | |
| **organisation** | [**string**] | The organisation ID | defaults to undefined|
| **application** | [**string**] | The application ID | defaults to undefined|
| **environment** | [**string**] | The environment ID | defaults to undefined|


### Return type

**Cron**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | The created cron job |  -  |
|**400** | The request is invalid |  -  |
|**422** | The request is invalid |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteCronJob**
> deleteCronJob()


### Example

```typescript
import {
    CronApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new CronApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let application: string; //The application ID (default to undefined)
let environment: string; //The environment ID (default to undefined)
let cron: string; //The cron job ID (default to undefined)

const { status, data } = await apiInstance.deleteCronJob(
    organisation,
    application,
    environment,
    cron
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] | The organisation ID | defaults to undefined|
| **application** | [**string**] | The application ID | defaults to undefined|
| **environment** | [**string**] | The environment ID | defaults to undefined|
| **cron** | [**string**] | The cron job ID | defaults to undefined|


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
|**204** | The cron job deleted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCronJob**
> Cron getCronJob()


### Example

```typescript
import {
    CronApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new CronApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let application: string; //The application ID (default to undefined)
let environment: string; //The environment ID (default to undefined)
let cron: string; //The cron job ID (default to undefined)

const { status, data } = await apiInstance.getCronJob(
    organisation,
    application,
    environment,
    cron
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] | The organisation ID | defaults to undefined|
| **application** | [**string**] | The application ID | defaults to undefined|
| **environment** | [**string**] | The environment ID | defaults to undefined|
| **cron** | [**string**] | The cron job ID | defaults to undefined|


### Return type

**Cron**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The cron job |  -  |
|**404** | The cron job not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCronRun**
> CronRun getCronRun()


### Example

```typescript
import {
    CronApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new CronApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let application: string; //The application ID (default to undefined)
let environment: string; //The environment ID (default to undefined)
let cron: string; //The cron job ID (default to undefined)
let run: string; //The cron run ID (default to undefined)

const { status, data } = await apiInstance.getCronRun(
    organisation,
    application,
    environment,
    cron,
    run
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] | The organisation ID | defaults to undefined|
| **application** | [**string**] | The application ID | defaults to undefined|
| **environment** | [**string**] | The environment ID | defaults to undefined|
| **cron** | [**string**] | The cron job ID | defaults to undefined|
| **run** | [**string**] | The cron run ID | defaults to undefined|


### Return type

**CronRun**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The cron run |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listCronJobRuns**
> Array<CronRun> listCronJobRuns()


### Example

```typescript
import {
    CronApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new CronApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let application: string; //The application ID (default to undefined)
let environment: string; //The environment ID (default to undefined)
let cron: string; //The cron job ID (default to undefined)

const { status, data } = await apiInstance.listCronJobRuns(
    organisation,
    application,
    environment,
    cron
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] | The organisation ID | defaults to undefined|
| **application** | [**string**] | The application ID | defaults to undefined|
| **environment** | [**string**] | The environment ID | defaults to undefined|
| **cron** | [**string**] | The cron job ID | defaults to undefined|


### Return type

**Array<CronRun>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The runs |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listCronJobs**
> Cron listCronJobs()


### Example

```typescript
import {
    CronApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new CronApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let application: string; //The application ID (default to undefined)
let environment: string; //The environment ID (default to undefined)

const { status, data } = await apiInstance.listCronJobs(
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

**Cron**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The cron jobs |  -  |
|**404** | The environment not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateCronJob**
> Cron updateCronJob(updateCronJobRequest)


### Example

```typescript
import {
    CronApi,
    Configuration,
    UpdateCronJobRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new CronApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let application: string; //The application ID (default to undefined)
let environment: string; //The environment ID (default to undefined)
let cron: string; //The cron job ID (default to undefined)
let updateCronJobRequest: UpdateCronJobRequest; //

const { status, data } = await apiInstance.updateCronJob(
    organisation,
    application,
    environment,
    cron,
    updateCronJobRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateCronJobRequest** | **UpdateCronJobRequest**|  | |
| **organisation** | [**string**] | The organisation ID | defaults to undefined|
| **application** | [**string**] | The application ID | defaults to undefined|
| **environment** | [**string**] | The environment ID | defaults to undefined|
| **cron** | [**string**] | The cron job ID | defaults to undefined|


### Return type

**Cron**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The updated cron job |  -  |
|**404** | The cron job not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

