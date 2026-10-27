# PurgeApi

All URIs are relative to *https://dashboard.quantcdn.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**purgeCreate**](#purgecreate) | **POST** /api/v2/organizations/{organization}/projects/{project}/purge | Purge cache via URL or cache keys|

# **purgeCreate**
> PurgeCreate200Response purgeCreate(purgeCreateRequest)


### Example

```typescript
import {
    PurgeApi,
    Configuration,
    PurgeCreateRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new PurgeApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)
let purgeCreateRequest: PurgeCreateRequest; //

const { status, data } = await apiInstance.purgeCreate(
    organization,
    project,
    purgeCreateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **purgeCreateRequest** | **PurgeCreateRequest**|  | |
| **organization** | [**string**] | Organization identifier | defaults to undefined|
| **project** | [**string**] | Project identifier | defaults to undefined|


### Return type

**PurgeCreate200Response**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The purge was accepted. |  -  |
|**400** | Invalid request: no urls or cache_keys, an invalid scope, more than 100 URLs, or a URL that is not a string path starting with a slash. Nothing is purged. |  -  |
|**403** | Access is forbidden. |  -  |
|**502** | The content API did not accept the purge for one or more URLs. The message names those paths; the other URLs were purged. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

