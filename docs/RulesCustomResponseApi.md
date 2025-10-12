# RulesCustomResponseApi

All URIs are relative to *https://dashboard.quantcdn.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**rulesCustomResponseCreate**](#rulescustomresponsecreate) | **POST** /api/v2/organizations/{organization}/projects/{project}/rules/custom-response | Create a custom response rule|
|[**rulesCustomResponseDelete**](#rulescustomresponsedelete) | **DELETE** /api/v2/organizations/{organization}/projects/{project}/rules/custom-response/{rule} | Delete a custom response rule|
|[**rulesCustomResponseList**](#rulescustomresponselist) | **GET** /api/v2/organizations/{organization}/projects/{project}/rules/custom-response | List custom response rules|
|[**rulesCustomResponseRead**](#rulescustomresponseread) | **GET** /api/v2/organizations/{organization}/projects/{project}/rules/custom-response/{rule} | Get details of a custom response rule|
|[**rulesCustomResponseUpdate**](#rulescustomresponseupdate) | **PATCH** /api/v2/organizations/{organization}/projects/{project}/rules/custom-response/{rule} | Update a custom response rule|

# **rulesCustomResponseCreate**
> V2RuleCustomResponse rulesCustomResponseCreate(v2RuleCustomResponseRequest)


### Example

```typescript
import {
    RulesCustomResponseApi,
    Configuration,
    V2RuleCustomResponseRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new RulesCustomResponseApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)
let v2RuleCustomResponseRequest: V2RuleCustomResponseRequest; //

const { status, data } = await apiInstance.rulesCustomResponseCreate(
    organization,
    project,
    v2RuleCustomResponseRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v2RuleCustomResponseRequest** | **V2RuleCustomResponseRequest**|  | |
| **organization** | [**string**] | Organization identifier | defaults to undefined|
| **project** | [**string**] | Project identifier | defaults to undefined|


### Return type

**V2RuleCustomResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The request has succeeded. |  -  |
|**400** | The server could not understand the request due to invalid syntax. |  -  |
|**403** | Access is forbidden. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **rulesCustomResponseDelete**
> rulesCustomResponseDelete()


### Example

```typescript
import {
    RulesCustomResponseApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new RulesCustomResponseApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)
let rule: string; //Rule identifier (default to undefined)

const { status, data } = await apiInstance.rulesCustomResponseDelete(
    organization,
    project,
    rule
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organization** | [**string**] | Organization identifier | defaults to undefined|
| **project** | [**string**] | Project identifier | defaults to undefined|
| **rule** | [**string**] | Rule identifier | defaults to undefined|


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | The request has succeeded. |  -  |
|**400** | The server could not understand the request due to invalid syntax. |  -  |
|**403** | Access is forbidden. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **rulesCustomResponseList**
> Array<V2RuleCustomResponse> rulesCustomResponseList()


### Example

```typescript
import {
    RulesCustomResponseApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new RulesCustomResponseApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)

const { status, data } = await apiInstance.rulesCustomResponseList(
    organization,
    project
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organization** | [**string**] | Organization identifier | defaults to undefined|
| **project** | [**string**] | Project identifier | defaults to undefined|


### Return type

**Array<V2RuleCustomResponse>**

### Authorization

No authorization required

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

# **rulesCustomResponseRead**
> V2RuleCustomResponse rulesCustomResponseRead()


### Example

```typescript
import {
    RulesCustomResponseApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new RulesCustomResponseApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)
let rule: string; //Rule identifier (default to undefined)

const { status, data } = await apiInstance.rulesCustomResponseRead(
    organization,
    project,
    rule
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organization** | [**string**] | Organization identifier | defaults to undefined|
| **project** | [**string**] | Project identifier | defaults to undefined|
| **rule** | [**string**] | Rule identifier | defaults to undefined|


### Return type

**V2RuleCustomResponse**

### Authorization

No authorization required

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

# **rulesCustomResponseUpdate**
> V2RuleCustomResponse rulesCustomResponseUpdate(v2RuleCustomResponseRequest)


### Example

```typescript
import {
    RulesCustomResponseApi,
    Configuration,
    V2RuleCustomResponseRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new RulesCustomResponseApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)
let rule: string; //Rule identifier (default to undefined)
let v2RuleCustomResponseRequest: V2RuleCustomResponseRequest; //

const { status, data } = await apiInstance.rulesCustomResponseUpdate(
    organization,
    project,
    rule,
    v2RuleCustomResponseRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v2RuleCustomResponseRequest** | **V2RuleCustomResponseRequest**|  | |
| **organization** | [**string**] | Organization identifier | defaults to undefined|
| **project** | [**string**] | Project identifier | defaults to undefined|
| **rule** | [**string**] | Rule identifier | defaults to undefined|


### Return type

**V2RuleCustomResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The request has succeeded. |  -  |
|**400** | The server could not understand the request due to invalid syntax. |  -  |
|**403** | Access is forbidden. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

