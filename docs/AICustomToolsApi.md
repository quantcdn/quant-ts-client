# AICustomToolsApi

All URIs are relative to *https://dashboard.quantcdn.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createCustomTool**](#createcustomtool) | **POST** /api/v3/organizations/{organisation}/ai/custom-tools | Register Custom Edge Function Tool|
|[**deleteCustomTool**](#deletecustomtool) | **DELETE** /api/v3/organizations/{organisation}/ai/custom-tools/{toolName} | Delete Custom Tool|
|[**getCustomTool**](#getcustomtool) | **GET** /api/v3/organizations/{organisation}/ai/custom-tools/{toolName} | Get Custom Tool|
|[**listCustomTools**](#listcustomtools) | **GET** /api/v3/organizations/{organisation}/ai/custom-tools | List Custom Tools|

# **createCustomTool**
> CreateCustomTool201Response createCustomTool(createCustomToolRequest)

Registers a custom edge function as a tool that AI models can invoke. This enables customers to create their own tools backed by edge functions.      *      * **Edge Function Contract:**      * - Edge functions must accept POST requests with JSON payload      * - Expected request format: `{ \'toolName\': \'...\', \'input\': {...}, \'orgId\': \'...\' }`      * - Must return JSON response with either `result` or `error` field      *      * **Async Tools:**      * Set `isAsync: true` for operations >5 seconds. The edge function should return `{ executionId: \'...\' }` and the AI will poll for completion.

### Example

```typescript
import {
    AICustomToolsApi,
    Configuration,
    CreateCustomToolRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AICustomToolsApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let createCustomToolRequest: CreateCustomToolRequest; //

const { status, data } = await apiInstance.createCustomTool(
    organisation,
    createCustomToolRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createCustomToolRequest** | **CreateCustomToolRequest**|  | |
| **organisation** | [**string**] | The organisation ID | defaults to undefined|


### Return type

**CreateCustomTool201Response**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Custom tool registered successfully |  -  |
|**400** | Invalid request parameters |  -  |
|**403** | Access denied |  -  |
|**409** | Tool with this name already exists |  -  |
|**500** | Failed to register custom tool |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteCustomTool**
> DeleteCustomTool200Response deleteCustomTool()

Deletes a custom tool registration. The underlying edge function is not affected.

### Example

```typescript
import {
    AICustomToolsApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AICustomToolsApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let toolName: string; //The tool name to delete (default to undefined)

const { status, data } = await apiInstance.deleteCustomTool(
    organisation,
    toolName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] | The organisation ID | defaults to undefined|
| **toolName** | [**string**] | The tool name to delete | defaults to undefined|


### Return type

**DeleteCustomTool200Response**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Custom tool deleted successfully |  -  |
|**403** | Access denied |  -  |
|**404** | Tool not found |  -  |
|**500** | Failed to delete custom tool |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCustomTool**
> GetCustomTool200Response getCustomTool()

Retrieves a single registered custom tool by name.

### Example

```typescript
import {
    AICustomToolsApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AICustomToolsApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let toolName: string; //The tool name to retrieve (default to undefined)

const { status, data } = await apiInstance.getCustomTool(
    organisation,
    toolName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] | The organisation ID | defaults to undefined|
| **toolName** | [**string**] | The tool name to retrieve | defaults to undefined|


### Return type

**GetCustomTool200Response**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Custom tool retrieved successfully |  -  |
|**403** | Access denied |  -  |
|**404** | Tool not found |  -  |
|**500** | Failed to retrieve custom tools |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listCustomTools**
> ListCustomTools200Response listCustomTools()

Lists all registered custom edge function tools for an organization.

### Example

```typescript
import {
    AICustomToolsApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AICustomToolsApi(configuration);

let organisation: string; //The organisation ID (default to undefined)

const { status, data } = await apiInstance.listCustomTools(
    organisation
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] | The organisation ID | defaults to undefined|


### Return type

**ListCustomTools200Response**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Custom tools retrieved successfully |  -  |
|**403** | Access denied |  -  |
|**500** | Failed to retrieve custom tools |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

