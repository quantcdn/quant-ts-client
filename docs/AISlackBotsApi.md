# AISlackBotsApi

All URIs are relative to *https://dashboard.quantcdn.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createSlackBot**](#createslackbot) | **POST** /api/v3/organizations/{organisation}/ai/slack-bots | Create Slack Bot|
|[**deleteSlackBot**](#deleteslackbot) | **DELETE** /api/v3/organizations/{organisation}/ai/slack-bots/{botId} | Delete Slack Bot|
|[**getSlackBot**](#getslackbot) | **GET** /api/v3/organizations/{organisation}/ai/slack-bots/{botId} | Get Slack Bot|
|[**listSlackBots**](#listslackbots) | **GET** /api/v3/organizations/{organisation}/ai/slack-bots | List Slack Bots|
|[**searchSlackWorkspaceChannels**](#searchslackworkspacechannels) | **GET** /api/v3/organizations/{organisation}/ai/slack-bots/{botId}/workspace/channels | Search Slack Workspace Channels|
|[**searchSlackWorkspaceUsers**](#searchslackworkspaceusers) | **GET** /api/v3/organizations/{organisation}/ai/slack-bots/{botId}/workspace/users | Search Slack Workspace Users|
|[**updateSlackBot**](#updateslackbot) | **PUT** /api/v3/organizations/{organisation}/ai/slack-bots/{botId} | Update Slack Bot|

# **createSlackBot**
> CreateSlackBot201Response createSlackBot(createSlackBotRequest)

Creates a new Slack bot with inline AI agent configuration. A backing agent is created automatically — callers do not need to manage agents separately.      *      * **Setup Types:**      * - `quant`: Quant-managed Slack app — uses shared OAuth credentials      * - `byo`: Bring Your Own — customer provides their own Slack app credentials

### Example

```typescript
import {
    AISlackBotsApi,
    Configuration,
    CreateSlackBotRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AISlackBotsApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let createSlackBotRequest: CreateSlackBotRequest; //

const { status, data } = await apiInstance.createSlackBot(
    organisation,
    createSlackBotRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createSlackBotRequest** | **CreateSlackBotRequest**|  | |
| **organisation** | [**string**] | The organisation ID | defaults to undefined|


### Return type

**CreateSlackBot201Response**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Slack bot created successfully |  -  |
|**400** | Invalid request parameters |  -  |
|**403** | Access denied |  -  |
|**500** | Failed to create Slack bot |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteSlackBot**
> DeleteSlackBot200Response deleteSlackBot()

Permanently deletes a Slack bot, disconnects it from the workspace, and deletes its backing AI agent.

### Example

```typescript
import {
    AISlackBotsApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AISlackBotsApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let botId: string; //The Slack bot ID (default to undefined)

const { status, data } = await apiInstance.deleteSlackBot(
    organisation,
    botId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] | The organisation ID | defaults to undefined|
| **botId** | [**string**] | The Slack bot ID | defaults to undefined|


### Return type

**DeleteSlackBot200Response**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Slack bot deleted successfully |  -  |
|**403** | Access denied |  -  |
|**404** | Slack bot not found |  -  |
|**500** | Failed to delete Slack bot |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getSlackBot**
> GetSlackBot200Response getSlackBot()

Retrieves details for a specific Slack bot including its configuration, connection status, and flattened agent configuration.

### Example

```typescript
import {
    AISlackBotsApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AISlackBotsApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let botId: string; //The Slack bot ID (default to undefined)

const { status, data } = await apiInstance.getSlackBot(
    organisation,
    botId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] | The organisation ID | defaults to undefined|
| **botId** | [**string**] | The Slack bot ID | defaults to undefined|


### Return type

**GetSlackBot200Response**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Slack bot details retrieved successfully |  -  |
|**403** | Access denied |  -  |
|**404** | Slack bot not found |  -  |
|**500** | Failed to retrieve Slack bot |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listSlackBots**
> ListSlackBots200Response listSlackBots()

Lists all Slack bots configured for the organization. Each bot is backed by an AI agent and can be connected to a Slack workspace. Agent configuration fields are flattened onto each bot object.

### Example

```typescript
import {
    AISlackBotsApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AISlackBotsApi(configuration);

let organisation: string; //The organisation ID (default to undefined)

const { status, data } = await apiInstance.listSlackBots(
    organisation
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] | The organisation ID | defaults to undefined|


### Return type

**ListSlackBots200Response**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Slack bots retrieved successfully |  -  |
|**403** | Access denied |  -  |
|**500** | Failed to retrieve Slack bots |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **searchSlackWorkspaceChannels**
> SearchSlackWorkspaceChannels200Response searchSlackWorkspaceChannels()

Searches channels in the Slack workspace connected to this bot. Requires the bot to be connected via OAuth.

### Example

```typescript
import {
    AISlackBotsApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AISlackBotsApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let botId: string; //The Slack bot ID (default to undefined)
let q: string; //Search query to filter channels by name (optional) (default to undefined)

const { status, data } = await apiInstance.searchSlackWorkspaceChannels(
    organisation,
    botId,
    q
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] | The organisation ID | defaults to undefined|
| **botId** | [**string**] | The Slack bot ID | defaults to undefined|
| **q** | [**string**] | Search query to filter channels by name | (optional) defaults to undefined|


### Return type

**SearchSlackWorkspaceChannels200Response**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Workspace channels retrieved successfully |  -  |
|**403** | Access denied |  -  |
|**404** | Slack bot not found or not connected |  -  |
|**500** | Failed to search channels |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **searchSlackWorkspaceUsers**
> SearchSlackWorkspaceUsers200Response searchSlackWorkspaceUsers()

Searches users in the Slack workspace connected to this bot. Requires the bot to be connected via OAuth.

### Example

```typescript
import {
    AISlackBotsApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AISlackBotsApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let botId: string; //The Slack bot ID (default to undefined)
let q: string; //Search query to filter users by name (optional) (default to undefined)

const { status, data } = await apiInstance.searchSlackWorkspaceUsers(
    organisation,
    botId,
    q
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] | The organisation ID | defaults to undefined|
| **botId** | [**string**] | The Slack bot ID | defaults to undefined|
| **q** | [**string**] | Search query to filter users by name | (optional) defaults to undefined|


### Return type

**SearchSlackWorkspaceUsers200Response**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Workspace users retrieved successfully |  -  |
|**403** | Access denied |  -  |
|**404** | Slack bot not found or not connected |  -  |
|**500** | Failed to search users |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateSlackBot**
> CreateSlackBot201Response updateSlackBot(updateSlackBotRequest)

Updates a Slack bot\'s configuration and/or its backing agent. Only provided fields are updated.

### Example

```typescript
import {
    AISlackBotsApi,
    Configuration,
    UpdateSlackBotRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AISlackBotsApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let botId: string; //The Slack bot ID (default to undefined)
let updateSlackBotRequest: UpdateSlackBotRequest; //

const { status, data } = await apiInstance.updateSlackBot(
    organisation,
    botId,
    updateSlackBotRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateSlackBotRequest** | **UpdateSlackBotRequest**|  | |
| **organisation** | [**string**] | The organisation ID | defaults to undefined|
| **botId** | [**string**] | The Slack bot ID | defaults to undefined|


### Return type

**CreateSlackBot201Response**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Slack bot updated successfully |  -  |
|**400** | Invalid request parameters |  -  |
|**403** | Access denied |  -  |
|**404** | Slack bot not found |  -  |
|**500** | Failed to update Slack bot |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

