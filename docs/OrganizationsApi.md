# OrganizationsApi

All URIs are relative to *https://dashboard.quantcdn.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**organizationsList**](#organizationslist) | **GET** /api/v2/organizations | Retrieve all organizations|
|[**organizationsRead**](#organizationsread) | **GET** /api/v2/organizations/{organization} | Get details of a single organization|

# **organizationsList**
> Array<OrganizationsList200ResponseInner> organizationsList()


### Example

```typescript
import {
    OrganizationsApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new OrganizationsApi(configuration);

const { status, data } = await apiInstance.organizationsList();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<OrganizationsList200ResponseInner>**

### Authorization

[BearerAuth](../README.md#BearerAuth)

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

# **organizationsRead**
> V2Organization organizationsRead()


### Example

```typescript
import {
    OrganizationsApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new OrganizationsApi(configuration);

let organization: string; // (default to undefined)

const { status, data } = await apiInstance.organizationsRead(
    organization
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organization** | [**string**] |  | defaults to undefined|


### Return type

**V2Organization**

### Authorization

[BearerAuth](../README.md#BearerAuth)

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

