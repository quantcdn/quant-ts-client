# V1Api

All URIs are relative to *https://dashboard.quantcdn.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createSearchItem**](#createsearchitem) | **POST** /api/v1/search/item | Create a new search index item.|
|[**deleteSearchItem**](#deletesearchitem) | **DELETE** /api/v1/search/item | Delete a search index item.|
|[**getSearchItem**](#getsearchitem) | **GET** /api/v1/search/item | Get a single search index item.|
|[**getSearchItems**](#getsearchitems) | **GET** /api/v1/search/items | List search index items.|
|[**getWafLogs**](#getwaflogs) | **POST** /api/v1/waf-log | Retrieve WAF logs|
|[**listContent**](#listcontent) | **POST** /api/v1/content/{type} | List content by type|
|[**listFormSubmissions**](#listformsubmissions) | **POST** /api/v1/form-submissions | List form submissions|
|[**listProxies**](#listproxies) | **POST** /api/v1/proxy | List proxies|
|[**listRedirects**](#listredirects) | **POST** /api/v1/redirect | List redirects|
|[**testSearchExtractors**](#testsearchextractors) | **POST** /api/v1/search/test-extractors | Test search extractors.|
|[**updateSearchItem**](#updatesearchitem) | **PUT** /api/v1/search/item | Update an existing search index item.|
|[**uploadFile**](#uploadfile) | **POST** /api/v1/upload | Upload a file|

# **createSearchItem**
> V1SearchMutationResponse createSearchItem(createSearchItemRequest)


### Example

```typescript
import {
    V1Api,
    Configuration,
    CreateSearchItemRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new V1Api(configuration);

let createSearchItemRequest: CreateSearchItemRequest; //

const { status, data } = await apiInstance.createSearchItem(
    createSearchItemRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createSearchItemRequest** | **CreateSearchItemRequest**|  | |


### Return type

**V1SearchMutationResponse**

### Authorization

[headerAuth](../README.md#headerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteSearchItem**
> V1SearchMutationResponse deleteSearchItem()


### Example

```typescript
import {
    V1Api,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new V1Api(configuration);

let project: number; // (default to undefined)
let objectId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteSearchItem(
    project,
    objectId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **project** | [**number**] |  | defaults to undefined|
| **objectId** | [**string**] |  | defaults to undefined|


### Return type

**V1SearchMutationResponse**

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getSearchItem**
> object getSearchItem()


### Example

```typescript
import {
    V1Api,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new V1Api(configuration);

let project: number; // (default to undefined)
let objectId: string; // (default to undefined)

const { status, data } = await apiInstance.getSearchItem(
    project,
    objectId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **project** | [**number**] |  | defaults to undefined|
| **objectId** | [**string**] |  | defaults to undefined|


### Return type

**object**

### Authorization

[headerAuth](../README.md#headerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getSearchItems**
> V1SearchItemsResponse getSearchItems()


### Example

```typescript
import {
    V1Api,
    Configuration,
    GetSearchItemsFiltersParameter,
    GetSearchItemsFiltersParameter
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new V1Api(configuration);

let project: number; // (default to undefined)
let page: number; // (optional) (default to 0)
let hitsPerPage: number; // (optional) (default to 10)
let query: string; // (optional) (default to undefined)
let filters: GetSearchItemsFiltersParameter; //Array or comma-separated filters (optional) (default to undefined)
let facets: GetSearchItemsFiltersParameter; //Array or comma-separated facets (optional) (default to undefined)

const { status, data } = await apiInstance.getSearchItems(
    project,
    page,
    hitsPerPage,
    query,
    filters,
    facets
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **project** | [**number**] |  | defaults to undefined|
| **page** | [**number**] |  | (optional) defaults to 0|
| **hitsPerPage** | [**number**] |  | (optional) defaults to 10|
| **query** | [**string**] |  | (optional) defaults to undefined|
| **filters** | **GetSearchItemsFiltersParameter** | Array or comma-separated filters | (optional) defaults to undefined|
| **facets** | **GetSearchItemsFiltersParameter** | Array or comma-separated facets | (optional) defaults to undefined|


### Return type

**V1SearchItemsResponse**

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getWafLogs**
> V1WafLogListResponse getWafLogs()


### Example

```typescript
import {
    V1Api,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new V1Api(configuration);

let body: object; // (optional)

const { status, data } = await apiInstance.getWafLogs(
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |


### Return type

**V1WafLogListResponse**

### Authorization

[headerAuth](../README.md#headerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**400** | Bad Request |  -  |
|**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listContent**
> V1ContentListResponse listContent()

Retrieve content via API.

### Example

```typescript
import {
    V1Api,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new V1Api(configuration);

let type: 'content' | 'redirect' | 'file' | 'edge_function' | 'edge_filter' | 'edge_auth'; // (default to undefined)
let body: object; // (optional)

const { status, data } = await apiInstance.listContent(
    type,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |
| **type** | [**&#39;content&#39; | &#39;redirect&#39; | &#39;file&#39; | &#39;edge_function&#39; | &#39;edge_filter&#39; | &#39;edge_auth&#39;**]**Array<&#39;content&#39; &#124; &#39;redirect&#39; &#124; &#39;file&#39; &#124; &#39;edge_function&#39; &#124; &#39;edge_filter&#39; &#124; &#39;edge_auth&#39;>** |  | defaults to undefined|


### Return type

**V1ContentListResponse**

### Authorization

[headerAuth](../README.md#headerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listFormSubmissions**
> V1FormSubmissionListResponse listFormSubmissions()

Retrieve form submissions via API.

### Example

```typescript
import {
    V1Api,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new V1Api(configuration);

let quantUrl: string; // (optional) (default to undefined)
let body: object; // (optional)

const { status, data } = await apiInstance.listFormSubmissions(
    quantUrl,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |
| **quantUrl** | [**string**] |  | (optional) defaults to undefined|


### Return type

**V1FormSubmissionListResponse**

### Authorization

[headerAuth](../README.md#headerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listProxies**
> V1ProxyListResponse listProxies()

Retrieve proxies via API.

### Example

```typescript
import {
    V1Api,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new V1Api(configuration);

let body: object; // (optional)

const { status, data } = await apiInstance.listProxies(
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |


### Return type

**V1ProxyListResponse**

### Authorization

[headerAuth](../README.md#headerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listRedirects**
> V1RedirectListResponse listRedirects()

Retrieve redirects via API.

### Example

```typescript
import {
    V1Api,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new V1Api(configuration);

let body: object; // (optional)

const { status, data } = await apiInstance.listRedirects(
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |


### Return type

**V1RedirectListResponse**

### Authorization

[headerAuth](../README.md#headerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**400** | Bad Request |  -  |
|**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **testSearchExtractors**
> { [key: string]: object; } testSearchExtractors(testSearchExtractorsRequest)


### Example

```typescript
import {
    V1Api,
    Configuration,
    TestSearchExtractorsRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new V1Api(configuration);

let testSearchExtractorsRequest: TestSearchExtractorsRequest; //

const { status, data } = await apiInstance.testSearchExtractors(
    testSearchExtractorsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **testSearchExtractorsRequest** | **TestSearchExtractorsRequest**|  | |


### Return type

**{ [key: string]: object; }**

### Authorization

[headerAuth](../README.md#headerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateSearchItem**
> V1SearchMutationResponse updateSearchItem(updateSearchItemRequest)


### Example

```typescript
import {
    V1Api,
    Configuration,
    UpdateSearchItemRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new V1Api(configuration);

let updateSearchItemRequest: UpdateSearchItemRequest; //

const { status, data } = await apiInstance.updateSearchItem(
    updateSearchItemRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateSearchItemRequest** | **UpdateSearchItemRequest**|  | |


### Return type

**V1SearchMutationResponse**

### Authorization

[headerAuth](../README.md#headerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **uploadFile**
> V1UploadResponse uploadFile()

Upload a file via API.

### Example

```typescript
import {
    V1Api,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new V1Api(configuration);

let quantUri: string; // (default to undefined)
let quantPrefix: string; // (optional) (default to undefined)
let body: object; // (optional)

const { status, data } = await apiInstance.uploadFile(
    quantUri,
    quantPrefix,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |
| **quantUri** | [**string**] |  | defaults to undefined|
| **quantPrefix** | [**string**] |  | (optional) defaults to undefined|


### Return type

**V1UploadResponse**

### Authorization

[headerAuth](../README.md#headerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

