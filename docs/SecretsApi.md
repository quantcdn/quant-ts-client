# SecretsApi

All URIs are relative to *https://dashboard.quantcdn.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteEnvironmentSecret**](#deleteenvironmentsecret) | **DELETE** /api/v3/organizations/{api_organisation}/applications/{api_application}/environments/{api_environment}/secrets/{api_secret} | Delete a secret|
|[**listEnvironmentSecrets**](#listenvironmentsecrets) | **GET** /api/v3/organizations/{api_organisation}/applications/{api_application}/environments/{api_environment}/secrets | List the secret names for an environment|
|[**updateEnvironmentSecret**](#updateenvironmentsecret) | **PUT** /api/v3/organizations/{api_organisation}/applications/{api_application}/environments/{api_environment}/secrets/{api_secret} | Create or replace a secret|

# **deleteEnvironmentSecret**
> DeleteEnvironmentSecret200Response deleteEnvironmentSecret()

Deletes the secret. The change takes effect on the next redeploy of the environment. A 200 with warnings means the deployed revision still references the secret and cannot start a replacement task until it is redeployed.

### Example

```typescript
import {
    SecretsApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new SecretsApi(configuration);

let apiOrganisation: string; //The organisation ID (default to undefined)
let apiApplication: string; //The application ID (default to undefined)
let apiEnvironment: string; //The environment ID (default to undefined)
let apiSecret: string; //The secret key (default to undefined)

const { status, data } = await apiInstance.deleteEnvironmentSecret(
    apiOrganisation,
    apiApplication,
    apiEnvironment,
    apiSecret
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **apiOrganisation** | [**string**] | The organisation ID | defaults to undefined|
| **apiApplication** | [**string**] | The application ID | defaults to undefined|
| **apiEnvironment** | [**string**] | The environment ID | defaults to undefined|
| **apiSecret** | [**string**] | The secret key | defaults to undefined|


### Return type

**DeleteEnvironmentSecret200Response**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | The secret is deleted (or did not exist). It takes effect on the next redeploy. |  -  |
|**200** | The secret is deleted, with warnings from Quant Cloud |  -  |
|**422** | The key is not valid |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listEnvironmentSecrets**
> Array<SecretKey> listEnvironmentSecrets()

Returns the names of the environment\'s secrets. Secret values are write-only and are never returned.

### Example

```typescript
import {
    SecretsApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new SecretsApi(configuration);

let apiOrganisation: string; //The organisation ID (default to undefined)
let apiApplication: string; //The application ID (default to undefined)
let apiEnvironment: string; //The environment ID (default to undefined)

const { status, data } = await apiInstance.listEnvironmentSecrets(
    apiOrganisation,
    apiApplication,
    apiEnvironment
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **apiOrganisation** | [**string**] | The organisation ID | defaults to undefined|
| **apiApplication** | [**string**] | The application ID | defaults to undefined|
| **apiEnvironment** | [**string**] | The environment ID | defaults to undefined|


### Return type

**Array<SecretKey>**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The secret names |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateEnvironmentSecret**
> SecretWriteResult updateEnvironmentSecret(updateEnvironmentSecretRequest)

Sets the secret value. The value is write-only: the response returns the key only. The change takes effect on the next redeploy of the environment. A name that already exists as an environment variable is refused with 409.

### Example

```typescript
import {
    SecretsApi,
    Configuration,
    UpdateEnvironmentSecretRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new SecretsApi(configuration);

let apiOrganisation: string; //The organisation ID (default to undefined)
let apiApplication: string; //The application ID (default to undefined)
let apiEnvironment: string; //The environment ID (default to undefined)
let apiSecret: string; //The secret key (default to undefined)
let updateEnvironmentSecretRequest: UpdateEnvironmentSecretRequest; //

const { status, data } = await apiInstance.updateEnvironmentSecret(
    apiOrganisation,
    apiApplication,
    apiEnvironment,
    apiSecret,
    updateEnvironmentSecretRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateEnvironmentSecretRequest** | **UpdateEnvironmentSecretRequest**|  | |
| **apiOrganisation** | [**string**] | The organisation ID | defaults to undefined|
| **apiApplication** | [**string**] | The application ID | defaults to undefined|
| **apiEnvironment** | [**string**] | The environment ID | defaults to undefined|
| **apiSecret** | [**string**] | The secret key | defaults to undefined|


### Return type

**SecretWriteResult**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The secret is set. It takes effect on the next redeploy. |  -  |
|**409** | The name already exists as an environment variable |  -  |
|**422** | The key or the value is not valid |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

