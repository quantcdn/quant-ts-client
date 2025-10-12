# FormsApi

All URIs are relative to *https://dashboard.quantcdn.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**listFormSubmissions**](#listformsubmissions) | **POST** /api/v1/form-submissions | List form submissions|

# **listFormSubmissions**
> V1FormSubmissionListResponse listFormSubmissions()

Retrieve form submissions via API.

### Example

```typescript
import {
    FormsApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new FormsApi(configuration);

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

