# MetricsApi

All URIs are relative to *https://dashboard.quantcdn.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getMetricSeries**](#getmetricseries) | **GET** /api/v1/metrics/series | Get metric series|
|[**getMetrics**](#getmetrics) | **GET** /api/v1/metrics | Get metrics|

# **getMetricSeries**
> V1GetMetricSeriesResponse getMetricSeries()

Get metric series data.

### Example

```typescript
import {
    MetricsApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new MetricsApi(configuration);

let type: 'minute' | 'month' | 'year'; // (optional) (default to 'minute')
let metric: string; // (optional) (default to 'hits')
let domain: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.getMetricSeries(
    type,
    metric,
    domain
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **type** | [**&#39;minute&#39; | &#39;month&#39; | &#39;year&#39;**]**Array<&#39;minute&#39; &#124; &#39;month&#39; &#124; &#39;year&#39;>** |  | (optional) defaults to 'minute'|
| **metric** | [**string**] |  | (optional) defaults to 'hits'|
| **domain** | [**number**] |  | (optional) defaults to undefined|


### Return type

**V1GetMetricSeriesResponse**

### Authorization

[headerAuth](../README.md#headerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**400** | Bad Request |  -  |
|**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getMetrics**
> V1GetMetricsResponse getMetrics()

Get metrics data.

### Example

```typescript
import {
    MetricsApi,
    Configuration,
    GetMetricsMetricsParameter
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new MetricsApi(configuration);

let domain: number; // (optional) (default to undefined)
let timeframe: 'hour' | 'month' | 'year'; // (optional) (default to 'hour')
let metrics: GetMetricsMetricsParameter; //Metric name or list of metric names (optional) (default to undefined)

const { status, data } = await apiInstance.getMetrics(
    domain,
    timeframe,
    metrics
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **domain** | [**number**] |  | (optional) defaults to undefined|
| **timeframe** | [**&#39;hour&#39; | &#39;month&#39; | &#39;year&#39;**]**Array<&#39;hour&#39; &#124; &#39;month&#39; &#124; &#39;year&#39;>** |  | (optional) defaults to 'hour'|
| **metrics** | **GetMetricsMetricsParameter** | Metric name or list of metric names | (optional) defaults to undefined|


### Return type

**V1GetMetricsResponse**

### Authorization

[headerAuth](../README.md#headerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**400** | Bad Request |  -  |
|**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

