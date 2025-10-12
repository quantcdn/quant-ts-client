# CrawlerSchedulesApi

All URIs are relative to *https://dashboard.quantcdn.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**crawlerSchedulesAdd**](#crawlerschedulesadd) | **POST** /api/v2/organizations/{organization}/projects/{project}/crawlers/{crawler}/schedules | Add a new schedule|
|[**crawlerSchedulesDelete**](#crawlerschedulesdelete) | **DELETE** /api/v2/organizations/{organization}/projects/{project}/crawlers/{crawler}/schedules | Delete a schedule|
|[**crawlerSchedulesEdit**](#crawlerschedulesedit) | **PATCH** /api/v2/organizations/{organization}/projects/{project}/crawlers/{crawler}/schedules | Edit a schedule|
|[**crawlerSchedulesList**](#crawlerscheduleslist) | **GET** /api/v2/organizations/{organization}/projects/{project}/crawlers/{crawler}/schedules | List schedules for a crawler|
|[**crawlerSchedulesShow**](#crawlerschedulesshow) | **GET** /api/v2/organizations/{organization}/projects/{project}/crawlers/{crawler}/schedules/{crawler_schedule} | Show a specific schedule|

# **crawlerSchedulesAdd**
> V2CrawlerSchedule crawlerSchedulesAdd(v2CrawlerScheduleRequest)


### Example

```typescript
import {
    CrawlerSchedulesApi,
    Configuration,
    V2CrawlerScheduleRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new CrawlerSchedulesApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)
let crawler: string; //Crawler identifier (default to undefined)
let v2CrawlerScheduleRequest: V2CrawlerScheduleRequest; //

const { status, data } = await apiInstance.crawlerSchedulesAdd(
    organization,
    project,
    crawler,
    v2CrawlerScheduleRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v2CrawlerScheduleRequest** | **V2CrawlerScheduleRequest**|  | |
| **organization** | [**string**] | Organization identifier | defaults to undefined|
| **project** | [**string**] | Project identifier | defaults to undefined|
| **crawler** | [**string**] | Crawler identifier | defaults to undefined|


### Return type

**V2CrawlerSchedule**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The request has succeeded. |  -  |
|**400** | The server could not understand the request due to invalid syntax. |  -  |
|**403** | Access is forbidden. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **crawlerSchedulesDelete**
> crawlerSchedulesDelete()


### Example

```typescript
import {
    CrawlerSchedulesApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new CrawlerSchedulesApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)
let crawler: string; //Crawler identifier (default to undefined)
let crawlerSchedule: string; //Crawler schedule identifier (default to undefined)

const { status, data } = await apiInstance.crawlerSchedulesDelete(
    organization,
    project,
    crawler,
    crawlerSchedule
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organization** | [**string**] | Organization identifier | defaults to undefined|
| **project** | [**string**] | Project identifier | defaults to undefined|
| **crawler** | [**string**] | Crawler identifier | defaults to undefined|
| **crawlerSchedule** | [**string**] | Crawler schedule identifier | defaults to undefined|


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | The crawler schedule has been deleted. |  -  |
|**400** | The server could not understand the request due to invalid syntax. |  -  |
|**403** | Access is forbidden. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **crawlerSchedulesEdit**
> V2CrawlerSchedule crawlerSchedulesEdit(v2CrawlerScheduleRequest)


### Example

```typescript
import {
    CrawlerSchedulesApi,
    Configuration,
    V2CrawlerScheduleRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new CrawlerSchedulesApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)
let crawler: string; //Crawler identifier (default to undefined)
let v2CrawlerScheduleRequest: V2CrawlerScheduleRequest; //

const { status, data } = await apiInstance.crawlerSchedulesEdit(
    organization,
    project,
    crawler,
    v2CrawlerScheduleRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v2CrawlerScheduleRequest** | **V2CrawlerScheduleRequest**|  | |
| **organization** | [**string**] | Organization identifier | defaults to undefined|
| **project** | [**string**] | Project identifier | defaults to undefined|
| **crawler** | [**string**] | Crawler identifier | defaults to undefined|


### Return type

**V2CrawlerSchedule**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The crawler schedule. |  -  |
|**400** | The server could not understand the request due to invalid syntax. |  -  |
|**403** | Access is forbidden. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **crawlerSchedulesList**
> Array<V2CrawlerSchedule> crawlerSchedulesList()


### Example

```typescript
import {
    CrawlerSchedulesApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new CrawlerSchedulesApi(configuration);

let organization: string; // (default to undefined)
let project: string; // (default to undefined)
let crawler: string; // (default to undefined)

const { status, data } = await apiInstance.crawlerSchedulesList(
    organization,
    project,
    crawler
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organization** | [**string**] |  | defaults to undefined|
| **project** | [**string**] |  | defaults to undefined|
| **crawler** | [**string**] |  | defaults to undefined|


### Return type

**Array<V2CrawlerSchedule>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The request has succeeded. |  -  |
|**400** | The server could not understand the request due to invalid syntax. |  -  |
|**403** | Access is forbidden. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **crawlerSchedulesShow**
> V2CrawlerSchedule crawlerSchedulesShow()


### Example

```typescript
import {
    CrawlerSchedulesApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new CrawlerSchedulesApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)
let crawler: string; //Crawler identifier (default to undefined)
let crawlerSchedule: string; //Crawler schedule identifier (default to undefined)

const { status, data } = await apiInstance.crawlerSchedulesShow(
    organization,
    project,
    crawler,
    crawlerSchedule
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organization** | [**string**] | Organization identifier | defaults to undefined|
| **project** | [**string**] | Project identifier | defaults to undefined|
| **crawler** | [**string**] | Crawler identifier | defaults to undefined|
| **crawlerSchedule** | [**string**] | Crawler schedule identifier | defaults to undefined|


### Return type

**V2CrawlerSchedule**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The crawler schedule. |  -  |
|**400** | The server could not understand the request due to invalid syntax. |  -  |
|**403** | Access is forbidden. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

