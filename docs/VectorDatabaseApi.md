# VectorDatabaseApi

All URIs are relative to *https://dashboard.quantcdn.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**listVectorDocuments**](#listvectordocuments) | **GET** /api/v3/organizations/{organisation}/ai/vector-db/collections/{collectionId}/documents | List Documents in Collection|

# **listVectorDocuments**
> listVectorDocuments()

Lists documents in a collection with pagination. Supports filtering by document key.

### Example

```typescript
import {
    VectorDatabaseApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new VectorDatabaseApi(configuration);

let organisation: string; // (default to undefined)
let collectionId: string; // (default to undefined)
let key: string; //Filter by document key (optional) (default to undefined)
let limit: number; // (optional) (default to 50)
let offset: number; // (optional) (default to 0)

const { status, data } = await apiInstance.listVectorDocuments(
    organisation,
    collectionId,
    key,
    limit,
    offset
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] |  | defaults to undefined|
| **collectionId** | [**string**] |  | defaults to undefined|
| **key** | [**string**] | Filter by document key | (optional) defaults to undefined|
| **limit** | [**number**] |  | (optional) defaults to 50|
| **offset** | [**number**] |  | (optional) defaults to 0|


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
|**200** | Documents retrieved successfully |  -  |
|**403** | Access denied |  -  |
|**404** | Collection not found |  -  |
|**500** | Failed to list documents |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

