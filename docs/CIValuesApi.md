# CIValuesApi

All URIs are relative to *https://dashboard.quantcdn.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteCiValue**](#deletecivalue) | **DELETE** /api/v3/organizations/{organisation}/ci/values/{name} | Delete a CI secret or variable|
|[**listCiValues**](#listcivalues) | **GET** /api/v3/organizations/{organisation}/ci/values | List the CI secrets and variables|
|[**putCiValue**](#putcivalue) | **PUT** /api/v3/organizations/{organisation}/ci/values/{name} | Create or replace a CI secret or variable|

# **deleteCiValue**
> deleteCiValue()

Deletes one value. It answers 204 also when the value does not exist. Needs the cloud:write scope and the delete_applications permission.

### Example

```typescript
import {
    CIValuesApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new CIValuesApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let name: string; //The name, such as DEPLOY_KEY (default to undefined)
let repo: string; //Delete the repository\'s value of this name. Leave out for the organisation\'s value. Lower-cased by the server. (optional) (default to undefined)

const { status, data } = await apiInstance.deleteCiValue(
    organisation,
    name,
    repo
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] | The organisation ID | defaults to undefined|
| **name** | [**string**] | The name, such as DEPLOY_KEY | defaults to undefined|
| **repo** | [**string**] | Delete the repository\&#39;s value of this name. Leave out for the organisation\&#39;s value. Lower-cased by the server. | (optional) defaults to undefined|


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
|**204** | Deleted (or did not exist) |  -  |
|**404** | The organisation does not have CI runners |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listCiValues**
> ListCiValues200Response listCiValues()

Returns the organisation\'s CI values and, without the repo filter, every repository\'s values. A variable carries its value. A secret never does. Quant gives the values to CI jobs on the organisation\'s runner pools as environment variables, so a workflow uses `${{ env.NAME }}` instead of `${{ secrets.NAME }}`. Needs the cloud:read scope and the CI runners feature.

### Example

```typescript
import {
    CIValuesApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new CIValuesApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let repo: string; //Only the organisation\'s values and this repository\'s values. Lower-cased by the server. (optional) (default to undefined)

const { status, data } = await apiInstance.listCiValues(
    organisation,
    repo
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] | The organisation ID | defaults to undefined|
| **repo** | [**string**] | Only the organisation\&#39;s values and this repository\&#39;s values. Lower-cased by the server. | (optional) defaults to undefined|


### Return type

**ListCiValues200Response**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The values |  -  |
|**404** | The organisation does not have CI runners |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putCiValue**
> CiValueWriteResult putCiValue(putCiValueRequest)

Sets one value for the organisation, or for one repository when repo is set. The value is write-only for a secret: the response never carries it. The backend validates the name, the value and the limits and answers 400 with a message. Needs the cloud:write scope and the delete_applications permission.

### Example

```typescript
import {
    CIValuesApi,
    Configuration,
    PutCiValueRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new CIValuesApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let name: string; //The name, such as DEPLOY_KEY (default to undefined)
let putCiValueRequest: PutCiValueRequest; //

const { status, data } = await apiInstance.putCiValue(
    organisation,
    name,
    putCiValueRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **putCiValueRequest** | **PutCiValueRequest**|  | |
| **organisation** | [**string**] | The organisation ID | defaults to undefined|
| **name** | [**string**] | The name, such as DEPLOY_KEY | defaults to undefined|


### Return type

**CiValueWriteResult**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The value is saved |  -  |
|**400** | The name, the value or a limit is not valid |  -  |
|**404** | The organisation does not have CI runners |  -  |
|**422** | The request body has the wrong shape |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

