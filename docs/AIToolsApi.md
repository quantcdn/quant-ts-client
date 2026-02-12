# AIToolsApi

All URIs are relative to *https://dashboard.quantcdn.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getAIOrchestrationStatus**](#getaiorchestrationstatus) | **GET** /api/v3/organizations/{organisation}/ai/tools/orchestrations/{orchestrationId} | Get Tool Orchestration Status (Async Tool Polling)|
|[**getAIToolExecutionStatus**](#getaitoolexecutionstatus) | **GET** /api/v3/organizations/{organisation}/ai/tools/executions/{executionId} | Get async tool execution status and result|
|[**listAIToolExecutions**](#listaitoolexecutions) | **GET** /api/v3/organizations/{organisation}/ai/tools/executions | List tool executions for monitoring and debugging|
|[**listAIToolNames**](#listaitoolnames) | **GET** /api/v3/organizations/{organisation}/ai/tools/names | List tool names only (lightweight response)|
|[**listAITools**](#listaitools) | **GET** /api/v3/organizations/{organisation}/ai/tools | List available built-in tools for function calling|

# **getAIOrchestrationStatus**
> GetAIOrchestrationStatus200Response getAIOrchestrationStatus()

Retrieves the status and synthesized result of a multi-tool async execution orchestration.      *      * **Note:** This endpoint is for async tool execution polling (`/tools/orchestrations`).      * For durable batch processing orchestrations, see `GET /orchestrations` endpoints.      *      * **Orchestration Pattern:**      * When the AI requests multiple async tools simultaneously, an orchestration is created      * to track all tool executions and synthesize their results into a single coherent response.      *      * **Flow:**      * 1. AI requests multiple async tools (e.g., image generation + web search)      * 2. Chat API creates orchestration and returns orchestrationId      * 3. Tool Orchestrator Lambda polls all async tools      * 4. When all tools complete, Orchestrator synthesizes results using AI      * 5. Client polls this endpoint and receives final synthesized response      *      * **Status Values:**      * - pending: Orchestration created, tools not yet started      * - polling: Orchestrator is actively polling async tools      * - synthesizing: All tools complete, AI is synthesizing response      * - complete: Orchestration finished, synthesizedResponse available      * - failed: Orchestration failed, error available      *      * **Polling Recommendations:**      * - Poll every 2 seconds      * - Maximum poll time: 10 minutes      * - Orchestrator handles tool polling internally      *      * **Benefits over individual polling:**      * - Single poll endpoint for multiple async tools      * - AI synthesizes all results into coherent response      * - Answers the original user question, not just tool summaries

### Example

```typescript
import {
    AIToolsApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AIToolsApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let orchestrationId: string; //Orchestration identifier for aggregated async tool executions (default to undefined)

const { status, data } = await apiInstance.getAIOrchestrationStatus(
    organisation,
    orchestrationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] | The organisation ID | defaults to undefined|
| **orchestrationId** | [**string**] | Orchestration identifier for aggregated async tool executions | defaults to undefined|


### Return type

**GetAIOrchestrationStatus200Response**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Orchestration status retrieved successfully |  -  |
|**404** | Orchestration not found (may have expired after 24h) |  -  |
|**403** | Access denied |  -  |
|**500** | Failed to retrieve orchestration status |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAIToolExecutionStatus**
> GetAIToolExecutionStatus200Response getAIToolExecutionStatus()

Retrieves the status and result of an async tool execution. Used for polling long-running tools like image generation.      *      * **Async Tool Execution Pattern:**      * This endpoint enables a polling pattern for long-running tools that would otherwise hit API Gateway\'s 30-second timeout.      *      * **Flow:**      * 1. AI requests tool use (e.g., `generate_image`)      * 2. Chat API returns `toolUse` with execution tracking info      * 3. Client starts polling this endpoint with the `executionId`      * 4. When `status === \'complete\'`, retrieve `result` and send back to AI      * 5. AI incorporates result into final response      *      * **Status Values:**      * - `pending`: Tool execution queued, not yet started      * - `running`: Tool is currently executing      * - `complete`: Tool execution finished successfully, `result` available      * - `failed`: Tool execution failed, `error` available      *      * **Polling Recommendations:**      * - Poll every 2-3 seconds for image generation      * - Exponential backoff for other tools (start 1s, max 5s)      * - Stop polling after 5 minutes (consider failed)      * - Auto-cleanup after 24 hours (TTL)      *      * **Use Cases:**      * - Image generation (10-15s typical runtime)      * - Video processing      * - Large file uploads/downloads      * - Complex database queries      * - External API calls with high latency

### Example

```typescript
import {
    AIToolsApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AIToolsApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let executionId: string; //Tool execution identifier (default to undefined)

const { status, data } = await apiInstance.getAIToolExecutionStatus(
    organisation,
    executionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] | The organisation ID | defaults to undefined|
| **executionId** | [**string**] | Tool execution identifier | defaults to undefined|


### Return type

**GetAIToolExecutionStatus200Response**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Tool execution status retrieved successfully |  -  |
|**404** | Execution not found (may have expired after 24h) |  -  |
|**403** | Access denied |  -  |
|**500** | Failed to retrieve execution status |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listAIToolExecutions**
> ListAIToolExecutions200Response listAIToolExecutions()

Lists recent async tool executions for an organization. Useful for debugging, monitoring, and building admin UIs.      *      * **Query Patterns:**      * - All recent executions: `GET /ai/tools/executions`      * - Filter by status: `GET /ai/tools/executions?status=running`      * - Limit results: `GET /ai/tools/executions?limit=20`      *      * **Results:**      * - Ordered by creation time (newest first)      * - Limited to 50 by default (configurable via `limit` parameter)      * - Only shows executions not yet expired (24h TTL)      *      * **Use Cases:**      * - Monitor all active tool executions      * - Debug failed executions      * - Build admin dashboards      * - Track tool usage patterns      * - Audit async operations

### Example

```typescript
import {
    AIToolsApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AIToolsApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let status: 'pending' | 'running' | 'complete' | 'failed'; //Filter by execution status (optional) (default to undefined)
let limit: number; //Maximum number of executions to return (optional) (default to 50)

const { status, data } = await apiInstance.listAIToolExecutions(
    organisation,
    status,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] | The organisation ID | defaults to undefined|
| **status** | [**&#39;pending&#39; | &#39;running&#39; | &#39;complete&#39; | &#39;failed&#39;**]**Array<&#39;pending&#39; &#124; &#39;running&#39; &#124; &#39;complete&#39; &#124; &#39;failed&#39;>** | Filter by execution status | (optional) defaults to undefined|
| **limit** | [**number**] | Maximum number of executions to return | (optional) defaults to 50|


### Return type

**ListAIToolExecutions200Response**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Tool executions retrieved successfully |  -  |
|**400** | Invalid parameters |  -  |
|**403** | Access denied |  -  |
|**500** | Failed to retrieve executions |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listAIToolNames**
> ListAIToolNames200Response listAIToolNames()

Retrieves just the names of available built-in tools. Useful for quick validation or UI dropdown population without the full tool specifications.

### Example

```typescript
import {
    AIToolsApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AIToolsApi(configuration);

let organisation: string; //The organisation ID (default to undefined)

const { status, data } = await apiInstance.listAIToolNames(
    organisation
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] | The organisation ID | defaults to undefined|


### Return type

**ListAIToolNames200Response**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Tool names retrieved successfully |  -  |
|**403** | Access denied |  -  |
|**500** | Failed to fetch tool names |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listAITools**
> ListAITools200Response listAITools()

Retrieves all available built-in tools that can be used with function calling. These tools can be included in `toolConfig` when making AI inference requests.      *      * **Available Built-in Tools:**      * - `get_weather`: Get current weather for a location using Open-Meteo API      * - `calculate`: Perform basic mathematical calculations (add, subtract, multiply, divide)      * - `search_web`: Search the web for information (mock implementation)      * - `generate_image`: Generate images with Amazon Nova Canvas (async execution, 10-15s typical runtime)      *      * **Use Cases:**      * - Discover available tools dynamically without hardcoding      * - Get complete tool specifications including input schemas      * - Build UI for tool selection      * - Validate tool names before sending requests      *      * **Dynamic Tool Discovery:**      * This endpoint enables clients to:      * 1. Fetch all available tools on page load      * 2. Display tool capabilities to users      * 3. Filter tools based on user permissions      * 4. Use `allowedTools` whitelist for security      *      * **Alternative Endpoint:**      * - `GET /ai/tools/names` - Returns only tool names (faster, lighter response)

### Example

```typescript
import {
    AIToolsApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AIToolsApi(configuration);

let organisation: string; //The organisation ID (default to undefined)

const { status, data } = await apiInstance.listAITools(
    organisation
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] | The organisation ID | defaults to undefined|


### Return type

**ListAITools200Response**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Available tools retrieved successfully |  -  |
|**403** | Access denied |  -  |
|**500** | Failed to fetch tools |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

