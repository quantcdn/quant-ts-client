# DomainsApi

All URIs are relative to *https://dashboard.quantcdn.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**domainsCreate**](#domainscreate) | **POST** /api/v2/organizations/{organization}/projects/{project}/domains | Add a new domain|
|[**domainsDelete**](#domainsdelete) | **DELETE** /api/v2/organizations/{organization}/projects/{project}/domains/{domain} | Delete a domain|
|[**domainsList**](#domainslist) | **GET** /api/v2/organizations/{organization}/projects/{project}/domains | List all domains for a project|
|[**domainsRead**](#domainsread) | **GET** /api/v2/organizations/{organization}/projects/{project}/domains/{domain} | Get details of a single domain|
|[**domainsRenew**](#domainsrenew) | **POST** /api/v2/organizations/{organization}/projects/{project}/domains/{domain}/renew | Renew the SSL certificate for a domain|

# **domainsCreate**
> V2Domain domainsCreate(v2DomainRequest)


### Example

```typescript
import {
    DomainsApi,
    Configuration,
    V2DomainRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new DomainsApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)
let v2DomainRequest: V2DomainRequest; //

const { status, data } = await apiInstance.domainsCreate(
    organization,
    project,
    v2DomainRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v2DomainRequest** | **V2DomainRequest**|  | |
| **organization** | [**string**] | Organization identifier | defaults to undefined|
| **project** | [**string**] | Project identifier | defaults to undefined|


### Return type

**V2Domain**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The request has succeeded. |  -  |
|**400** | The server could not understand the request due to invalid syntax. |  -  |
|**403** | Access is forbidden. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **domainsDelete**
> domainsDelete()


### Example

```typescript
import {
    DomainsApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new DomainsApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)
let domain: string; // (default to undefined)

const { status, data } = await apiInstance.domainsDelete(
    organization,
    project,
    domain
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organization** | [**string**] | Organization identifier | defaults to undefined|
| **project** | [**string**] | Project identifier | defaults to undefined|
| **domain** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | The domain has been deleted. |  -  |
|**400** | The server could not understand the request due to invalid syntax. |  -  |
|**403** | Access is forbidden. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **domainsList**
> Array<V2Domain> domainsList()


### Example

```typescript
import {
    DomainsApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new DomainsApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)

const { status, data } = await apiInstance.domainsList(
    organization,
    project
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organization** | [**string**] | Organization identifier | defaults to undefined|
| **project** | [**string**] | Project identifier | defaults to undefined|


### Return type

**Array<V2Domain>**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The request has succeeded. |  -  |
|**400** | The server could not understand the request due to invalid syntax. |  -  |
|**403** | Access is forbidden. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **domainsRead**
> V2Domain domainsRead()


### Example

```typescript
import {
    DomainsApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new DomainsApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)
let domain: string; // (default to undefined)

const { status, data } = await apiInstance.domainsRead(
    organization,
    project,
    domain
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organization** | [**string**] | Organization identifier | defaults to undefined|
| **project** | [**string**] | Project identifier | defaults to undefined|
| **domain** | [**string**] |  | defaults to undefined|


### Return type

**V2Domain**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The request has succeeded. |  -  |
|**400** | The server could not understand the request due to invalid syntax. |  -  |
|**403** | Access is forbidden. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **domainsRenew**
> domainsRenew()


### Example

```typescript
import {
    DomainsApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new DomainsApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)
let domain: string; //Domain identifier (default to undefined)

const { status, data } = await apiInstance.domainsRenew(
    organization,
    project,
    domain
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organization** | [**string**] | Organization identifier | defaults to undefined|
| **project** | [**string**] | Project identifier | defaults to undefined|
| **domain** | [**string**] | Domain identifier | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**202** | The SSL certificate has been renewed. |  -  |
|**400** | The server could not understand the request due to invalid syntax. |  -  |
|**403** | Access is forbidden. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

