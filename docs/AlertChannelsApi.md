# AlertChannelsApi

All URIs are relative to *https://dashboard.quantcdn.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**alertChannelsList**](#alertchannelslist) | **GET** /api/v3/organizations/{organisation}/projects/{project}/alert-channels | List the organisation\&#39;s alert channels|

# **alertChannelsList**
> AlertChannelList alertChannelsList()

Returns every alert channel of the organisation (channels are organisation-wide; the project segment lets a project-limited token call it). Each item has the ID, name, type and a masked hint only. Needs the alert-channels:read scope and the view_alert_channels permission.

### Example

```typescript
import {
    AlertChannelsApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AlertChannelsApi(configuration);

let organisation: string; //The organisation machine name (default to undefined)
let project: string; //The project machine name (default to undefined)

const { status, data } = await apiInstance.alertChannelsList(
    organisation,
    project
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] | The organisation machine name | defaults to undefined|
| **project** | [**string**] | The project machine name | defaults to undefined|


### Return type

**AlertChannelList**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The organisation\&#39;s alert channels |  -  |
|**401** | Unauthorized |  -  |
|**403** | The token or role cannot read alert channels, or the token is limited to another project |  -  |
|**404** | Alert channels are not available on this platform |  -  |
|**502** | The alerts service did not answer |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

