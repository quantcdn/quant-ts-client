# RestoreManagementApi

All URIs are relative to *https://dashboard.quantcdn.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getRestoreStatus**](#getrestorestatus) | **GET** /api/v3/organizations/{organisation}/applications/{application}/environments/{environment}/restores/{restoreId} | Get the status of a restore operation|
|[**restoreDatabase**](#restoredatabase) | **POST** /api/v3/organizations/{organisation}/applications/{application}/environments/{environment}/backups/{backupId}/restore-database | Restore a database backup to a target environment|
|[**restoreFilesystem**](#restorefilesystem) | **POST** /api/v3/organizations/{organisation}/applications/{application}/environments/{environment}/backups/{backupId}/restore-filesystem | Restore a filesystem backup to a target environment|

# **getRestoreStatus**
> GetRestoreStatus200Response getRestoreStatus()

Returns the current status and metadata for a restore operation. Poll this endpoint to track progress.

### Example

```typescript
import {
    RestoreManagementApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new RestoreManagementApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let application: string; //The application ID (default to undefined)
let environment: string; //The environment ID (default to undefined)
let restoreId: string; //The restore operation ID (default to undefined)

const { status, data } = await apiInstance.getRestoreStatus(
    organisation,
    application,
    environment,
    restoreId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] | The organisation ID | defaults to undefined|
| **application** | [**string**] | The application ID | defaults to undefined|
| **environment** | [**string**] | The environment ID | defaults to undefined|
| **restoreId** | [**string**] | The restore operation ID | defaults to undefined|


### Return type

**GetRestoreStatus200Response**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Restore operation record |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **restoreDatabase**
> RestoreDatabase202Response restoreDatabase(restoreDatabaseRequest)

Initiates an async restore of a database backup into the specified target environment. The backup may originate from a different environment of the same application (cross-env restore). Returns 202 with a restoreId for status polling.

### Example

```typescript
import {
    RestoreManagementApi,
    Configuration,
    RestoreDatabaseRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new RestoreManagementApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let application: string; //The application ID (default to undefined)
let environment: string; //The TARGET environment ID to restore INTO (default to undefined)
let backupId: string; //The backup ID to restore from (default to undefined)
let restoreDatabaseRequest: RestoreDatabaseRequest; //

const { status, data } = await apiInstance.restoreDatabase(
    organisation,
    application,
    environment,
    backupId,
    restoreDatabaseRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **restoreDatabaseRequest** | **RestoreDatabaseRequest**|  | |
| **organisation** | [**string**] | The organisation ID | defaults to undefined|
| **application** | [**string**] | The application ID | defaults to undefined|
| **environment** | [**string**] | The TARGET environment ID to restore INTO | defaults to undefined|
| **backupId** | [**string**] | The backup ID to restore from | defaults to undefined|


### Return type

**RestoreDatabase202Response**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**202** | Restore operation initiated |  -  |
|**422** | Validation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **restoreFilesystem**
> RestoreFilesystem202Response restoreFilesystem(restoreFilesystemRequest)

Initiates an async restore of a filesystem backup into the specified target environment. The backup may originate from a different environment of the same application (cross-env restore). Returns 202 with a restoreId for status polling.

### Example

```typescript
import {
    RestoreManagementApi,
    Configuration,
    RestoreFilesystemRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new RestoreManagementApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let application: string; //The application ID (default to undefined)
let environment: string; //The TARGET environment ID to restore INTO (default to undefined)
let backupId: string; //The backup ID to restore from (default to undefined)
let restoreFilesystemRequest: RestoreFilesystemRequest; //

const { status, data } = await apiInstance.restoreFilesystem(
    organisation,
    application,
    environment,
    backupId,
    restoreFilesystemRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **restoreFilesystemRequest** | **RestoreFilesystemRequest**|  | |
| **organisation** | [**string**] | The organisation ID | defaults to undefined|
| **application** | [**string**] | The application ID | defaults to undefined|
| **environment** | [**string**] | The TARGET environment ID to restore INTO | defaults to undefined|
| **backupId** | [**string**] | The backup ID to restore from | defaults to undefined|


### Return type

**RestoreFilesystem202Response**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**202** | Restore operation initiated |  -  |
|**422** | Validation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

