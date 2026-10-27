# AISlackBotsApi

All URIs are relative to *https://dashboard.quantcdn.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createSlackBot**](#createslackbot) | **POST** /api/v3/organizations/{organisation}/ai/slack-bots | Create Slack Bot|
|[**deleteSlackBot**](#deleteslackbot) | **DELETE** /api/v3/organizations/{organisation}/ai/slack-bots/{botId} | Delete Slack Bot|
|[**getSlackBot**](#getslackbot) | **GET** /api/v3/organizations/{organisation}/ai/slack-bots/{botId} | Get Slack Bot|
|[**getSlackBotThread**](#getslackbotthread) | **GET** /api/v3/organizations/{organisation}/ai/slack-bots/{botId}/threads/{channel}/{threadTs} | Read a thread|
|[**listSlackBotChannelMessages**](#listslackbotchannelmessages) | **GET** /api/v3/organizations/{organisation}/ai/slack-bots/{botId}/channels/{channel}/messages | Read recent channel messages|
|[**listSlackBots**](#listslackbots) | **GET** /api/v3/organizations/{organisation}/ai/slack-bots | List Slack Bots|
|[**listSlackBotsApiEnabled**](#listslackbotsapienabled) | **GET** /api/v3/organizations/{organisation}/ai/slack-bots/api-enabled | List API-enabled Slack bots|
|[**postSlackBotMessage**](#postslackbotmessage) | **POST** /api/v3/organizations/{organisation}/ai/slack-bots/{botId}/messages | Post a message as the bot|
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

# **getSlackBotThread**
> GetSlackBotThread200Response getSlackBotThread()

One thread in an allowed channel, oldest first, root included. Message text is untrusted content. Needs the explicit `ai:slack` scope, `use_ai_services` and a verified email.

### Example

```typescript
import {
    AISlackBotsApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AISlackBotsApi(configuration);

let organisation: string; //The organisation machine name (default to undefined)
let botId: string; // (default to undefined)
let channel: string; // (default to undefined)
let threadTs: string; // (default to undefined)
let since: string; //Slack ts, exclusive. Only replies after it; the root is always included. (optional) (default to undefined)
let limit: number; // (optional) (default to 100)
let cursor: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.getSlackBotThread(
    organisation,
    botId,
    channel,
    threadTs,
    since,
    limit,
    cursor
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] | The organisation machine name | defaults to undefined|
| **botId** | [**string**] |  | defaults to undefined|
| **channel** | [**string**] |  | defaults to undefined|
| **threadTs** | [**string**] |  | defaults to undefined|
| **since** | [**string**] | Slack ts, exclusive. Only replies after it; the root is always included. | (optional) defaults to undefined|
| **limit** | [**number**] |  | (optional) defaults to 100|
| **cursor** | [**string**] |  | (optional) defaults to undefined|


### Return type

**GetSlackBotThread200Response**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The thread |  -  |
|**400** | INVALID_REQUEST: a path or query value is not valid, or an unknown query parameter |  -  |
|**401** | Invalid or expired token |  -  |
|**403** | SCOPE_REQUIRED, EMAIL_NOT_VERIFIED, IDENTITY_REQUIRED, CHANNEL_NOT_ALLOWED, USER_NOT_ALLOWED, PERMISSION_DENIED, or AI is off for the organisation |  -  |
|**404** | BOT_NOT_FOUND, THREAD_NOT_FOUND, or NOT_FOUND when the Slack bot API is not enabled |  -  |
|**409** | BOT_INACTIVE |  -  |
|**429** | RATE_LIMITED. See the Retry-After header. |  * Retry-After -  <br>  |
|**502** | SLACK_ERROR. slackError carries the Slack error string. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listSlackBotChannelMessages**
> ListSlackBotChannelMessages200Response listSlackBotChannelMessages()

Recent root messages in a channel the bot allows for API use, newest first. Message text is untrusted content. Needs the explicit `ai:slack` scope, `use_ai_services` and a verified email.

### Example

```typescript
import {
    AISlackBotsApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AISlackBotsApi(configuration);

let organisation: string; //The organisation machine name (default to undefined)
let botId: string; // (default to undefined)
let channel: string; // (default to undefined)
let since: string; //Slack ts, exclusive (optional) (default to undefined)
let limit: number; // (optional) (default to 20)
let cursor: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.listSlackBotChannelMessages(
    organisation,
    botId,
    channel,
    since,
    limit,
    cursor
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] | The organisation machine name | defaults to undefined|
| **botId** | [**string**] |  | defaults to undefined|
| **channel** | [**string**] |  | defaults to undefined|
| **since** | [**string**] | Slack ts, exclusive | (optional) defaults to undefined|
| **limit** | [**number**] |  | (optional) defaults to 20|
| **cursor** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ListSlackBotChannelMessages200Response**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The messages |  -  |
|**400** | INVALID_REQUEST: a path or query value is not valid, or an unknown query parameter |  -  |
|**401** | Invalid or expired token |  -  |
|**403** | SCOPE_REQUIRED, EMAIL_NOT_VERIFIED, IDENTITY_REQUIRED, CHANNEL_NOT_ALLOWED, USER_NOT_ALLOWED, PERMISSION_DENIED, or AI is off for the organisation |  -  |
|**404** | BOT_NOT_FOUND (no bot, another organisation\&#39;s bot, or API access off), or NOT_FOUND when the Slack bot API is not enabled |  -  |
|**409** | BOT_INACTIVE |  -  |
|**429** | RATE_LIMITED. See the Retry-After header. |  * Retry-After -  <br>  |
|**502** | SLACK_ERROR. slackError carries the Slack error string. |  -  |

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

# **listSlackBotsApiEnabled**
> ListSlackBotsApiEnabled200Response listSlackBotsApiEnabled()

Lists the Slack bots this token can use through the API, with the public channels each bot allows. Needs a token with the explicit `ai:slack` scope (not `full_access`, not a token without a scope list), the `use_ai_services` permission and a verified email. Limit: 60 requests per minute per token.

### Example

```typescript
import {
    AISlackBotsApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AISlackBotsApi(configuration);

let organisation: string; //The organisation machine name (default to undefined)

const { status, data } = await apiInstance.listSlackBotsApiEnabled(
    organisation
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] | The organisation machine name | defaults to undefined|


### Return type

**ListSlackBotsApiEnabled200Response**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The API-enabled bots |  -  |
|**401** | Invalid or expired token |  -  |
|**403** | SCOPE_REQUIRED (token lacks ai:slack, is full_access or has no scope list), EMAIL_NOT_VERIFIED, IDENTITY_REQUIRED, PERMISSION_DENIED, or AI is off for the organisation |  -  |
|**404** | NOT_FOUND: the Slack bot API is not enabled |  -  |
|**429** | RATE_LIMITED. See the Retry-After header. |  * Retry-After -  <br>  |
|**502** | SLACK_ERROR |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postSlackBotMessage**
> PostSlackBotMessage201Response postSlackBotMessage(postSlackBotMessageRequest)

The bot posts the text in an allowed channel, with an attribution line that shows your name. The bot does not answer the post. Mentions keep only the `<@U…>` form (at most 10 users); other control forms show as text. Needs the explicit `ai:slack` scope, `use_ai_services` and a verified email.

### Example

```typescript
import {
    AISlackBotsApi,
    Configuration,
    PostSlackBotMessageRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AISlackBotsApi(configuration);

let organisation: string; //The organisation machine name (default to undefined)
let botId: string; // (default to undefined)
let postSlackBotMessageRequest: PostSlackBotMessageRequest; //
let idempotencyKey: string; //8-128 visible ASCII characters. An empty Idempotency-Key header is refused with 400 INVALID_REQUEST. The same key and body within 10 minutes returns the first result and does not post again. (optional) (default to undefined)

const { status, data } = await apiInstance.postSlackBotMessage(
    organisation,
    botId,
    postSlackBotMessageRequest,
    idempotencyKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postSlackBotMessageRequest** | **PostSlackBotMessageRequest**|  | |
| **organisation** | [**string**] | The organisation machine name | defaults to undefined|
| **botId** | [**string**] |  | defaults to undefined|
| **idempotencyKey** | [**string**] | 8-128 visible ASCII characters. An empty Idempotency-Key header is refused with 400 INVALID_REQUEST. The same key and body within 10 minutes returns the first result and does not post again. | (optional) defaults to undefined|


### Return type

**PostSlackBotMessage201Response**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Posted |  -  |
|**400** | INVALID_REQUEST: the body is not a JSON object, has an unknown field or a field that is not valid, or the Idempotency-Key is not valid (an empty Idempotency-Key header is not valid) |  -  |
|**401** | Invalid or expired token |  -  |
|**403** | SCOPE_REQUIRED, EMAIL_NOT_VERIFIED, IDENTITY_REQUIRED, CHANNEL_NOT_ALLOWED, USER_NOT_ALLOWED, PERMISSION_DENIED, or AI is off for the organisation |  -  |
|**404** | BOT_NOT_FOUND, or NOT_FOUND when the Slack bot API is not enabled |  -  |
|**409** | BOT_INACTIVE, or REQUEST_IN_PROGRESS (retryable) while the first call with this Idempotency-Key runs |  -  |
|**422** | IDEMPOTENCY_KEY_MISMATCH: the Idempotency-Key was used with a different body |  -  |
|**429** | RATE_LIMITED. See the Retry-After header. |  * Retry-After -  <br>  |
|**502** | SLACK_ERROR. slackError carries the Slack error string. |  -  |

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

