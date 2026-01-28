# AIAgentsApi

All URIs are relative to *https://dashboard.quantcdn.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**chatWithAIAgent**](#chatwithaiagent) | **POST** /api/v3/organizations/{organisation}/ai/agents/{agentId}/chat | Chat with AI Agent|
|[**createAIAgent**](#createaiagent) | **POST** /api/v3/organizations/{organisation}/ai/agents | Create AI Agent|
|[**deleteAIAgent**](#deleteaiagent) | **DELETE** /api/v3/organizations/{organisation}/ai/agents/{agentId} | Delete Agent|
|[**getAIAgent**](#getaiagent) | **GET** /api/v3/organizations/{organisation}/ai/agents/{agentId} | Get Agent Details|
|[**listAIAgents**](#listaiagents) | **GET** /api/v3/organizations/{organisation}/ai/agents | List AI Agents|
|[**updateAIAgent**](#updateaiagent) | **PUT** /api/v3/organizations/{organisation}/ai/agents/{agentId} | Update Agent|

# **chatWithAIAgent**
> ChatWithAIAgent200Response chatWithAIAgent(chatWithAIAgentRequest)

Initiates a chat session with a specific AI agent. The agent\'s configuration (system prompt, temperature, model, allowed tools) is automatically applied.      *      * **Key Features:**      * - **Session Management**: Automatic session creation and state tracking      * - **Multi-turn Conversations**: Full conversation history maintained server-side      * - Agent\'s system prompt is prepended to conversation      * - Only agent\'s allowed tools are available      * - All tools are auto-executed on cloud (no client confirmation needed)      * - Temperature and model from agent config      * - Supports sync, streaming, and async modes      *      * **Execution Modes:**      * - **Sync Mode** (default): Standard JSON response, waits for completion      * - **Streaming Mode**: Set `stream: true` for SSE token-by-token responses      * - **Async Mode**: Set `async: true` for long-running tasks with polling      *      * **Async/Durable Mode (`async: true`):**      * - Returns immediately with `requestId` and `pollUrl` (HTTP 202)      * - Uses AWS Lambda Durable Functions for long-running agent tasks      * - All tools are auto-executed on cloud (no `waiting_callback` state)      * - Poll `/ai/chat/executions/{requestId}` for status      * - Ideal for agents with slow tools (image generation, web search, etc.)      *      * **Session Support:**      * - Omit `sessionId` to create a new session automatically      * - Include `sessionId` to continue an existing conversation      * - Sessions expire after 60 minutes of inactivity      * - Sessions work in all modes (sync, streaming, async)      * - Use `/sessions/{sessionId}` to retrieve full conversation history

### Example

```typescript
import {
    AIAgentsApi,
    Configuration,
    ChatWithAIAgentRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AIAgentsApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let agentId: string; //The agent ID (default to undefined)
let chatWithAIAgentRequest: ChatWithAIAgentRequest; //

const { status, data } = await apiInstance.chatWithAIAgent(
    organisation,
    agentId,
    chatWithAIAgentRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **chatWithAIAgentRequest** | **ChatWithAIAgentRequest**|  | |
| **organisation** | [**string**] | The organisation ID | defaults to undefined|
| **agentId** | [**string**] | The agent ID | defaults to undefined|


### Return type

**ChatWithAIAgent200Response**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Agent response generated successfully (sync mode) |  -  |
|**202** | Async execution started (when &#x60;async: true&#x60; in request) |  -  |
|**400** | Invalid request parameters |  -  |
|**403** | Access denied |  -  |
|**404** | Agent not found |  -  |
|**500** | Failed to chat with agent |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createAIAgent**
> CreateAIAgent201Response createAIAgent(createAIAgentRequest)

Creates a new AI agent with specific configuration, system prompt, and tool permissions.      *      * **Agent Configuration:**      * - **System Prompt**: Instructions that guide the agent\'s behavior      * - **Model**: Which foundation model to use (e.g., \'amazon.nova-pro-v1:0\')      * - **Temperature**: Creativity level (0-1)      * - **Allowed Tools**: Which tools the agent can auto-execute      * - **Allowed Collections**: Vector DB collections for RAG      * - **Group**: Optional categorization (e.g., \'development\', \'compliance\')      *      * **Auto-Execution:**      * All tools are automatically executed when an agent requests them (no client confirmation needed).

### Example

```typescript
import {
    AIAgentsApi,
    Configuration,
    CreateAIAgentRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AIAgentsApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let createAIAgentRequest: CreateAIAgentRequest; //

const { status, data } = await apiInstance.createAIAgent(
    organisation,
    createAIAgentRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createAIAgentRequest** | **CreateAIAgentRequest**|  | |
| **organisation** | [**string**] | The organisation ID | defaults to undefined|


### Return type

**CreateAIAgent201Response**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Agent created successfully |  -  |
|**400** | Invalid request parameters |  -  |
|**403** | Access denied |  -  |
|**500** | Failed to create agent |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteAIAgent**
> DeleteAIAgent200Response deleteAIAgent()

Permanently deletes an AI agent. This action cannot be undone.

### Example

```typescript
import {
    AIAgentsApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AIAgentsApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let agentId: string; //The agent ID (default to undefined)

const { status, data } = await apiInstance.deleteAIAgent(
    organisation,
    agentId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] | The organisation ID | defaults to undefined|
| **agentId** | [**string**] | The agent ID | defaults to undefined|


### Return type

**DeleteAIAgent200Response**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Agent deleted successfully |  -  |
|**403** | Access denied |  -  |
|**404** | Agent not found |  -  |
|**500** | Failed to delete agent |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAIAgent**
> GetAIAgent200Response getAIAgent()

Retrieves detailed configuration for a specific AI agent.

### Example

```typescript
import {
    AIAgentsApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AIAgentsApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let agentId: string; //The agent ID (default to undefined)

const { status, data } = await apiInstance.getAIAgent(
    organisation,
    agentId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] | The organisation ID | defaults to undefined|
| **agentId** | [**string**] | The agent ID | defaults to undefined|


### Return type

**GetAIAgent200Response**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Agent details retrieved successfully |  -  |
|**403** | Access denied |  -  |
|**404** | Agent not found |  -  |
|**500** | Failed to retrieve agent |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listAIAgents**
> ListAIAgents200Response listAIAgents()

Lists all AI agents for an organization. Agents are pre-configured AI assistants with specific system prompts, model settings, and tool permissions.      *      * **Features:**      * - Filter by group (e.g., \'development\', \'compliance\')      * - Organization-scoped      * - Returns agent configurations without execution history

### Example

```typescript
import {
    AIAgentsApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AIAgentsApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let group: string; //Optional group filter (e.g., \'development\', \'compliance\') (optional) (default to undefined)

const { status, data } = await apiInstance.listAIAgents(
    organisation,
    group
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] | The organisation ID | defaults to undefined|
| **group** | [**string**] | Optional group filter (e.g., \&#39;development\&#39;, \&#39;compliance\&#39;) | (optional) defaults to undefined|


### Return type

**ListAIAgents200Response**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of agents retrieved successfully |  -  |
|**403** | Access denied |  -  |
|**500** | Failed to retrieve agents |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateAIAgent**
> UpdateAIAgent200Response updateAIAgent(updateAIAgentRequest)

Updates an existing AI agent configuration. All fields except agentId, organizationId, createdAt, and createdBy can be updated.

### Example

```typescript
import {
    AIAgentsApi,
    Configuration,
    UpdateAIAgentRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AIAgentsApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let agentId: string; //The agent ID (default to undefined)
let updateAIAgentRequest: UpdateAIAgentRequest; //

const { status, data } = await apiInstance.updateAIAgent(
    organisation,
    agentId,
    updateAIAgentRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateAIAgentRequest** | **UpdateAIAgentRequest**|  | |
| **organisation** | [**string**] | The organisation ID | defaults to undefined|
| **agentId** | [**string**] | The agent ID | defaults to undefined|


### Return type

**UpdateAIAgent200Response**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Agent updated successfully |  -  |
|**400** | Invalid request parameters |  -  |
|**403** | Access denied |  -  |
|**404** | Agent not found |  -  |
|**500** | Failed to update agent |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

