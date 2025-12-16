# AIModelsApi

All URIs are relative to *https://dashboard.quantcdn.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getAIModel**](#getaimodel) | **GET** /api/v3/organizations/{organisation}/ai/models/{modelId} | Get AI Model Details|
|[**listAIModels**](#listaimodels) | **GET** /api/v3/organizations/{organisation}/ai/models | List available AI models for an organization|

# **getAIModel**
> GetAIModel200Response getAIModel()

Retrieves detailed information about a specific Bedrock model from the catalog.      *      * **Features:**      * - Complete pricing breakdown (input/output per million tokens)      * - Context window and output token limits      * - Supported features (chat, vision, streaming, embeddings)      * - Model availability and deprecation status      * - Release date for version tracking      *      * **Example Model IDs:**      * - `amazon.nova-lite-v1:0` - Default multimodal model      * - `anthropic.claude-3-5-sonnet-20241022-v2:0` - Latest Claude      * - `amazon.titan-embed-text-v2:0` - Latest embeddings

### Example

```typescript
import {
    AIModelsApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AIModelsApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let modelId: string; //The model identifier (e.g., amazon.nova-lite-v1:0) (default to undefined)

const { status, data } = await apiInstance.getAIModel(
    organisation,
    modelId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] | The organisation ID | defaults to undefined|
| **modelId** | [**string**] | The model identifier (e.g., amazon.nova-lite-v1:0) | defaults to undefined|


### Return type

**GetAIModel200Response**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Model details retrieved successfully |  -  |
|**404** | Model not found in catalog |  -  |
|**500** | Failed to fetch model details |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listAIModels**
> ListAIModels200Response listAIModels()


### Example

```typescript
import {
    AIModelsApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AIModelsApi(configuration);

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

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of available AI models |  -  |
|**500** | Failed to fetch models |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

