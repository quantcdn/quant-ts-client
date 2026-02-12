# CDNMetricsApi

All URIs are relative to *https://dashboard.quantcdn.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getDailyMetrics**](#getdailymetrics) | **GET** /v2/organizations/{organization}/projects/{project}/metrics/daily | Get daily metrics|
|[**getHourlyMetrics**](#gethourlymetrics) | **GET** /v2/organizations/{organization}/projects/{project}/metrics/hourly | Get hourly metrics|
|[**getMonthlyMetrics**](#getmonthlymetrics) | **GET** /v2/organizations/{organization}/projects/{project}/metrics/monthly | Get monthly metrics|

# **getDailyMetrics**
> V2MetricsResponse getDailyMetrics()

Returns the last 30 days of daily metrics data

### Example

```typescript
import {
    CDNMetricsApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new CDNMetricsApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)
let domain: string; //Filter by domain ID or domain name (optional) (default to undefined)
let metrics: Array<string>; //Metrics to return (default: hits, bytes) (optional) (default to undefined)
let timestampFormat: 'iso8601' | 'unix'; //Timestamp format in response (optional) (default to 'iso8601')

const { status, data } = await apiInstance.getDailyMetrics(
    organization,
    project,
    domain,
    metrics,
    timestampFormat
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organization** | [**string**] | Organization identifier | defaults to undefined|
| **project** | [**string**] | Project identifier | defaults to undefined|
| **domain** | [**string**] | Filter by domain ID or domain name | (optional) defaults to undefined|
| **metrics** | **Array&lt;string&gt;** | Metrics to return (default: hits, bytes) | (optional) defaults to undefined|
| **timestampFormat** | [**&#39;iso8601&#39; | &#39;unix&#39;**]**Array<&#39;iso8601&#39; &#124; &#39;unix&#39;>** | Timestamp format in response | (optional) defaults to 'iso8601'|


### Return type

**V2MetricsResponse**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Daily metrics data |  -  |
|**400** | Invalid metric requested |  -  |
|**404** | No domains found or domain not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getHourlyMetrics**
> V2MetricsResponse getHourlyMetrics()

Returns the last hour of minute-by-minute metrics data

### Example

```typescript
import {
    CDNMetricsApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new CDNMetricsApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)
let domain: string; //Filter by domain ID or domain name (optional) (default to undefined)
let metrics: Array<string>; //Metrics to return (default: hits, bytes) (optional) (default to undefined)
let timestampFormat: 'iso8601' | 'unix'; //Timestamp format in response (optional) (default to 'iso8601')

const { status, data } = await apiInstance.getHourlyMetrics(
    organization,
    project,
    domain,
    metrics,
    timestampFormat
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organization** | [**string**] | Organization identifier | defaults to undefined|
| **project** | [**string**] | Project identifier | defaults to undefined|
| **domain** | [**string**] | Filter by domain ID or domain name | (optional) defaults to undefined|
| **metrics** | **Array&lt;string&gt;** | Metrics to return (default: hits, bytes) | (optional) defaults to undefined|
| **timestampFormat** | [**&#39;iso8601&#39; | &#39;unix&#39;**]**Array<&#39;iso8601&#39; &#124; &#39;unix&#39;>** | Timestamp format in response | (optional) defaults to 'iso8601'|


### Return type

**V2MetricsResponse**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Hourly metrics data |  -  |
|**400** | Invalid metric requested |  -  |
|**404** | No domains found or domain not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getMonthlyMetrics**
> V2MetricsResponse getMonthlyMetrics()

Returns the last 12 months of monthly metrics data

### Example

```typescript
import {
    CDNMetricsApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new CDNMetricsApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)
let domain: string; //Filter by domain ID or domain name (optional) (default to undefined)
let metrics: Array<string>; //Metrics to return (default: hits, bytes) (optional) (default to undefined)
let timestampFormat: 'iso8601' | 'unix'; //Timestamp format in response (optional) (default to 'iso8601')

const { status, data } = await apiInstance.getMonthlyMetrics(
    organization,
    project,
    domain,
    metrics,
    timestampFormat
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organization** | [**string**] | Organization identifier | defaults to undefined|
| **project** | [**string**] | Project identifier | defaults to undefined|
| **domain** | [**string**] | Filter by domain ID or domain name | (optional) defaults to undefined|
| **metrics** | **Array&lt;string&gt;** | Metrics to return (default: hits, bytes) | (optional) defaults to undefined|
| **timestampFormat** | [**&#39;iso8601&#39; | &#39;unix&#39;**]**Array<&#39;iso8601&#39; &#124; &#39;unix&#39;>** | Timestamp format in response | (optional) defaults to 'iso8601'|


### Return type

**V2MetricsResponse**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Monthly metrics data |  -  |
|**400** | Invalid metric requested |  -  |
|**404** | No domains found or domain not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

