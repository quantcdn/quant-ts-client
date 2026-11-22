# ResourcesApi

All URIs are relative to *https://dashboard.quantcdn.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**attachOrgResource**](#attachorgresource) | **POST** /api/v3/organizations/{organisation}/resources/{resource}/attachments | Attach a resource to an application environment|
|[**createOrgResource**](#createorgresource) | **POST** /api/v3/organizations/{organisation}/resources | Create a shared resource|
|[**deleteCiRunnerPoolCache**](#deletecirunnerpoolcache) | **DELETE** /api/v3/organizations/{organisation}/resources/{resource}/cache | Delete build cache entries of a CI runner pool|
|[**deleteOrgResource**](#deleteorgresource) | **DELETE** /api/v3/organizations/{organisation}/resources/{resource} | Delete a shared resource|
|[**detachOrgResource**](#detachorgresource) | **DELETE** /api/v3/organizations/{organisation}/resources/{resource}/attachments/{application}/{environment} | Detach a resource from an application environment|
|[**getCiRunnerPoolCacheStats**](#getcirunnerpoolcachestats) | **GET** /api/v3/organizations/{organisation}/resources/{resource}/cache/stats | Get build cache statistics of a CI runner pool|
|[**getOrgResource**](#getorgresource) | **GET** /api/v3/organizations/{organisation}/resources/{resource} | Get a shared resource and its attachments|
|[**getOrgResourceCredentials**](#getorgresourcecredentials) | **GET** /api/v3/organizations/{organisation}/resources/{resource}/credentials | Get a cache\&#39;s administrative credential|
|[**listCiRunnerPoolCache**](#listcirunnerpoolcache) | **GET** /api/v3/organizations/{organisation}/resources/{resource}/cache | List the build cache entries of a CI runner pool|
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

# **deleteCiRunnerPoolCache**
> CiCacheDeleteResult deleteCiRunnerPoolCache(ciCacheDeleteRequest)

Deletes the part of the pool\'s build cache that the body names: one entry (repoId, ref, version and key), one version of a ref (repoId, ref, version), one ref (repoId, ref), one repository (repoId) or, with exactly {\"all\": true}, the whole cache. A missing or empty body is refused. Only the named scope is deleted; a delete is permanent, and a later job saves a new entry. A large delete stops after about 12 seconds and returns complete false with what it deleted so far; send the same request again until complete is true. complete false means: send the same request again. If a call returns complete false with deletedEntries 0, stop and try again later, because a storage call failed, timed out or refused objects. After a 502 the delete may still be running on the platform; the request is idempotent, so a client can send the same request again.

### Example

```typescript
import {
    ResourcesApi,
    Configuration,
    CiCacheDeleteRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new ResourcesApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let resource: string; //The CI runner pool resource ID (default to undefined)
let ciCacheDeleteRequest: CiCacheDeleteRequest; //

const { status, data } = await apiInstance.deleteCiRunnerPoolCache(
    organisation,
    resource,
    ciCacheDeleteRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **ciCacheDeleteRequest** | **CiCacheDeleteRequest**|  | |
| **organisation** | [**string**] | The organisation ID | defaults to undefined|
| **resource** | [**string**] | The CI runner pool resource ID | defaults to undefined|


### Return type

**CiCacheDeleteResult**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Deleted |  -  |
|**400** | The platform refused the scope |  -  |
|**403** | The delete_applications permission and the cloud:write scope are required |  -  |
|**404** | Resource not found, the resource is not a CI runner pool, or the organisation does not have CI runners |  -  |
|**422** | The body is missing, empty or not a JSON object; all is not exactly true or is sent with another field; the body has an unknown field, an invalid field, or a field without the fields it needs (key needs repoId, ref and version; version needs repoId and ref; ref needs repoId) |  -  |
|**502** | The build cache service is unavailable |  -  |

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

# **getCiRunnerPoolCacheStats**
> CiCacheStats getCiRunnerPoolCacheStats()

Sums of the pool\'s build cache hits, misses, saves and bytes over the last days days. hitRate is hits / (hits + misses), or null when both are 0.

### Example

```typescript
import {
    ResourcesApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new ResourcesApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let resource: string; //The CI runner pool resource ID (default to undefined)
let days: number; // (optional) (default to 7)

const { status, data } = await apiInstance.getCiRunnerPoolCacheStats(
    organisation,
    resource,
    days
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] | The organisation ID | defaults to undefined|
| **resource** | [**string**] | The CI runner pool resource ID | defaults to undefined|
| **days** | [**number**] |  | (optional) defaults to 7|


### Return type

**CiCacheStats**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The statistics |  -  |
|**400** | The platform refused the request |  -  |
|**403** | Cloud access required |  -  |
|**404** | Resource not found, the resource is not a CI runner pool, or the organisation does not have CI runners |  -  |
|**422** | days is not an integer from 1 to 30 |  -  |
|**502** | The build cache service is unavailable |  -  |

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

# **listCiRunnerPoolCache**
> CiCacheList listCiRunnerPoolCache()

Lists the GitHub Actions cache entries of a CI runner pool, in storage order (repository id, then ref, version and key). totalBytes and entryCount cover every entry that matches the filter, not only this page; on a very large cache the count stops after about 10 seconds and totalsComplete is false. A page holds at most 500 entries; pass nextCursor as cursor, with the same filter, until it is null. repo is null when no repository name is recorded.

### Example

```typescript
import {
    ResourcesApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new ResourcesApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let resource: string; //The CI runner pool resource ID (default to undefined)
let repoId: number; //Only the entries of this GitHub repository id. (optional) (default to undefined)
let ref: string; //Only the entries saved by this git ref. Needs repoId. Must start with refs/ and be a valid git ref name without %. (optional) (default to undefined)
let cursor: string; //Opaque nextCursor from the previous page of the same filter. (optional) (default to undefined)

const { status, data } = await apiInstance.listCiRunnerPoolCache(
    organisation,
    resource,
    repoId,
    ref,
    cursor
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] | The organisation ID | defaults to undefined|
| **resource** | [**string**] | The CI runner pool resource ID | defaults to undefined|
| **repoId** | [**number**] | Only the entries of this GitHub repository id. | (optional) defaults to undefined|
| **ref** | [**string**] | Only the entries saved by this git ref. Needs repoId. Must start with refs/ and be a valid git ref name without %. | (optional) defaults to undefined|
| **cursor** | [**string**] | Opaque nextCursor from the previous page of the same filter. | (optional) defaults to undefined|


### Return type

**CiCacheList**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The entries |  -  |
|**400** | The cursor is not valid for this filter |  -  |
|**403** | Cloud access required |  -  |
|**404** | Resource not found, the resource is not a CI runner pool, or the organisation does not have CI runners |  -  |
|**422** | repoId is not a non-negative integer, or ref is not valid or is sent without repoId |  -  |
|**502** | The build cache service is unavailable |  -  |

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

