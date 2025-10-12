# RulesProxyApi

All URIs are relative to *https://dashboard.quantcdn.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**rulesProxyCreate**](#rulesproxycreate) | **POST** /api/v2/organizations/{organization}/projects/{project}/rules/proxy | Create a proxy rule|
|[**rulesProxyDelete**](#rulesproxydelete) | **DELETE** /api/v2/organizations/{organization}/projects/{project}/rules/proxy/{rule} | Delete a proxy rule|
|[**rulesProxyList**](#rulesproxylist) | **GET** /api/v2/organizations/{organization}/projects/{project}/rules/proxy | List proxy rules|
|[**rulesProxyRead**](#rulesproxyread) | **GET** /api/v2/organizations/{organization}/projects/{project}/rules/proxy/{rule} | Get details of a proxy rule|
|[**rulesProxyUpdate**](#rulesproxyupdate) | **PATCH** /api/v2/organizations/{organization}/projects/{project}/rules/proxy/{rule} | Update a proxy rule|

# **rulesProxyCreate**
> V2RuleProxy rulesProxyCreate(v2RuleProxyRequest)


### Example

```typescript
import {
    RulesProxyApi,
    Configuration,
    V2RuleProxyRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new RulesProxyApi(configuration);

let organization: string; // (default to undefined)
let project: string; // (default to undefined)
let v2RuleProxyRequest: V2RuleProxyRequest; //

const { status, data } = await apiInstance.rulesProxyCreate(
    organization,
    project,
    v2RuleProxyRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v2RuleProxyRequest** | **V2RuleProxyRequest**|  | |
| **organization** | [**string**] |  | defaults to undefined|
| **project** | [**string**] |  | defaults to undefined|


### Return type

**V2RuleProxy**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | The request has succeeded and a new resource has been created as a result. |  -  |
|**400** | The server could not understand the request due to invalid syntax. |  -  |
|**403** | Access is forbidden. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **rulesProxyDelete**
> rulesProxyDelete()


### Example

```typescript
import {
    RulesProxyApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new RulesProxyApi(configuration);

let organization: string; // (default to undefined)
let project: string; // (default to undefined)
let rule: string; // (default to undefined)

const { status, data } = await apiInstance.rulesProxyDelete(
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

# **rulesProxyList**
> Array<V2RuleProxy> rulesProxyList()


### Example

```typescript
import {
    RulesProxyApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new RulesProxyApi(configuration);

let organization: string; // (default to undefined)
let project: string; // (default to undefined)

const { status, data } = await apiInstance.rulesProxyList(
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

**Array<V2RuleProxy>**

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

# **rulesProxyRead**
> V2RuleProxy rulesProxyRead()


### Example

```typescript
import {
    RulesProxyApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new RulesProxyApi(configuration);

let organization: string; // (default to undefined)
let project: string; // (default to undefined)
let rule: string; // (default to undefined)

const { status, data } = await apiInstance.rulesProxyRead(
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

**V2RuleProxy**

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

# **rulesProxyUpdate**
> V2RuleProxy rulesProxyUpdate(v2RuleProxyRequest)


### Example

```typescript
import {
    RulesProxyApi,
    Configuration,
    V2RuleProxyRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new RulesProxyApi(configuration);

let organization: string; // (default to undefined)
let project: string; // (default to undefined)
let rule: string; // (default to undefined)
let v2RuleProxyRequest: V2RuleProxyRequest; //

const { status, data } = await apiInstance.rulesProxyUpdate(
    organization,
    project,
    rule,
    v2RuleProxyRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v2RuleProxyRequest** | **V2RuleProxyRequest**|  | |
| **organization** | [**string**] |  | defaults to undefined|
| **project** | [**string**] |  | defaults to undefined|
| **rule** | [**string**] |  | defaults to undefined|


### Return type

**V2RuleProxy**

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

