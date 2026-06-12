# AIApi

All URIs are relative to *https://dashboard.quantcdn.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getAIUsageStats**](#getaiusagestats) | **GET** /api/v3/organizations/{organisation}/ai/usage | Organisation AI usage breakdown (subscription page parity)|

# **getAIUsageStats**
> getAIUsageStats()

AI usage from the subscription page\'s source (cloud-api monthly-usage). Parameterized by month, groupBy (model|user|token) and optional daily series. NOTE: as of API 4.19.0 this endpoint requires the update_subscription permission + subscription:read scope (previously use_ai_services + ai:use). For per-caller spend use /ai/usage/me.

### Example

```typescript
import {
    AIApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AIApi(configuration);

let organisation: string; // (default to undefined)
let month: string; //YYYY-MM, defaults to current month (optional) (default to undefined)
let groupBy: 'model' | 'user' | 'token'; // (optional) (default to 'model')
let include: 'daily'; //Set to \'daily\' to append a 30-day series (optional) (default to undefined)
let userId: string; //Scope the daily series to a user (optional) (default to undefined)
let tokenId: string; //Scope the daily series to a token (optional) (default to undefined)

const { status, data } = await apiInstance.getAIUsageStats(
    organisation,
    month,
    groupBy,
    include,
    userId,
    tokenId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] |  | defaults to undefined|
| **month** | [**string**] | YYYY-MM, defaults to current month | (optional) defaults to undefined|
| **groupBy** | [**&#39;model&#39; | &#39;user&#39; | &#39;token&#39;**]**Array<&#39;model&#39; &#124; &#39;user&#39; &#124; &#39;token&#39;>** |  | (optional) defaults to 'model'|
| **include** | [**&#39;daily&#39;**]**Array<&#39;daily&#39;>** | Set to \&#39;daily\&#39; to append a 30-day series | (optional) defaults to undefined|
| **userId** | [**string**] | Scope the daily series to a user | (optional) defaults to undefined|
| **tokenId** | [**string**] | Scope the daily series to a token | (optional) defaults to undefined|


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
|**200** | Usage breakdown |  -  |
|**403** | Missing update_subscription permission or subscription:read scope |  -  |
|**422** | Invalid groupBy |  -  |
|**500** | Failed to fetch usage data |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

