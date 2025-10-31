# BackupManagementApi

All URIs are relative to *https://dashboard.quantcdn.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createBackup**](#createbackup) | **POST** /api/v3/organizations/{organisation}/applications/{application}/environments/{environment}/backups/{type} | Create a backup for an environment|
|[**deleteBackup**](#deletebackup) | **DELETE** /api/v3/organizations/{organisation}/applications/{application}/environments/{environment}/backups/{type}/{backupId} | Delete a backup|
|[**downloadBackup**](#downloadbackup) | **GET** /api/v3/organizations/{organisation}/applications/{application}/environments/{environment}/backups/{type}/{backupId}/download | Generate a download URL for a backup|
|[**listBackups**](#listbackups) | **GET** /api/v3/organizations/{organisation}/applications/{application}/environments/{environment}/backups/{type} | List backups for an environment|

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

[BearerAuth](../README.md#BearerAuth)

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

[BearerAuth](../README.md#BearerAuth)

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

[BearerAuth](../README.md#BearerAuth)

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

Retrieves a list of backups (database or filesystem) for the environment with status, size, and metadata. Supports filtering and ordering via query parameters.

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
let order: 'asc' | 'desc'; //Sort order for backups by creation date (asc = oldest first, desc = newest first) (optional) (default to 'desc')
let limit: number; //Maximum number of backups to return (max 100) (optional) (default to 50)
let createdBefore: string; //Only return backups created before this ISO 8601 timestamp (e.g., 2025-01-01T00:00:00Z) (optional) (default to undefined)
let createdAfter: string; //Only return backups created after this ISO 8601 timestamp (e.g., 2024-12-01T00:00:00Z) (optional) (default to undefined)
let status: 'completed' | 'failed' | 'running'; //Filter backups by status (optional) (default to undefined)
let nextToken: string; //Token for retrieving the next page of results (optional) (default to undefined)

const { status, data } = await apiInstance.listBackups(
    organisation,
    application,
    environment,
    type,
    order,
    limit,
    createdBefore,
    createdAfter,
    status,
    nextToken
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] | The organisation ID | defaults to undefined|
| **application** | [**string**] | The application ID | defaults to undefined|
| **environment** | [**string**] | The environment ID | defaults to undefined|
| **type** | [**&#39;database&#39; | &#39;filesystem&#39;**]**Array<&#39;database&#39; &#124; &#39;filesystem&#39;>** | The backup type | defaults to undefined|
| **order** | [**&#39;asc&#39; | &#39;desc&#39;**]**Array<&#39;asc&#39; &#124; &#39;desc&#39;>** | Sort order for backups by creation date (asc &#x3D; oldest first, desc &#x3D; newest first) | (optional) defaults to 'desc'|
| **limit** | [**number**] | Maximum number of backups to return (max 100) | (optional) defaults to 50|
| **createdBefore** | [**string**] | Only return backups created before this ISO 8601 timestamp (e.g., 2025-01-01T00:00:00Z) | (optional) defaults to undefined|
| **createdAfter** | [**string**] | Only return backups created after this ISO 8601 timestamp (e.g., 2024-12-01T00:00:00Z) | (optional) defaults to undefined|
| **status** | [**&#39;completed&#39; | &#39;failed&#39; | &#39;running&#39;**]**Array<&#39;completed&#39; &#124; &#39;failed&#39; &#124; &#39;running&#39;>** | Filter backups by status | (optional) defaults to undefined|
| **nextToken** | [**string**] | Token for retrieving the next page of results | (optional) defaults to undefined|


### Return type

**ListBackups200Response**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of backups |  -  |
|**422** | Invalid backup type |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

