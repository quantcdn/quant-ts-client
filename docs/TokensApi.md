# TokensApi

All URIs are relative to *https://dashboard.quantcdn.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**tokensCreate**](#tokenscreate) | **POST** /api/v2/organizations/{organization}/tokens | Create a new API token scoped to this organization|
|[**tokensDelete**](#tokensdelete) | **DELETE** /api/v2/organizations/{organization}/tokens/{token_id} | Revoke an API token|
|[**tokensList**](#tokenslist) | **GET** /api/v2/organizations/{organization}/tokens | List API tokens scoped to this organization|

# **tokensCreate**
> TokensCreate201Response tokensCreate(tokensCreateRequest)


### Example

```typescript
import {
    TokensApi,
    Configuration,
    TokensCreateRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new TokensApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let tokensCreateRequest: TokensCreateRequest; //

const { status, data } = await apiInstance.tokensCreate(
    organization,
    tokensCreateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tokensCreateRequest** | **TokensCreateRequest**|  | |
| **organization** | [**string**] | Organization identifier | defaults to undefined|


### Return type

**TokensCreate201Response**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Token created. The plain token is returned once and cannot be retrieved again. |  -  |
|**400** | Bad request. |  -  |
|**403** | Access is forbidden. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tokensDelete**
> TokensDelete200Response tokensDelete()


### Example

```typescript
import {
    TokensApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new TokensApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let tokenId: number; //Token ID to revoke (default to undefined)

const { status, data } = await apiInstance.tokensDelete(
    organization,
    tokenId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organization** | [**string**] | Organization identifier | defaults to undefined|
| **tokenId** | [**number**] | Token ID to revoke | defaults to undefined|


### Return type

**TokensDelete200Response**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Token revoked successfully. |  -  |
|**403** | Access is forbidden. |  -  |
|**404** | Token not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tokensList**
> Array<TokensList200ResponseInner> tokensList()


### Example

```typescript
import {
    TokensApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new TokensApi(configuration);

let organization: string; //Organization identifier (default to undefined)

const { status, data } = await apiInstance.tokensList(
    organization
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organization** | [**string**] | Organization identifier | defaults to undefined|


### Return type

**Array<TokensList200ResponseInner>**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The request has succeeded. |  -  |
|**403** | Access is forbidden. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

