# IdleSleepApi

All URIs are relative to *https://dashboard.quantcdn.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getIdleSleep**](#getidlesleep) | **GET** /api/v3/organizations/{organisation}/applications/{application}/environments/{environment}/idle-sleep | Get Idle Sleep Setting|
|[**setIdleSleep**](#setidlesleep) | **PUT** /api/v3/organizations/{organisation}/applications/{application}/environments/{environment}/idle-sleep | Set Idle Sleep Setting|

# **getIdleSleep**
> IdleSleepResponse getIdleSleep()

Retrieves the idle sleep setting and the current sleep state for the environment.

### Example

```typescript
import {
    IdleSleepApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new IdleSleepApi(configuration);

let organisation: string; // (default to undefined)
let application: string; // (default to undefined)
let environment: string; // (default to undefined)

const { status, data } = await apiInstance.getIdleSleep(
    organisation,
    application,
    environment
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] |  | defaults to undefined|
| **application** | [**string**] |  | defaults to undefined|
| **environment** | [**string**] |  | defaults to undefined|


### Return type

**IdleSleepResponse**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Idle sleep setting and state. |  -  |
|**403** | The caller lacks the required permission or token scope. |  -  |
|**404** | Organisation, application or environment not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **setIdleSleep**
> IdleSleepResponse setIdleSleep(setIdleSleepRequest)

Enable or disable idle sleep. Only Fargate compute sleeps. Disabling a sleeping environment wakes it first; a 202 means it is still waking.

### Example

```typescript
import {
    IdleSleepApi,
    Configuration,
    SetIdleSleepRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new IdleSleepApi(configuration);

let organisation: string; // (default to undefined)
let application: string; // (default to undefined)
let environment: string; // (default to undefined)
let setIdleSleepRequest: SetIdleSleepRequest; //

const { status, data } = await apiInstance.setIdleSleep(
    organisation,
    application,
    environment,
    setIdleSleepRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **setIdleSleepRequest** | **SetIdleSleepRequest**|  | |
| **organisation** | [**string**] |  | defaults to undefined|
| **application** | [**string**] |  | defaults to undefined|
| **environment** | [**string**] |  | defaults to undefined|


### Return type

**IdleSleepResponse**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Applied. |  -  |
|**202** | Applied; environment still waking. |  -  |
|**400** | The environment cannot use idle sleep. It runs on EC2 rather than Fargate, it has no web service, or its hostname is too long to route while asleep. |  -  |
|**403** | The caller lacks the required permission or token scope. |  -  |
|**404** | Organisation, application or environment not found. |  -  |
|**422** | Validation failed. idleMinutes must be an integer from 10 to 1440. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

