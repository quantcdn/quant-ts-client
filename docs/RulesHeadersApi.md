# RulesHeadersApi

All URIs are relative to *https://dashboard.quantcdn.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**rulesHeadersCreate**](#rulesheaderscreate) | **POST** /api/v2/organizations/{organization}/projects/{project}/rules/headers | Create a header rule|
|[**rulesHeadersDelete**](#rulesheadersdelete) | **DELETE** /api/v2/organizations/{organization}/projects/{project}/rules/headers/{rule} | Delete a header rule|
|[**rulesHeadersList**](#rulesheaderslist) | **GET** /api/v2/organizations/{organization}/projects/{project}/rules/headers | List header rules|
|[**rulesHeadersRead**](#rulesheadersread) | **GET** /api/v2/organizations/{organization}/projects/{project}/rules/headers/{rule} | Get details of a header rule|
|[**rulesHeadersUpdate**](#rulesheadersupdate) | **PATCH** /api/v2/organizations/{organization}/projects/{project}/rules/headers/{rule} | Update a header rule|

# **rulesHeadersCreate**
> V2RuleHeader rulesHeadersCreate(v2RuleHeaderRequest)


### Example

```typescript
import {
    RulesHeadersApi,
    Configuration,
    V2RuleHeaderRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new RulesHeadersApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)
let v2RuleHeaderRequest: V2RuleHeaderRequest; //

const { status, data } = await apiInstance.rulesHeadersCreate(
    organization,
    project,
    v2RuleHeaderRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v2RuleHeaderRequest** | **V2RuleHeaderRequest**|  | |
| **organization** | [**string**] | Organization identifier | defaults to undefined|
| **project** | [**string**] | Project identifier | defaults to undefined|


### Return type

**V2RuleHeader**

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

# **rulesHeadersDelete**
> rulesHeadersDelete()


### Example

```typescript
import {
    RulesHeadersApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new RulesHeadersApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)
let rule: string; //Rule identifier (default to undefined)

const { status, data } = await apiInstance.rulesHeadersDelete(
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

# **rulesHeadersList**
> Array<V2RuleHeader> rulesHeadersList()


### Example

```typescript
import {
    RulesHeadersApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new RulesHeadersApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)

const { status, data } = await apiInstance.rulesHeadersList(
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

**Array<V2RuleHeader>**

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

# **rulesHeadersRead**
> V2RuleHeader rulesHeadersRead()


### Example

```typescript
import {
    RulesHeadersApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new RulesHeadersApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)
let rule: string; //Rule identifier (default to undefined)

const { status, data } = await apiInstance.rulesHeadersRead(
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

**V2RuleHeader**

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

# **rulesHeadersUpdate**
> V2RuleHeader rulesHeadersUpdate(v2RuleHeaderRequest)


### Example

```typescript
import {
    RulesHeadersApi,
    Configuration,
    V2RuleHeaderRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new RulesHeadersApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)
let rule: string; //Rule identifier (default to undefined)
let v2RuleHeaderRequest: V2RuleHeaderRequest; //

const { status, data } = await apiInstance.rulesHeadersUpdate(
    organization,
    project,
    rule,
    v2RuleHeaderRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v2RuleHeaderRequest** | **V2RuleHeaderRequest**|  | |
| **organization** | [**string**] | Organization identifier | defaults to undefined|
| **project** | [**string**] | Project identifier | defaults to undefined|
| **rule** | [**string**] | Rule identifier | defaults to undefined|


### Return type

**V2RuleHeader**

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

