# CommandsApi

All URIs are relative to *https://dashboard.quantcdn.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createCommand**](#createcommand) | **POST** /api/v3/organizations/{organisation}/environments/{environment}/commands | Create a command for an environment|
|[**getCommand**](#getcommand) | **GET** /api/v3/organizations/{organisation}/environments/{environment}/commands/{command} | Get a command|
|[**listCommands**](#listcommands) | **GET** /api/v3/organizations/{organisation}/environments/{environment}/commands | Get all commands for an environment|

# **createCommand**
> Command createCommand(createCommandRequest)


### Example

```typescript
import {
    CommandsApi,
    Configuration,
    CreateCommandRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new CommandsApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let environment: string; //The environment ID (default to undefined)
let createCommandRequest: CreateCommandRequest; //

const { status, data } = await apiInstance.createCommand(
    organisation,
    environment,
    createCommandRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createCommandRequest** | **CreateCommandRequest**|  | |
| **organisation** | [**string**] | The organisation ID | defaults to undefined|
| **environment** | [**string**] | The environment ID | defaults to undefined|


### Return type

**Command**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The command |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCommand**
> Command getCommand()


### Example

```typescript
import {
    CommandsApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new CommandsApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let environment: string; //The environment ID (default to undefined)
let command: string; //The command ID (default to undefined)

const { status, data } = await apiInstance.getCommand(
    organisation,
    environment,
    command
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] | The organisation ID | defaults to undefined|
| **environment** | [**string**] | The environment ID | defaults to undefined|
| **command** | [**string**] | The command ID | defaults to undefined|


### Return type

**Command**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The command |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listCommands**
> Command listCommands()


### Example

```typescript
import {
    CommandsApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new CommandsApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let environment: string; //The environment ID (default to undefined)

const { status, data } = await apiInstance.listCommands(
    organisation,
    environment
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] | The organisation ID | defaults to undefined|
| **environment** | [**string**] | The environment ID | defaults to undefined|


### Return type

**Command**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The commands |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

