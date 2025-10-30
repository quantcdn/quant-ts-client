# AIServicesApi

All URIs are relative to *https://dashboard.quantcdn.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**chatInference**](#chatinference) | **POST** /api/v3/organizations/{organisation}/ai/chat | Chat inference via API Gateway (buffered responses) with multimodal support|
|[**chatInferenceStream**](#chatinferencestream) | **POST** /api/v3/organizations/{organisation}/ai/chat/stream | Chat inference via streaming endpoint (true HTTP streaming) with multimodal support|
|[**createAISession**](#createaisession) | **POST** /api/v3/organizations/{organisation}/ai/sessions | Create a new chat session with multi-tenant isolation|
|[**deleteAISession**](#deleteaisession) | **DELETE** /api/v3/organizations/{organisation}/ai/sessions/{sessionId} | Delete a chat session|
|[**embeddings**](#embeddings) | **POST** /api/v3/organizations/{organisation}/ai/embeddings | Generate text embeddings for semantic search and RAG applications|
|[**getAIConfig**](#getaiconfig) | **GET** /api/v3/organizations/{organisation}/ai/config | Get AI configuration for an organization|
|[**getAISession**](#getaisession) | **GET** /api/v3/organizations/{organisation}/ai/sessions/{sessionId} | Get a specific chat session|
|[**getAIUsageStats**](#getaiusagestats) | **GET** /api/v3/organizations/{organisation}/ai/usage | Get AI usage statistics|
|[**imageGeneration**](#imagegeneration) | **POST** /api/v3/organizations/{organisation}/ai/image-generation | Generate images with Amazon Nova Canvas|
|[**listAIModels**](#listaimodels) | **GET** /api/v3/organizations/{organisation}/ai/models | List available AI models for an organization|
|[**listAISessions**](#listaisessions) | **GET** /api/v3/organizations/{organisation}/ai/sessions | List chat sessions with multi-tenant filtering|
|[**updateAIConfig**](#updateaiconfig) | **PUT** /api/v3/organizations/{organisation}/ai/config | Update AI configuration for an organization|

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

Creates an AI session with automatic expiration (60 min default, 24h max). Sessions are isolated by organization. Use userId to identify the user creating the session. Use sessionGroup for logical grouping. Use metadata for additional custom data. Filter sessions by userId or sessionGroup when listing.

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
|**400** | Invalid request (missing userId or invalid parameters) |  -  |
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

# **embeddings**
> Embeddings200Response embeddings(embeddingsRequest)

Generates vector embeddings for text content using embedding models. Used for semantic search, document similarity, and RAG applications.      *      * **Features:**      * - Single text or batch processing (up to 100 texts)      * - Configurable dimensions (256, 512, 1024, 8192 for Titan v2)      * - Optional normalization to unit length      * - Usage tracking for billing      *      * **Use Cases:**      * - Semantic search across documents      * - Similarity matching for content recommendations      * - RAG (Retrieval-Augmented Generation) pipelines      * - Clustering and classification      *      * **Available Embedding Models:**      * - amazon.titan-embed-text-v2:0 (default, supports 256-8192 dimensions)      * - amazon.titan-embed-text-v1:0 (1536 dimensions fixed)

### Example

```typescript
import {
    AIServicesApi,
    Configuration,
    EmbeddingsRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AIServicesApi(configuration);

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

No authorization required

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

# **imageGeneration**
> ImageGeneration200Response imageGeneration(imageGenerationRequest)

Generates images using Amazon Nova Canvas image generation model.      *      * **Region Restriction:** Nova Canvas is ONLY available in:      * - `us-east-1` (US East, N. Virginia)      * - `ap-northeast-1` (Asia Pacific, Tokyo)      * - `eu-west-1` (Europe, Ireland)      * ❌ NOT available in `ap-southeast-2` (Sydney)      *      * **Supported Task Types:**      * - **TEXT_IMAGE**: Basic text-to-image generation      * - **TEXT_IMAGE with Conditioning**: Layout-guided generation using edge detection or segmentation      * - **COLOR_GUIDED_GENERATION**: Generate images with specific color palettes      * - **IMAGE_VARIATION**: Create variations of existing images      * - **INPAINTING**: Fill masked areas in images      * - **OUTPAINTING**: Extend images beyond their borders      * - **BACKGROUND_REMOVAL**: Remove backgrounds from images      * - **VIRTUAL_TRY_ON**: Try on garments/objects on people      *      * **Quality Options:**      * - **standard**: Faster generation, lower cost      * - **premium**: Higher quality, slower generation      *      * **Timeout:** Image generation can take up to 5 minutes

### Example

```typescript
import {
    AIServicesApi,
    Configuration,
    ImageGenerationRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AIServicesApi(configuration);

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

No authorization required

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

# **listAIModels**
> ListAIModels200Response listAIModels()


### Example

```typescript
import {
    AIServicesApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AIServicesApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let feature: 'chat' | 'embeddings' | 'vision' | 'streaming' | 'all'; //Filter models by supported feature (optional) (default to 'all')

const { status, data } = await apiInstance.listAIModels(
    organisation,
    feature
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] | The organisation ID | defaults to undefined|
| **feature** | [**&#39;chat&#39; | &#39;embeddings&#39; | &#39;vision&#39; | &#39;streaming&#39; | &#39;all&#39;**]**Array<&#39;chat&#39; &#124; &#39;embeddings&#39; &#124; &#39;vision&#39; &#124; &#39;streaming&#39; &#124; &#39;all&#39;>** | Filter models by supported feature | (optional) defaults to 'all'|


### Return type

**ListAIModels200Response**

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

Lists active sessions for an organization with flexible filtering options.      *      * **Query Combinations:**      * 1. By Organization (default): Returns all sessions in the organization      * 2. By Organization + Group: `?sessionGroup=drupal-prod` - Sessions in a specific group      * 3. By User: `?userId=user-123` - All sessions for a user      * 4. By User + Group: `?userId=user-123&sessionGroup=drupal-prod` - User\'s sessions in a specific group      *      * **Use Cases:**      * - List user\'s conversations in a specific app/environment      * - Admin view of all sessions in a customer/tenant group      * - User profile showing all AI conversations across apps

### Example

```typescript
import {
    AIServicesApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AIServicesApi(configuration);

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

