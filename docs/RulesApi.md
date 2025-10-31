# RulesApi

All URIs are relative to *https://dashboard.quantcdn.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**rulesAuthCreate**](#rulesauthcreate) | **POST** /api/v2/organizations/{organization}/projects/{project}/rules/auth | Create an authentication rule|
|[**rulesAuthDelete**](#rulesauthdelete) | **DELETE** /api/v2/organizations/{organization}/projects/{project}/rules/auth/{rule} | Delete an authentication rule|
|[**rulesAuthList**](#rulesauthlist) | **GET** /api/v2/organizations/{organization}/projects/{project}/rules/auth | List authentication rules|
|[**rulesAuthRead**](#rulesauthread) | **GET** /api/v2/organizations/{organization}/projects/{project}/rules/auth/{rule} | Get details of an authentication rule|
|[**rulesAuthUpdate**](#rulesauthupdate) | **PATCH** /api/v2/organizations/{organization}/projects/{project}/rules/auth/{rule} | Update an authentication rule|
|[**rulesBotChallengeCreate**](#rulesbotchallengecreate) | **POST** /api/v2/organizations/{organization}/projects/{project}/rules/bot-challenge | Create a bot challenge rule|
|[**rulesBotChallengeDelete**](#rulesbotchallengedelete) | **DELETE** /api/v2/organizations/{organization}/projects/{project}/rules/bot-challenge/{rule} | Delete a bot challenge rule|
|[**rulesBotChallengeList**](#rulesbotchallengelist) | **GET** /api/v2/organizations/{organization}/projects/{project}/rules/bot-challenge | List bot challenge rules|
|[**rulesBotChallengeRead**](#rulesbotchallengeread) | **GET** /api/v2/organizations/{organization}/projects/{project}/rules/bot-challenge/{rule} | Get details of a bot challenge rule|
|[**rulesBotChallengeUpdate**](#rulesbotchallengeupdate) | **PATCH** /api/v2/organizations/{organization}/projects/{project}/rules/bot-challenge/{rule} | Update a bot challenge rule|
|[**rulesContentFilterCreate**](#rulescontentfiltercreate) | **POST** /api/v2/organizations/{organization}/projects/{project}/rules/content-filter | Create a content filter rule|
|[**rulesContentFilterDelete**](#rulescontentfilterdelete) | **DELETE** /api/v2/organizations/{organization}/projects/{project}/rules/content-filter/{rule} | Delete a content filter rule|
|[**rulesContentFilterList**](#rulescontentfilterlist) | **GET** /api/v2/organizations/{organization}/projects/{project}/rules/content-filter | List content filter rules|
|[**rulesContentFilterRead**](#rulescontentfilterread) | **GET** /api/v2/organizations/{organization}/projects/{project}/rules/content-filter/{rule} | Get details of a content filter rule|
|[**rulesContentFilterUpdate**](#rulescontentfilterupdate) | **PATCH** /api/v2/organizations/{organization}/projects/{project}/rules/content-filter/{rule} | Update a content filter rule|
|[**rulesCustomResponseCreate**](#rulescustomresponsecreate) | **POST** /api/v2/organizations/{organization}/projects/{project}/rules/custom-response | Create a custom response rule|
|[**rulesCustomResponseDelete**](#rulescustomresponsedelete) | **DELETE** /api/v2/organizations/{organization}/projects/{project}/rules/custom-response/{rule} | Delete a custom response rule|
|[**rulesCustomResponseList**](#rulescustomresponselist) | **GET** /api/v2/organizations/{organization}/projects/{project}/rules/custom-response | List custom response rules|
|[**rulesCustomResponseRead**](#rulescustomresponseread) | **GET** /api/v2/organizations/{organization}/projects/{project}/rules/custom-response/{rule} | Get details of a custom response rule|
|[**rulesCustomResponseUpdate**](#rulescustomresponseupdate) | **PATCH** /api/v2/organizations/{organization}/projects/{project}/rules/custom-response/{rule} | Update a custom response rule|
|[**rulesFunctionCreate**](#rulesfunctioncreate) | **POST** /api/v2/organizations/{organization}/projects/{project}/rules/function | Create an edge function rule|
|[**rulesFunctionDelete**](#rulesfunctiondelete) | **DELETE** /api/v2/organizations/{organization}/projects/{project}/rules/function/{rule} | Delete an edge function rule|
|[**rulesFunctionList**](#rulesfunctionlist) | **GET** /api/v2/organizations/{organization}/projects/{project}/rules/function | List edge function rules|
|[**rulesFunctionRead**](#rulesfunctionread) | **GET** /api/v2/organizations/{organization}/projects/{project}/rules/function/{rule} | Get details of an edge function rule|
|[**rulesFunctionUpdate**](#rulesfunctionupdate) | **PATCH** /api/v2/organizations/{organization}/projects/{project}/rules/function/{rule} | Update an edge function rule|
|[**rulesHeadersCreate**](#rulesheaderscreate) | **POST** /api/v2/organizations/{organization}/projects/{project}/rules/headers | Create a header rule|
|[**rulesHeadersDelete**](#rulesheadersdelete) | **DELETE** /api/v2/organizations/{organization}/projects/{project}/rules/headers/{rule} | Delete a header rule|
|[**rulesHeadersList**](#rulesheaderslist) | **GET** /api/v2/organizations/{organization}/projects/{project}/rules/headers | List header rules|
|[**rulesHeadersRead**](#rulesheadersread) | **GET** /api/v2/organizations/{organization}/projects/{project}/rules/headers/{rule} | Get details of a header rule|
|[**rulesHeadersUpdate**](#rulesheadersupdate) | **PATCH** /api/v2/organizations/{organization}/projects/{project}/rules/headers/{rule} | Update a header rule|
|[**rulesProxyCreate**](#rulesproxycreate) | **POST** /api/v2/organizations/{organization}/projects/{project}/rules/proxy | Create a proxy rule|
|[**rulesProxyDelete**](#rulesproxydelete) | **DELETE** /api/v2/organizations/{organization}/projects/{project}/rules/proxy/{rule} | Delete a proxy rule|
|[**rulesProxyList**](#rulesproxylist) | **GET** /api/v2/organizations/{organization}/projects/{project}/rules/proxy | List proxy rules|
|[**rulesProxyRead**](#rulesproxyread) | **GET** /api/v2/organizations/{organization}/projects/{project}/rules/proxy/{rule} | Get details of a proxy rule|
|[**rulesProxyUpdate**](#rulesproxyupdate) | **PATCH** /api/v2/organizations/{organization}/projects/{project}/rules/proxy/{rule} | Update a proxy rule|
|[**rulesRedirectCreate**](#rulesredirectcreate) | **POST** /api/v2/organizations/{organization}/projects/{project}/rules/redirect | Create a redirect rule|
|[**rulesRedirectDelete**](#rulesredirectdelete) | **DELETE** /api/v2/organizations/{organization}/projects/{project}/rules/redirect/{rule} | Delete a redirect rule|
|[**rulesRedirectList**](#rulesredirectlist) | **GET** /api/v2/organizations/{organization}/projects/{project}/rules/redirect | List redirect rules|
|[**rulesRedirectRead**](#rulesredirectread) | **GET** /api/v2/organizations/{organization}/projects/{project}/rules/redirect/{rule} | Get details of a redirect rule|
|[**rulesRedirectUpdate**](#rulesredirectupdate) | **PATCH** /api/v2/organizations/{organization}/projects/{project}/rules/redirect/{rule} | Update a redirect rule|
|[**rulesServeStaticCreate**](#rulesservestaticcreate) | **POST** /api/v2/organizations/{organization}/projects/{project}/rules/serve-static | Create a serve static rule|
|[**rulesServeStaticDelete**](#rulesservestaticdelete) | **DELETE** /api/v2/organizations/{organization}/projects/{project}/rules/serve-static/{rule} | Delete a serve static rule|
|[**rulesServeStaticList**](#rulesservestaticlist) | **GET** /api/v2/organizations/{organization}/projects/{project}/rules/serve-static | List serve static rules|
|[**rulesServeStaticRead**](#rulesservestaticread) | **GET** /api/v2/organizations/{organization}/projects/{project}/rules/serve-static/{rule} | Get details of a serve static rule|
|[**rulesServeStaticUpdate**](#rulesservestaticupdate) | **PATCH** /api/v2/organizations/{organization}/projects/{project}/rules/serve-static/{rule} | Update a serve static rule|

# **rulesAuthCreate**
> V2RuleAuth rulesAuthCreate(v2RuleAuthRequest)


### Example

```typescript
import {
    RulesApi,
    Configuration,
    V2RuleAuthRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new RulesApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)
let v2RuleAuthRequest: V2RuleAuthRequest; //

const { status, data } = await apiInstance.rulesAuthCreate(
    organization,
    project,
    v2RuleAuthRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v2RuleAuthRequest** | **V2RuleAuthRequest**|  | |
| **organization** | [**string**] | Organization identifier | defaults to undefined|
| **project** | [**string**] | Project identifier | defaults to undefined|


### Return type

**V2RuleAuth**

### Authorization

[BearerAuth](../README.md#BearerAuth)

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

# **rulesAuthDelete**
> rulesAuthDelete()


### Example

```typescript
import {
    RulesApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new RulesApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)
let rule: string; //Rule identifier (default to undefined)

const { status, data } = await apiInstance.rulesAuthDelete(
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

[BearerAuth](../README.md#BearerAuth)

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

# **rulesAuthList**
> Array<V2RuleAuth> rulesAuthList()


### Example

```typescript
import {
    RulesApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new RulesApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)

const { status, data } = await apiInstance.rulesAuthList(
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

**Array<V2RuleAuth>**

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

# **rulesAuthRead**
> V2RuleAuth rulesAuthRead()


### Example

```typescript
import {
    RulesApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new RulesApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)
let rule: string; //Rule identifier (default to undefined)

const { status, data } = await apiInstance.rulesAuthRead(
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

**V2RuleAuth**

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

# **rulesAuthUpdate**
> V2RuleAuth rulesAuthUpdate(v2RuleAuthRequest)


### Example

```typescript
import {
    RulesApi,
    Configuration,
    V2RuleAuthRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new RulesApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)
let rule: string; //Rule identifier (default to undefined)
let v2RuleAuthRequest: V2RuleAuthRequest; //

const { status, data } = await apiInstance.rulesAuthUpdate(
    organization,
    project,
    rule,
    v2RuleAuthRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v2RuleAuthRequest** | **V2RuleAuthRequest**|  | |
| **organization** | [**string**] | Organization identifier | defaults to undefined|
| **project** | [**string**] | Project identifier | defaults to undefined|
| **rule** | [**string**] | Rule identifier | defaults to undefined|


### Return type

**V2RuleAuth**

### Authorization

[BearerAuth](../README.md#BearerAuth)

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

# **rulesBotChallengeCreate**
> V2RuleBotChallenge rulesBotChallengeCreate(v2RuleBotChallengeRequest)


### Example

```typescript
import {
    RulesApi,
    Configuration,
    V2RuleBotChallengeRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new RulesApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)
let v2RuleBotChallengeRequest: V2RuleBotChallengeRequest; //

const { status, data } = await apiInstance.rulesBotChallengeCreate(
    organization,
    project,
    v2RuleBotChallengeRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v2RuleBotChallengeRequest** | **V2RuleBotChallengeRequest**|  | |
| **organization** | [**string**] | Organization identifier | defaults to undefined|
| **project** | [**string**] | Project identifier | defaults to undefined|


### Return type

**V2RuleBotChallenge**

### Authorization

[BearerAuth](../README.md#BearerAuth)

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

# **rulesBotChallengeDelete**
> rulesBotChallengeDelete()


### Example

```typescript
import {
    RulesApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new RulesApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)
let rule: string; //Rule identifier (default to undefined)

const { status, data } = await apiInstance.rulesBotChallengeDelete(
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

[BearerAuth](../README.md#BearerAuth)

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

# **rulesBotChallengeList**
> Array<V2RuleBotChallenge> rulesBotChallengeList()


### Example

```typescript
import {
    RulesApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new RulesApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)

const { status, data } = await apiInstance.rulesBotChallengeList(
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

**Array<V2RuleBotChallenge>**

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

# **rulesBotChallengeRead**
> V2RuleBotChallenge rulesBotChallengeRead()


### Example

```typescript
import {
    RulesApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new RulesApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)
let rule: string; //Rule identifier (default to undefined)

const { status, data } = await apiInstance.rulesBotChallengeRead(
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

**V2RuleBotChallenge**

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

# **rulesBotChallengeUpdate**
> V2RuleBotChallenge rulesBotChallengeUpdate(v2RuleBotChallengeRequest)


### Example

```typescript
import {
    RulesApi,
    Configuration,
    V2RuleBotChallengeRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new RulesApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)
let rule: string; //Rule identifier (default to undefined)
let v2RuleBotChallengeRequest: V2RuleBotChallengeRequest; //

const { status, data } = await apiInstance.rulesBotChallengeUpdate(
    organization,
    project,
    rule,
    v2RuleBotChallengeRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v2RuleBotChallengeRequest** | **V2RuleBotChallengeRequest**|  | |
| **organization** | [**string**] | Organization identifier | defaults to undefined|
| **project** | [**string**] | Project identifier | defaults to undefined|
| **rule** | [**string**] | Rule identifier | defaults to undefined|


### Return type

**V2RuleBotChallenge**

### Authorization

[BearerAuth](../README.md#BearerAuth)

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

# **rulesContentFilterCreate**
> V2RuleContentFilter rulesContentFilterCreate(v2RuleContentFilterRequest)


### Example

```typescript
import {
    RulesApi,
    Configuration,
    V2RuleContentFilterRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new RulesApi(configuration);

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

[BearerAuth](../README.md#BearerAuth)

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
    RulesApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new RulesApi(configuration);

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

[BearerAuth](../README.md#BearerAuth)

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
    RulesApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new RulesApi(configuration);

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

# **rulesContentFilterRead**
> V2RuleContentFilter rulesContentFilterRead()


### Example

```typescript
import {
    RulesApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new RulesApi(configuration);

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

# **rulesContentFilterUpdate**
> V2RuleContentFilter rulesContentFilterUpdate(v2RuleContentFilterRequest)


### Example

```typescript
import {
    RulesApi,
    Configuration,
    V2RuleContentFilterRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new RulesApi(configuration);

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

[BearerAuth](../README.md#BearerAuth)

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

# **rulesCustomResponseCreate**
> V2RuleCustomResponse rulesCustomResponseCreate(v2RuleCustomResponseRequest)


### Example

```typescript
import {
    RulesApi,
    Configuration,
    V2RuleCustomResponseRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new RulesApi(configuration);

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

[BearerAuth](../README.md#BearerAuth)

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
    RulesApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new RulesApi(configuration);

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

[BearerAuth](../README.md#BearerAuth)

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
    RulesApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new RulesApi(configuration);

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

# **rulesCustomResponseRead**
> V2RuleCustomResponse rulesCustomResponseRead()


### Example

```typescript
import {
    RulesApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new RulesApi(configuration);

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

# **rulesCustomResponseUpdate**
> V2RuleCustomResponse rulesCustomResponseUpdate(v2RuleCustomResponseRequest)


### Example

```typescript
import {
    RulesApi,
    Configuration,
    V2RuleCustomResponseRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new RulesApi(configuration);

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

[BearerAuth](../README.md#BearerAuth)

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

# **rulesFunctionCreate**
> V2RuleFunction rulesFunctionCreate(v2RuleFunctionRequest)


### Example

```typescript
import {
    RulesApi,
    Configuration,
    V2RuleFunctionRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new RulesApi(configuration);

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

[BearerAuth](../README.md#BearerAuth)

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
    RulesApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new RulesApi(configuration);

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

[BearerAuth](../README.md#BearerAuth)

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
    RulesApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new RulesApi(configuration);

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

# **rulesFunctionRead**
> V2RuleFunction rulesFunctionRead()


### Example

```typescript
import {
    RulesApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new RulesApi(configuration);

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

# **rulesFunctionUpdate**
> V2RuleFunction rulesFunctionUpdate(v2RuleFunctionRequest)


### Example

```typescript
import {
    RulesApi,
    Configuration,
    V2RuleFunctionRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new RulesApi(configuration);

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

[BearerAuth](../README.md#BearerAuth)

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

# **rulesHeadersCreate**
> V2RuleHeader rulesHeadersCreate(v2RuleHeaderRequest)


### Example

```typescript
import {
    RulesApi,
    Configuration,
    V2RuleHeaderRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new RulesApi(configuration);

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

[BearerAuth](../README.md#BearerAuth)

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
    RulesApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new RulesApi(configuration);

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

[BearerAuth](../README.md#BearerAuth)

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
    RulesApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new RulesApi(configuration);

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

# **rulesHeadersRead**
> V2RuleHeader rulesHeadersRead()


### Example

```typescript
import {
    RulesApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new RulesApi(configuration);

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

# **rulesHeadersUpdate**
> V2RuleHeader rulesHeadersUpdate(v2RuleHeaderRequest)


### Example

```typescript
import {
    RulesApi,
    Configuration,
    V2RuleHeaderRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new RulesApi(configuration);

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

[BearerAuth](../README.md#BearerAuth)

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

# **rulesProxyCreate**
> V2RuleProxy rulesProxyCreate(v2RuleProxyRequest)


### Example

```typescript
import {
    RulesApi,
    Configuration,
    V2RuleProxyRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new RulesApi(configuration);

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

[BearerAuth](../README.md#BearerAuth)

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
    RulesApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new RulesApi(configuration);

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

[BearerAuth](../README.md#BearerAuth)

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
    RulesApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new RulesApi(configuration);

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

# **rulesProxyRead**
> V2RuleProxy rulesProxyRead()


### Example

```typescript
import {
    RulesApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new RulesApi(configuration);

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

# **rulesProxyUpdate**
> V2RuleProxy rulesProxyUpdate(v2RuleProxyRequest)


### Example

```typescript
import {
    RulesApi,
    Configuration,
    V2RuleProxyRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new RulesApi(configuration);

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

[BearerAuth](../README.md#BearerAuth)

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

# **rulesRedirectCreate**
> V2RuleRedirect rulesRedirectCreate(v2RuleRedirectRequest)


### Example

```typescript
import {
    RulesApi,
    Configuration,
    V2RuleRedirectRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new RulesApi(configuration);

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

[BearerAuth](../README.md#BearerAuth)

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
    RulesApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new RulesApi(configuration);

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

[BearerAuth](../README.md#BearerAuth)

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
    RulesApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new RulesApi(configuration);

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

# **rulesRedirectRead**
> V2RuleRedirect rulesRedirectRead()


### Example

```typescript
import {
    RulesApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new RulesApi(configuration);

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

# **rulesRedirectUpdate**
> V2RuleRedirect rulesRedirectUpdate(v2RuleRedirectRequest)


### Example

```typescript
import {
    RulesApi,
    Configuration,
    V2RuleRedirectRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new RulesApi(configuration);

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

[BearerAuth](../README.md#BearerAuth)

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

# **rulesServeStaticCreate**
> V2RuleServeStatic rulesServeStaticCreate(v2RuleServeStaticRequest)


### Example

```typescript
import {
    RulesApi,
    Configuration,
    V2RuleServeStaticRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new RulesApi(configuration);

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

[BearerAuth](../README.md#BearerAuth)

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
    RulesApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new RulesApi(configuration);

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

[BearerAuth](../README.md#BearerAuth)

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
    RulesApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new RulesApi(configuration);

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

# **rulesServeStaticRead**
> V2RuleServeStatic rulesServeStaticRead()


### Example

```typescript
import {
    RulesApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new RulesApi(configuration);

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

# **rulesServeStaticUpdate**
> V2RuleServeStatic rulesServeStaticUpdate(v2RuleServeStaticRequest)


### Example

```typescript
import {
    RulesApi,
    Configuration,
    V2RuleServeStaticRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new RulesApi(configuration);

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

[BearerAuth](../README.md#BearerAuth)

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

