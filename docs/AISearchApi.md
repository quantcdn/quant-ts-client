# AISearchApi

All URIs are relative to *https://dashboard.quantcdn.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**aiSearchChat**](#aisearchchat) | **POST** /api/v3/organisations/{organisation}/projects/{project}/ai-search/chat | RAG chat with AI Search content|
|[**aiSearchDeletePages**](#aisearchdeletepages) | **DELETE** /api/v3/organisations/{organisation}/projects/{project}/ai-search/pages | Delete pages by URLs or patterns|
|[**aiSearchDisable**](#aisearchdisable) | **POST** /api/v3/organisations/{organisation}/projects/{project}/ai-search/disable | Disable AI Search for a project|
|[**aiSearchEnable**](#aisearchenable) | **POST** /api/v3/organisations/{organisation}/projects/{project}/ai-search/enable | Enable AI Search for a project|
|[**aiSearchGetCrawl**](#aisearchgetcrawl) | **GET** /api/v3/organisations/{organisation}/projects/{project}/ai-search/crawls/{jobId} | Get AI Search ingest job status|
|[**aiSearchGetCrawlPages**](#aisearchgetcrawlpages) | **GET** /api/v3/organisations/{organisation}/projects/{project}/ai-search/crawls/{jobId}/pages | Get per-page ingest results for a crawl job|
|[**aiSearchGetSettings**](#aisearchgetsettings) | **GET** /api/v3/organisations/{organisation}/projects/{project}/ai-search/settings | Get AI Search public access and rate limit settings|
|[**aiSearchIngestPages**](#aisearchingestpages) | **POST** /api/v3/organisations/{organisation}/projects/{project}/ai-search/pages | Ingest pages into the AI Search index|
|[**aiSearchListCrawls**](#aisearchlistcrawls) | **GET** /api/v3/organisations/{organisation}/projects/{project}/ai-search/crawls | List AI Search ingest jobs|
|[**aiSearchListPages**](#aisearchlistpages) | **GET** /api/v3/organisations/{organisation}/projects/{project}/ai-search/pages | List indexed pages with cursor pagination|
|[**aiSearchPurgeIndex**](#aisearchpurgeindex) | **DELETE** /api/v3/organisations/{organisation}/projects/{project}/ai-search/index | Purge the entire AI Search index|
|[**aiSearchSearch**](#aisearchsearch) | **POST** /api/v3/organisations/{organisation}/projects/{project}/ai-search/search | Semantic search across the AI Search index|
|[**aiSearchStatus**](#aisearchstatus) | **GET** /api/v3/organisations/{organisation}/projects/{project}/ai-search | Get AI Search status for a project|
|[**aiSearchTopQueries**](#aisearchtopqueries) | **GET** /api/v3/organisations/{organisation}/projects/{project}/ai-search/top-queries | Get the most popular AI Search queries|
|[**aiSearchTriggerCrawl**](#aisearchtriggercrawl) | **POST** /api/v3/organisations/{organisation}/projects/{project}/ai-search/crawls | Trigger a crawler run that ingests into AI Search|
|[**aiSearchUpdateSettings**](#aisearchupdatesettings) | **PUT** /api/v3/organisations/{organisation}/projects/{project}/ai-search/settings | Update AI Search public access and rate limit settings|
|[**aiSearchUsage**](#aisearchusage) | **GET** /api/v3/organisations/{organisation}/projects/{project}/ai-search/usage | Get usage statistics for the AI Search site|

# **aiSearchChat**
> aiSearchChat(aiSearchChatRequest)


### Example

```typescript
import {
    AISearchApi,
    Configuration,
    AiSearchChatRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AISearchApi(configuration);

let organisation: string; // (default to undefined)
let project: string; // (default to undefined)
let aiSearchChatRequest: AiSearchChatRequest; //

const { status, data } = await apiInstance.aiSearchChat(
    organisation,
    project,
    aiSearchChatRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **aiSearchChatRequest** | **AiSearchChatRequest**|  | |
| **organisation** | [**string**] |  | defaults to undefined|
| **project** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Chat reply |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **aiSearchDeletePages**
> aiSearchDeletePages(aiSearchDeletePagesRequest)


### Example

```typescript
import {
    AISearchApi,
    Configuration,
    AiSearchDeletePagesRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AISearchApi(configuration);

let organisation: string; // (default to undefined)
let project: string; // (default to undefined)
let aiSearchDeletePagesRequest: AiSearchDeletePagesRequest; //

const { status, data } = await apiInstance.aiSearchDeletePages(
    organisation,
    project,
    aiSearchDeletePagesRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **aiSearchDeletePagesRequest** | **AiSearchDeletePagesRequest**|  | |
| **organisation** | [**string**] |  | defaults to undefined|
| **project** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Deleted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **aiSearchDisable**
> aiSearchDisable()


### Example

```typescript
import {
    AISearchApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AISearchApi(configuration);

let organisation: string; // (default to undefined)
let project: string; // (default to undefined)

const { status, data } = await apiInstance.aiSearchDisable(
    organisation,
    project
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] |  | defaults to undefined|
| **project** | [**string**] |  | defaults to undefined|


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
|**200** | Disabled |  -  |
|**404** | Not enabled |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **aiSearchEnable**
> aiSearchEnable()


### Example

```typescript
import {
    AISearchApi,
    Configuration,
    AiSearchEnableRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AISearchApi(configuration);

let organisation: string; // (default to undefined)
let project: string; // (default to undefined)
let aiSearchEnableRequest: AiSearchEnableRequest; // (optional)

const { status, data } = await apiInstance.aiSearchEnable(
    organisation,
    project,
    aiSearchEnableRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **aiSearchEnableRequest** | **AiSearchEnableRequest**|  | |
| **organisation** | [**string**] |  | defaults to undefined|
| **project** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Enabled |  -  |
|**400** | Missing base URL |  -  |
|**409** | Already enabled |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **aiSearchGetCrawl**
> aiSearchGetCrawl()


### Example

```typescript
import {
    AISearchApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AISearchApi(configuration);

let organisation: string; // (default to undefined)
let project: string; // (default to undefined)
let jobId: string; // (default to undefined)

const { status, data } = await apiInstance.aiSearchGetCrawl(
    organisation,
    project,
    jobId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] |  | defaults to undefined|
| **project** | [**string**] |  | defaults to undefined|
| **jobId** | [**string**] |  | defaults to undefined|


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
|**200** | Job status |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **aiSearchGetCrawlPages**
> aiSearchGetCrawlPages()


### Example

```typescript
import {
    AISearchApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AISearchApi(configuration);

let organisation: string; // (default to undefined)
let project: string; // (default to undefined)
let jobId: string; // (default to undefined)
let limit: number; // (optional) (default to undefined)
let statusCode: number; // (optional) (default to undefined)
let processingStatus: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.aiSearchGetCrawlPages(
    organisation,
    project,
    jobId,
    limit,
    statusCode,
    processingStatus
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] |  | defaults to undefined|
| **project** | [**string**] |  | defaults to undefined|
| **jobId** | [**string**] |  | defaults to undefined|
| **limit** | [**number**] |  | (optional) defaults to undefined|
| **statusCode** | [**number**] |  | (optional) defaults to undefined|
| **processingStatus** | [**string**] |  | (optional) defaults to undefined|


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
|**200** | Pages |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **aiSearchGetSettings**
> aiSearchGetSettings()


### Example

```typescript
import {
    AISearchApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AISearchApi(configuration);

let organisation: string; // (default to undefined)
let project: string; // (default to undefined)

const { status, data } = await apiInstance.aiSearchGetSettings(
    organisation,
    project
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] |  | defaults to undefined|
| **project** | [**string**] |  | defaults to undefined|


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
|**200** | Settings |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **aiSearchIngestPages**
> aiSearchIngestPages(aiSearchIngestPagesRequest)


### Example

```typescript
import {
    AISearchApi,
    Configuration,
    AiSearchIngestPagesRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AISearchApi(configuration);

let organisation: string; // (default to undefined)
let project: string; // (default to undefined)
let aiSearchIngestPagesRequest: AiSearchIngestPagesRequest; //

const { status, data } = await apiInstance.aiSearchIngestPages(
    organisation,
    project,
    aiSearchIngestPagesRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **aiSearchIngestPagesRequest** | **AiSearchIngestPagesRequest**|  | |
| **organisation** | [**string**] |  | defaults to undefined|
| **project** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Pages processed |  -  |
|**422** | Validation failed |  -  |
|**502** | Upstream failure |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **aiSearchListCrawls**
> aiSearchListCrawls()


### Example

```typescript
import {
    AISearchApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AISearchApi(configuration);

let organisation: string; // (default to undefined)
let project: string; // (default to undefined)
let limit: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.aiSearchListCrawls(
    organisation,
    project,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] |  | defaults to undefined|
| **project** | [**string**] |  | defaults to undefined|
| **limit** | [**number**] |  | (optional) defaults to undefined|


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
|**200** | Jobs |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **aiSearchListPages**
> aiSearchListPages()


### Example

```typescript
import {
    AISearchApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AISearchApi(configuration);

let organisation: string; // (default to undefined)
let project: string; // (default to undefined)
let limit: number; // (optional) (default to undefined)
let cursor: string; // (optional) (default to undefined)
let search: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.aiSearchListPages(
    organisation,
    project,
    limit,
    cursor,
    search
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] |  | defaults to undefined|
| **project** | [**string**] |  | defaults to undefined|
| **limit** | [**number**] |  | (optional) defaults to undefined|
| **cursor** | [**string**] |  | (optional) defaults to undefined|
| **search** | [**string**] |  | (optional) defaults to undefined|


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
|**200** | Pages |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **aiSearchPurgeIndex**
> aiSearchPurgeIndex()


### Example

```typescript
import {
    AISearchApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AISearchApi(configuration);

let organisation: string; // (default to undefined)
let project: string; // (default to undefined)

const { status, data } = await apiInstance.aiSearchPurgeIndex(
    organisation,
    project
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] |  | defaults to undefined|
| **project** | [**string**] |  | defaults to undefined|


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
|**200** | Purged |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **aiSearchSearch**
> aiSearchSearch(aiSearchSearchRequest)


### Example

```typescript
import {
    AISearchApi,
    Configuration,
    AiSearchSearchRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AISearchApi(configuration);

let organisation: string; // (default to undefined)
let project: string; // (default to undefined)
let aiSearchSearchRequest: AiSearchSearchRequest; //

const { status, data } = await apiInstance.aiSearchSearch(
    organisation,
    project,
    aiSearchSearchRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **aiSearchSearchRequest** | **AiSearchSearchRequest**|  | |
| **organisation** | [**string**] |  | defaults to undefined|
| **project** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Results |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **aiSearchStatus**
> aiSearchStatus()


### Example

```typescript
import {
    AISearchApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AISearchApi(configuration);

let organisation: string; // (default to undefined)
let project: string; // (default to undefined)

const { status, data } = await apiInstance.aiSearchStatus(
    organisation,
    project
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] |  | defaults to undefined|
| **project** | [**string**] |  | defaults to undefined|


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
|**200** | Status |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **aiSearchTopQueries**
> aiSearchTopQueries()


### Example

```typescript
import {
    AISearchApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AISearchApi(configuration);

let organisation: string; // (default to undefined)
let project: string; // (default to undefined)
let range: string; // (optional) (default to '30d')
let limit: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.aiSearchTopQueries(
    organisation,
    project,
    range,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] |  | defaults to undefined|
| **project** | [**string**] |  | defaults to undefined|
| **range** | [**string**] |  | (optional) defaults to '30d'|
| **limit** | [**number**] |  | (optional) defaults to undefined|


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
|**200** | Top queries |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **aiSearchTriggerCrawl**
> aiSearchTriggerCrawl(aiSearchTriggerCrawlRequest)


### Example

```typescript
import {
    AISearchApi,
    Configuration,
    AiSearchTriggerCrawlRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AISearchApi(configuration);

let organisation: string; // (default to undefined)
let project: string; // (default to undefined)
let aiSearchTriggerCrawlRequest: AiSearchTriggerCrawlRequest; //

const { status, data } = await apiInstance.aiSearchTriggerCrawl(
    organisation,
    project,
    aiSearchTriggerCrawlRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **aiSearchTriggerCrawlRequest** | **AiSearchTriggerCrawlRequest**|  | |
| **organisation** | [**string**] |  | defaults to undefined|
| **project** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Crawl started |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **aiSearchUpdateSettings**
> aiSearchUpdateSettings(aiSearchUpdateSettingsRequest)


### Example

```typescript
import {
    AISearchApi,
    Configuration,
    AiSearchUpdateSettingsRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AISearchApi(configuration);

let organisation: string; // (default to undefined)
let project: string; // (default to undefined)
let aiSearchUpdateSettingsRequest: AiSearchUpdateSettingsRequest; //

const { status, data } = await apiInstance.aiSearchUpdateSettings(
    organisation,
    project,
    aiSearchUpdateSettingsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **aiSearchUpdateSettingsRequest** | **AiSearchUpdateSettingsRequest**|  | |
| **organisation** | [**string**] |  | defaults to undefined|
| **project** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Updated |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **aiSearchUsage**
> aiSearchUsage()


### Example

```typescript
import {
    AISearchApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AISearchApi(configuration);

let organisation: string; // (default to undefined)
let project: string; // (default to undefined)
let range: string; // (optional) (default to '30d')

const { status, data } = await apiInstance.aiSearchUsage(
    organisation,
    project,
    range
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] |  | defaults to undefined|
| **project** | [**string**] |  | defaults to undefined|
| **range** | [**string**] |  | (optional) defaults to '30d'|


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
|**200** | Usage |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

