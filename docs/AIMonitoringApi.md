# AIMonitoringApi

All URIs are relative to *https://dashboard.quantcdn.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getAIUsageStats**](#getaiusagestats) | **GET** /api/v3/organizations/{organisation}/ai/usage | Get AI usage statistics|

# **getAIUsageStats**
> GetAIUsageStats200Response getAIUsageStats()


### Example

```typescript
import {
    AIMonitoringApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AIMonitoringApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let month: string; //Month to retrieve statistics for (YYYY-MM format) (optional) (default to undefined)

const { status, data } = await apiInstance.getAIUsageStats(
    organisation,
    month
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] | The organisation ID | defaults to undefined|
| **month** | [**string**] | Month to retrieve statistics for (YYYY-MM format) | (optional) defaults to undefined|


### Return type

**GetAIUsageStats200Response**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Usage statistics |  -  |
|**500** | Failed to fetch usage statistics |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

