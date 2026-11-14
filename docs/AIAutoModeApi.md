# AIAutoModeApi

All URIs are relative to *https://dashboard.quantcdn.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteAutoMode**](#deleteautomode) | **DELETE** /api/v3/organizations/{organisation}/ai/auto-mode | Remove the auto mode setting for an organisation|
|[**getAutoMode**](#getautomode) | **GET** /api/v3/organizations/{organisation}/ai/auto-mode | Get the auto mode setting for an organisation|
|[**updateAutoMode**](#updateautomode) | **PUT** /api/v3/organizations/{organisation}/ai/auto-mode | Save the auto mode setting for an organisation|

# **deleteAutoMode**
> DeleteAutoMode200Response deleteAutoMode()


### Example

```typescript
import {
    AIAutoModeApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AIAutoModeApi(configuration);

let organisation: string; //The organisation ID (default to undefined)

const { status, data } = await apiInstance.deleteAutoMode(
    organisation
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] | The organisation ID | defaults to undefined|


### Return type

**DeleteAutoMode200Response**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The setting is removed |  -  |
|**409** | Another change to the setting happened at the same time. Read the setting again, then retry. |  -  |
|**502** | The AI service is not available |  -  |
|**503** | The AI service cannot remove the setting now (the audit ledger is not available) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAutoMode**
> GetAutoMode200Response getAutoMode()


### Example

```typescript
import {
    AIAutoModeApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AIAutoModeApi(configuration);

let organisation: string; //The organisation ID (default to undefined)

const { status, data } = await apiInstance.getAutoMode(
    organisation
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] | The organisation ID | defaults to undefined|


### Return type

**GetAutoMode200Response**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The auto mode setting and the eligibility report |  -  |
|**502** | The AI service is not available |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateAutoMode**
> UpdateAutoMode200Response updateAutoMode(aIAutoModeInput)


### Example

```typescript
import {
    AIAutoModeApi,
    Configuration,
    AIAutoModeInput
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AIAutoModeApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let aIAutoModeInput: AIAutoModeInput; //

const { status, data } = await apiInstance.updateAutoMode(
    organisation,
    aIAutoModeInput
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **aIAutoModeInput** | **AIAutoModeInput**|  | |
| **organisation** | [**string**] | The organisation ID | defaults to undefined|


### Return type

**UpdateAutoMode200Response**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The saved setting |  -  |
|**400** | The setting is refused. When the models are not usable, eligible carries the eligibility report; it is null for a body shape error or an unknown organisation portal. |  -  |
|**409** | Conflict: the group revision is stale (another change was saved after the last read), the governance settings changed between the read and the write, or the organisation governance settings are not saved yet (error: \&quot;Save the organisation governance settings first\&quot;). Read the setting again, then retry. |  -  |
|**422** | Validation error |  -  |
|**502** | The AI service is not available |  -  |
|**503** | The AI service cannot save the setting now |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

