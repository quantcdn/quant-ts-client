# BackupManagementApi

All URIs are relative to *https://dashboard.quantcdn.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createBackup**](#createbackup) | **POST** /api/v3/organisations/{organisation}/applications/{application}/environments/{environment}/backups/{type} | Create a backup for an environment|
|[**deleteBackup**](#deletebackup) | **DELETE** /api/v3/organisations/{organisation}/applications/{application}/environments/{environment}/backups/{type}/{backupId} | Delete a backup|
|[**downloadBackup**](#downloadbackup) | **GET** /api/v3/organisations/{organisation}/applications/{application}/environments/{environment}/backups/{type}/{backupId}/download | Generate a download URL for a backup|
|[**listBackups**](#listbackups) | **GET** /api/v3/organisations/{organisation}/applications/{application}/environments/{environment}/backups/{type} | List backups for an environment|

# **createBackup**
> CreateBackup202Response createBackup()


### Example

```typescript
import {
    BackupManagementApi,
    Configuration,
    CreateBackupRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new BackupManagementApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let application: string; //The application ID (default to undefined)
let environment: string; //The environment ID (default to undefined)
let type: 'database' | 'filesystem'; //The backup type (default to undefined)
let createBackupRequest: CreateBackupRequest; // (optional)

const { status, data } = await apiInstance.createBackup(
    organisation,
    application,
    environment,
    type,
    createBackupRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createBackupRequest** | **CreateBackupRequest**|  | |
| **organisation** | [**string**] | The organisation ID | defaults to undefined|
| **application** | [**string**] | The application ID | defaults to undefined|
| **environment** | [**string**] | The environment ID | defaults to undefined|
| **type** | [**&#39;database&#39; | &#39;filesystem&#39;**]**Array<&#39;database&#39; &#124; &#39;filesystem&#39;>** | The backup type | defaults to undefined|


### Return type

**CreateBackup202Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**202** | Backup operation initiated |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteBackup**
> DeleteBackup200Response deleteBackup()


### Example

```typescript
import {
    BackupManagementApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new BackupManagementApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let application: string; //The application ID (default to undefined)
let environment: string; //The environment ID (default to undefined)
let type: 'database' | 'filesystem'; //The backup type (default to undefined)
let backupId: string; //The backup ID (default to undefined)

const { status, data } = await apiInstance.deleteBackup(
    organisation,
    application,
    environment,
    type,
    backupId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] | The organisation ID | defaults to undefined|
| **application** | [**string**] | The application ID | defaults to undefined|
| **environment** | [**string**] | The environment ID | defaults to undefined|
| **type** | [**&#39;database&#39; | &#39;filesystem&#39;**]**Array<&#39;database&#39; &#124; &#39;filesystem&#39;>** | The backup type | defaults to undefined|
| **backupId** | [**string**] | The backup ID | defaults to undefined|


### Return type

**DeleteBackup200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Backup deleted successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **downloadBackup**
> DownloadBackup200Response downloadBackup()


### Example

```typescript
import {
    BackupManagementApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new BackupManagementApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let application: string; //The application ID (default to undefined)
let environment: string; //The environment ID (default to undefined)
let type: 'database' | 'filesystem'; //The backup type (default to undefined)
let backupId: string; //The backup ID (default to undefined)

const { status, data } = await apiInstance.downloadBackup(
    organisation,
    application,
    environment,
    type,
    backupId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] | The organisation ID | defaults to undefined|
| **application** | [**string**] | The application ID | defaults to undefined|
| **environment** | [**string**] | The environment ID | defaults to undefined|
| **type** | [**&#39;database&#39; | &#39;filesystem&#39;**]**Array<&#39;database&#39; &#124; &#39;filesystem&#39;>** | The backup type | defaults to undefined|
| **backupId** | [**string**] | The backup ID | defaults to undefined|


### Return type

**DownloadBackup200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Download URL generated successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listBackups**
> ListBackups200Response listBackups()


### Example

```typescript
import {
    BackupManagementApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new BackupManagementApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let application: string; //The application ID (default to undefined)
let environment: string; //The environment ID (default to undefined)
let type: 'database' | 'filesystem'; //The backup type (default to undefined)

const { status, data } = await apiInstance.listBackups(
    organisation,
    application,
    environment,
    type
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] | The organisation ID | defaults to undefined|
| **application** | [**string**] | The application ID | defaults to undefined|
| **environment** | [**string**] | The environment ID | defaults to undefined|
| **type** | [**&#39;database&#39; | &#39;filesystem&#39;**]**Array<&#39;database&#39; &#124; &#39;filesystem&#39;>** | The backup type | defaults to undefined|


### Return type

**ListBackups200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of backups |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

