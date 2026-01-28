# AIVectorDatabaseApi

All URIs are relative to *https://dashboard.quantcdn.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createVectorCollection**](#createvectorcollection) | **POST** /api/v3/organizations/{organisation}/ai/vector-db/collections | Create Vector Database Collection|
|[**deleteVectorCollection**](#deletevectorcollection) | **DELETE** /api/v3/organizations/{organisation}/ai/vector-db/collections/{collectionId} | Delete Collection|
|[**getVectorCollection**](#getvectorcollection) | **GET** /api/v3/organizations/{organisation}/ai/vector-db/collections/{collectionId} | Get Collection Details|
|[**listVectorCollections**](#listvectorcollections) | **GET** /api/v3/organizations/{organisation}/ai/vector-db/collections | List Vector Database Collections|
|[**queryVectorCollection**](#queryvectorcollection) | **POST** /api/v3/organizations/{organisation}/ai/vector-db/collections/{collectionId}/query | Semantic Search Query|
|[**uploadVectorDocuments**](#uploadvectordocuments) | **POST** /api/v3/organizations/{organisation}/ai/vector-db/collections/{collectionId}/documents | Upload Documents to Collection|

# **createVectorCollection**
> CreateVectorCollection201Response createVectorCollection(createVectorCollectionRequest)

Creates a new vector database collection (knowledge base category) for semantic search. Collections store documents with embeddings for RAG (Retrieval Augmented Generation).      *      * **Use Cases:**      * - Product documentation (\'docs\')      * - Company policies (\'policies\')      * - Support knowledge base (\'support\')      * - Technical specifications (\'specs\')

### Example

```typescript
import {
    AIVectorDatabaseApi,
    Configuration,
    CreateVectorCollectionRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AIVectorDatabaseApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let createVectorCollectionRequest: CreateVectorCollectionRequest; //

const { status, data } = await apiInstance.createVectorCollection(
    organisation,
    createVectorCollectionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createVectorCollectionRequest** | **CreateVectorCollectionRequest**|  | |
| **organisation** | [**string**] | The organisation ID | defaults to undefined|


### Return type

**CreateVectorCollection201Response**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Collection created successfully |  -  |
|**400** | Invalid request parameters |  -  |
|**403** | Access denied |  -  |
|**409** | Collection with this name already exists |  -  |
|**500** | Failed to create collection |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteVectorCollection**
> DeleteVectorCollection200Response deleteVectorCollection()

Deletes a vector database collection and all its documents. This action cannot be undone.

### Example

```typescript
import {
    AIVectorDatabaseApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AIVectorDatabaseApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let collectionId: string; //The collection ID (default to undefined)

const { status, data } = await apiInstance.deleteVectorCollection(
    organisation,
    collectionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] | The organisation ID | defaults to undefined|
| **collectionId** | [**string**] | The collection ID | defaults to undefined|


### Return type

**DeleteVectorCollection200Response**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Collection deleted successfully |  -  |
|**403** | Access denied |  -  |
|**404** | Collection not found |  -  |
|**500** | Failed to delete collection |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getVectorCollection**
> GetVectorCollection200Response getVectorCollection()

Get detailed information about a specific vector database collection.

### Example

```typescript
import {
    AIVectorDatabaseApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AIVectorDatabaseApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let collectionId: string; //The collection ID (default to undefined)

const { status, data } = await apiInstance.getVectorCollection(
    organisation,
    collectionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] | The organisation ID | defaults to undefined|
| **collectionId** | [**string**] | The collection ID | defaults to undefined|


### Return type

**GetVectorCollection200Response**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Collection details retrieved successfully |  -  |
|**403** | Access denied |  -  |
|**404** | Collection not found |  -  |
|**500** | Failed to retrieve collection |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listVectorCollections**
> ListVectorCollections200Response listVectorCollections()

Lists all vector database collections (knowledge bases) for an organization.

### Example

```typescript
import {
    AIVectorDatabaseApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AIVectorDatabaseApi(configuration);

let organisation: string; //The organisation ID (default to undefined)

const { status, data } = await apiInstance.listVectorCollections(
    organisation
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] | The organisation ID | defaults to undefined|


### Return type

**ListVectorCollections200Response**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Collections retrieved successfully |  -  |
|**403** | Access denied |  -  |
|**500** | Failed to retrieve collections |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **queryVectorCollection**
> QueryVectorCollection200Response queryVectorCollection(queryVectorCollectionRequest)

Performs semantic search on a collection using vector similarity. Returns the most relevant documents based on meaning, not keyword matching.      *      * **Three Search Modes:**      *      * 1. **Text Query** - Provide `query` string, server generates embedding      *    - Query text is embedded using the collection\'s embedding model      *    - Embeddings are cached for repeated queries      *      * 2. **Vector Query** - Provide pre-computed `vector` array      *    - Skip embedding generation (faster)      *    - Useful when you\'ve already embedded the query elsewhere      *    - Vector dimension must match collection (e.g., 1024 for Titan v2)      *      * 3. **Metadata List** - Set `listByMetadata: true` with `filter`      *    - Skip semantic search entirely      *    - Return all documents matching the filter      *    - Supports cursor-based pagination for large datasets      *    - Results ordered by sortBy/sortOrder (default: created_at DESC)      *      * **Filtering:**      * - `filter.exact`: Exact match on metadata fields (AND logic)      * - `filter.contains`: Array contains filter for tags (ANY match)      * - Filters can be combined with semantic search or used alone with listByMetadata      *      * **Pagination (listByMetadata mode only):**      * - Use `cursor` from previous response\'s `nextCursor` to get next page      * - Uses keyset pagination for efficient traversal of large datasets      * - Control sort with `sortBy` and `sortOrder`      *      * **Use Cases:**      * - Find relevant documentation for user questions      * - Power RAG (Retrieval Augmented Generation) in AI assistants      * - Semantic search across knowledge bases      * - List all artifacts by building/worker/tag

### Example

```typescript
import {
    AIVectorDatabaseApi,
    Configuration,
    QueryVectorCollectionRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AIVectorDatabaseApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let collectionId: string; //The collection ID (default to undefined)
let queryVectorCollectionRequest: QueryVectorCollectionRequest; //

const { status, data } = await apiInstance.queryVectorCollection(
    organisation,
    collectionId,
    queryVectorCollectionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **queryVectorCollectionRequest** | **QueryVectorCollectionRequest**|  | |
| **organisation** | [**string**] | The organisation ID | defaults to undefined|
| **collectionId** | [**string**] | The collection ID | defaults to undefined|


### Return type

**QueryVectorCollection200Response**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Search completed successfully |  -  |
|**400** | Invalid request parameters |  -  |
|**403** | Access denied |  -  |
|**404** | Collection not found |  -  |
|**500** | Failed to perform search |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **uploadVectorDocuments**
> UploadVectorDocuments200Response uploadVectorDocuments(uploadVectorDocumentsRequest)

Uploads documents to a vector database collection with automatic embedding generation. Documents are chunked (if needed), embedded using the collection\'s embedding model, and stored.      *      * **Supported Content:**      * - Plain text content      * - URLs to fetch content from      * - Markdown documents      *      * **Metadata:**      * Each document can include metadata (title, source_url, section, tags) that is returned with search results.

### Example

```typescript
import {
    AIVectorDatabaseApi,
    Configuration,
    UploadVectorDocumentsRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AIVectorDatabaseApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let collectionId: string; //The collection ID (default to undefined)
let uploadVectorDocumentsRequest: UploadVectorDocumentsRequest; //

const { status, data } = await apiInstance.uploadVectorDocuments(
    organisation,
    collectionId,
    uploadVectorDocumentsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uploadVectorDocumentsRequest** | **UploadVectorDocumentsRequest**|  | |
| **organisation** | [**string**] | The organisation ID | defaults to undefined|
| **collectionId** | [**string**] | The collection ID | defaults to undefined|


### Return type

**UploadVectorDocuments200Response**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Documents uploaded successfully |  -  |
|**400** | Invalid request parameters |  -  |
|**403** | Access denied |  -  |
|**404** | Collection not found |  -  |
|**500** | Failed to upload documents |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

