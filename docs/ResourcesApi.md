# ResourcesApi

All URIs are relative to *https://dashboard.quantcdn.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**attachOrgResource**](#attachorgresource) | **POST** /api/v3/organizations/{organisation}/resources/{resource}/attachments | Attach a resource to an application environment|
|[**createOrgResource**](#createorgresource) | **POST** /api/v3/organizations/{organisation}/resources | Create a shared resource|
|[**deleteOrgResource**](#deleteorgresource) | **DELETE** /api/v3/organizations/{organisation}/resources/{resource} | Delete a shared resource|
|[**detachOrgResource**](#detachorgresource) | **DELETE** /api/v3/organizations/{organisation}/resources/{resource}/attachments/{application}/{environment} | Detach a resource from an application environment|
|[**getOrgResource**](#getorgresource) | **GET** /api/v3/organizations/{organisation}/resources/{resource} | Get a shared resource and its attachments|
|[**getOrgResourceCredentials**](#getorgresourcecredentials) | **GET** /api/v3/organizations/{organisation}/resources/{resource}/credentials | Get a cache\&#39;s administrative credential|
|[**listOrgResources**](#listorgresources) | **GET** /api/v3/organizations/{organisation}/resources | List an organisation\&#39;s shared resources|
|[**purgeOrgResource**](#purgeorgresource) | **POST** /api/v3/organizations/{organisation}/resources/{resource}/purge | Purge keys from a cache|

# **attachOrgResource**
> ResourceAttachment attachOrgResource(attachOrgResourceRequest)

Object storage credentials are written immediately and take effect on the environment\'s next deploy. Cache variables are rendered at the next deploy, so a cache may be attached while it is still provisioning. An environment accepts one attachment per resource type.

### Example

```typescript
import {
    ResourcesApi,
    Configuration,
    AttachOrgResourceRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new ResourcesApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let resource: string; //The resource ID (default to undefined)
let attachOrgResourceRequest: AttachOrgResourceRequest; //

const { status, data } = await apiInstance.attachOrgResource(
    organisation,
    resource,
    attachOrgResourceRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **attachOrgResourceRequest** | **AttachOrgResourceRequest**|  | |
| **organisation** | [**string**] | The organisation ID | defaults to undefined|
| **resource** | [**string**] | The resource ID | defaults to undefined|


### Return type

**ResourceAttachment**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The attachment |  -  |
|**409** | An attachment of this type already exists for the environment |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createOrgResource**
> OrgResource createOrgResource(createOrgResourceRequest)

Object storage is provisioned synchronously and returns status available. A Valkey cache is asynchronous and returns status provisioning; poll the show endpoint until it reports available.

### Example

```typescript
import {
    ResourcesApi,
    Configuration,
    CreateOrgResourceRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new ResourcesApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let createOrgResourceRequest: CreateOrgResourceRequest; //

const { status, data } = await apiInstance.createOrgResource(
    organisation,
    createOrgResourceRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createOrgResourceRequest** | **CreateOrgResourceRequest**|  | |
| **organisation** | [**string**] | The organisation ID | defaults to undefined|


### Return type

**OrgResource**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | The created resource |  -  |
|**422** | Invalid type, name or cache capacity |  -  |
|**409** | A resource with this name already exists |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteOrgResource**
> deleteOrgResource()

Deletes the resource and its contents. This cannot be undone. A resource with live attachments is rejected unless force is set.

### Example

```typescript
import {
    ResourcesApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new ResourcesApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let resource: string; //The resource ID (default to undefined)
let force: boolean; //Delete even if the resource is attached or in an error state (optional) (default to undefined)

const { status, data } = await apiInstance.deleteOrgResource(
    organisation,
    resource,
    force
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] | The organisation ID | defaults to undefined|
| **resource** | [**string**] | The resource ID | defaults to undefined|
| **force** | [**boolean**] | Delete even if the resource is attached or in an error state | (optional) defaults to undefined|


### Return type

void (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | Deleted |  -  |
|**409** | The resource is still attached |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **detachOrgResource**
> detachOrgResource()

Removes the injected credentials and redeploys the environment so that it stops referencing them, which interrupts the environment briefly. The resource and its contents are not deleted.

### Example

```typescript
import {
    ResourcesApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new ResourcesApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let resource: string; //The resource ID (default to undefined)
let application: string; //The application ID (default to undefined)
let environment: string; //The environment ID (default to undefined)

const { status, data } = await apiInstance.detachOrgResource(
    organisation,
    resource,
    application,
    environment
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] | The organisation ID | defaults to undefined|
| **resource** | [**string**] | The resource ID | defaults to undefined|
| **application** | [**string**] | The application ID | defaults to undefined|
| **environment** | [**string**] | The environment ID | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | Detached; the environment is redeploying |  -  |
|**404** | No such attachment |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getOrgResource**
> OrgResource getOrgResource()


### Example

```typescript
import {
    ResourcesApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new ResourcesApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let resource: string; //The resource ID (default to undefined)

const { status, data } = await apiInstance.getOrgResource(
    organisation,
    resource
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] | The organisation ID | defaults to undefined|
| **resource** | [**string**] | The resource ID | defaults to undefined|


### Return type

**OrgResource**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The resource |  -  |
|**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getOrgResourceCredentials**
> GetOrgResourceCredentials200Response getOrgResourceCredentials()

Cache resources only. Returns the cache-wide user (every key, every command, including FLUSHDB) with host and port. Environments attached to the cache use their own scoped users; this credential is for operators who genuinely need unrestricted access. Every read is audit-logged against the requesting user.

### Example

```typescript
import {
    ResourcesApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new ResourcesApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let resource: string; //The resource ID (default to undefined)

const { status, data } = await apiInstance.getOrgResourceCredentials(
    organisation,
    resource
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] | The organisation ID | defaults to undefined|
| **resource** | [**string**] | The resource ID | defaults to undefined|


### Return type

**GetOrgResourceCredentials200Response**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The admin credential |  -  |
|**409** | Not a cache resource, or not yet available |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listOrgResources**
> Array<OrgResource> listOrgResources()


### Example

```typescript
import {
    ResourcesApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new ResourcesApi(configuration);

let organisation: string; //The organisation ID (default to undefined)

const { status, data } = await apiInstance.listOrgResources(
    organisation
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] | The organisation ID | defaults to undefined|


### Return type

**Array<OrgResource>**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The organisation\&#39;s resources |  -  |
|**403** | Cloud access required |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **purgeOrgResource**
> PurgeOrgResource200Response purgeOrgResource(purgeOrgResourceRequest)

Cache resources only. scope environment deletes that environment\'s keys, using the CACHE_PREFIX recorded on its attachment rather than anything in the request. scope all flushes every key for every attached environment and requires confirm=true. A large environment purge may return complete=false with a cursor to resume.

### Example

```typescript
import {
    ResourcesApi,
    Configuration,
    PurgeOrgResourceRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new ResourcesApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let resource: string; //The resource ID (default to undefined)
let purgeOrgResourceRequest: PurgeOrgResourceRequest; //

const { status, data } = await apiInstance.purgeOrgResource(
    organisation,
    resource,
    purgeOrgResourceRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **purgeOrgResourceRequest** | **PurgeOrgResourceRequest**|  | |
| **organisation** | [**string**] | The organisation ID | defaults to undefined|
| **resource** | [**string**] | The resource ID | defaults to undefined|


### Return type

**PurgeOrgResource200Response**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Purge result |  -  |
|**422** | Invalid scope, missing application/environment, or scope all without confirm |  -  |
|**404** | No such attachment |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

