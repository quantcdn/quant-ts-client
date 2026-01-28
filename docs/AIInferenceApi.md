# AIInferenceApi

All URIs are relative to *https://dashboard.quantcdn.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**chatInference**](#chatinference) | **POST** /api/v3/organizations/{organisation}/ai/chat | Chat inference via API Gateway (buffered responses) with multimodal support|
|[**chatInferenceStream**](#chatinferencestream) | **POST** /api/v3/organizations/{organisation}/ai/chat/stream | Chat inference via streaming endpoint (true HTTP streaming) with multimodal support|
|[**embeddings**](#embeddings) | **POST** /api/v3/organizations/{organisation}/ai/embeddings | Generate text embeddings for semantic search and RAG applications|
|[**getDurableExecutionStatus**](#getdurableexecutionstatus) | **GET** /api/v3/organizations/{organisation}/ai/chat/executions/{identifier} | Get Durable Execution Status|
|[**imageGeneration**](#imagegeneration) | **POST** /api/v3/organizations/{organisation}/ai/image-generation | Generate images with Amazon Nova Canvas|
|[**submitToolCallback**](#submittoolcallback) | **POST** /api/v3/organizations/{organisation}/ai/chat/callback | Submit Client Tool Results (Callback)|

# **chatInference**
> ChatInference200Response chatInference(chatInferenceRequest)

Sends requests to the AI API Gateway endpoint which buffers responses. Supports text, images, videos, and documents via base64 encoding.      *      * **Execution Modes:**      * - **Sync Mode** (default): Standard JSON response, waits for completion (200 response)      * - **Async Mode**: Set `async: true` for long-running tasks with polling (202 response)      *      * **Async/Durable Mode (`async: true`):**      * - Returns immediately with `requestId` and `pollUrl` (HTTP 202)      * - Uses AWS Lambda Durable Functions for long-running inference      * - Supports client-executed tools via `waiting_callback` state      * - Poll `/ai/chat/executions/{requestId}` for status      * - Submit client tool results via `/ai/chat/callback`      * - Ideal for complex prompts, large contexts, or client-side tools      *      * **Multimodal Support:**      * - **Text**: Simple string content      * - **Images**: Base64-encoded PNG, JPEG, GIF, WebP (up to 25MB)      * - **Videos**: Base64-encoded MP4, MOV, WebM, etc. (up to 25MB)      * - **Documents**: Base64-encoded PDF, DOCX, CSV, etc. (up to 25MB)      *      * **Supported Models (Multimodal):**      * - **Claude 4.5 Series**: Sonnet 4.5, Haiku 4.5, Opus 4.5 (images, up to 20 per request)      * - **Claude 3.5 Series**: Sonnet v1/v2 (images, up to 20 per request)      * - **Amazon Nova**: Lite, Pro, Micro (images, videos, documents)      *      * **Usage Tips:**      * - Use base64 encoding for images/videos < 5-10MB      * - Place media before text prompts for best results      * - Label multiple media files (e.g., \'Image 1:\', \'Image 2:\')      * - Maximum 25MB total payload size      *      * **Response Patterns:**      * - **Text-only**: Returns simple text response when no tools requested      * - **Single tool**: Returns `toolUse` object when AI requests one tool      * - **Multiple tools**: Returns `toolUse` array when AI requests multiple tools      * - **Auto-execute sync**: Automatically executes tool and returns final text response      * - **Auto-execute async**: Returns toolUse with `executionId` and `status` for polling

### Example

```typescript
import {
    AIInferenceApi,
    Configuration,
    ChatInferenceRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AIInferenceApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let chatInferenceRequest: ChatInferenceRequest; //Chat request with optional multimodal content blocks

const { status, data } = await apiInstance.chatInference(
    organisation,
    chatInferenceRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **chatInferenceRequest** | **ChatInferenceRequest**| Chat request with optional multimodal content blocks | |
| **organisation** | [**string**] | The organisation ID | defaults to undefined|


### Return type

**ChatInference200Response**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Chat inference completed (buffered response, sync mode) |  -  |
|**202** | Async execution started (when &#x60;async: true&#x60; in request) |  -  |
|**500** | Failed to perform chat inference |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **chatInferenceStream**
> string chatInferenceStream(chatInferenceStreamRequest)

Streams responses from the AI streaming subdomain using Server-Sent Events (SSE). Tokens are streamed in real-time as they are generated.      *      * **Execution Modes:**      * - **Streaming Mode** (default): Real-time SSE token-by-token responses      * - **Async Mode**: Set `async: true` for long-running tasks with polling (202 response)      *      * **Async/Durable Mode (`async: true`):**      * - Returns immediately with `requestId` and `pollUrl` (HTTP 202)      * - Uses AWS Lambda Durable Functions for long-running inference      * - Supports client-executed tools via `waiting_callback` state      * - Poll `/ai/chat/executions/{requestId}` for status      * - Submit client tool results via `/ai/chat/callback`      *      * **Multimodal Support:**      * - **Text**: Simple string content      * - **Images**: Base64-encoded PNG, JPEG, GIF, WebP (up to 25MB)      * - **Videos**: Base64-encoded MP4, MOV, WebM, etc. (up to 25MB)      * - **Documents**: Base64-encoded PDF, DOCX, CSV, etc. (up to 25MB)      *      * **Supported Models (Multimodal):**      * - **Claude 4.5 Series**: Sonnet 4.5, Haiku 4.5, Opus 4.5 (images, up to 20 per request)      * - **Claude 3.5 Series**: Sonnet v1/v2 (images, up to 20 per request)      * - **Amazon Nova**: Lite, Pro, Micro (images, videos, documents)      *      * **Usage Tips:**      * - Use base64 encoding for images/videos < 5-10MB      * - Place media before text prompts for best results      * - Label multiple media files (e.g., \'Image 1:\', \'Image 2:\')      * - Maximum 25MB total payload size      * - Streaming works with all content types (text, image, video, document)

### Example

```typescript
import {
    AIInferenceApi,
    Configuration,
    ChatInferenceStreamRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AIInferenceApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let chatInferenceStreamRequest: ChatInferenceStreamRequest; //Chat request with optional multimodal content blocks

const { status, data } = await apiInstance.chatInferenceStream(
    organisation,
    chatInferenceStreamRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **chatInferenceStreamRequest** | **ChatInferenceStreamRequest**| Chat request with optional multimodal content blocks | |
| **organisation** | [**string**] | The organisation ID | defaults to undefined|


### Return type

**string**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: text/event-stream, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Streaming response (text/event-stream, sync mode) |  -  |
|**202** | Async execution started (when &#x60;async: true&#x60; in request) |  -  |
|**500** | Failed to perform streaming inference |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **embeddings**
> Embeddings200Response embeddings(embeddingsRequest)

Generates vector embeddings for text content using embedding models. Used for semantic search, document similarity, and RAG applications.      *      * **Features:**      * - Single text or batch processing (up to 100 texts)      * - Configurable dimensions (256, 512, 1024, 8192 for Titan v2)      * - Optional normalization to unit length      * - Usage tracking for billing      *      * **Use Cases:**      * - Semantic search across documents      * - Similarity matching for content recommendations      * - RAG (Retrieval-Augmented Generation) pipelines      * - Clustering and classification      *      * **Available Embedding Models:**      * - amazon.titan-embed-text-v2:0 (default, supports 256-8192 dimensions)      * - amazon.titan-embed-text-v1:0 (1536 dimensions fixed)

### Example

```typescript
import {
    AIInferenceApi,
    Configuration,
    EmbeddingsRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AIInferenceApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let embeddingsRequest: EmbeddingsRequest; //Embedding request with single or multiple texts

const { status, data } = await apiInstance.embeddings(
    organisation,
    embeddingsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **embeddingsRequest** | **EmbeddingsRequest**| Embedding request with single or multiple texts | |
| **organisation** | [**string**] | The organisation ID | defaults to undefined|


### Return type

**Embeddings200Response**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Embeddings generated successfully |  -  |
|**400** | Invalid request parameters |  -  |
|**403** | Access denied |  -  |
|**500** | Failed to generate embeddings |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getDurableExecutionStatus**
> GetDurableExecutionStatus200Response getDurableExecutionStatus()

Poll the status of an async/durable chat execution.      *      * **When to use:** After starting chat inference with `async: true`, poll this endpoint      * to check execution status and retrieve results when complete.      *      * **Identifier:** Accepts either:      * - `requestId` (recommended): The short ID returned from the async request      * - `executionArn`: The full AWS Lambda durable execution ARN (must be URL-encoded)      *      * **Statuses:**      * - `pending`: Execution is starting (retry shortly)      * - `running`: Execution is in progress      * - `waiting_callback`: Execution paused, waiting for client tool results      * - `complete`: Execution finished successfully      * - `failed`: Execution failed with error      *      * **Client Tool Callback:**      * When status is `waiting_callback`, submit tool results via `POST /ai/chat/callback`.      *      * **Polling Recommendations:**      * - Start with 1 second delay, exponential backoff up to 30 seconds      * - Stop polling after 15 minutes (consider failed)

### Example

```typescript
import {
    AIInferenceApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AIInferenceApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let identifier: string; //Either the requestId from async response, or full executionArn (URL-encoded) (default to undefined)

const { status, data } = await apiInstance.getDurableExecutionStatus(
    organisation,
    identifier
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] | The organisation ID | defaults to undefined|
| **identifier** | [**string**] | Either the requestId from async response, or full executionArn (URL-encoded) | defaults to undefined|


### Return type

**GetDurableExecutionStatus200Response**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Execution status retrieved |  -  |
|**404** | Execution not found |  -  |
|**403** | Access denied |  -  |
|**500** | Failed to retrieve execution status |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **imageGeneration**
> ImageGeneration200Response imageGeneration(imageGenerationRequest)

Generates images using Amazon Nova Canvas image generation model.      *      * **Region Restriction:** Nova Canvas is ONLY available in:      * - `us-east-1` (US East, N. Virginia)      * - `ap-northeast-1` (Asia Pacific, Tokyo)      * - `eu-west-1` (Europe, Ireland)      * ❌ NOT available in `ap-southeast-2` (Sydney)      *      * **Supported Task Types:**      * - **TEXT_IMAGE**: Basic text-to-image generation      * - **TEXT_IMAGE with Conditioning**: Layout-guided generation using edge detection or segmentation      * - **COLOR_GUIDED_GENERATION**: Generate images with specific color palettes      * - **IMAGE_VARIATION**: Create variations of existing images      * - **INPAINTING**: Fill masked areas in images      * - **OUTPAINTING**: Extend images beyond their borders      * - **BACKGROUND_REMOVAL**: Remove backgrounds from images      * - **VIRTUAL_TRY_ON**: Try on garments/objects on people      *      * **Quality Options:**      * - **standard**: Faster generation, lower cost      * - **premium**: Higher quality, slower generation      *      * **Timeout:** Image generation can take up to 5 minutes

### Example

```typescript
import {
    AIInferenceApi,
    Configuration,
    ImageGenerationRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AIInferenceApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let imageGenerationRequest: ImageGenerationRequest; //Image generation request

const { status, data } = await apiInstance.imageGeneration(
    organisation,
    imageGenerationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **imageGenerationRequest** | **ImageGenerationRequest**| Image generation request | |
| **organisation** | [**string**] | The organisation ID | defaults to undefined|


### Return type

**ImageGeneration200Response**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Image(s) generated successfully |  -  |
|**400** | Invalid request parameters |  -  |
|**403** | Access denied |  -  |
|**500** | Failed to generate images |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **submitToolCallback**
> SubmitToolCallback200Response submitToolCallback(submitToolCallbackRequest)

Submit tool execution results to resume a suspended durable execution.      *      * **When to use:** When polling the execution status returns `waiting_callback`, use this endpoint      * to submit the results of client-executed tools. The execution will then resume.      *      * **Flow:**      * 1. Start async chat with client-executed tools (`autoExecute: []` or tools not in autoExecute list)      * 2. Poll status until `waiting_callback`      * 3. Execute tools locally using `pendingTools` from status response      * 4. Submit results here with the `callbackId`      * 5. Poll status until `complete`      *      * **Important:** Each `callbackId` can only be used once. After submission, poll the execution      * status to see the updated state.

### Example

```typescript
import {
    AIInferenceApi,
    Configuration,
    SubmitToolCallbackRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AIInferenceApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let submitToolCallbackRequest: SubmitToolCallbackRequest; //

const { status, data } = await apiInstance.submitToolCallback(
    organisation,
    submitToolCallbackRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **submitToolCallbackRequest** | **SubmitToolCallbackRequest**|  | |
| **organisation** | [**string**] | The organisation ID | defaults to undefined|


### Return type

**SubmitToolCallback200Response**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Callback submitted successfully, execution will resume |  -  |
|**400** | Invalid request (missing callbackId or toolResults) |  -  |
|**404** | Callback not found or already processed |  -  |
|**403** | Access denied |  -  |
|**500** | Failed to submit callback |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

