# RulesFunctionApi

All URIs are relative to *https://dashboard.quantcdn.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**rulesFunctionCreate**](#rulesfunctioncreate) | **POST** /api/v2/organizations/{organization}/projects/{project}/rules/function | Create an edge function rule|
|[**rulesFunctionDelete**](#rulesfunctiondelete) | **DELETE** /api/v2/organizations/{organization}/projects/{project}/rules/function/{rule} | Delete an edge function rule|
|[**rulesFunctionList**](#rulesfunctionlist) | **GET** /api/v2/organizations/{organization}/projects/{project}/rules/function | List edge function rules|
|[**rulesFunctionRead**](#rulesfunctionread) | **GET** /api/v2/organizations/{organization}/projects/{project}/rules/function/{rule} | Get details of an edge function rule|
|[**rulesFunctionUpdate**](#rulesfunctionupdate) | **PATCH** /api/v2/organizations/{organization}/projects/{project}/rules/function/{rule} | Update an edge function rule|

# **rulesFunctionCreate**
> V2RuleFunction rulesFunctionCreate(v2RuleFunctionRequest)


### Example

```typescript
import {
    RulesFunctionApi,
    Configuration,
    V2RuleFunctionRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new RulesFunctionApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)
let v2RuleFunctionRequest: V2RuleFunctionRequest; //

const { status, data } = await apiInstance.rulesFunctionCreate(
    organization,
    project,
    v2RuleFunctionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v2RuleFunctionRequest** | **V2RuleFunctionRequest**|  | |
| **organization** | [**string**] | Organization identifier | defaults to undefined|
| **project** | [**string**] | Project identifier | defaults to undefined|


### Return type

**V2RuleFunction**

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

# **rulesFunctionDelete**
> rulesFunctionDelete()


### Example

```typescript
import {
    RulesFunctionApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new RulesFunctionApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)
let rule: string; //Rule identifier (default to undefined)

const { status, data } = await apiInstance.rulesFunctionDelete(
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

# **rulesFunctionList**
> Array<V2RuleFunction> rulesFunctionList()


### Example

```typescript
import {
    RulesFunctionApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new RulesFunctionApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)

const { status, data } = await apiInstance.rulesFunctionList(
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

**Array<V2RuleFunction>**

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

# **rulesFunctionRead**
> V2RuleFunction rulesFunctionRead()


### Example

```typescript
import {
    RulesFunctionApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new RulesFunctionApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)
let rule: string; //Rule identifier (default to undefined)

const { status, data } = await apiInstance.rulesFunctionRead(
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

**V2RuleFunction**

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

# **rulesFunctionUpdate**
> V2RuleFunction rulesFunctionUpdate(v2RuleFunctionRequest)


### Example

```typescript
import {
    RulesFunctionApi,
    Configuration,
    V2RuleFunctionRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new RulesFunctionApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)
let rule: string; //Rule identifier (default to undefined)
let v2RuleFunctionRequest: V2RuleFunctionRequest; //

const { status, data } = await apiInstance.rulesFunctionUpdate(
    organization,
    project,
    rule,
    v2RuleFunctionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v2RuleFunctionRequest** | **V2RuleFunctionRequest**|  | |
| **organization** | [**string**] | Organization identifier | defaults to undefined|
| **project** | [**string**] | Project identifier | defaults to undefined|
| **rule** | [**string**] | Rule identifier | defaults to undefined|


### Return type

**V2RuleFunction**

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

