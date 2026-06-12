# ScalingPolicyApi

All URIs are relative to *https://dashboard.quantcdn.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteScalingPolicy**](#deletescalingpolicy) | **DELETE** /api/v3/organizations/{organisation}/applications/{application}/environments/{environment}/scaling-policies | Delete Scaling Policy|
|[**listScalingPolicies**](#listscalingpolicies) | **GET** /api/v3/organizations/{organisation}/applications/{application}/environments/{environment}/scaling-policies | List Scaling Policies|
|[**upsertScalingPolicy**](#upsertscalingpolicy) | **PUT** /api/v3/organizations/{organisation}/applications/{application}/environments/{environment}/scaling-policies | Upsert Scaling Policy|

# **deleteScalingPolicy**
> deleteScalingPolicy()

Deletes a specific scaling policy for the environment. Specify the metric type or policy name to delete a single policy. If neither is provided, all policies will be deleted.

### Example

```typescript
import {
    ScalingPolicyApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new ScalingPolicyApi(configuration);

let organisation: string; // (default to undefined)
let application: string; // (default to undefined)
let environment: string; // (default to undefined)
let metric: 'CPUUtilization' | 'MemoryUtilization' | 'RPS'; //Optional. Delete by metric type. (optional) (default to undefined)
let policyName: string; //Optional. Delete by exact policy name. (optional) (default to undefined)

const { status, data } = await apiInstance.deleteScalingPolicy(
    organisation,
    application,
    environment,
    metric,
    policyName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] |  | defaults to undefined|
| **application** | [**string**] |  | defaults to undefined|
| **environment** | [**string**] |  | defaults to undefined|
| **metric** | [**&#39;CPUUtilization&#39; | &#39;MemoryUtilization&#39; | &#39;RPS&#39;**]**Array<&#39;CPUUtilization&#39; &#124; &#39;MemoryUtilization&#39; &#124; &#39;RPS&#39;>** | Optional. Delete by metric type. | (optional) defaults to undefined|
| **policyName** | [**string**] | Optional. Delete by exact policy name. | (optional) defaults to undefined|


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
|**204** | Scaling policy deleted successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listScalingPolicies**
> ScalingPolicyListResponse listScalingPolicies()

Retrieves all active target tracking scaling policies for the environment. Returns an array of policies, each with its metric, target value, cooldowns, and resource label (if applicable).

### Example

```typescript
import {
    ScalingPolicyApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new ScalingPolicyApi(configuration);

let organisation: string; // (default to undefined)
let application: string; // (default to undefined)
let environment: string; // (default to undefined)
let metric: 'CPUUtilization' | 'MemoryUtilization' | 'RPS'; //Optional. Filter policies by metric type. (optional) (default to undefined)
let policyName: string; //Optional. Filter policies by exact policy name. (optional) (default to undefined)

const { status, data } = await apiInstance.listScalingPolicies(
    organisation,
    application,
    environment,
    metric,
    policyName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] |  | defaults to undefined|
| **application** | [**string**] |  | defaults to undefined|
| **environment** | [**string**] |  | defaults to undefined|
| **metric** | [**&#39;CPUUtilization&#39; | &#39;MemoryUtilization&#39; | &#39;RPS&#39;**]**Array<&#39;CPUUtilization&#39; &#124; &#39;MemoryUtilization&#39; &#124; &#39;RPS&#39;>** | Optional. Filter policies by metric type. | (optional) defaults to undefined|
| **policyName** | [**string**] | Optional. Filter policies by exact policy name. | (optional) defaults to undefined|


### Return type

**ScalingPolicyListResponse**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of scaling policies for the environment. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **upsertScalingPolicy**
> GetScalingPolicyResponse upsertScalingPolicy(setScalingPolicyRequest)

Creates or updates a target tracking scaling policy for the environment. Specify the metric type and target value. If a policy with the same metric or name exists, it will be updated. Optionally, provide a custom policy name via query.

### Example

```typescript
import {
    ScalingPolicyApi,
    Configuration,
    SetScalingPolicyRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new ScalingPolicyApi(configuration);

let organisation: string; // (default to undefined)
let application: string; // (default to undefined)
let environment: string; // (default to undefined)
let setScalingPolicyRequest: SetScalingPolicyRequest; //
let policyName: string; //Optional. Specify a custom policy name to upsert. (optional) (default to undefined)

const { status, data } = await apiInstance.upsertScalingPolicy(
    organisation,
    application,
    environment,
    setScalingPolicyRequest,
    policyName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **setScalingPolicyRequest** | **SetScalingPolicyRequest**|  | |
| **organisation** | [**string**] |  | defaults to undefined|
| **application** | [**string**] |  | defaults to undefined|
| **environment** | [**string**] |  | defaults to undefined|
| **policyName** | [**string**] | Optional. Specify a custom policy name to upsert. | (optional) defaults to undefined|


### Return type

**GetScalingPolicyResponse**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Scaling policy created or updated successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

