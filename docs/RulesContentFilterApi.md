# RulesContentFilterApi

All URIs are relative to *https://dashboard.quantcdn.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**rulesContentFilterCreate**](#rulescontentfiltercreate) | **POST** /api/v2/organizations/{organization}/projects/{project}/rules/content-filter | Create a content filter rule|
|[**rulesContentFilterDelete**](#rulescontentfilterdelete) | **DELETE** /api/v2/organizations/{organization}/projects/{project}/rules/content-filter/{rule} | Delete a content filter rule|
|[**rulesContentFilterList**](#rulescontentfilterlist) | **GET** /api/v2/organizations/{organization}/projects/{project}/rules/content-filter | List content filter rules|
|[**rulesContentFilterRead**](#rulescontentfilterread) | **GET** /api/v2/organizations/{organization}/projects/{project}/rules/content-filter/{rule} | Get details of a content filter rule|
|[**rulesContentFilterUpdate**](#rulescontentfilterupdate) | **PATCH** /api/v2/organizations/{organization}/projects/{project}/rules/content-filter/{rule} | Update a content filter rule|

# **rulesContentFilterCreate**
> V2RuleContentFilter rulesContentFilterCreate(v2RuleContentFilterRequest)


### Example

```typescript
import {
    RulesContentFilterApi,
    Configuration,
    V2RuleContentFilterRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new RulesContentFilterApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)
let v2RuleContentFilterRequest: V2RuleContentFilterRequest; //

const { status, data } = await apiInstance.rulesContentFilterCreate(
    organization,
    project,
    v2RuleContentFilterRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v2RuleContentFilterRequest** | **V2RuleContentFilterRequest**|  | |
| **organization** | [**string**] | Organization identifier | defaults to undefined|
| **project** | [**string**] | Project identifier | defaults to undefined|


### Return type

**V2RuleContentFilter**

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

# **rulesContentFilterDelete**
> rulesContentFilterDelete()


### Example

```typescript
import {
    RulesContentFilterApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new RulesContentFilterApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)
let rule: string; //Rule identifier (default to undefined)

const { status, data } = await apiInstance.rulesContentFilterDelete(
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

# **rulesContentFilterList**
> Array<V2RuleContentFilter> rulesContentFilterList()


### Example

```typescript
import {
    RulesContentFilterApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new RulesContentFilterApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)

const { status, data } = await apiInstance.rulesContentFilterList(
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

**Array<V2RuleContentFilter>**

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

# **rulesContentFilterRead**
> V2RuleContentFilter rulesContentFilterRead()


### Example

```typescript
import {
    RulesContentFilterApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new RulesContentFilterApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)
let rule: string; //Rule identifier (default to undefined)

const { status, data } = await apiInstance.rulesContentFilterRead(
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

**V2RuleContentFilter**

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

# **rulesContentFilterUpdate**
> V2RuleContentFilter rulesContentFilterUpdate(v2RuleContentFilterRequest)


### Example

```typescript
import {
    RulesContentFilterApi,
    Configuration,
    V2RuleContentFilterRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new RulesContentFilterApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)
let rule: string; //Rule identifier (default to undefined)
let v2RuleContentFilterRequest: V2RuleContentFilterRequest; //

const { status, data } = await apiInstance.rulesContentFilterUpdate(
    organization,
    project,
    rule,
    v2RuleContentFilterRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v2RuleContentFilterRequest** | **V2RuleContentFilterRequest**|  | |
| **organization** | [**string**] | Organization identifier | defaults to undefined|
| **project** | [**string**] | Project identifier | defaults to undefined|
| **rule** | [**string**] | Rule identifier | defaults to undefined|


### Return type

**V2RuleContentFilter**

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

