# SubscriptionApi

All URIs are relative to *https://dashboard.quantcdn.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getSubscriptionCloudUsage**](#getsubscriptioncloudusage) | **GET** /api/v3/organizations/{organisation}/subscription/cloud-usage | Cloud-app cost breakdown for the subscription page|

# **getSubscriptionCloudUsage**
> getSubscriptionCloudUsage()

Per-project compute/database/storage cost breakdown with spot discount, for the requested month and the month before it. Mirrors the subscription page\'s Cloud Apps card.

### Example

```typescript
import {
    SubscriptionApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new SubscriptionApi(configuration);

let organisation: string; // (default to undefined)
let month: string; //YYYY-MM, defaults to current month (optional) (default to undefined)

const { status, data } = await apiInstance.getSubscriptionCloudUsage(
    organisation,
    month
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] |  | defaults to undefined|
| **month** | [**string**] | YYYY-MM, defaults to current month | (optional) defaults to undefined|


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
|**200** | Usage envelope |  -  |
|**403** | Missing update_subscription permission or subscription:read scope |  -  |
|**500** | Failed to fetch usage data |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

