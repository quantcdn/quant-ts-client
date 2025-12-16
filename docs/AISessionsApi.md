# AISessionsApi

All URIs are relative to *https://dashboard.quantcdn.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createAISession**](#createaisession) | **POST** /api/v3/organizations/{organisation}/ai/sessions | Create a new chat session with multi-tenant isolation|
|[**deleteAISession**](#deleteaisession) | **DELETE** /api/v3/organizations/{organisation}/ai/sessions/{sessionId} | Delete a chat session|
|[**extendAISession**](#extendaisession) | **PUT** /api/v3/organizations/{organisation}/ai/sessions/{sessionId}/extend | Extend Session Expiration|
|[**getAISession**](#getaisession) | **GET** /api/v3/organizations/{organisation}/ai/sessions/{sessionId} | Get a specific chat session|
|[**listAISessions**](#listaisessions) | **GET** /api/v3/organizations/{organisation}/ai/sessions | List chat sessions with multi-tenant filtering|
|[**updateAISession**](#updateaisession) | **PUT** /api/v3/organizations/{organisation}/ai/sessions/{sessionId} | Update Session|

# **createAISession**
> CreateAISession201Response createAISession(createAISessionRequest)

Creates an AI session with automatic expiration (60 min default, 24h max). Sessions are isolated by organization. Use userId to identify the user creating the session. Use sessionGroup for logical grouping. Use metadata for additional custom data. Filter sessions by userId or sessionGroup when listing.

### Example

```typescript
import {
    AISessionsApi,
    Configuration,
    CreateAISessionRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AISessionsApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let createAISessionRequest: CreateAISessionRequest; //

const { status, data } = await apiInstance.createAISession(
    organisation,
    createAISessionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createAISessionRequest** | **CreateAISessionRequest**|  | |
| **organisation** | [**string**] | The organisation ID | defaults to undefined|


### Return type

**CreateAISession201Response**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Session created successfully |  -  |
|**400** | Invalid request (missing userId or invalid parameters) |  -  |
|**500** | Failed to create session |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteAISession**
> DeleteAISession200Response deleteAISession()


### Example

```typescript
import {
    AISessionsApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AISessionsApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let sessionId: string; //The session ID (default to undefined)

const { status, data } = await apiInstance.deleteAISession(
    organisation,
    sessionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] | The organisation ID | defaults to undefined|
| **sessionId** | [**string**] | The session ID | defaults to undefined|


### Return type

**DeleteAISession200Response**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Session deleted successfully |  -  |
|**500** | Failed to delete session |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **extendAISession**
> ExtendAISession200Response extendAISession()

Extends the expiration time of an active session. Useful for keeping long-running conversations alive.

### Example

```typescript
import {
    AISessionsApi,
    Configuration,
    ExtendAISessionRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AISessionsApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let sessionId: string; //The session ID (default to undefined)
let extendAISessionRequest: ExtendAISessionRequest; // (optional)

const { status, data } = await apiInstance.extendAISession(
    organisation,
    sessionId,
    extendAISessionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **extendAISessionRequest** | **ExtendAISessionRequest**|  | |
| **organisation** | [**string**] | The organisation ID | defaults to undefined|
| **sessionId** | [**string**] | The session ID | defaults to undefined|


### Return type

**ExtendAISession200Response**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Session extended successfully |  -  |
|**400** | Invalid parameters |  -  |
|**403** | Access denied |  -  |
|**404** | Session not found |  -  |
|**500** | Failed to extend session |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAISession**
> GetAISession200Response getAISession()


### Example

```typescript
import {
    AISessionsApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AISessionsApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let sessionId: string; //The session ID (default to undefined)

const { status, data } = await apiInstance.getAISession(
    organisation,
    sessionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] | The organisation ID | defaults to undefined|
| **sessionId** | [**string**] | The session ID | defaults to undefined|


### Return type

**GetAISession200Response**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The chat session |  -  |
|**404** | Session not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listAISessions**
> Array<ListAISessions200ResponseInner> listAISessions()

Lists active sessions for an organization with flexible filtering options.      *      * **Query Combinations:**      * 1. By Organization (default): Returns all sessions in the organization      * 2. By Organization + Group: `?sessionGroup=drupal-prod` - Sessions in a specific group      * 3. By User: `?userId=user-123` - All sessions for a user      * 4. By User + Group: `?userId=user-123&sessionGroup=drupal-prod` - User\'s sessions in a specific group      *      * **Use Cases:**      * - List user\'s conversations in a specific app/environment      * - Admin view of all sessions in a customer/tenant group      * - User profile showing all AI conversations across apps

### Example

```typescript
import {
    AISessionsApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AISessionsApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let userId: string; //Filter sessions by user ID (optional) (default to undefined)
let sessionGroup: string; //Filter by session group. Returns only sessions matching the specified group. (optional) (default to undefined)
let limit: number; //Maximum number of sessions to return (default 50, max 100) (optional) (default to 50)
let offset: number; //Offset for pagination (optional) (default to undefined)
let model: string; //Filter by model ID (optional) (default to undefined)

const { status, data } = await apiInstance.listAISessions(
    organisation,
    userId,
    sessionGroup,
    limit,
    offset,
    model
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] | The organisation ID | defaults to undefined|
| **userId** | [**string**] | Filter sessions by user ID | (optional) defaults to undefined|
| **sessionGroup** | [**string**] | Filter by session group. Returns only sessions matching the specified group. | (optional) defaults to undefined|
| **limit** | [**number**] | Maximum number of sessions to return (default 50, max 100) | (optional) defaults to 50|
| **offset** | [**number**] | Offset for pagination | (optional) defaults to undefined|
| **model** | [**string**] | Filter by model ID | (optional) defaults to undefined|


### Return type

**Array<ListAISessions200ResponseInner>**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of chat sessions |  -  |
|**500** | Failed to fetch sessions |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateAISession**
> UpdateAISession200Response updateAISession(updateAISessionRequest)

Updates session with new conversation messages and tracks token usage. Appends new messages to conversation history and updates session stats.      *      * **Typical Flow:**      * 1. Get session to retrieve conversation history      * 2. Call AI inference with full message history      * 3. Update session with new user + assistant messages

### Example

```typescript
import {
    AISessionsApi,
    Configuration,
    UpdateAISessionRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AISessionsApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let sessionId: string; //The session ID (default to undefined)
let updateAISessionRequest: UpdateAISessionRequest; //

const { status, data } = await apiInstance.updateAISession(
    organisation,
    sessionId,
    updateAISessionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateAISessionRequest** | **UpdateAISessionRequest**|  | |
| **organisation** | [**string**] | The organisation ID | defaults to undefined|
| **sessionId** | [**string**] | The session ID | defaults to undefined|


### Return type

**UpdateAISession200Response**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Session updated successfully |  -  |
|**400** | Invalid request parameters |  -  |
|**403** | Access denied |  -  |
|**404** | Session not found |  -  |
|**500** | Failed to update session |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

