# CrawlersApi

All URIs are relative to *https://dashboard.quantcdn.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**crawlersCreate**](#crawlerscreate) | **POST** /api/v2/organizations/{organization}/projects/{project}/crawlers | Create a new crawler|
|[**crawlersDelete**](#crawlersdelete) | **DELETE** /api/v2/organizations/{organization}/projects/{project}/crawlers/{crawler} | Delete a crawler|
|[**crawlersList**](#crawlerslist) | **GET** /api/v2/organizations/{organization}/projects/{project}/crawlers | List crawlers for the project|
|[**crawlersRead**](#crawlersread) | **GET** /api/v2/organizations/{organization}/projects/{project}/crawlers/{crawler} | Get details of a single crawler|
|[**crawlersUpdate**](#crawlersupdate) | **PATCH** /api/v2/organizations/{organization}/projects/{project}/crawlers/{crawler} | Update a crawler|

# **crawlersCreate**
> V2Crawler crawlersCreate(v2CrawlerRequest)


### Example

```typescript
import {
    CrawlersApi,
    Configuration,
    V2CrawlerRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new CrawlersApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)
let v2CrawlerRequest: V2CrawlerRequest; //

const { status, data } = await apiInstance.crawlersCreate(
    organization,
    project,
    v2CrawlerRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v2CrawlerRequest** | **V2CrawlerRequest**|  | |
| **organization** | [**string**] | Organization identifier | defaults to undefined|
| **project** | [**string**] | Project identifier | defaults to undefined|


### Return type

**V2Crawler**

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

# **crawlersDelete**
> crawlersDelete()


### Example

```typescript
import {
    CrawlersApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new CrawlersApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)
let crawler: string; // (default to undefined)

const { status, data } = await apiInstance.crawlersDelete(
    organization,
    project,
    crawler
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organization** | [**string**] | Organization identifier | defaults to undefined|
| **project** | [**string**] | Project identifier | defaults to undefined|
| **crawler** | [**string**] |  | defaults to undefined|


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
|**204** | The request has succeeded. |  -  |
|**400** | The server could not understand the request due to invalid syntax. |  -  |
|**403** | Access is forbidden. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **crawlersList**
> Array<V2Crawler> crawlersList()


### Example

```typescript
import {
    CrawlersApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new CrawlersApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)

const { status, data } = await apiInstance.crawlersList(
    organization,
    project
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organization** | [**string**] | Organization identifier | defaults to undefined|
| **project** | [**string**] | Project identifier | defaults to undefined|


### Return type

**Array<V2Crawler>**

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

# **crawlersRead**
> V2Crawler crawlersRead()


### Example

```typescript
import {
    CrawlersApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new CrawlersApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)
let crawler: string; // (default to undefined)

const { status, data } = await apiInstance.crawlersRead(
    organization,
    project,
    crawler
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organization** | [**string**] | Organization identifier | defaults to undefined|
| **project** | [**string**] | Project identifier | defaults to undefined|
| **crawler** | [**string**] |  | defaults to undefined|


### Return type

**V2Crawler**

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

# **crawlersUpdate**
> V2Crawler crawlersUpdate(v2CrawlerRequest)


### Example

```typescript
import {
    CrawlersApi,
    Configuration,
    V2CrawlerRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new CrawlersApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)
let crawler: string; // (default to undefined)
let v2CrawlerRequest: V2CrawlerRequest; //

const { status, data } = await apiInstance.crawlersUpdate(
    organization,
    project,
    crawler,
    v2CrawlerRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v2CrawlerRequest** | **V2CrawlerRequest**|  | |
| **organization** | [**string**] | Organization identifier | defaults to undefined|
| **project** | [**string**] | Project identifier | defaults to undefined|
| **crawler** | [**string**] |  | defaults to undefined|


### Return type

**V2Crawler**

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

