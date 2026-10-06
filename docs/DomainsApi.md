# DomainsApi

All URIs are relative to *https://dashboard.quantcdn.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**dNSCreateRecord**](#dnscreaterecord) | **POST** /api/v2/organizations/{organization}/dns/zones/{zoneId}/records | Create an A record|
|[**dNSListRecords**](#dnslistrecords) | **GET** /api/v2/organizations/{organization}/dns/zones/{zoneId}/records | List DNS records|
|[**dNSListZones**](#dnslistzones) | **GET** /api/v2/organizations/{organization}/dns/zones | List organization DNS zones|
|[**dNSShowZone**](#dnsshowzone) | **GET** /api/v2/organizations/{organization}/dns/zones/{zoneId} | Get a DNS zone|
|[**domainsCreate**](#domainscreate) | **POST** /api/v2/organizations/{organization}/projects/{project}/domains | Add a new domain|
|[**domainsDelete**](#domainsdelete) | **DELETE** /api/v2/organizations/{organization}/projects/{project}/domains/{domain} | Delete a domain|
|[**domainsList**](#domainslist) | **GET** /api/v2/organizations/{organization}/projects/{project}/domains | List all domains for a project|
|[**domainsRead**](#domainsread) | **GET** /api/v2/organizations/{organization}/projects/{project}/domains/{domain} | Get details of a single domain|
|[**domainsRenew**](#domainsrenew) | **POST** /api/v2/organizations/{organization}/projects/{project}/domains/{domain}/renew | Renew the SSL certificate for a domain|

# **dNSCreateRecord**
> dNSCreateRecord(dNSCreateRecordRequest)

dns:write and add_domains are required. Existing names are rejected; this endpoint does not update records. Only organization-wide tokens are accepted.

### Example

```typescript
import {
    DomainsApi,
    Configuration,
    DNSCreateRecordRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new DomainsApi(configuration);

let organization: string; // (default to undefined)
let zoneId: string; // (default to undefined)
let dNSCreateRecordRequest: DNSCreateRecordRequest; //

const { status, data } = await apiInstance.dNSCreateRecord(
    organization,
    zoneId,
    dNSCreateRecordRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **dNSCreateRecordRequest** | **DNSCreateRecordRequest**|  | |
| **organization** | [**string**] |  | defaults to undefined|
| **zoneId** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Success |  -  |
|**401** | Missing or invalid API token |  -  |
|**403** | Token scope, organization or role permission denied |  -  |
|**404** | Zone not found in this organization |  -  |
|**409** | A record already exists for this name |  -  |
|**422** | Invalid request |  -  |
|**503** | DNS service unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **dNSListRecords**
> dNSListRecords()

dns:read and browse_domains are required. Filters: type, name, limit (1–1000), offset, sync (true/false).

### Example

```typescript
import {
    DomainsApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new DomainsApi(configuration);

let organization: string; // (default to undefined)
let zoneId: string; // (default to undefined)
let type: 'A' | 'AAAA' | 'CNAME' | 'MX' | 'TXT' | 'NS' | 'SRV' | 'CAA' | 'PTR' | 'ALIAS'; // (optional) (default to undefined)
let name: string; // (optional) (default to undefined)
let limit: number; // (optional) (default to 100)
let offset: number; // (optional) (default to 0)
let sync: boolean; // (optional) (default to false)

const { status, data } = await apiInstance.dNSListRecords(
    organization,
    zoneId,
    type,
    name,
    limit,
    offset,
    sync
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organization** | [**string**] |  | defaults to undefined|
| **zoneId** | [**string**] |  | defaults to undefined|
| **type** | [**&#39;A&#39; | &#39;AAAA&#39; | &#39;CNAME&#39; | &#39;MX&#39; | &#39;TXT&#39; | &#39;NS&#39; | &#39;SRV&#39; | &#39;CAA&#39; | &#39;PTR&#39; | &#39;ALIAS&#39;**]**Array<&#39;A&#39; &#124; &#39;AAAA&#39; &#124; &#39;CNAME&#39; &#124; &#39;MX&#39; &#124; &#39;TXT&#39; &#124; &#39;NS&#39; &#124; &#39;SRV&#39; &#124; &#39;CAA&#39; &#124; &#39;PTR&#39; &#124; &#39;ALIAS&#39;>** |  | (optional) defaults to undefined|
| **name** | [**string**] |  | (optional) defaults to undefined|
| **limit** | [**number**] |  | (optional) defaults to 100|
| **offset** | [**number**] |  | (optional) defaults to 0|
| **sync** | [**boolean**] |  | (optional) defaults to false|


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
|**200** | Success |  -  |
|**401** | Missing or invalid API token |  -  |
|**403** | Token scope, organization or role permission denied |  -  |
|**404** | Zone not found in this organization |  -  |
|**409** | A record already exists for this name |  -  |
|**422** | Invalid request |  -  |
|**503** | DNS service unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **dNSListZones**
> dNSListZones()

dns:read and browse_domains are required.

### Example

```typescript
import {
    DomainsApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new DomainsApi(configuration);

let organization: string; // (default to undefined)

const { status, data } = await apiInstance.dNSListZones(
    organization
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organization** | [**string**] |  | defaults to undefined|


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
|**200** | Success |  -  |
|**401** | Missing or invalid API token |  -  |
|**403** | Token scope, organization or role permission denied |  -  |
|**404** | Zone not found in this organization |  -  |
|**409** | A record already exists for this name |  -  |
|**422** | Invalid request |  -  |
|**503** | DNS service unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **dNSShowZone**
> dNSShowZone()

dns:read and browse_domains are required. The zone must belong to the organization.

### Example

```typescript
import {
    DomainsApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new DomainsApi(configuration);

let organization: string; // (default to undefined)
let zoneId: string; // (default to undefined)

const { status, data } = await apiInstance.dNSShowZone(
    organization,
    zoneId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organization** | [**string**] |  | defaults to undefined|
| **zoneId** | [**string**] |  | defaults to undefined|


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
|**200** | Success |  -  |
|**401** | Missing or invalid API token |  -  |
|**403** | Token scope, organization or role permission denied |  -  |
|**404** | Zone not found in this organization |  -  |
|**409** | A record already exists for this name |  -  |
|**422** | Invalid request |  -  |
|**503** | DNS service unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

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
let domain: string; //Domain id (default to undefined)

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
| **domain** | [**string**] | Domain id | defaults to undefined|


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
let domain: string; //Domain id (default to undefined)

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
| **domain** | [**string**] | Domain id | defaults to undefined|


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
let domain: string; //Domain id (default to undefined)

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
| **domain** | [**string**] | Domain id | defaults to undefined|


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
|**202** | The SSL certificate renewal has been initiated. |  -  |
|**400** | The server could not understand the request due to invalid syntax. |  -  |
|**403** | Access is forbidden. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

