# RulesServeStaticApi

All URIs are relative to *https://dashboard.quantcdn.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**rulesServeStaticCreate**](#rulesservestaticcreate) | **POST** /api/v2/organizations/{organization}/projects/{project}/rules/serve-static | Create a serve static rule|
|[**rulesServeStaticDelete**](#rulesservestaticdelete) | **DELETE** /api/v2/organizations/{organization}/projects/{project}/rules/serve-static/{rule} | Delete a serve static rule|
|[**rulesServeStaticList**](#rulesservestaticlist) | **GET** /api/v2/organizations/{organization}/projects/{project}/rules/serve-static | List serve static rules|
|[**rulesServeStaticRead**](#rulesservestaticread) | **GET** /api/v2/organizations/{organization}/projects/{project}/rules/serve-static/{rule} | Get details of a serve static rule|
|[**rulesServeStaticUpdate**](#rulesservestaticupdate) | **PATCH** /api/v2/organizations/{organization}/projects/{project}/rules/serve-static/{rule} | Update a serve static rule|

# **rulesServeStaticCreate**
> V2RuleServeStatic rulesServeStaticCreate(v2RuleServeStaticRequest)


### Example

```typescript
import {
    RulesServeStaticApi,
    Configuration,
    V2RuleServeStaticRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new RulesServeStaticApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)
let v2RuleServeStaticRequest: V2RuleServeStaticRequest; //

const { status, data } = await apiInstance.rulesServeStaticCreate(
    organization,
    project,
    v2RuleServeStaticRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v2RuleServeStaticRequest** | **V2RuleServeStaticRequest**|  | |
| **organization** | [**string**] | Organization identifier | defaults to undefined|
| **project** | [**string**] | Project identifier | defaults to undefined|


### Return type

**V2RuleServeStatic**

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

# **rulesServeStaticDelete**
> rulesServeStaticDelete()


### Example

```typescript
import {
    RulesServeStaticApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new RulesServeStaticApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)
let rule: string; //Rule identifier (default to undefined)

const { status, data } = await apiInstance.rulesServeStaticDelete(
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

# **rulesServeStaticList**
> Array<V2RuleServeStatic> rulesServeStaticList()


### Example

```typescript
import {
    RulesServeStaticApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new RulesServeStaticApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)

const { status, data } = await apiInstance.rulesServeStaticList(
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

**Array<V2RuleServeStatic>**

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

# **rulesServeStaticRead**
> V2RuleServeStatic rulesServeStaticRead()


### Example

```typescript
import {
    RulesServeStaticApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new RulesServeStaticApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)
let rule: string; //Rule identifier (default to undefined)

const { status, data } = await apiInstance.rulesServeStaticRead(
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

**V2RuleServeStatic**

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

# **rulesServeStaticUpdate**
> V2RuleServeStatic rulesServeStaticUpdate(v2RuleServeStaticRequest)


### Example

```typescript
import {
    RulesServeStaticApi,
    Configuration,
    V2RuleServeStaticRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new RulesServeStaticApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)
let rule: string; //Rule identifier (default to undefined)
let v2RuleServeStaticRequest: V2RuleServeStaticRequest; //

const { status, data } = await apiInstance.rulesServeStaticUpdate(
    organization,
    project,
    rule,
    v2RuleServeStaticRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v2RuleServeStaticRequest** | **V2RuleServeStaticRequest**|  | |
| **organization** | [**string**] | Organization identifier | defaults to undefined|
| **project** | [**string**] | Project identifier | defaults to undefined|
| **rule** | [**string**] | Rule identifier | defaults to undefined|


### Return type

**V2RuleServeStatic**

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

