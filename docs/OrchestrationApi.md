# OrchestrationApi

All URIs are relative to *https://dashboard.quantcdn.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getAIOrchestrationStatus**](#getaiorchestrationstatus) | **GET** /api/v3/organizations/{organisation}/ai/tools/orchestrations/{orchestrationId} | Get Orchestration Status|

# **getAIOrchestrationStatus**
> GetAIOrchestrationStatus200Response getAIOrchestrationStatus()

Retrieves the status and synthesized result of a multi-tool orchestration.      *      * **Orchestration Pattern:**      * When the AI requests multiple async tools simultaneously, an orchestration is created      * to track all tool executions and synthesize their results into a single coherent response.      *      * **Flow:**      * 1. AI requests multiple async tools (e.g., image generation + web search)      * 2. Chat API creates orchestration and returns orchestrationId      * 3. Tool Orchestrator Lambda polls all async tools      * 4. When all tools complete, Orchestrator synthesizes results using AI      * 5. Client polls this endpoint and receives final synthesized response      *      * **Status Values:**      * - pending: Orchestration created, tools not yet started      * - polling: Orchestrator is actively polling async tools      * - synthesizing: All tools complete, AI is synthesizing response      * - complete: Orchestration finished, synthesizedResponse available      * - failed: Orchestration failed, error available      *      * **Polling Recommendations:**      * - Poll every 2 seconds      * - Maximum poll time: 10 minutes      * - Orchestrator handles tool polling internally      *      * **Benefits over individual polling:**      * - Single poll endpoint for multiple async tools      * - AI synthesizes all results into coherent response      * - Answers the original user question, not just tool summaries

### Example

```typescript
import {
    OrchestrationApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new OrchestrationApi(configuration);

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

