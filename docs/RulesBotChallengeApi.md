# RulesBotChallengeApi

All URIs are relative to *https://dashboard.quantcdn.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**rulesBotChallengeCreate**](#rulesbotchallengecreate) | **POST** /api/v2/organizations/{organization}/projects/{project}/rules/bot-challenge | Create a bot challenge rule|
|[**rulesBotChallengeDelete**](#rulesbotchallengedelete) | **DELETE** /api/v2/organizations/{organization}/projects/{project}/rules/bot-challenge/{rule} | Delete a bot challenge rule|
|[**rulesBotChallengeList**](#rulesbotchallengelist) | **GET** /api/v2/organizations/{organization}/projects/{project}/rules/bot-challenge | List bot challenge rules|
|[**rulesBotChallengeRead**](#rulesbotchallengeread) | **GET** /api/v2/organizations/{organization}/projects/{project}/rules/bot-challenge/{rule} | Get details of a bot challenge rule|
|[**rulesBotChallengeUpdate**](#rulesbotchallengeupdate) | **PATCH** /api/v2/organizations/{organization}/projects/{project}/rules/bot-challenge/{rule} | Update a bot challenge rule|

# **rulesBotChallengeCreate**
> V2RuleBotChallenge rulesBotChallengeCreate(v2RuleBotChallengeRequest)


### Example

```typescript
import {
    RulesBotChallengeApi,
    Configuration,
    V2RuleBotChallengeRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new RulesBotChallengeApi(configuration);

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

# **rulesBotChallengeDelete**
> rulesBotChallengeDelete()


### Example

```typescript
import {
    RulesBotChallengeApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new RulesBotChallengeApi(configuration);

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

# **rulesBotChallengeList**
> Array<V2RuleBotChallenge> rulesBotChallengeList()


### Example

```typescript
import {
    RulesBotChallengeApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new RulesBotChallengeApi(configuration);

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

# **rulesBotChallengeRead**
> V2RuleBotChallenge rulesBotChallengeRead()


### Example

```typescript
import {
    RulesBotChallengeApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new RulesBotChallengeApi(configuration);

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

# **rulesBotChallengeUpdate**
> V2RuleBotChallenge rulesBotChallengeUpdate(v2RuleBotChallengeRequest)


### Example

```typescript
import {
    RulesBotChallengeApi,
    Configuration,
    V2RuleBotChallengeRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new RulesBotChallengeApi(configuration);

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

