# ComposeApi

All URIs are relative to *https://dashboard.quantcdn.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getEnvironmentCompose**](#getenvironmentcompose) | **GET** /api/v3/organizations/{organisation}/applications/{application}/environments/{environment}/compose | Get the compose file for an environment|
|[**validateCompose**](#validatecompose) | **POST** /api/v3/organizations/{organisation}/compose/validate | Validate a compose file|

# **getEnvironmentCompose**
> Compose getEnvironmentCompose()


### Example

```typescript
import {
    ComposeApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new ComposeApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let application: string; //The application ID (default to undefined)
let environment: string; //The environment ID (default to undefined)

const { status, data } = await apiInstance.getEnvironmentCompose(
    organisation,
    application,
    environment
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] | The organisation ID | defaults to undefined|
| **application** | [**string**] | The application ID | defaults to undefined|
| **environment** | [**string**] | The environment ID | defaults to undefined|


### Return type

**Compose**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The compose file |  -  |
|**404** | The compose file not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **validateCompose**
> ValidateCompose200Response validateCompose(validateComposeRequest)

Accepts a docker-compose.yml file content, translates it into the internal compose definition format, and validates it. Quant Cloud provides comprehensive support for standard Docker Compose features including commands, entrypoints, health checks, dependencies, volume mounts, resource limits, and more. For detailed documentation on supported features and examples, see: https://docs.quantcdn.io/introduction-to-quant-cloud/importing-docker-compose/. Supports image tag suffixing via the imageSuffix query parameter or by sending a JSON wrapper with yamlContent and imageSuffix fields. When provided, internal image tags are transformed to {containerName}-{suffix} format (e.g., \'nginx-feature-xyz\').

### Example

```typescript
import {
    ComposeApi,
    Configuration,
    ValidateComposeRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new ComposeApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let validateComposeRequest: ValidateComposeRequest; //The docker-compose.yml file content. Can be sent as raw YAML string or as a JSON wrapper containing both yamlContent (string) and imageSuffix (string) fields. Query parameter imageSuffix takes precedence if both are provided.
let imageSuffix: string; //Optional. Image tag suffix to apply during translation. Transforms internal image tags to consistent \'{containerName}-{suffix}\' format (e.g., \'nginx-pr-456\'). External images are left unchanged. Useful for feature branch deployments. (optional) (default to undefined)

const { status, data } = await apiInstance.validateCompose(
    organisation,
    validateComposeRequest,
    imageSuffix
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **validateComposeRequest** | **ValidateComposeRequest**| The docker-compose.yml file content. Can be sent as raw YAML string or as a JSON wrapper containing both yamlContent (string) and imageSuffix (string) fields. Query parameter imageSuffix takes precedence if both are provided. | |
| **organisation** | [**string**] | The organisation ID | defaults to undefined|
| **imageSuffix** | [**string**] | Optional. Image tag suffix to apply during translation. Transforms internal image tags to consistent \&#39;{containerName}-{suffix}\&#39; format (e.g., \&#39;nginx-pr-456\&#39;). External images are left unchanged. Useful for feature branch deployments. | (optional) defaults to undefined|


### Return type

**ValidateCompose200Response**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Validation successful. Body contains the translated compose definition and any warnings. |  -  |
|**422** | Invalid YAML input or validation failed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

