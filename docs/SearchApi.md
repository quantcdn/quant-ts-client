# SearchApi

All URIs are relative to *https://dashboard.quantcdn.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createSearchItem**](#createsearchitem) | **POST** /api/v1/search/item | Create a new search index item.|
|[**deleteSearchItem**](#deletesearchitem) | **DELETE** /api/v1/search/item | Delete a search index item.|
|[**getSearchItem**](#getsearchitem) | **GET** /api/v1/search/item | Get a single search index item.|
|[**getSearchItems**](#getsearchitems) | **GET** /api/v1/search/items | List search index items.|
|[**testSearchExtractors**](#testsearchextractors) | **POST** /api/v1/search/test-extractors | Test search extractors.|
|[**updateSearchItem**](#updatesearchitem) | **PUT** /api/v1/search/item | Update an existing search index item.|

# **createSearchItem**
> V1SearchMutationResponse createSearchItem(createSearchItemRequest)


### Example

```typescript
import {
    SearchApi,
    Configuration,
    CreateSearchItemRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new SearchApi(configuration);

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
    SearchApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new SearchApi(configuration);

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
    SearchApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new SearchApi(configuration);

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
    SearchApi,
    Configuration,
    GetSearchItemsFiltersParameter,
    GetSearchItemsFiltersParameter
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new SearchApi(configuration);

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

# **testSearchExtractors**
> { [key: string]: object; } testSearchExtractors(testSearchExtractorsRequest)


### Example

```typescript
import {
    SearchApi,
    Configuration,
    TestSearchExtractorsRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new SearchApi(configuration);

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
    SearchApi,
    Configuration,
    UpdateSearchItemRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new SearchApi(configuration);

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

