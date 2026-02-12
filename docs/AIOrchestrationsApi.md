# AIOrchestrationsApi

All URIs are relative to *https://dashboard.quantcdn.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**cancelOrchestration**](#cancelorchestration) | **POST** /api/v3/organizations/{organisation}/ai/orchestrations/{orchestrationId}/cancel | Cancel Durable Orchestration|
|[**createOrchestration**](#createorchestration) | **POST** /api/v3/organizations/{organisation}/ai/orchestrations | Create Durable Orchestration|
|[**deleteOrchestration**](#deleteorchestration) | **DELETE** /api/v3/organizations/{organisation}/ai/orchestrations/{orchestrationId} | Delete Durable Orchestration|
|[**getOrchestration**](#getorchestration) | **GET** /api/v3/organizations/{organisation}/ai/orchestrations/{orchestrationId} | Get Durable Orchestration|
|[**listOrchestrationBatches**](#listorchestrationbatches) | **GET** /api/v3/organizations/{organisation}/ai/orchestrations/{orchestrationId}/batches | List Orchestration Batches|
|[**listOrchestrations**](#listorchestrations) | **GET** /api/v3/organizations/{organisation}/ai/orchestrations | List Durable Orchestrations|
|[**pauseOrchestration**](#pauseorchestration) | **POST** /api/v3/organizations/{organisation}/ai/orchestrations/{orchestrationId}/pause | Pause Durable Orchestration|
|[**resumeOrchestration**](#resumeorchestration) | **POST** /api/v3/organizations/{organisation}/ai/orchestrations/{orchestrationId}/resume | Resume Durable Orchestration|
|[**startOrchestration**](#startorchestration) | **POST** /api/v3/organizations/{organisation}/ai/orchestrations/{orchestrationId}/start | Start Durable Orchestration|

# **cancelOrchestration**
> object cancelOrchestration()

Cancel an orchestration permanently. Cannot be resumed. Any in-progress items will complete, but no new processing starts.

### Example

```typescript
import {
    AIOrchestrationsApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AIOrchestrationsApi(configuration);

let organisation: string; //The organisation machine name (default to undefined)
let orchestrationId: string; //Orchestration identifier (default to undefined)

const { status, data } = await apiInstance.cancelOrchestration(
    organisation,
    orchestrationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] | The organisation machine name | defaults to undefined|
| **orchestrationId** | [**string**] | Orchestration identifier | defaults to undefined|


### Return type

**object**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Orchestration cancelled |  -  |
|**400** | Orchestration already completed/cancelled |  -  |
|**403** | Access denied |  -  |
|**404** | Orchestration not found |  -  |
|**500** | Failed to cancel orchestration |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createOrchestration**
> object createOrchestration(createOrchestrationRequest)

Create a new durable orchestration for batch processing.      *      * **Input Sources:**      * - `static`: Process a fixed list of items      * - `task_query`: Process tasks matching a query      * - `generator`: AI generates items from a prompt      *      * **Stop Conditions:**      * - `all_complete`: Stop when all items processed      * - `max_iterations`: Stop after N iterations      * - `condition`: AI evaluates a prompt to decide      * - `manual`: Run until manually stopped      *      * **Auto-start:**      * By default, the orchestration starts immediately. Set `autoStart: false` to create in pending state.

### Example

```typescript
import {
    AIOrchestrationsApi,
    Configuration,
    CreateOrchestrationRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AIOrchestrationsApi(configuration);

let organisation: string; //The organisation machine name (default to undefined)
let createOrchestrationRequest: CreateOrchestrationRequest; //

const { status, data } = await apiInstance.createOrchestration(
    organisation,
    createOrchestrationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createOrchestrationRequest** | **CreateOrchestrationRequest**|  | |
| **organisation** | [**string**] | The organisation machine name | defaults to undefined|


### Return type

**object**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Orchestration created |  -  |
|**400** | Invalid request |  -  |
|**403** | Access denied |  -  |
|**500** | Failed to create orchestration |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteOrchestration**
> deleteOrchestration()

Delete an orchestration. Can only delete orchestrations in completed, failed, or cancelled status.

### Example

```typescript
import {
    AIOrchestrationsApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AIOrchestrationsApi(configuration);

let organisation: string; //The organisation machine name (default to undefined)
let orchestrationId: string; //Orchestration identifier (default to undefined)

const { status, data } = await apiInstance.deleteOrchestration(
    organisation,
    orchestrationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] | The organisation machine name | defaults to undefined|
| **orchestrationId** | [**string**] | Orchestration identifier | defaults to undefined|


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
|**204** | Orchestration deleted |  -  |
|**400** | Cannot delete active orchestration |  -  |
|**403** | Access denied |  -  |
|**404** | Orchestration not found |  -  |
|**500** | Failed to delete orchestration |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getOrchestration**
> object getOrchestration()

Get orchestration details including status and progress.      *      * **Progress Tracking:**      * - `total`: Total items to process      * - `completed`: Successfully processed      * - `failed`: Failed processing      * - `pending`: Awaiting processing

### Example

```typescript
import {
    AIOrchestrationsApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AIOrchestrationsApi(configuration);

let organisation: string; //The organisation machine name (default to undefined)
let orchestrationId: string; //Orchestration identifier (default to undefined)

const { status, data } = await apiInstance.getOrchestration(
    organisation,
    orchestrationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] | The organisation machine name | defaults to undefined|
| **orchestrationId** | [**string**] | Orchestration identifier | defaults to undefined|


### Return type

**object**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Orchestration details |  -  |
|**403** | Access denied |  -  |
|**404** | Orchestration not found |  -  |
|**500** | Failed to get orchestration |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listOrchestrationBatches**
> ListOrchestrationBatches200Response listOrchestrationBatches()

Get history of batches processed by this orchestration. Returns paginated batch records with status and item counts.

### Example

```typescript
import {
    AIOrchestrationsApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AIOrchestrationsApi(configuration);

let organisation: string; //The organisation machine name (default to undefined)
let orchestrationId: string; //Orchestration identifier (default to undefined)
let limit: number; //Maximum number of batches to return (optional) (default to 20)
let cursor: string; //Pagination cursor from previous response (optional) (default to undefined)

const { status, data } = await apiInstance.listOrchestrationBatches(
    organisation,
    orchestrationId,
    limit,
    cursor
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] | The organisation machine name | defaults to undefined|
| **orchestrationId** | [**string**] | Orchestration identifier | defaults to undefined|
| **limit** | [**number**] | Maximum number of batches to return | (optional) defaults to 20|
| **cursor** | [**string**] | Pagination cursor from previous response | (optional) defaults to undefined|


### Return type

**ListOrchestrationBatches200Response**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Batch history |  -  |
|**403** | Access denied |  -  |
|**404** | Orchestration not found |  -  |
|**500** | Failed to list orchestration batches |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listOrchestrations**
> ListOrchestrations200Response listOrchestrations()

List durable orchestrations for an organization with optional filtering.      *      * **Note:** This is different from `/tools/orchestrations` which handles async tool execution      * polling. These durable orchestrations are for long-running batch processing loops.      *      * **Filter Options:**      * - `status`: Filter by orchestration status      * - `limit`: Max results (default 20, max 100)      * - `cursor`: Pagination cursor

### Example

```typescript
import {
    AIOrchestrationsApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AIOrchestrationsApi(configuration);

let organisation: string; //The organisation machine name (default to undefined)
let status: 'pending' | 'running' | 'paused' | 'completed' | 'failed' | 'cancelled'; //Filter by orchestration status (optional) (default to undefined)
let limit: number; //Maximum number of results (optional) (default to 20)
let cursor: string; //Pagination cursor from previous response (optional) (default to undefined)

const { status, data } = await apiInstance.listOrchestrations(
    organisation,
    status,
    limit,
    cursor
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] | The organisation machine name | defaults to undefined|
| **status** | [**&#39;pending&#39; | &#39;running&#39; | &#39;paused&#39; | &#39;completed&#39; | &#39;failed&#39; | &#39;cancelled&#39;**]**Array<&#39;pending&#39; &#124; &#39;running&#39; &#124; &#39;paused&#39; &#124; &#39;completed&#39; &#124; &#39;failed&#39; &#124; &#39;cancelled&#39;>** | Filter by orchestration status | (optional) defaults to undefined|
| **limit** | [**number**] | Maximum number of results | (optional) defaults to 20|
| **cursor** | [**string**] | Pagination cursor from previous response | (optional) defaults to undefined|


### Return type

**ListOrchestrations200Response**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of orchestrations |  -  |
|**403** | Access denied |  -  |
|**500** | Failed to list orchestrations |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **pauseOrchestration**
> object pauseOrchestration()

Pause a running orchestration. The current batch will complete, but no new batches will start. Can be resumed later.

### Example

```typescript
import {
    AIOrchestrationsApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AIOrchestrationsApi(configuration);

let organisation: string; //The organisation machine name (default to undefined)
let orchestrationId: string; //Orchestration identifier (default to undefined)

const { status, data } = await apiInstance.pauseOrchestration(
    organisation,
    orchestrationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] | The organisation machine name | defaults to undefined|
| **orchestrationId** | [**string**] | Orchestration identifier | defaults to undefined|


### Return type

**object**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Orchestration paused |  -  |
|**400** | Orchestration not running |  -  |
|**403** | Access denied |  -  |
|**404** | Orchestration not found |  -  |
|**500** | Failed to pause orchestration |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resumeOrchestration**
> object resumeOrchestration()

Resume a paused orchestration. Processing continues from where it left off.

### Example

```typescript
import {
    AIOrchestrationsApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AIOrchestrationsApi(configuration);

let organisation: string; //The organisation machine name (default to undefined)
let orchestrationId: string; //Orchestration identifier (default to undefined)

const { status, data } = await apiInstance.resumeOrchestration(
    organisation,
    orchestrationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] | The organisation machine name | defaults to undefined|
| **orchestrationId** | [**string**] | Orchestration identifier | defaults to undefined|


### Return type

**object**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Orchestration resumed |  -  |
|**400** | Orchestration not paused |  -  |
|**403** | Access denied |  -  |
|**404** | Orchestration not found |  -  |
|**500** | Failed to resume orchestration |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **startOrchestration**
> object startOrchestration()

Start a pending orchestration. Only works on orchestrations created with `autoStart: false`.

### Example

```typescript
import {
    AIOrchestrationsApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AIOrchestrationsApi(configuration);

let organisation: string; //The organisation machine name (default to undefined)
let orchestrationId: string; //Orchestration identifier (default to undefined)

const { status, data } = await apiInstance.startOrchestration(
    organisation,
    orchestrationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] | The organisation machine name | defaults to undefined|
| **orchestrationId** | [**string**] | Orchestration identifier | defaults to undefined|


### Return type

**object**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Orchestration started |  -  |
|**400** | Orchestration not in pending state |  -  |
|**403** | Access denied |  -  |
|**404** | Orchestration not found |  -  |
|**500** | Failed to start orchestration |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

