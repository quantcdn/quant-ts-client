# ScalingPolicyApi

All URIs are relative to *https://dashboard.quantcdn.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteScalingPolicy**](#deletescalingpolicy) | **DELETE** /api/v3/organisations/{organisation}/applications/{application}/environments/{environment}/scaling-policies/{policyName} | Delete the scaling policy for an environment|
|[**getScalingPolicies**](#getscalingpolicies) | **GET** /api/v3/organisations/{organisation}/applications/{application}/environments/{environment}/scaling-policies | Get the scaling policies for an environment|
|[**updateScalingPolicy**](#updatescalingpolicy) | **PUT** /api/v3/organisations/{organisation}/applications/{application}/environments/{environment}/scaling-policies | Update the scaling policy for an environment|

# **deleteScalingPolicy**
> deleteScalingPolicy()


### Example

```typescript
import {
    ScalingPolicyApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new ScalingPolicyApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let application: string; //The application ID (default to undefined)
let environment: string; //The environment ID (default to undefined)
let policyName: string; //The policy name (default to undefined)

const { status, data } = await apiInstance.deleteScalingPolicy(
    organisation,
    application,
    environment,
    policyName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] | The organisation ID | defaults to undefined|
| **application** | [**string**] | The application ID | defaults to undefined|
| **environment** | [**string**] | The environment ID | defaults to undefined|
| **policyName** | [**string**] | The policy name | defaults to undefined|


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
|**204** | The scaling policy for the environment |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getScalingPolicies**
> getScalingPolicies()


### Example

```typescript
import {
    ScalingPolicyApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new ScalingPolicyApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let application: string; //The application ID (default to undefined)
let environment: string; //The environment ID (default to undefined)

const { status, data } = await apiInstance.getScalingPolicies(
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
|**200** | The scaling policy for the environment |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateScalingPolicy**
> updateScalingPolicy(scalingPolicy)


### Example

```typescript
import {
    ScalingPolicyApi,
    Configuration,
    ScalingPolicy
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new ScalingPolicyApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let application: string; //The application ID (default to undefined)
let environment: string; //The environment ID (default to undefined)
let scalingPolicy: ScalingPolicy; //

const { status, data } = await apiInstance.updateScalingPolicy(
    organisation,
    application,
    environment,
    scalingPolicy
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **scalingPolicy** | **ScalingPolicy**|  | |
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
|**200** | The scaling policy for the environment |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

