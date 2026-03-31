# AIGovernanceApi

All URIs are relative to *https://dashboard.quantcdn.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getGovernanceConfig**](#getgovernanceconfig) | **GET** /api/v3/organizations/{organisation}/ai/governance | Get AI governance configuration for an organisation|
|[**getGovernanceSpend**](#getgovernancespend) | **GET** /api/v3/organizations/{organisation}/ai/governance/spend | Get AI spend summary for an organisation|
|[**updateGovernanceConfig**](#updategovernanceconfig) | **PUT** /api/v3/organizations/{organisation}/ai/governance | Update AI governance configuration for an organisation|

# **getGovernanceConfig**
> GetGovernanceConfig200Response getGovernanceConfig()


### Example

```typescript
import {
    AIGovernanceApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AIGovernanceApi(configuration);

let organisation: string; //The organisation ID (default to undefined)

const { status, data } = await apiInstance.getGovernanceConfig(
    organisation
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] | The organisation ID | defaults to undefined|


### Return type

**GetGovernanceConfig200Response**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | AI governance configuration |  -  |
|**500** | Failed to retrieve governance configuration |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getGovernanceSpend**
> object getGovernanceSpend()


### Example

```typescript
import {
    AIGovernanceApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AIGovernanceApi(configuration);

let organisation: string; //The organisation ID (default to undefined)

const { status, data } = await apiInstance.getGovernanceSpend(
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
|**200** | AI spend summary |  -  |
|**500** | Failed to retrieve spend summary |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateGovernanceConfig**
> UpdateGovernanceConfig200Response updateGovernanceConfig(updateGovernanceConfigRequest)


### Example

```typescript
import {
    AIGovernanceApi,
    Configuration,
    UpdateGovernanceConfigRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AIGovernanceApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let updateGovernanceConfigRequest: UpdateGovernanceConfigRequest; //

const { status, data } = await apiInstance.updateGovernanceConfig(
    organisation,
    updateGovernanceConfigRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateGovernanceConfigRequest** | **UpdateGovernanceConfigRequest**|  | |
| **organisation** | [**string**] | The organisation ID | defaults to undefined|


### Return type

**UpdateGovernanceConfig200Response**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Governance configuration updated successfully |  -  |
|**422** | Validation error |  -  |
|**500** | Failed to update governance configuration |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

