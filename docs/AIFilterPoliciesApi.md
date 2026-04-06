# AIFilterPoliciesApi

All URIs are relative to *https://dashboard.quantcdn.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createFilterPolicy**](#createfilterpolicy) | **POST** /api/v3/organizations/{organisation}/ai/filter-policies | Create an AI filter policy for an organisation|
|[**deleteFilterPolicy**](#deletefilterpolicy) | **DELETE** /api/v3/organizations/{organisation}/ai/filter-policies/{policyId} | Delete a specific AI filter policy|
|[**disableFilterPolicy**](#disablefilterpolicy) | **PUT** /api/v3/organizations/{organisation}/ai/filter-policies/{policyId}/disable | Disable a specific AI filter policy|
|[**enableFilterPolicy**](#enablefilterpolicy) | **PUT** /api/v3/organizations/{organisation}/ai/filter-policies/{policyId}/enable | Enable a specific AI filter policy|
|[**getFilterPolicy**](#getfilterpolicy) | **GET** /api/v3/organizations/{organisation}/ai/filter-policies/{policyId} | Get a specific AI filter policy|
|[**listFilterPolicies**](#listfilterpolicies) | **GET** /api/v3/organizations/{organisation}/ai/filter-policies | List AI filter policies for an organisation|
|[**updateFilterPolicy**](#updatefilterpolicy) | **PUT** /api/v3/organizations/{organisation}/ai/filter-policies/{policyId} | Update a specific AI filter policy|

# **createFilterPolicy**
> object createFilterPolicy(createFilterPolicyRequest)


### Example

```typescript
import {
    AIFilterPoliciesApi,
    Configuration,
    CreateFilterPolicyRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AIFilterPoliciesApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let createFilterPolicyRequest: CreateFilterPolicyRequest; //

const { status, data } = await apiInstance.createFilterPolicy(
    organisation,
    createFilterPolicyRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createFilterPolicyRequest** | **CreateFilterPolicyRequest**|  | |
| **organisation** | [**string**] | The organisation ID | defaults to undefined|


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
|**201** | Filter policy created successfully |  -  |
|**422** | Validation error |  -  |
|**500** | Failed to create filter policy |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteFilterPolicy**
> object deleteFilterPolicy()


### Example

```typescript
import {
    AIFilterPoliciesApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AIFilterPoliciesApi(configuration);

let organisation: string; // (default to undefined)
let policyId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteFilterPolicy(
    organisation,
    policyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] |  | defaults to undefined|
| **policyId** | [**string**] |  | defaults to undefined|


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
|**200** | Filter policy deleted successfully |  -  |
|**500** | Failed to delete filter policy |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **disableFilterPolicy**
> object disableFilterPolicy()


### Example

```typescript
import {
    AIFilterPoliciesApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AIFilterPoliciesApi(configuration);

let organisation: string; // (default to undefined)
let policyId: string; // (default to undefined)

const { status, data } = await apiInstance.disableFilterPolicy(
    organisation,
    policyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] |  | defaults to undefined|
| **policyId** | [**string**] |  | defaults to undefined|


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
|**200** | Filter policy disabled successfully |  -  |
|**500** | Failed to disable filter policy |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **enableFilterPolicy**
> object enableFilterPolicy()


### Example

```typescript
import {
    AIFilterPoliciesApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AIFilterPoliciesApi(configuration);

let organisation: string; // (default to undefined)
let policyId: string; // (default to undefined)

const { status, data } = await apiInstance.enableFilterPolicy(
    organisation,
    policyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] |  | defaults to undefined|
| **policyId** | [**string**] |  | defaults to undefined|


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
|**200** | Filter policy enabled successfully |  -  |
|**500** | Failed to enable filter policy |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFilterPolicy**
> object getFilterPolicy()


### Example

```typescript
import {
    AIFilterPoliciesApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AIFilterPoliciesApi(configuration);

let organisation: string; // (default to undefined)
let policyId: string; // (default to undefined)

const { status, data } = await apiInstance.getFilterPolicy(
    organisation,
    policyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] |  | defaults to undefined|
| **policyId** | [**string**] |  | defaults to undefined|


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
|**200** | Filter policy details |  -  |
|**404** | Filter policy not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listFilterPolicies**
> object listFilterPolicies()


### Example

```typescript
import {
    AIFilterPoliciesApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AIFilterPoliciesApi(configuration);

let organisation: string; //The organisation ID (default to undefined)

const { status, data } = await apiInstance.listFilterPolicies(
    organisation
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] | The organisation ID | defaults to undefined|


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
|**200** | List of filter policies |  -  |
|**500** | Failed to retrieve filter policies |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateFilterPolicy**
> object updateFilterPolicy(updateFilterPolicyRequest)


### Example

```typescript
import {
    AIFilterPoliciesApi,
    Configuration,
    UpdateFilterPolicyRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AIFilterPoliciesApi(configuration);

let organisation: string; // (default to undefined)
let policyId: string; // (default to undefined)
let updateFilterPolicyRequest: UpdateFilterPolicyRequest; //

const { status, data } = await apiInstance.updateFilterPolicy(
    organisation,
    policyId,
    updateFilterPolicyRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateFilterPolicyRequest** | **UpdateFilterPolicyRequest**|  | |
| **organisation** | [**string**] |  | defaults to undefined|
| **policyId** | [**string**] |  | defaults to undefined|


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
|**200** | Filter policy updated successfully |  -  |
|**422** | Validation error |  -  |
|**500** | Failed to update filter policy |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

