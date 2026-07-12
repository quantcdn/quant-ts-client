# OpenAICompatibilityApi

All URIs are relative to *https://dashboard.quantcdn.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**oaiChatCompletions**](#oaichatcompletions) | **POST** /oai/v1/chat/completions | Create a chat completion (OpenAI-compatible)|
|[**oaiEmbeddings**](#oaiembeddings) | **POST** /oai/v1/embeddings | Create embeddings (OpenAI-compatible)|
|[**oaiGetModel**](#oaigetmodel) | **GET** /oai/v1/models/{model} | Retrieve a model (OpenAI-compatible)|
|[**oaiListModels**](#oailistmodels) | **GET** /oai/v1/models | List available models (OpenAI-compatible)|

# **oaiChatCompletions**
> OaiChatCompletions200Response oaiChatCompletions(oaiChatCompletionsRequest)

Drop-in replacement for OpenAI\'s POST /v1/chat/completions. Point any OpenAI SDK at base_url=https://<host>/oai/v1 and use a Quant API token (qc_...) as the api_key. Set `stream: true` to receive Server-Sent Events (chat.completion.chunk objects terminated by `data: [DONE]`); otherwise a single chat.completion object is returned. Supports tool/function calling and the standard tool_choice modes.

### Example

```typescript
import {
    OpenAICompatibilityApi,
    Configuration,
    OaiChatCompletionsRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new OpenAICompatibilityApi(configuration);

let oaiChatCompletionsRequest: OaiChatCompletionsRequest; //

const { status, data } = await apiInstance.oaiChatCompletions(
    oaiChatCompletionsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **oaiChatCompletionsRequest** | **OaiChatCompletionsRequest**|  | |


### Return type

**OaiChatCompletions200Response**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A chat.completion object (or an SSE stream of chat.completion.chunk objects when stream&#x3D;true) |  -  |
|**401** | Missing or invalid API key |  -  |
|**403** | Token not scoped to an organisation, or org lacks AI access |  -  |
|**422** | Invalid request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **oaiEmbeddings**
> OaiEmbeddings200Response oaiEmbeddings(oaiEmbeddingsRequest)

Drop-in replacement for OpenAI\'s POST /v1/embeddings. Accepts a single string or an array of strings in `input` and returns a list of embedding objects.

### Example

```typescript
import {
    OpenAICompatibilityApi,
    Configuration,
    OaiEmbeddingsRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new OpenAICompatibilityApi(configuration);

let oaiEmbeddingsRequest: OaiEmbeddingsRequest; //

const { status, data } = await apiInstance.oaiEmbeddings(
    oaiEmbeddingsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **oaiEmbeddingsRequest** | **OaiEmbeddingsRequest**|  | |


### Return type

**OaiEmbeddings200Response**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A list of embedding objects |  -  |
|**401** | Missing or invalid API key |  -  |
|**403** | Token not scoped to an organisation, or org lacks AI access |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **oaiGetModel**
> OaiGetModel200Response oaiGetModel()

Drop-in replacement for OpenAI\'s GET /v1/models/{model}.

### Example

```typescript
import {
    OpenAICompatibilityApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new OpenAICompatibilityApi(configuration);

let model: string; // (default to undefined)

const { status, data } = await apiInstance.oaiGetModel(
    model
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **model** | [**string**] |  | defaults to undefined|


### Return type

**OaiGetModel200Response**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A model object |  -  |
|**401** | Missing or invalid API key |  -  |
|**404** | Model not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **oaiListModels**
> OaiListModels200Response oaiListModels()

Drop-in replacement for OpenAI\'s GET /v1/models. Returns the model ids available to the organisation; pass one of these ids as `model` in chat/embeddings requests.

### Example

```typescript
import {
    OpenAICompatibilityApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new OpenAICompatibilityApi(configuration);

const { status, data } = await apiInstance.oaiListModels();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**OaiListModels200Response**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A list of model objects |  -  |
|**401** | Missing or invalid API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

