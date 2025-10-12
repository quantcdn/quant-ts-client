# AIServicesApi

All URIs are relative to *https://dashboard.quantcdn.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**chatInference**](#chatinference) | **POST** /organisations/{organisation}/ai/chat | Chat inference via API Gateway (buffered responses) with multimodal support|
|[**chatInferenceStream**](#chatinferencestream) | **POST** /organisations/{organisation}/ai/chat/stream | Chat inference via streaming endpoint (true HTTP streaming) with multimodal support|
|[**createAISession**](#createaisession) | **POST** /organisations/{organisation}/ai/sessions | Create a new chat session|
|[**deleteAISession**](#deleteaisession) | **DELETE** /organisations/{organisation}/ai/sessions/{sessionId} | Delete a chat session|
|[**getAIConfig**](#getaiconfig) | **GET** /organisations/{organisation}/ai/config | Get AI configuration for an organization|
|[**getAISession**](#getaisession) | **GET** /organisations/{organisation}/ai/sessions/{sessionId} | Get a specific chat session|
|[**getAIUsageStats**](#getaiusagestats) | **GET** /organisations/{organisation}/ai/usage | Get AI usage statistics|
|[**listAIModels**](#listaimodels) | **GET** /organisations/{organisation}/ai/models | List available AI models for an organization|
|[**listAISessions**](#listaisessions) | **GET** /organisations/{organisation}/ai/sessions | List chat sessions for an organization|
|[**updateAIConfig**](#updateaiconfig) | **PUT** /organisations/{organisation}/ai/config | Update AI configuration for an organization|

# **chatInference**
> ChatInference200Response chatInference(chatInferenceRequest)

Sends requests to the AI API Gateway endpoint which buffers responses. Supports text, images, videos, and documents via base64 encoding.      *      * **Multimodal Support:**      * - **Text**: Simple string content      * - **Images**: Base64-encoded PNG, JPEG, GIF, WebP (up to 25MB)      * - **Videos**: Base64-encoded MP4, MOV, WebM, etc. (up to 25MB)      * - **Documents**: Base64-encoded PDF, DOCX, CSV, etc. (up to 25MB)      *      * **Supported Models:**      * - Amazon Nova Lite, Micro, Pro (all support multimodal)      * - Claude models (text only)      *      * **Usage Tips:**      * - Use base64 encoding for images/videos < 5-10MB      * - Place media before text prompts for best results      * - Label multiple media files (e.g., \'Image 1:\', \'Image 2:\')      * - Maximum 25MB total payload size

### Example

```typescript
import {
    AIServicesApi,
    Configuration,
    ChatInferenceRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AIServicesApi(configuration);

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

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Chat inference completed |  -  |
|**500** | Failed to perform chat inference |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **chatInferenceStream**
> string chatInferenceStream(chatInferenceStreamRequest)

Streams responses from the AI streaming subdomain using Server-Sent Events (SSE). Tokens are streamed in real-time as they are generated.      *      * **Multimodal Support:**      * - **Text**: Simple string content      * - **Images**: Base64-encoded PNG, JPEG, GIF, WebP (up to 25MB)      * - **Videos**: Base64-encoded MP4, MOV, WebM, etc. (up to 25MB)      * - **Documents**: Base64-encoded PDF, DOCX, CSV, etc. (up to 25MB)      *      * **Supported Models:**      * - Amazon Nova Lite, Micro, Pro (all support multimodal)      * - Claude models (text only)      *      * **Usage Tips:**      * - Use base64 encoding for images/videos < 5-10MB      * - Place media before text prompts for best results      * - Label multiple media files (e.g., \'Image 1:\', \'Image 2:\')      * - Maximum 25MB total payload size      * - Streaming works with all content types (text, image, video, document)

### Example

```typescript
import {
    AIServicesApi,
    Configuration,
    ChatInferenceStreamRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AIServicesApi(configuration);

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

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: text/event-stream


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Streaming response (text/event-stream) |  -  |
|**500** | Failed to perform streaming inference |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createAISession**
> CreateAISession201Response createAISession(createAISessionRequest)


### Example

```typescript
import {
    AIServicesApi,
    Configuration,
    CreateAISessionRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AIServicesApi(configuration);

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

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Session created successfully |  -  |
|**500** | Failed to create session |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteAISession**
> DeleteAISession200Response deleteAISession()


### Example

```typescript
import {
    AIServicesApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AIServicesApi(configuration);

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

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Session deleted successfully |  -  |
|**500** | Failed to delete session |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAIConfig**
> GetAIConfig200Response getAIConfig()


### Example

```typescript
import {
    AIServicesApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AIServicesApi(configuration);

let organisation: string; //The organisation ID (default to undefined)

const { status, data } = await apiInstance.getAIConfig(
    organisation
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] | The organisation ID | defaults to undefined|


### Return type

**GetAIConfig200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | AI configuration |  -  |
|**500** | Failed to fetch configuration |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAISession**
> GetAISession200Response getAISession()


### Example

```typescript
import {
    AIServicesApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AIServicesApi(configuration);

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

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The chat session |  -  |
|**404** | Session not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAIUsageStats**
> GetAIUsageStats200Response getAIUsageStats()


### Example

```typescript
import {
    AIServicesApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AIServicesApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let month: string; //Month to retrieve statistics for (YYYY-MM format) (optional) (default to undefined)

const { status, data } = await apiInstance.getAIUsageStats(
    organisation,
    month
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] | The organisation ID | defaults to undefined|
| **month** | [**string**] | Month to retrieve statistics for (YYYY-MM format) | (optional) defaults to undefined|


### Return type

**GetAIUsageStats200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Usage statistics |  -  |
|**500** | Failed to fetch usage statistics |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listAIModels**
> Array<ListAIModels200ResponseInner> listAIModels()


### Example

```typescript
import {
    AIServicesApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AIServicesApi(configuration);

let organisation: string; //The organisation ID (default to undefined)

const { status, data } = await apiInstance.listAIModels(
    organisation
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] | The organisation ID | defaults to undefined|


### Return type

**Array<ListAIModels200ResponseInner>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of available AI models |  -  |
|**500** | Failed to fetch models |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listAISessions**
> Array<ListAISessions200ResponseInner> listAISessions()


### Example

```typescript
import {
    AIServicesApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AIServicesApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let limit: number; //Maximum number of sessions to return (optional) (default to undefined)
let offset: number; //Offset for pagination (optional) (default to undefined)
let model: string; //Filter by model ID (optional) (default to undefined)

const { status, data } = await apiInstance.listAISessions(
    organisation,
    limit,
    offset,
    model
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] | The organisation ID | defaults to undefined|
| **limit** | [**number**] | Maximum number of sessions to return | (optional) defaults to undefined|
| **offset** | [**number**] | Offset for pagination | (optional) defaults to undefined|
| **model** | [**string**] | Filter by model ID | (optional) defaults to undefined|


### Return type

**Array<ListAISessions200ResponseInner>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of chat sessions |  -  |
|**500** | Failed to fetch sessions |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateAIConfig**
> updateAIConfig(updateAIConfigRequest)


### Example

```typescript
import {
    AIServicesApi,
    Configuration,
    UpdateAIConfigRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AIServicesApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let updateAIConfigRequest: UpdateAIConfigRequest; //

const { status, data } = await apiInstance.updateAIConfig(
    organisation,
    updateAIConfigRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateAIConfigRequest** | **UpdateAIConfigRequest**|  | |
| **organisation** | [**string**] | The organisation ID | defaults to undefined|


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Configuration updated successfully |  -  |
|**500** | Failed to update configuration |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

