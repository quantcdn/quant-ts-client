# RulesRedirectApi

All URIs are relative to *https://dashboard.quantcdn.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**rulesRedirectCreate**](#rulesredirectcreate) | **POST** /api/v2/organizations/{organization}/projects/{project}/rules/redirect | Create a redirect rule|
|[**rulesRedirectDelete**](#rulesredirectdelete) | **DELETE** /api/v2/organizations/{organization}/projects/{project}/rules/redirect/{rule} | Delete a redirect rule|
|[**rulesRedirectList**](#rulesredirectlist) | **GET** /api/v2/organizations/{organization}/projects/{project}/rules/redirect | List redirect rules|
|[**rulesRedirectRead**](#rulesredirectread) | **GET** /api/v2/organizations/{organization}/projects/{project}/rules/redirect/{rule} | Get details of a redirect rule|
|[**rulesRedirectUpdate**](#rulesredirectupdate) | **PATCH** /api/v2/organizations/{organization}/projects/{project}/rules/redirect/{rule} | Update a redirect rule|

# **rulesRedirectCreate**
> V2RuleRedirect rulesRedirectCreate(v2RuleRedirectRequest)


### Example

```typescript
import {
    RulesRedirectApi,
    Configuration,
    V2RuleRedirectRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new RulesRedirectApi(configuration);

let organization: string; // (default to undefined)
let project: string; // (default to undefined)
let v2RuleRedirectRequest: V2RuleRedirectRequest; //

const { status, data } = await apiInstance.rulesRedirectCreate(
    organization,
    project,
    v2RuleRedirectRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v2RuleRedirectRequest** | **V2RuleRedirectRequest**|  | |
| **organization** | [**string**] |  | defaults to undefined|
| **project** | [**string**] |  | defaults to undefined|


### Return type

**V2RuleRedirect**

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

# **rulesRedirectDelete**
> rulesRedirectDelete()


### Example

```typescript
import {
    RulesRedirectApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new RulesRedirectApi(configuration);

let organization: string; // (default to undefined)
let project: string; // (default to undefined)
let rule: string; // (default to undefined)

const { status, data } = await apiInstance.rulesRedirectDelete(
    organization,
    project,
    rule
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organization** | [**string**] |  | defaults to undefined|
| **project** | [**string**] |  | defaults to undefined|
| **rule** | [**string**] |  | defaults to undefined|


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

# **rulesRedirectList**
> Array<V2RuleRedirect> rulesRedirectList()


### Example

```typescript
import {
    RulesRedirectApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new RulesRedirectApi(configuration);

let organization: string; // (default to undefined)
let project: string; // (default to undefined)

const { status, data } = await apiInstance.rulesRedirectList(
    organization,
    project
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organization** | [**string**] |  | defaults to undefined|
| **project** | [**string**] |  | defaults to undefined|


### Return type

**Array<V2RuleRedirect>**

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

# **rulesRedirectRead**
> V2RuleRedirect rulesRedirectRead()


### Example

```typescript
import {
    RulesRedirectApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new RulesRedirectApi(configuration);

let organization: string; // (default to undefined)
let project: string; // (default to undefined)
let rule: string; // (default to undefined)

const { status, data } = await apiInstance.rulesRedirectRead(
    organization,
    project,
    rule
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organization** | [**string**] |  | defaults to undefined|
| **project** | [**string**] |  | defaults to undefined|
| **rule** | [**string**] |  | defaults to undefined|


### Return type

**V2RuleRedirect**

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

# **rulesRedirectUpdate**
> V2RuleRedirect rulesRedirectUpdate(v2RuleRedirectRequest)


### Example

```typescript
import {
    RulesRedirectApi,
    Configuration,
    V2RuleRedirectRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new RulesRedirectApi(configuration);

let organization: string; // (default to undefined)
let project: string; // (default to undefined)
let rule: string; // (default to undefined)
let v2RuleRedirectRequest: V2RuleRedirectRequest; //

const { status, data } = await apiInstance.rulesRedirectUpdate(
    organization,
    project,
    rule,
    v2RuleRedirectRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v2RuleRedirectRequest** | **V2RuleRedirectRequest**|  | |
| **organization** | [**string**] |  | defaults to undefined|
| **project** | [**string**] |  | defaults to undefined|
| **rule** | [**string**] |  | defaults to undefined|


### Return type

**V2RuleRedirect**

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

