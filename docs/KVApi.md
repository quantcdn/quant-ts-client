# KVApi

All URIs are relative to *https://dashboard.quantcdn.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**kVArchivesList**](#kvarchiveslist) | **GET** /api/v2/organizations/{organization}/kv/archives | List retained ledger archives|
|[**kVArchivesPurge**](#kvarchivespurge) | **POST** /api/v2/organizations/{organization}/kv/archives/{store_name}/purge | Dry run or start a purge of a retained archive|
|[**kVArchivesPurgeManifest**](#kvarchivespurgemanifest) | **GET** /api/v2/organizations/{organization}/kv/archives/{store_name}/purges/{purge_id}/manifest | Get the manifest of a purge|
|[**kVArchivesPurgeReceipt**](#kvarchivespurgereceipt) | **GET** /api/v2/organizations/{organization}/kv/archives/{store_name}/purges/{purge_id}/receipt | Get the signed receipt of a purge|
|[**kVArchivesPurgeShow**](#kvarchivespurgeshow) | **GET** /api/v2/organizations/{organization}/kv/archives/{store_name}/purges/{purge_id} | Show one purge of an archive|
|[**kVArchivesShow**](#kvarchivesshow) | **GET** /api/v2/organizations/{organization}/kv/archives/{store_name} | Show the archive of a deleted store|
|[**kVCreate**](#kvcreate) | **POST** /api/v2/organizations/{organization}/projects/{project}/kv | Add a kv store|
|[**kVDelete**](#kvdelete) | **DELETE** /api/v2/organizations/{organization}/projects/{project}/kv/{store_id} | Delete a kv store|
|[**kVEntriesDelete**](#kventriesdelete) | **DELETE** /api/v2/organizations/{organization}/projects/{project}/kv/{store_id}/items/{key}/entry | Delete a key, optionally only at a version|
|[**kVEntriesPut**](#kventriesput) | **PUT** /api/v2/organizations/{organization}/projects/{project}/kv/{store_id}/items/{key}/entry | Set a key, optionally only if absent or only at a version|
|[**kVEntriesShow**](#kventriesshow) | **GET** /api/v2/organizations/{organization}/projects/{project}/kv/{store_id}/items/{key}/entry | Get a key with its version and metadata|
|[**kVExportCreate**](#kvexportcreate) | **POST** /api/v2/organizations/{organization}/projects/{project}/kv/{store_id}/export | Start an export of the whole store to gzip JSON Lines files|
|[**kVExportResume**](#kvexportresume) | **POST** /api/v2/organizations/{organization}/projects/{project}/kv/{store_id}/export/resume | Queue a stalled export step again|
|[**kVExportShow**](#kvexportshow) | **GET** /api/v2/organizations/{organization}/projects/{project}/kv/{store_id}/export | Get the latest export and, when done, its download links|
|[**kVIndexesCount**](#kvindexescount) | **GET** /api/v2/organizations/{organization}/projects/{project}/kv/{store_id}/indexes/{index_name}/count | Count the keys that hold a value of a count index|
|[**kVIndexesCreate**](#kvindexescreate) | **POST** /api/v2/organizations/{organization}/projects/{project}/kv/{store_id}/indexes | Declare an index|
|[**kVIndexesDelete**](#kvindexesdelete) | **DELETE** /api/v2/organizations/{organization}/projects/{project}/kv/{store_id}/indexes/{index_name} | Drop an index|
|[**kVIndexesList**](#kvindexeslist) | **GET** /api/v2/organizations/{organization}/projects/{project}/kv/{store_id}/indexes | List the declared indexes of a store|
|[**kVIndexesLookup**](#kvindexeslookup) | **GET** /api/v2/organizations/{organization}/projects/{project}/kv/{store_id}/indexes/{index_name}/lookup | Get the key that holds a value of a unique index|
|[**kVIndexesResume**](#kvindexesresume) | **POST** /api/v2/organizations/{organization}/projects/{project}/kv/{store_id}/indexes/{index_name}/resume | Queue a stalled index job step again|
|[**kVIndexesShow**](#kvindexesshow) | **GET** /api/v2/organizations/{organization}/projects/{project}/kv/{store_id}/indexes/{index_name} | Get one index with its state and job|
|[**kVItemsBatchGet**](#kvitemsbatchget) | **POST** /api/v2/organizations/{organization}/projects/{project}/kv/{store_id}/batch-get | Get up to 100 keys in one request|
|[**kVItemsCreate**](#kvitemscreate) | **POST** /api/v2/organizations/{organization}/projects/{project}/kv/{store_id}/items | Add an item to a kv store|
|[**kVItemsDelete**](#kvitemsdelete) | **DELETE** /api/v2/organizations/{organization}/projects/{project}/kv/{store_id}/items/{key} | Delete an item from a kv store|
|[**kVItemsIncrement**](#kvitemsincrement) | **POST** /api/v2/organizations/{organization}/projects/{project}/kv/{store_id}/items/{key}/increment | Atomically add to a numeric value|
|[**kVItemsList**](#kvitemslist) | **GET** /api/v2/organizations/{organization}/projects/{project}/kv/{store_id}/items | List items in a kv store|
|[**kVItemsPatch**](#kvitemspatch) | **PATCH** /api/v2/organizations/{organization}/projects/{project}/kv/{store_id}/items/{key} | Update an item in a kv store (PATCH alias of PUT)|
|[**kVItemsPurge**](#kvitemspurge) | **DELETE** /api/v2/organizations/{organization}/projects/{project}/kv/{store_id}/items | Delete items in bulk by prefix and/or age|
|[**kVItemsShow**](#kvitemsshow) | **GET** /api/v2/organizations/{organization}/projects/{project}/kv/{store_id}/items/{key} | Get an item from a kv store|
|[**kVItemsTransact**](#kvitemstransact) | **POST** /api/v2/organizations/{organization}/projects/{project}/kv/{store_id}/transact | Run 1 to 25 operations as one transaction|
|[**kVItemsUpdate**](#kvitemsupdate) | **PUT** /api/v2/organizations/{organization}/projects/{project}/kv/{store_id}/items/{key} | Update an item in a kv store|
|[**kVKeysList**](#kvkeyslist) | **GET** /api/v2/organizations/{organization}/projects/{project}/kv/{store_id}/keys | List keys with a cursor: by collection, prefix, filter, index or ledger time window|
|[**kVLedgersAppend**](#kvledgersappend) | **POST** /api/v2/organizations/{organization}/projects/{project}/kv/{store_id}/append | Append an entry to a ledger|
|[**kVLedgersArchive**](#kvledgersarchive) | **GET** /api/v2/organizations/{organization}/projects/{project}/kv/{store_id}/ledgers/{ledger_name}/archive | Get download links for the ledger archive, digests and anchor files|
|[**kVLedgersCreate**](#kvledgerscreate) | **POST** /api/v2/organizations/{organization}/projects/{project}/kv/{store_id}/ledgers | Declare a ledger|
|[**kVLedgersDelete**](#kvledgersdelete) | **DELETE** /api/v2/organizations/{organization}/projects/{project}/kv/{store_id}/ledgers/{ledger_name} | Drop a ledger|
|[**kVLedgersList**](#kvledgerslist) | **GET** /api/v2/organizations/{organization}/projects/{project}/kv/{store_id}/ledgers | List the ledgers of a store|
|[**kVLedgersProof**](#kvledgersproof) | **GET** /api/v2/organizations/{organization}/projects/{project}/kv/{store_id}/ledgers/{ledger_name}/proof | Get the inclusion proof of one ledger entry|
|[**kVLedgersPublicKey**](#kvledgerspublickey) | **GET** /api/v2/organizations/{organization}/projects/{project}/kv/{store_id}/ledgers/public-key | Get the public key that verifies ledger signatures|
|[**kVLedgersShow**](#kvledgersshow) | **GET** /api/v2/organizations/{organization}/projects/{project}/kv/{store_id}/ledgers/{ledger_name} | Get a ledger definition with its retention end and last verify|
|[**kVLedgersShred**](#kvledgersshred) | **POST** /api/v2/organizations/{organization}/projects/{project}/kv/{store_id}/ledgers/{ledger_name}/shred | Shred a data subject (cannot be undone)|
|[**kVLedgersShredsEntries**](#kvledgersshredsentries) | **GET** /api/v2/organizations/{organization}/projects/{project}/kv/{store_id}/ledgers/{ledger_name}/shreds/{shred_id}/entries | List the shred entries of an erasure record|
|[**kVLedgersShredsList**](#kvledgersshredslist) | **GET** /api/v2/organizations/{organization}/projects/{project}/kv/{store_id}/ledgers/{ledger_name}/shreds | List the erasure records of a ledger|
|[**kVLedgersShredsReceipt**](#kvledgersshredsreceipt) | **GET** /api/v2/organizations/{organization}/projects/{project}/kv/{store_id}/ledgers/{ledger_name}/shreds/{shred_id}/receipt | Get the signed receipt of a shred|
|[**kVLedgersStatus**](#kvledgersstatus) | **GET** /api/v2/organizations/{organization}/projects/{project}/kv/{store_id}/ledgers/{ledger_name}/status | Get the chains, archive lag, digest, anchor and verify state of a ledger|
|[**kVLedgersSubjectEntries**](#kvledgerssubjectentries) | **POST** /api/v2/organizations/{organization}/projects/{project}/kv/{store_id}/ledgers/{ledger_name}/subject-entries | List the ledger entries of one data subject|
|[**kVLedgersSubjectPreview**](#kvledgerssubjectpreview) | **POST** /api/v2/organizations/{organization}/projects/{project}/kv/{store_id}/ledgers/{ledger_name}/subject-preview | Preview a shred of a data subject|
|[**kVLedgersUpdate**](#kvledgersupdate) | **PATCH** /api/v2/organizations/{organization}/projects/{project}/kv/{store_id}/ledgers/{ledger_name} | Raise a ledger|
|[**kVLedgersVerificationsReport**](#kvledgersverificationsreport) | **GET** /api/v2/organizations/{organization}/projects/{project}/kv/{store_id}/ledgers/{ledger_name}/verifications/{verification_id}/report | Get the signed report of one verification run|
|[**kVLedgersVerify**](#kvledgersverify) | **POST** /api/v2/organizations/{organization}/projects/{project}/kv/{store_id}/ledgers/{ledger_name}/verify | Verify a ledger against its archive and signed digests|
|[**kVLinkToProject**](#kvlinktoproject) | **POST** /api/v2/organizations/{organization}/projects/{project}/kv/{store_id}/link | Link a KV store to another project|
|[**kVList**](#kvlist) | **GET** /api/v2/organizations/{organization}/projects/{project}/kv | List key-value stores|
|[**kVShow**](#kvshow) | **GET** /api/v2/organizations/{organization}/projects/{project}/kv/{store_id} | Get a kv store|
|[**kVUnlinkFromProject**](#kvunlinkfromproject) | **DELETE** /api/v2/organizations/{organization}/projects/{project}/kv/{store_id}/link | Unlink a KV store from this project|
|[**kVUpgradeCreate**](#kvupgradecreate) | **POST** /api/v2/organizations/{organization}/projects/{project}/kv/{store_id}/upgrade | Start, roll back, finalize or resume a format 1 to format 2 upgrade|
|[**kVUpgradeShow**](#kvupgradeshow) | **GET** /api/v2/organizations/{organization}/projects/{project}/kv/{store_id}/upgrade | Get the store format and the latest upgrade|
|[**kVUsageShow**](#kvusageshow) | **GET** /api/v2/organizations/{organization}/projects/{project}/kv/{store_id}/usage | Get 30-day usage and a cost estimate|

# **kVArchivesList**
> V2KvArchiveList kVArchivesList()

Lists the deleted stores of the organisation that still hold archive objects, as the KV page envelope (data, next_cursor, has_more, page_end). The route is scoped to the organisation because a deleted store has no project link; the token also needs projects:read. Needs a token with the explicit kv:ledger:admin scope (full_access and tokens without a scope list cannot use it) and the ledger_admin permission. A token restricted to projects is refused (403 PERMISSION_DENIED): use a token without a project restriction.

### Example

```typescript
import {
    KVApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new KVApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let limit: number; //The maximum number of archives in the page (1-100, default 50). (optional) (default to 50)
let cursor: string; //The next_cursor of the previous page. (optional) (default to undefined)

const { status, data } = await apiInstance.kVArchivesList(
    organization,
    limit,
    cursor
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organization** | [**string**] | Organization identifier | defaults to undefined|
| **limit** | [**number**] | The maximum number of archives in the page (1-100, default 50). | (optional) defaults to 50|
| **cursor** | [**string**] | The next_cursor of the previous page. | (optional) defaults to undefined|


### Return type

**V2KvArchiveList**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A page of archives. |  -  |
|**400** | Invalid request: VALIDATION, LIMIT_EXCEEDED, CURSOR_INVALID, REQUIRES_FORMAT_2 and the route-specific 400 codes. |  -  |
|**403** | SCOPE_REQUIRED (the token does not list the scope) or PERMISSION_DENIED (the role does not have the permission). |  -  |
|**429** | RATE_LIMITED (retryable): a rate limit is used up. The limits are the per-token limit (api-token, default 240 requests per minute per token and organisation) and, on some operations, the per-project KV limits (kv-admin 10, kv-erase 30, kv-verify 6 requests per minute). Wait for Retry-After seconds, then send the request again. See Rate limits in the API description. |  * Retry-After - Seconds to wait before the next request. <br>  * RateLimit-Limit - The request limit of the window (IETF draft). X-RateLimit-Limit carries the same value. <br>  * RateLimit-Remaining - Requests left in the window: 0 on a 429 (IETF draft). X-RateLimit-Remaining carries the same value. <br>  * RateLimit-Reset - Seconds until the window resets (IETF draft). X-RateLimit-Reset is the same moment as a Unix timestamp. <br>  |
|**500** | INTERNAL: the KV service failed. No detail is given. |  -  |
|**503** | STORE_MIGRATING (retryable, Retry-After) or UNAVAILABLE. UNAVAILABLE with retryable true (for example a new store whose table is still being created, with Retry-After 5) is safe to retry with backoff; honour Retry-After. With retryable false the outcome of a write is unknown: read before you write again. |  * Retry-After -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **kVArchivesPurge**
> V2KvArchivePurgeAnswer kVArchivesPurge(v2KvArchivePurgeRequest)

Starts the purge of the retained ledger archive of a deleted store, or reports what it would delete. dryRun defaults to true: a dry run answers 200 with dryRun true and the counts, and deletes nothing. Send dryRun false to start: the answer is 202 with purgeId and state. Both answers use the schema V2KvArchivePurgeAnswer. confirm must equal the store name, also for a dry run. Quant sets requestedBy; a client value is refused (400 VALIDATION). A repeat with the same Idempotency-Key answers 202 with the existing purge. Nothing is deleted until every object is past its lock: a purge that finds a lock or the quiet period ends as RETAINED, and a new start within 1 hour of a RETAINED result is 429 RATE_LIMITED. System stores cannot be purged (403 FORBIDDEN; the check ignores case). Read the purge with KV_archives_purge_show, then the receipt and the manifest. The route is scoped to the organisation because a deleted store has no project link; the token also needs projects:read. This route needs both explicit scopes, kv:ledger:admin and kv:ledger:purge (full_access and tokens without a scope list cannot use it), the ledger_admin permission, and, in the dashboard, a step-up (authenticator code or password). A purge cannot be undone. Rate limit: 10 requests per minute per organisation. Audited (store and purge id only, never the reason). The receipt is the platform\'s signed statement, not a proof of absence. A token restricted to projects is refused (403 PERMISSION_DENIED): use a token without a project restriction.

### Example

```typescript
import {
    KVApi,
    Configuration,
    V2KvArchivePurgeRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new KVApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let storeName: string; //The id of the deleted store, as KV_list showed it before the delete (default to undefined)
let v2KvArchivePurgeRequest: V2KvArchivePurgeRequest; //
let idempotencyKey: string; //1 to 128 characters of letters, digits and . _ : -. A repeat with the same key answers 202 with the existing purge. (optional) (default to undefined)

const { status, data } = await apiInstance.kVArchivesPurge(
    organization,
    storeName,
    v2KvArchivePurgeRequest,
    idempotencyKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v2KvArchivePurgeRequest** | **V2KvArchivePurgeRequest**|  | |
| **organization** | [**string**] | Organization identifier | defaults to undefined|
| **storeName** | [**string**] | The id of the deleted store, as KV_list showed it before the delete | defaults to undefined|
| **idempotencyKey** | [**string**] | 1 to 128 characters of letters, digits and . _ : -. A repeat with the same key answers 202 with the existing purge. | (optional) defaults to undefined|


### Return type

**V2KvArchivePurgeAnswer**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Dry run: what a purge would delete (dryRun true and the counts). |  -  |
|**202** | The purge was accepted, or a repeat with the same Idempotency-Key found the existing one (purgeId and state). |  -  |
|**400** | Invalid request: VALIDATION, LIMIT_EXCEEDED, CURSOR_INVALID, REQUIRES_FORMAT_2 and the route-specific 400 codes. |  -  |
|**403** | SCOPE_REQUIRED (the token does not list the scope) or PERMISSION_DENIED (the role does not have the permission). |  -  |
|**404** | KEY_NOT_FOUND, STORE_NOT_FOUND, LEDGER_NOT_FOUND, SUBJECT_NOT_FOUND, EXPORT_NOT_FOUND, VERIFICATION_NOT_FOUND, SHRED_NOT_FOUND, INDEX_NOT_FOUND or NOT_FOUND (no archive, tombstone or purge). |  -  |
|**409** | CONFLICT, UNIQUE_VIOLATION, UPGRADE_CONFLICT, EXPORT_IN_PROGRESS, the LEDGER_* conflicts and the archive purge conflicts STORE_NOT_DELETED, ARCHIVE_RETAINED, PURGE_IN_PROGRESS, PURGE_BLOCKED and PURGE_NOT_COMPLETE (not retryable); CONTENTION, INDEX_NOT_READY, LEDGER_NOT_READY and DIGEST_OWED (retryable). |  -  |
|**429** | RATE_LIMITED (retryable): a rate limit is used up. The limits are the per-token limit (api-token, default 240 requests per minute per token and organisation) and, on some operations, the per-project KV limits (kv-admin 10, kv-erase 30, kv-verify 6 requests per minute). Wait for Retry-After seconds, then send the request again. See Rate limits in the API description. |  * Retry-After - Seconds to wait before the next request. <br>  * RateLimit-Limit - The request limit of the window (IETF draft). X-RateLimit-Limit carries the same value. <br>  * RateLimit-Remaining - Requests left in the window: 0 on a 429 (IETF draft). X-RateLimit-Remaining carries the same value. <br>  * RateLimit-Reset - Seconds until the window resets (IETF draft). X-RateLimit-Reset is the same moment as a Unix timestamp. <br>  |
|**500** | INTERNAL: the KV service failed. No detail is given. |  -  |
|**503** | STORE_MIGRATING (retryable, Retry-After) or UNAVAILABLE. UNAVAILABLE with retryable true (for example a new store whose table is still being created, with Retry-After 5) is safe to retry with backoff; honour Retry-After. With retryable false the outcome of a write is unknown: read before you write again. |  * Retry-After -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **kVArchivesPurgeManifest**
> V2KvArchiveManifest kVArchivesPurgeManifest()

Returns the manifest pages of a purge. Each page lists the deleted object versions and has a signed download url, valid 3,600 seconds: read the manifest again for new urls. The route is scoped to the organisation because a deleted store has no project link; the token also needs projects:read. Needs a token with the explicit kv:ledger:admin scope (full_access and tokens without a scope list cannot use it) and the ledger_admin permission. System stores have no retained archive (403 FORBIDDEN). A token restricted to projects is refused (403 PERMISSION_DENIED): use a token without a project restriction.

### Example

```typescript
import {
    KVApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new KVApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let storeName: string; //The id of the deleted store, as KV_list showed it before the delete (default to undefined)
let purgeId: string; //The purge id (a 26-character ULID), as the purge start answered it (default to undefined)

const { status, data } = await apiInstance.kVArchivesPurgeManifest(
    organization,
    storeName,
    purgeId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organization** | [**string**] | Organization identifier | defaults to undefined|
| **storeName** | [**string**] | The id of the deleted store, as KV_list showed it before the delete | defaults to undefined|
| **purgeId** | [**string**] | The purge id (a 26-character ULID), as the purge start answered it | defaults to undefined|


### Return type

**V2KvArchiveManifest**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The manifest pages. |  -  |
|**400** | Invalid request: VALIDATION, LIMIT_EXCEEDED, CURSOR_INVALID, REQUIRES_FORMAT_2 and the route-specific 400 codes. |  -  |
|**403** | SCOPE_REQUIRED (the token does not list the scope) or PERMISSION_DENIED (the role does not have the permission). |  -  |
|**404** | KEY_NOT_FOUND, STORE_NOT_FOUND, LEDGER_NOT_FOUND, SUBJECT_NOT_FOUND, EXPORT_NOT_FOUND, VERIFICATION_NOT_FOUND, SHRED_NOT_FOUND, INDEX_NOT_FOUND or NOT_FOUND (no archive, tombstone or purge). |  -  |
|**429** | RATE_LIMITED (retryable): a rate limit is used up. The limits are the per-token limit (api-token, default 240 requests per minute per token and organisation) and, on some operations, the per-project KV limits (kv-admin 10, kv-erase 30, kv-verify 6 requests per minute). Wait for Retry-After seconds, then send the request again. See Rate limits in the API description. |  * Retry-After - Seconds to wait before the next request. <br>  * RateLimit-Limit - The request limit of the window (IETF draft). X-RateLimit-Limit carries the same value. <br>  * RateLimit-Remaining - Requests left in the window: 0 on a 429 (IETF draft). X-RateLimit-Remaining carries the same value. <br>  * RateLimit-Reset - Seconds until the window resets (IETF draft). X-RateLimit-Reset is the same moment as a Unix timestamp. <br>  |
|**500** | INTERNAL: the KV service failed. No detail is given. |  -  |
|**503** | STORE_MIGRATING (retryable, Retry-After) or UNAVAILABLE. UNAVAILABLE with retryable true (for example a new store whose table is still being created, with Retry-After 5) is safe to retry with backoff; honour Retry-After. With retryable false the outcome of a write is unknown: read before you write again. |  * Retry-After -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **kVArchivesPurgeReceipt**
> V2KvArchivePurgeReceipt kVArchivesPurgeReceipt()

Returns the signed receipt of a COMPLETE purge (json, signature, keyId, algorithm ECDSA_SHA_256). Before COMPLETE the answer is 409 PURGE_NOT_COMPLETE. The receipt is the platform\'s signed statement that the purge ran. It is not a proof of absence. The route is scoped to the organisation because a deleted store has no project link; the token also needs projects:read. Needs a token with the explicit kv:ledger:admin scope (full_access and tokens without a scope list cannot use it) and the ledger_admin permission. System stores have no retained archive (403 FORBIDDEN). A token restricted to projects is refused (403 PERMISSION_DENIED): use a token without a project restriction.

### Example

```typescript
import {
    KVApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new KVApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let storeName: string; //The id of the deleted store, as KV_list showed it before the delete (default to undefined)
let purgeId: string; //The purge id (a 26-character ULID), as the purge start answered it (default to undefined)

const { status, data } = await apiInstance.kVArchivesPurgeReceipt(
    organization,
    storeName,
    purgeId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organization** | [**string**] | Organization identifier | defaults to undefined|
| **storeName** | [**string**] | The id of the deleted store, as KV_list showed it before the delete | defaults to undefined|
| **purgeId** | [**string**] | The purge id (a 26-character ULID), as the purge start answered it | defaults to undefined|


### Return type

**V2KvArchivePurgeReceipt**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The signed receipt. |  -  |
|**400** | Invalid request: VALIDATION, LIMIT_EXCEEDED, CURSOR_INVALID, REQUIRES_FORMAT_2 and the route-specific 400 codes. |  -  |
|**403** | SCOPE_REQUIRED (the token does not list the scope) or PERMISSION_DENIED (the role does not have the permission). |  -  |
|**404** | KEY_NOT_FOUND, STORE_NOT_FOUND, LEDGER_NOT_FOUND, SUBJECT_NOT_FOUND, EXPORT_NOT_FOUND, VERIFICATION_NOT_FOUND, SHRED_NOT_FOUND, INDEX_NOT_FOUND or NOT_FOUND (no archive, tombstone or purge). |  -  |
|**409** | CONFLICT, UNIQUE_VIOLATION, UPGRADE_CONFLICT, EXPORT_IN_PROGRESS, the LEDGER_* conflicts and the archive purge conflicts STORE_NOT_DELETED, ARCHIVE_RETAINED, PURGE_IN_PROGRESS, PURGE_BLOCKED and PURGE_NOT_COMPLETE (not retryable); CONTENTION, INDEX_NOT_READY, LEDGER_NOT_READY and DIGEST_OWED (retryable). |  -  |
|**429** | RATE_LIMITED (retryable): a rate limit is used up. The limits are the per-token limit (api-token, default 240 requests per minute per token and organisation) and, on some operations, the per-project KV limits (kv-admin 10, kv-erase 30, kv-verify 6 requests per minute). Wait for Retry-After seconds, then send the request again. See Rate limits in the API description. |  * Retry-After - Seconds to wait before the next request. <br>  * RateLimit-Limit - The request limit of the window (IETF draft). X-RateLimit-Limit carries the same value. <br>  * RateLimit-Remaining - Requests left in the window: 0 on a 429 (IETF draft). X-RateLimit-Remaining carries the same value. <br>  * RateLimit-Reset - Seconds until the window resets (IETF draft). X-RateLimit-Reset is the same moment as a Unix timestamp. <br>  |
|**500** | INTERNAL: the KV service failed. No detail is given. |  -  |
|**503** | STORE_MIGRATING (retryable, Retry-After) or UNAVAILABLE. UNAVAILABLE with retryable true (for example a new store whose table is still being created, with Retry-After 5) is safe to retry with backoff; honour Retry-After. With retryable false the outcome of a write is unknown: read before you write again. |  * Retry-After -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **kVArchivesPurgeShow**
> V2KvArchivePurge kVArchivesPurgeShow()

Returns one purge: state, counts, requestedBy, reason and lastError. Poll it until the state is COMPLETE, RETAINED, BLOCKED or CANCELLED. Nothing is deleted until every object is past its lock. The route is scoped to the organisation because a deleted store has no project link; the token also needs projects:read. Needs a token with the explicit kv:ledger:admin scope (full_access and tokens without a scope list cannot use it) and the ledger_admin permission. System stores have no retained archive (403 FORBIDDEN). A token restricted to projects is refused (403 PERMISSION_DENIED): use a token without a project restriction.

### Example

```typescript
import {
    KVApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new KVApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let storeName: string; //The id of the deleted store, as KV_list showed it before the delete (default to undefined)
let purgeId: string; //The purge id (a 26-character ULID), as the purge start answered it (default to undefined)

const { status, data } = await apiInstance.kVArchivesPurgeShow(
    organization,
    storeName,
    purgeId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organization** | [**string**] | Organization identifier | defaults to undefined|
| **storeName** | [**string**] | The id of the deleted store, as KV_list showed it before the delete | defaults to undefined|
| **purgeId** | [**string**] | The purge id (a 26-character ULID), as the purge start answered it | defaults to undefined|


### Return type

**V2KvArchivePurge**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The purge. |  -  |
|**400** | Invalid request: VALIDATION, LIMIT_EXCEEDED, CURSOR_INVALID, REQUIRES_FORMAT_2 and the route-specific 400 codes. |  -  |
|**403** | SCOPE_REQUIRED (the token does not list the scope) or PERMISSION_DENIED (the role does not have the permission). |  -  |
|**404** | KEY_NOT_FOUND, STORE_NOT_FOUND, LEDGER_NOT_FOUND, SUBJECT_NOT_FOUND, EXPORT_NOT_FOUND, VERIFICATION_NOT_FOUND, SHRED_NOT_FOUND, INDEX_NOT_FOUND or NOT_FOUND (no archive, tombstone or purge). |  -  |
|**429** | RATE_LIMITED (retryable): a rate limit is used up. The limits are the per-token limit (api-token, default 240 requests per minute per token and organisation) and, on some operations, the per-project KV limits (kv-admin 10, kv-erase 30, kv-verify 6 requests per minute). Wait for Retry-After seconds, then send the request again. See Rate limits in the API description. |  * Retry-After - Seconds to wait before the next request. <br>  * RateLimit-Limit - The request limit of the window (IETF draft). X-RateLimit-Limit carries the same value. <br>  * RateLimit-Remaining - Requests left in the window: 0 on a 429 (IETF draft). X-RateLimit-Remaining carries the same value. <br>  * RateLimit-Reset - Seconds until the window resets (IETF draft). X-RateLimit-Reset is the same moment as a Unix timestamp. <br>  |
|**500** | INTERNAL: the KV service failed. No detail is given. |  -  |
|**503** | STORE_MIGRATING (retryable, Retry-After) or UNAVAILABLE. UNAVAILABLE with retryable true (for example a new store whose table is still being created, with Retry-After 5) is safe to retry with backoff; honour Retry-After. With retryable false the outcome of a write is unknown: read before you write again. |  * Retry-After -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **kVArchivesShow**
> V2KvArchiveStatus kVArchivesShow()

Returns the archive status of one deleted store: status, deletedAt, earliestPurgeAt (the name is not free before then), retainedUntil and the latest purge. 404 NOT_FOUND when no tombstone, purge record or archive object exists. KV_delete answers 204 and does not carry earliestPurgeAt: read it here. The route is scoped to the organisation because a deleted store has no project link; the token also needs projects:read. Needs a token with the explicit kv:ledger:admin scope (full_access and tokens without a scope list cannot use it) and the ledger_admin permission. System stores have no retained archive (403 FORBIDDEN). A token restricted to projects is refused (403 PERMISSION_DENIED): use a token without a project restriction.

### Example

```typescript
import {
    KVApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new KVApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let storeName: string; //The id of the deleted store, as KV_list showed it before the delete (default to undefined)

const { status, data } = await apiInstance.kVArchivesShow(
    organization,
    storeName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organization** | [**string**] | Organization identifier | defaults to undefined|
| **storeName** | [**string**] | The id of the deleted store, as KV_list showed it before the delete | defaults to undefined|


### Return type

**V2KvArchiveStatus**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The archive status. |  -  |
|**400** | Invalid request: VALIDATION, LIMIT_EXCEEDED, CURSOR_INVALID, REQUIRES_FORMAT_2 and the route-specific 400 codes. |  -  |
|**403** | SCOPE_REQUIRED (the token does not list the scope) or PERMISSION_DENIED (the role does not have the permission). |  -  |
|**404** | KEY_NOT_FOUND, STORE_NOT_FOUND, LEDGER_NOT_FOUND, SUBJECT_NOT_FOUND, EXPORT_NOT_FOUND, VERIFICATION_NOT_FOUND, SHRED_NOT_FOUND, INDEX_NOT_FOUND or NOT_FOUND (no archive, tombstone or purge). |  -  |
|**429** | RATE_LIMITED (retryable): a rate limit is used up. The limits are the per-token limit (api-token, default 240 requests per minute per token and organisation) and, on some operations, the per-project KV limits (kv-admin 10, kv-erase 30, kv-verify 6 requests per minute). Wait for Retry-After seconds, then send the request again. See Rate limits in the API description. |  * Retry-After - Seconds to wait before the next request. <br>  * RateLimit-Limit - The request limit of the window (IETF draft). X-RateLimit-Limit carries the same value. <br>  * RateLimit-Remaining - Requests left in the window: 0 on a 429 (IETF draft). X-RateLimit-Remaining carries the same value. <br>  * RateLimit-Reset - Seconds until the window resets (IETF draft). X-RateLimit-Reset is the same moment as a Unix timestamp. <br>  |
|**500** | INTERNAL: the KV service failed. No detail is given. |  -  |
|**503** | STORE_MIGRATING (retryable, Retry-After) or UNAVAILABLE. UNAVAILABLE with retryable true (for example a new store whose table is still being created, with Retry-After 5) is safe to retry with backoff; honour Retry-After. With retryable false the outcome of a write is unknown: read before you write again. |  * Retry-After -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **kVCreate**
> V2Store kVCreate(v2StoreRequest)

The new store\'s table takes about 5-30 seconds to become active. The request waits for the store until about 20 seconds after it started (the create call included). 200 with status ready: the store accepts data requests now. 200 without status: the store is created but the KV service gave no clear readiness answer; call KV_show. 202 with status provisioning (and Retry-After): the store exists but is not active yet; poll KV_show until status is ready. Until then every data request on the store is 503 UNAVAILABLE with retryable true and a Retry-After header; that answer is safe to retry with backoff (honour Retry-After).

### Example

```typescript
import {
    KVApi,
    Configuration,
    V2StoreRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new KVApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)
let v2StoreRequest: V2StoreRequest; //

const { status, data } = await apiInstance.kVCreate(
    organization,
    project,
    v2StoreRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v2StoreRequest** | **V2StoreRequest**|  | |
| **organization** | [**string**] | Organization identifier | defaults to undefined|
| **project** | [**string**] | Project identifier | defaults to undefined|


### Return type

**V2Store**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The store is created. status is ready when the store accepts data requests now; status is omitted when the readiness answer was not clear (call KV_show). |  -  |
|**202** | The store is created but its table is not active yet (status provisioning). Poll KV_show until status is ready. |  * Retry-After -  <br>  |
|**400** | The server could not understand the request due to invalid syntax. |  -  |
|**403** | SCOPE_REQUIRED (the token does not list the scope) or PERMISSION_DENIED (the role does not have the permission). |  -  |
|**409** | STORE_NAME_RETAINED: the store name is held by a retained ledger archive (not retryable; choose another name). |  -  |
|**429** | RATE_LIMITED (retryable): a rate limit is used up. The limits are the per-token limit (api-token, default 240 requests per minute per token and organisation) and, on some operations, the per-project KV limits (kv-admin 10, kv-erase 30, kv-verify 6 requests per minute). Wait for Retry-After seconds, then send the request again. See Rate limits in the API description. |  * Retry-After - Seconds to wait before the next request. <br>  * RateLimit-Limit - The request limit of the window (IETF draft). X-RateLimit-Limit carries the same value. <br>  * RateLimit-Remaining - Requests left in the window: 0 on a 429 (IETF draft). X-RateLimit-Remaining carries the same value. <br>  * RateLimit-Reset - Seconds until the window resets (IETF draft). X-RateLimit-Reset is the same moment as a Unix timestamp. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **kVDelete**
> kVDelete()

Deletes the store and its data. A store that still holds keys answers 409 CONFLICT with a hint: purge its keys first, or pass force=true. A store with a ledger that is not dropped and drained answers 409 LEDGER_PRESENT; ledgers lists each blocking ledger (not_dropped: drop it after its retention ends; not_drained: its last entries are not archived yet). A store that is being upgraded answers 409 UPGRADE_CONFLICT. None of these 409 answers is retryable. A store that no longer exists upstream answers 404 STORE_NOT_FOUND and its stale project link is removed. A store with an owed ledger digest answers 409 DIGEST_OWED (retryable): try again later. The answer stays 204; read KV_archives_show for earliestPurgeAt (the ledger archive of the deleted store stays until then).

### Example

```typescript
import {
    KVApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new KVApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)
let storeId: string; // (default to undefined)
let force: boolean; //Delete the store even if it still holds keys. Without it a non-empty store returns 409. (optional) (default to false)

const { status, data } = await apiInstance.kVDelete(
    organization,
    project,
    storeId,
    force
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organization** | [**string**] | Organization identifier | defaults to undefined|
| **project** | [**string**] | Project identifier | defaults to undefined|
| **storeId** | [**string**] |  | defaults to undefined|
| **force** | [**boolean**] | Delete the store even if it still holds keys. Without it a non-empty store returns 409. | (optional) defaults to false|


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
|**204** | The request has succeeded. |  -  |
|**400** | The server could not understand the request due to invalid syntax. |  -  |
|**404** | STORE_NOT_FOUND: the store is not in this project, or it no longer exists upstream (the stale project link is removed). |  -  |
|**409** | CONFLICT, UNIQUE_VIOLATION, UPGRADE_CONFLICT, EXPORT_IN_PROGRESS, the LEDGER_* conflicts and the archive purge conflicts STORE_NOT_DELETED, ARCHIVE_RETAINED, PURGE_IN_PROGRESS, PURGE_BLOCKED and PURGE_NOT_COMPLETE (not retryable); CONTENTION, INDEX_NOT_READY, LEDGER_NOT_READY and DIGEST_OWED (retryable). |  -  |
|**403** | SCOPE_REQUIRED (the token does not list the scope) or PERMISSION_DENIED (the role does not have the permission). |  -  |
|**429** | RATE_LIMITED (retryable): a rate limit is used up. The limits are the per-token limit (api-token, default 240 requests per minute per token and organisation) and, on some operations, the per-project KV limits (kv-admin 10, kv-erase 30, kv-verify 6 requests per minute). Wait for Retry-After seconds, then send the request again. See Rate limits in the API description. |  * Retry-After - Seconds to wait before the next request. <br>  * RateLimit-Limit - The request limit of the window (IETF draft). X-RateLimit-Limit carries the same value. <br>  * RateLimit-Remaining - Requests left in the window: 0 on a 429 (IETF draft). X-RateLimit-Remaining carries the same value. <br>  * RateLimit-Reset - Seconds until the window resets (IETF draft). X-RateLimit-Reset is the same moment as a Unix timestamp. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **kVEntriesDelete**
> V2KvEntryDeleteResponse kVEntriesDelete()

With if_version (format 2 stores), deletes only when the current version matches and the key has not expired; else 409 CONFLICT with reason and currentVersion. A ledger key is 400 LEDGER_IMMUTABLE. Not retried: a lost connection is 503 UNAVAILABLE with retryable false (read the key before you delete again).

### Example

```typescript
import {
    KVApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new KVApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)
let storeId: string; //KV store id, as returned by KV_list (default to undefined)
let key: string; //The key. It can contain \'/\'. (default to undefined)
let ifVersion: string; //Format 2 stores only. Delete only at this version. (optional) (default to undefined)

const { status, data } = await apiInstance.kVEntriesDelete(
    organization,
    project,
    storeId,
    key,
    ifVersion
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organization** | [**string**] | Organization identifier | defaults to undefined|
| **project** | [**string**] | Project identifier | defaults to undefined|
| **storeId** | [**string**] | KV store id, as returned by KV_list | defaults to undefined|
| **key** | [**string**] | The key. It can contain \&#39;/\&#39;. | defaults to undefined|
| **ifVersion** | [**string**] | Format 2 stores only. Delete only at this version. | (optional) defaults to undefined|


### Return type

**V2KvEntryDeleteResponse**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Deleted. |  -  |
|**400** | Invalid request: VALIDATION, LIMIT_EXCEEDED, CURSOR_INVALID, REQUIRES_FORMAT_2 and the route-specific 400 codes. |  -  |
|**403** | SCOPE_REQUIRED (the token does not list the scope) or PERMISSION_DENIED (the role does not have the permission). |  -  |
|**404** | KEY_NOT_FOUND, STORE_NOT_FOUND, LEDGER_NOT_FOUND, SUBJECT_NOT_FOUND, EXPORT_NOT_FOUND, VERIFICATION_NOT_FOUND, SHRED_NOT_FOUND, INDEX_NOT_FOUND or NOT_FOUND (no archive, tombstone or purge). |  -  |
|**409** | CONFLICT, UNIQUE_VIOLATION, UPGRADE_CONFLICT, EXPORT_IN_PROGRESS, the LEDGER_* conflicts and the archive purge conflicts STORE_NOT_DELETED, ARCHIVE_RETAINED, PURGE_IN_PROGRESS, PURGE_BLOCKED and PURGE_NOT_COMPLETE (not retryable); CONTENTION, INDEX_NOT_READY, LEDGER_NOT_READY and DIGEST_OWED (retryable). |  -  |
|**429** | RATE_LIMITED (retryable): a rate limit is used up. The limits are the per-token limit (api-token, default 240 requests per minute per token and organisation) and, on some operations, the per-project KV limits (kv-admin 10, kv-erase 30, kv-verify 6 requests per minute). Wait for Retry-After seconds, then send the request again. See Rate limits in the API description. |  * Retry-After - Seconds to wait before the next request. <br>  * RateLimit-Limit - The request limit of the window (IETF draft). X-RateLimit-Limit carries the same value. <br>  * RateLimit-Remaining - Requests left in the window: 0 on a 429 (IETF draft). X-RateLimit-Remaining carries the same value. <br>  * RateLimit-Reset - Seconds until the window resets (IETF draft). X-RateLimit-Reset is the same moment as a Unix timestamp. <br>  |
|**500** | INTERNAL: the KV service failed. No detail is given. |  -  |
|**503** | STORE_MIGRATING (retryable, Retry-After) or UNAVAILABLE. UNAVAILABLE with retryable true (for example a new store whose table is still being created, with Retry-After 5) is safe to retry with backoff; honour Retry-After. With retryable false the outcome of a write is unknown: read before you write again. |  * Retry-After -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **kVEntriesPut**
> V2KvEntryPutResponse kVEntriesPut(v2KvEntryPutRequest)

value is any JSON value ({} stays an object). secret encrypts the value with KMS (lists show [ENCRYPTED]). ttl is 60 to 31,536,000 seconds; a write without ttl removes any expiry. Format 2 conditions: ifAbsent (201 on success) or ifVersion. A failed condition is 409 CONFLICT with reason and currentVersion. In a collection with a unique index, 409 UNIQUE_VIOLATION names index and existingKey. A ledger key is 400 LEDGER_IMMUTABLE. Not retried: a lost connection is 503 UNAVAILABLE with retryable false (the outcome is unknown; read the key before you write again).

### Example

```typescript
import {
    KVApi,
    Configuration,
    V2KvEntryPutRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new KVApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)
let storeId: string; //KV store id, as returned by KV_list (default to undefined)
let key: string; //The key. It can contain \'/\'. (default to undefined)
let v2KvEntryPutRequest: V2KvEntryPutRequest; //

const { status, data } = await apiInstance.kVEntriesPut(
    organization,
    project,
    storeId,
    key,
    v2KvEntryPutRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v2KvEntryPutRequest** | **V2KvEntryPutRequest**|  | |
| **organization** | [**string**] | Organization identifier | defaults to undefined|
| **project** | [**string**] | Project identifier | defaults to undefined|
| **storeId** | [**string**] | KV store id, as returned by KV_list | defaults to undefined|
| **key** | [**string**] | The key. It can contain \&#39;/\&#39;. | defaults to undefined|


### Return type

**V2KvEntryPutResponse**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Updated. |  -  |
|**201** | Created (always 201 for ifAbsent). |  -  |
|**400** | Invalid request: VALIDATION, LIMIT_EXCEEDED, CURSOR_INVALID, REQUIRES_FORMAT_2 and the route-specific 400 codes. |  -  |
|**403** | SCOPE_REQUIRED (the token does not list the scope) or PERMISSION_DENIED (the role does not have the permission). |  -  |
|**404** | STORE_NOT_FOUND: the store does not exist or is not in this project. |  -  |
|**409** | CONFLICT, UNIQUE_VIOLATION, UPGRADE_CONFLICT, EXPORT_IN_PROGRESS, the LEDGER_* conflicts and the archive purge conflicts STORE_NOT_DELETED, ARCHIVE_RETAINED, PURGE_IN_PROGRESS, PURGE_BLOCKED and PURGE_NOT_COMPLETE (not retryable); CONTENTION, INDEX_NOT_READY, LEDGER_NOT_READY and DIGEST_OWED (retryable). |  -  |
|**429** | RATE_LIMITED (retryable): a rate limit is used up. The limits are the per-token limit (api-token, default 240 requests per minute per token and organisation) and, on some operations, the per-project KV limits (kv-admin 10, kv-erase 30, kv-verify 6 requests per minute). Wait for Retry-After seconds, then send the request again. See Rate limits in the API description. |  * Retry-After - Seconds to wait before the next request. <br>  * RateLimit-Limit - The request limit of the window (IETF draft). X-RateLimit-Limit carries the same value. <br>  * RateLimit-Remaining - Requests left in the window: 0 on a 429 (IETF draft). X-RateLimit-Remaining carries the same value. <br>  * RateLimit-Reset - Seconds until the window resets (IETF draft). X-RateLimit-Reset is the same moment as a Unix timestamp. <br>  |
|**500** | INTERNAL: the KV service failed. No detail is given. |  -  |
|**503** | STORE_MIGRATING (retryable, Retry-After) or UNAVAILABLE. UNAVAILABLE with retryable true (for example a new store whose table is still being created, with Retry-After 5) is safe to retry with backoff; honour Retry-After. With retryable false the outcome of a write is unknown: read before you write again. |  * Retry-After -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **kVEntriesShow**
> V2KvEntry kVEntriesShow()

Returns the value, the version (format 2 stores), timestamps, expires_at and, for a ledger entry, the ledger block. Reads are strongly consistent unless consistent is false. Works on format 1 and format 2 stores. A ledger entry needs the ledger_read permission (and, for a token with a scope list, the kv:ledger:read scope; a legacy token without a scope list needs the permission only) (else 403 PERMISSION_DENIED); its personal fields read \"[PERSONAL]\" (names in personal) unless the role has ledger_reveal and reveal is true. Each reveal is logged (kv.ledger.reveal). Secret values are write-only through the API: a value stored as a secret (encrypted true) reads \"[ENCRYPTED]\"; read it in an edge function. A lost connection is 503 UNAVAILABLE with retryable true.

### Example

```typescript
import {
    KVApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new KVApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)
let storeId: string; //KV store id, as returned by KV_list (default to undefined)
let key: string; //The key. It can contain \'/\'. (default to undefined)
let consistent: boolean; //false for an eventually consistent read. (optional) (default to true)
let reveal: boolean; //Ledger rows only: return personal fields in clear. Needs the ledger_reveal permission; each reveal is logged. Without it, personal fields are redacted. (optional) (default to false)

const { status, data } = await apiInstance.kVEntriesShow(
    organization,
    project,
    storeId,
    key,
    consistent,
    reveal
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organization** | [**string**] | Organization identifier | defaults to undefined|
| **project** | [**string**] | Project identifier | defaults to undefined|
| **storeId** | [**string**] | KV store id, as returned by KV_list | defaults to undefined|
| **key** | [**string**] | The key. It can contain \&#39;/\&#39;. | defaults to undefined|
| **consistent** | [**boolean**] | false for an eventually consistent read. | (optional) defaults to true|
| **reveal** | [**boolean**] | Ledger rows only: return personal fields in clear. Needs the ledger_reveal permission; each reveal is logged. Without it, personal fields are redacted. | (optional) defaults to false|


### Return type

**V2KvEntry**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The key. |  * X-Quant-KV-Format - The store format. <br>  |
|**400** | Invalid request: VALIDATION, LIMIT_EXCEEDED, CURSOR_INVALID, REQUIRES_FORMAT_2 and the route-specific 400 codes. |  -  |
|**403** | SCOPE_REQUIRED (the token does not list the scope) or PERMISSION_DENIED (the role does not have the permission). |  -  |
|**404** | KEY_NOT_FOUND, STORE_NOT_FOUND, LEDGER_NOT_FOUND, SUBJECT_NOT_FOUND, EXPORT_NOT_FOUND, VERIFICATION_NOT_FOUND, SHRED_NOT_FOUND, INDEX_NOT_FOUND or NOT_FOUND (no archive, tombstone or purge). |  -  |
|**409** | CONFLICT, UNIQUE_VIOLATION, UPGRADE_CONFLICT, EXPORT_IN_PROGRESS, the LEDGER_* conflicts and the archive purge conflicts STORE_NOT_DELETED, ARCHIVE_RETAINED, PURGE_IN_PROGRESS, PURGE_BLOCKED and PURGE_NOT_COMPLETE (not retryable); CONTENTION, INDEX_NOT_READY, LEDGER_NOT_READY and DIGEST_OWED (retryable). |  -  |
|**429** | RATE_LIMITED (retryable): a rate limit is used up. The limits are the per-token limit (api-token, default 240 requests per minute per token and organisation) and, on some operations, the per-project KV limits (kv-admin 10, kv-erase 30, kv-verify 6 requests per minute). Wait for Retry-After seconds, then send the request again. See Rate limits in the API description. |  * Retry-After - Seconds to wait before the next request. <br>  * RateLimit-Limit - The request limit of the window (IETF draft). X-RateLimit-Limit carries the same value. <br>  * RateLimit-Remaining - Requests left in the window: 0 on a 429 (IETF draft). X-RateLimit-Remaining carries the same value. <br>  * RateLimit-Reset - Seconds until the window resets (IETF draft). X-RateLimit-Reset is the same moment as a Unix timestamp. <br>  |
|**500** | INTERNAL: the KV service failed. No detail is given. |  -  |
|**503** | STORE_MIGRATING (retryable, Retry-After) or UNAVAILABLE. UNAVAILABLE with retryable true (for example a new store whose table is still being created, with Retry-After 5) is safe to retry with backoff; honour Retry-After. With retryable false the outcome of a write is unknown: read before you write again. |  * Retry-After -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **kVExportCreate**
> V2KvExportResponse kVExportCreate()

Runs in the background; poll KV_export_show. One export at a time per store (409 EXPORT_IN_PROGRESS). Stores over 1 GiB are 400 LIMIT_EXCEEDED. 503 STORE_MIGRATING during an upgrade. When the store has any ledger, in any state (also one that is being dropped), the role also needs ledger_read (403 PERMISSION_DENIED) and a token with a scope list also needs kv:ledger:read (403 SCOPE_REQUIRED), because the files contain the ledger entries; the portal checks the store\'s ledger list first and refuses when it cannot read it. A lost connection is 503 UNAVAILABLE with retryable false: read KV_export_show before you send it again. Rate limit: 10 requests per minute per project, shared by every kv-admin operation (index create, delete and resume; upgrade; export create and resume; ledger declare, raise and drop). Over the limit the answer is 429 RATE_LIMITED with a Retry-After header: clients (for example Terraform) must wait Retry-After seconds, then send the request again.

### Example

```typescript
import {
    KVApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new KVApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)
let storeId: string; //KV store id, as returned by KV_list (default to undefined)
let body: object; // (optional)

const { status, data } = await apiInstance.kVExportCreate(
    organization,
    project,
    storeId,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |
| **organization** | [**string**] | Organization identifier | defaults to undefined|
| **project** | [**string**] | Project identifier | defaults to undefined|
| **storeId** | [**string**] | KV store id, as returned by KV_list | defaults to undefined|


### Return type

**V2KvExportResponse**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**202** | Accepted. The export is requested. |  -  |
|**400** | Invalid request: VALIDATION, LIMIT_EXCEEDED, CURSOR_INVALID, REQUIRES_FORMAT_2 and the route-specific 400 codes. |  -  |
|**403** | SCOPE_REQUIRED (the token does not list the scope) or PERMISSION_DENIED (the role does not have the permission). |  -  |
|**404** | STORE_NOT_FOUND: the store does not exist or is not in this project. |  -  |
|**409** | CONFLICT, UNIQUE_VIOLATION, UPGRADE_CONFLICT, EXPORT_IN_PROGRESS, the LEDGER_* conflicts and the archive purge conflicts STORE_NOT_DELETED, ARCHIVE_RETAINED, PURGE_IN_PROGRESS, PURGE_BLOCKED and PURGE_NOT_COMPLETE (not retryable); CONTENTION, INDEX_NOT_READY, LEDGER_NOT_READY and DIGEST_OWED (retryable). |  -  |
|**429** | RATE_LIMITED (retryable): a rate limit is used up. The limits are the per-token limit (api-token, default 240 requests per minute per token and organisation) and, on some operations, the per-project KV limits (kv-admin 10, kv-erase 30, kv-verify 6 requests per minute). Wait for Retry-After seconds, then send the request again. See Rate limits in the API description. |  * Retry-After - Seconds to wait before the next request. <br>  * RateLimit-Limit - The request limit of the window (IETF draft). X-RateLimit-Limit carries the same value. <br>  * RateLimit-Remaining - Requests left in the window: 0 on a 429 (IETF draft). X-RateLimit-Remaining carries the same value. <br>  * RateLimit-Reset - Seconds until the window resets (IETF draft). X-RateLimit-Reset is the same moment as a Unix timestamp. <br>  |
|**500** | INTERNAL: the KV service failed. No detail is given. |  -  |
|**503** | STORE_MIGRATING (retryable, Retry-After) or UNAVAILABLE. UNAVAILABLE with retryable true (for example a new store whose table is still being created, with Retry-After 5) is safe to retry with backoff; honour Retry-After. With retryable false the outcome of a write is unknown: read before you write again. |  * Retry-After -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **kVExportResume**
> V2KvExportResponse kVExportResume()

Use it when KV_export_show shows no change of updatedAt for more than 960 seconds (a queued step was lost). A resumed export reuses the export already started. Safe to repeat: 409 CONFLICT when the export is in a final phase or its step is still running. A lost connection is 503 UNAVAILABLE with retryable true. When the store has a ledger, the role also needs ledger_read (403 PERMISSION_DENIED) and a token with a scope list also needs kv:ledger:read (403 SCOPE_REQUIRED). Rate limit: 10 requests per minute per project, shared by every kv-admin operation (index create, delete and resume; upgrade; export create and resume; ledger declare, raise and drop). Over the limit the answer is 429 RATE_LIMITED with a Retry-After header: clients (for example Terraform) must wait Retry-After seconds, then send the request again.

### Example

```typescript
import {
    KVApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new KVApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)
let storeId: string; //KV store id, as returned by KV_list (default to undefined)

const { status, data } = await apiInstance.kVExportResume(
    organization,
    project,
    storeId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organization** | [**string**] | Organization identifier | defaults to undefined|
| **project** | [**string**] | Project identifier | defaults to undefined|
| **storeId** | [**string**] | KV store id, as returned by KV_list | defaults to undefined|


### Return type

**V2KvExportResponse**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**202** | Accepted. A step is queued. |  -  |
|**403** | SCOPE_REQUIRED (the token does not list the scope) or PERMISSION_DENIED (the role does not have the permission). |  -  |
|**404** | KEY_NOT_FOUND, STORE_NOT_FOUND, LEDGER_NOT_FOUND, SUBJECT_NOT_FOUND, EXPORT_NOT_FOUND, VERIFICATION_NOT_FOUND, SHRED_NOT_FOUND, INDEX_NOT_FOUND or NOT_FOUND (no archive, tombstone or purge). |  -  |
|**409** | CONFLICT, UNIQUE_VIOLATION, UPGRADE_CONFLICT, EXPORT_IN_PROGRESS, the LEDGER_* conflicts and the archive purge conflicts STORE_NOT_DELETED, ARCHIVE_RETAINED, PURGE_IN_PROGRESS, PURGE_BLOCKED and PURGE_NOT_COMPLETE (not retryable); CONTENTION, INDEX_NOT_READY, LEDGER_NOT_READY and DIGEST_OWED (retryable). |  -  |
|**429** | RATE_LIMITED (retryable): a rate limit is used up. The limits are the per-token limit (api-token, default 240 requests per minute per token and organisation) and, on some operations, the per-project KV limits (kv-admin 10, kv-erase 30, kv-verify 6 requests per minute). Wait for Retry-After seconds, then send the request again. See Rate limits in the API description. |  * Retry-After - Seconds to wait before the next request. <br>  * RateLimit-Limit - The request limit of the window (IETF draft). X-RateLimit-Limit carries the same value. <br>  * RateLimit-Remaining - Requests left in the window: 0 on a 429 (IETF draft). X-RateLimit-Remaining carries the same value. <br>  * RateLimit-Reset - Seconds until the window resets (IETF draft). X-RateLimit-Reset is the same moment as a Unix timestamp. <br>  |
|**500** | INTERNAL: the KV service failed. No detail is given. |  -  |
|**503** | STORE_MIGRATING (retryable, Retry-After) or UNAVAILABLE. UNAVAILABLE with retryable true (for example a new store whose table is still being created, with Retry-After 5) is safe to retry with backoff; honour Retry-After. With retryable false the outcome of a write is unknown: read before you write again. |  * Retry-After -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **kVExportShow**
> V2KvExportResponse kVExportShow()

In phase done the export has downloads: one presigned URL per part, valid for 1 hour and new on every call. After expiresAt the phase is expired and there are no downloads. 404 EXPORT_NOT_FOUND when the store was never exported (or the last export failed more than 7 days ago). When the store has a ledger, the role also needs ledger_read (403 PERMISSION_DENIED) and a token with a scope list also needs kv:ledger:read (403 SCOPE_REQUIRED), because the files contain the ledger entries.

### Example

```typescript
import {
    KVApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new KVApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)
let storeId: string; //KV store id, as returned by KV_list (default to undefined)

const { status, data } = await apiInstance.kVExportShow(
    organization,
    project,
    storeId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organization** | [**string**] | Organization identifier | defaults to undefined|
| **project** | [**string**] | Project identifier | defaults to undefined|
| **storeId** | [**string**] | KV store id, as returned by KV_list | defaults to undefined|


### Return type

**V2KvExportResponse**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The latest export. |  -  |
|**403** | SCOPE_REQUIRED (the token does not list the scope) or PERMISSION_DENIED (the role does not have the permission). |  -  |
|**404** | KEY_NOT_FOUND, STORE_NOT_FOUND, LEDGER_NOT_FOUND, SUBJECT_NOT_FOUND, EXPORT_NOT_FOUND, VERIFICATION_NOT_FOUND, SHRED_NOT_FOUND, INDEX_NOT_FOUND or NOT_FOUND (no archive, tombstone or purge). |  -  |
|**429** | RATE_LIMITED (retryable): a rate limit is used up. The limits are the per-token limit (api-token, default 240 requests per minute per token and organisation) and, on some operations, the per-project KV limits (kv-admin 10, kv-erase 30, kv-verify 6 requests per minute). Wait for Retry-After seconds, then send the request again. See Rate limits in the API description. |  * Retry-After - Seconds to wait before the next request. <br>  * RateLimit-Limit - The request limit of the window (IETF draft). X-RateLimit-Limit carries the same value. <br>  * RateLimit-Remaining - Requests left in the window: 0 on a 429 (IETF draft). X-RateLimit-Remaining carries the same value. <br>  * RateLimit-Reset - Seconds until the window resets (IETF draft). X-RateLimit-Reset is the same moment as a Unix timestamp. <br>  |
|**500** | INTERNAL: the KV service failed. No detail is given. |  -  |
|**503** | STORE_MIGRATING (retryable, Retry-After) or UNAVAILABLE. UNAVAILABLE with retryable true (for example a new store whose table is still being created, with Retry-After 5) is safe to retry with backoff; honour Retry-After. With retryable false the outcome of a write is unknown: read before you write again. |  * Retry-After -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **kVIndexesCount**
> V2KvCount kVIndexesCount()

Count indexes only; the index must be ACTIVE (409 INDEX_NOT_READY while BUILDING). Strongly consistent. A value that no key holds counts 0. Omit equals (or send {}) for an index with no fields, which counts the whole collection. The answer has no rows, so no ledger data (count indexes are refused on ledger collections).

### Example

```typescript
import {
    KVApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new KVApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)
let storeId: string; //KV store id, as returned by KV_list (default to undefined)
let indexName: string; // (default to undefined)
let equals: string; //A JSON object that gives a JSON scalar for exactly the index fields. (optional) (default to undefined)

const { status, data } = await apiInstance.kVIndexesCount(
    organization,
    project,
    storeId,
    indexName,
    equals
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organization** | [**string**] | Organization identifier | defaults to undefined|
| **project** | [**string**] | Project identifier | defaults to undefined|
| **storeId** | [**string**] | KV store id, as returned by KV_list | defaults to undefined|
| **indexName** | [**string**] |  | defaults to undefined|
| **equals** | [**string**] | A JSON object that gives a JSON scalar for exactly the index fields. | (optional) defaults to undefined|


### Return type

**V2KvCount**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The count. |  -  |
|**400** | Invalid request: VALIDATION, LIMIT_EXCEEDED, CURSOR_INVALID, REQUIRES_FORMAT_2 and the route-specific 400 codes. |  -  |
|**403** | SCOPE_REQUIRED (the token does not list the scope) or PERMISSION_DENIED (the role does not have the permission). |  -  |
|**404** | STORE_NOT_FOUND: the store does not exist or is not in this project. |  -  |
|**409** | CONFLICT, UNIQUE_VIOLATION, UPGRADE_CONFLICT, EXPORT_IN_PROGRESS, the LEDGER_* conflicts and the archive purge conflicts STORE_NOT_DELETED, ARCHIVE_RETAINED, PURGE_IN_PROGRESS, PURGE_BLOCKED and PURGE_NOT_COMPLETE (not retryable); CONTENTION, INDEX_NOT_READY, LEDGER_NOT_READY and DIGEST_OWED (retryable). |  -  |
|**429** | RATE_LIMITED (retryable): a rate limit is used up. The limits are the per-token limit (api-token, default 240 requests per minute per token and organisation) and, on some operations, the per-project KV limits (kv-admin 10, kv-erase 30, kv-verify 6 requests per minute). Wait for Retry-After seconds, then send the request again. See Rate limits in the API description. |  * Retry-After - Seconds to wait before the next request. <br>  * RateLimit-Limit - The request limit of the window (IETF draft). X-RateLimit-Limit carries the same value. <br>  * RateLimit-Remaining - Requests left in the window: 0 on a 429 (IETF draft). X-RateLimit-Remaining carries the same value. <br>  * RateLimit-Reset - Seconds until the window resets (IETF draft). X-RateLimit-Reset is the same moment as a Unix timestamp. <br>  |
|**500** | INTERNAL: the KV service failed. No detail is given. |  -  |
|**503** | STORE_MIGRATING (retryable, Retry-After) or UNAVAILABLE. UNAVAILABLE with retryable true (for example a new store whose table is still being created, with Retry-After 5) is safe to retry with backoff; honour Retry-After. With retryable false the outcome of a write is unknown: read before you write again. |  * Retry-After -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **kVIndexesCreate**
> V2KvIndex kVIndexesCreate(v2KvIndexRequest)

Format 2 stores only (400 REQUIRES_FORMAT_2). The index starts in state BUILDING. About 40 seconds after the declare, writes maintain it; about 75 seconds after it, a job backfills existing items and sets the state to ACTIVE, or FAILED with error and conflicts. The answer is 202 Accepted with the index (the backend status). Poll KV_indexes_show until state is ACTIVE (Terraform waits for ACTIVE). A unique index is not enforced in the first 40 seconds: a duplicate written then makes the build end FAILED. At most 20 indexes per store and 5 per collection (400 LIMIT_EXCEEDED). Definitions are immutable. Rate limit: 10 requests per minute per project, shared by every kv-admin operation (index create, delete and resume; upgrade; export create and resume; ledger declare, raise and drop). Over the limit the answer is 429 RATE_LIMITED with a Retry-After header: clients (for example Terraform) must wait Retry-After seconds, then send the request again. A lost connection is 503 UNAVAILABLE with retryable false: read KV_indexes_show before you send it again.

### Example

```typescript
import {
    KVApi,
    Configuration,
    V2KvIndexRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new KVApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)
let storeId: string; //KV store id, as returned by KV_list (default to undefined)
let v2KvIndexRequest: V2KvIndexRequest; //

const { status, data } = await apiInstance.kVIndexesCreate(
    organization,
    project,
    storeId,
    v2KvIndexRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v2KvIndexRequest** | **V2KvIndexRequest**|  | |
| **organization** | [**string**] | Organization identifier | defaults to undefined|
| **project** | [**string**] | Project identifier | defaults to undefined|
| **storeId** | [**string**] | KV store id, as returned by KV_list | defaults to undefined|


### Return type

**V2KvIndex**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**202** | Accepted. The index is BUILDING. |  -  |
|**400** | Invalid request: VALIDATION, LIMIT_EXCEEDED, CURSOR_INVALID, REQUIRES_FORMAT_2 and the route-specific 400 codes. |  -  |
|**403** | SCOPE_REQUIRED (the token does not list the scope) or PERMISSION_DENIED (the role does not have the permission). |  -  |
|**404** | STORE_NOT_FOUND: the store does not exist or is not in this project. |  -  |
|**409** | CONFLICT, UNIQUE_VIOLATION, UPGRADE_CONFLICT, EXPORT_IN_PROGRESS, the LEDGER_* conflicts and the archive purge conflicts STORE_NOT_DELETED, ARCHIVE_RETAINED, PURGE_IN_PROGRESS, PURGE_BLOCKED and PURGE_NOT_COMPLETE (not retryable); CONTENTION, INDEX_NOT_READY, LEDGER_NOT_READY and DIGEST_OWED (retryable). |  -  |
|**429** | RATE_LIMITED (retryable): a rate limit is used up. The limits are the per-token limit (api-token, default 240 requests per minute per token and organisation) and, on some operations, the per-project KV limits (kv-admin 10, kv-erase 30, kv-verify 6 requests per minute). Wait for Retry-After seconds, then send the request again. See Rate limits in the API description. |  * Retry-After - Seconds to wait before the next request. <br>  * RateLimit-Limit - The request limit of the window (IETF draft). X-RateLimit-Limit carries the same value. <br>  * RateLimit-Remaining - Requests left in the window: 0 on a 429 (IETF draft). X-RateLimit-Remaining carries the same value. <br>  * RateLimit-Reset - Seconds until the window resets (IETF draft). X-RateLimit-Reset is the same moment as a Unix timestamp. <br>  |
|**500** | INTERNAL: the KV service failed. No detail is given. |  -  |
|**503** | STORE_MIGRATING (retryable, Retry-After) or UNAVAILABLE. UNAVAILABLE with retryable true (for example a new store whose table is still being created, with Retry-After 5) is safe to retry with backoff; honour Retry-After. With retryable false the outcome of a write is unknown: read before you write again. |  * Retry-After -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **kVIndexesDelete**
> V2KvIndex kVIndexesDelete()

The index moves to state DROPPING and a background job removes its data, then the index. KV_indexes_show then answers 404 INDEX_NOT_FOUND. Dropping an index that is already DROPPING returns it unchanged. An index that is not in the store\'s index list is 404 INDEX_NOT_FOUND. A lost connection is 503 UNAVAILABLE with retryable false: read KV_indexes_show before you send it again. Rate limit: 10 requests per minute per project, shared by every kv-admin operation (index create, delete and resume; upgrade; export create and resume; ledger declare, raise and drop). Over the limit the answer is 429 RATE_LIMITED with a Retry-After header: clients (for example Terraform) must wait Retry-After seconds, then send the request again.

### Example

```typescript
import {
    KVApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new KVApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)
let storeId: string; //KV store id, as returned by KV_list (default to undefined)
let indexName: string; // (default to undefined)

const { status, data } = await apiInstance.kVIndexesDelete(
    organization,
    project,
    storeId,
    indexName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organization** | [**string**] | Organization identifier | defaults to undefined|
| **project** | [**string**] | Project identifier | defaults to undefined|
| **storeId** | [**string**] | KV store id, as returned by KV_list | defaults to undefined|
| **indexName** | [**string**] |  | defaults to undefined|


### Return type

**V2KvIndex**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**202** | Accepted. The index is DROPPING. |  -  |
|**400** | Invalid request: VALIDATION, LIMIT_EXCEEDED, CURSOR_INVALID, REQUIRES_FORMAT_2 and the route-specific 400 codes. |  -  |
|**403** | SCOPE_REQUIRED (the token does not list the scope) or PERMISSION_DENIED (the role does not have the permission). |  -  |
|**404** | KEY_NOT_FOUND, STORE_NOT_FOUND, LEDGER_NOT_FOUND, SUBJECT_NOT_FOUND, EXPORT_NOT_FOUND, VERIFICATION_NOT_FOUND, SHRED_NOT_FOUND, INDEX_NOT_FOUND or NOT_FOUND (no archive, tombstone or purge). |  -  |
|**409** | CONFLICT, UNIQUE_VIOLATION, UPGRADE_CONFLICT, EXPORT_IN_PROGRESS, the LEDGER_* conflicts and the archive purge conflicts STORE_NOT_DELETED, ARCHIVE_RETAINED, PURGE_IN_PROGRESS, PURGE_BLOCKED and PURGE_NOT_COMPLETE (not retryable); CONTENTION, INDEX_NOT_READY, LEDGER_NOT_READY and DIGEST_OWED (retryable). |  -  |
|**429** | RATE_LIMITED (retryable): a rate limit is used up. The limits are the per-token limit (api-token, default 240 requests per minute per token and organisation) and, on some operations, the per-project KV limits (kv-admin 10, kv-erase 30, kv-verify 6 requests per minute). Wait for Retry-After seconds, then send the request again. See Rate limits in the API description. |  * Retry-After - Seconds to wait before the next request. <br>  * RateLimit-Limit - The request limit of the window (IETF draft). X-RateLimit-Limit carries the same value. <br>  * RateLimit-Remaining - Requests left in the window: 0 on a 429 (IETF draft). X-RateLimit-Remaining carries the same value. <br>  * RateLimit-Reset - Seconds until the window resets (IETF draft). X-RateLimit-Reset is the same moment as a Unix timestamp. <br>  |
|**500** | INTERNAL: the KV service failed. No detail is given. |  -  |
|**503** | STORE_MIGRATING (retryable, Retry-After) or UNAVAILABLE. UNAVAILABLE with retryable true (for example a new store whose table is still being created, with Retry-After 5) is safe to retry with backoff; honour Retry-After. With retryable false the outcome of a write is unknown: read before you write again. |  * Retry-After -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **kVIndexesList**
> V2KvIndexList kVIndexesList()

Every declared index with its state (BUILDING, ACTIVE, FAILED, DROPPING) and job phase. A store has at most 20 indexes, so the list has no cursor. limit (1-1000) only cuts the list in the portal. Empty for a store without indexes (also a format 1 store).

### Example

```typescript
import {
    KVApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new KVApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)
let storeId: string; //KV store id, as returned by KV_list (default to undefined)
let limit: number; //The maximum number of indexes to return (1-1000). Omit it for all indexes. (optional) (default to undefined)

const { status, data } = await apiInstance.kVIndexesList(
    organization,
    project,
    storeId,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organization** | [**string**] | Organization identifier | defaults to undefined|
| **project** | [**string**] | Project identifier | defaults to undefined|
| **storeId** | [**string**] | KV store id, as returned by KV_list | defaults to undefined|
| **limit** | [**number**] | The maximum number of indexes to return (1-1000). Omit it for all indexes. | (optional) defaults to undefined|


### Return type

**V2KvIndexList**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The indexes (empty when none). |  -  |
|**400** | Invalid request: VALIDATION, LIMIT_EXCEEDED, CURSOR_INVALID, REQUIRES_FORMAT_2 and the route-specific 400 codes. |  -  |
|**403** | SCOPE_REQUIRED (the token does not list the scope) or PERMISSION_DENIED (the role does not have the permission). |  -  |
|**404** | STORE_NOT_FOUND: the store does not exist or is not in this project. |  -  |
|**429** | RATE_LIMITED (retryable): a rate limit is used up. The limits are the per-token limit (api-token, default 240 requests per minute per token and organisation) and, on some operations, the per-project KV limits (kv-admin 10, kv-erase 30, kv-verify 6 requests per minute). Wait for Retry-After seconds, then send the request again. See Rate limits in the API description. |  * Retry-After - Seconds to wait before the next request. <br>  * RateLimit-Limit - The request limit of the window (IETF draft). X-RateLimit-Limit carries the same value. <br>  * RateLimit-Remaining - Requests left in the window: 0 on a 429 (IETF draft). X-RateLimit-Remaining carries the same value. <br>  * RateLimit-Reset - Seconds until the window resets (IETF draft). X-RateLimit-Reset is the same moment as a Unix timestamp. <br>  |
|**500** | INTERNAL: the KV service failed. No detail is given. |  -  |
|**503** | STORE_MIGRATING (retryable, Retry-After) or UNAVAILABLE. UNAVAILABLE with retryable true (for example a new store whose table is still being created, with Retry-After 5) is safe to retry with backoff; honour Retry-After. With retryable false the outcome of a write is unknown: read before you write again. |  * Retry-After -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **kVIndexesLookup**
> V2KvIndexLookup kVIndexesLookup()

Unique indexes only; the index must be ACTIVE (409 INDEX_NOT_READY while BUILDING). Strongly consistent. An expired owner, or an owner that no longer holds the value, is 404 KEY_NOT_FOUND. An owner that is an entry of a ledger in the retired subject format is 409 LEDGER_FORMAT_RETIRED (not retryable). A ledger entry needs the ledger_read permission (and, for a token with a scope list, the kv:ledger:read scope; a legacy token without a scope list needs the permission only) (403 PERMISSION_DENIED); its personal fields are [PERSONAL] unless the role has ledger_reveal and reveal=true (each reveal is logged as kv.ledger.reveal). reveal is a portal option and is not sent to the KV service. An empty object {} in a value stays {}, but a ledger entry whose whole value is {} reads [PERSONAL] (fail closed). Secret values are write-only through the API: a value stored as a secret (encrypted true) reads [ENCRYPTED]; read it in an edge function.

### Example

```typescript
import {
    KVApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new KVApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)
let storeId: string; //KV store id, as returned by KV_list (default to undefined)
let indexName: string; // (default to undefined)
let equals: string; //A JSON object that gives a JSON scalar for exactly the index fields. Values are type-tagged (1 and \"1\" differ). (default to undefined)
let reveal: boolean; //Ledger rows only: return personal fields in clear. Needs the ledger_reveal permission; each reveal is logged. Without it, personal fields are redacted. (optional) (default to false)

const { status, data } = await apiInstance.kVIndexesLookup(
    organization,
    project,
    storeId,
    indexName,
    equals,
    reveal
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organization** | [**string**] | Organization identifier | defaults to undefined|
| **project** | [**string**] | Project identifier | defaults to undefined|
| **storeId** | [**string**] | KV store id, as returned by KV_list | defaults to undefined|
| **indexName** | [**string**] |  | defaults to undefined|
| **equals** | [**string**] | A JSON object that gives a JSON scalar for exactly the index fields. Values are type-tagged (1 and \&quot;1\&quot; differ). | defaults to undefined|
| **reveal** | [**boolean**] | Ledger rows only: return personal fields in clear. Needs the ledger_reveal permission; each reveal is logged. Without it, personal fields are redacted. | (optional) defaults to false|


### Return type

**V2KvIndexLookup**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The key that holds the value. |  -  |
|**400** | Invalid request: VALIDATION, LIMIT_EXCEEDED, CURSOR_INVALID, REQUIRES_FORMAT_2 and the route-specific 400 codes. |  -  |
|**403** | SCOPE_REQUIRED (the token does not list the scope) or PERMISSION_DENIED (the role does not have the permission). |  -  |
|**404** | KEY_NOT_FOUND, STORE_NOT_FOUND, LEDGER_NOT_FOUND, SUBJECT_NOT_FOUND, EXPORT_NOT_FOUND, VERIFICATION_NOT_FOUND, SHRED_NOT_FOUND, INDEX_NOT_FOUND or NOT_FOUND (no archive, tombstone or purge). |  -  |
|**409** | CONFLICT, UNIQUE_VIOLATION, UPGRADE_CONFLICT, EXPORT_IN_PROGRESS, the LEDGER_* conflicts and the archive purge conflicts STORE_NOT_DELETED, ARCHIVE_RETAINED, PURGE_IN_PROGRESS, PURGE_BLOCKED and PURGE_NOT_COMPLETE (not retryable); CONTENTION, INDEX_NOT_READY, LEDGER_NOT_READY and DIGEST_OWED (retryable). |  -  |
|**429** | RATE_LIMITED (retryable): a rate limit is used up. The limits are the per-token limit (api-token, default 240 requests per minute per token and organisation) and, on some operations, the per-project KV limits (kv-admin 10, kv-erase 30, kv-verify 6 requests per minute). Wait for Retry-After seconds, then send the request again. See Rate limits in the API description. |  * Retry-After - Seconds to wait before the next request. <br>  * RateLimit-Limit - The request limit of the window (IETF draft). X-RateLimit-Limit carries the same value. <br>  * RateLimit-Remaining - Requests left in the window: 0 on a 429 (IETF draft). X-RateLimit-Remaining carries the same value. <br>  * RateLimit-Reset - Seconds until the window resets (IETF draft). X-RateLimit-Reset is the same moment as a Unix timestamp. <br>  |
|**500** | INTERNAL: the KV service failed. No detail is given. |  -  |
|**503** | STORE_MIGRATING (retryable, Retry-After) or UNAVAILABLE. UNAVAILABLE with retryable true (for example a new store whose table is still being created, with Retry-After 5) is safe to retry with backoff; honour Retry-After. With retryable false the outcome of a write is unknown: read before you write again. |  * Retry-After -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **kVIndexesResume**
> V2KvIndex kVIndexesResume()

Use it when KV_indexes_show shows a job whose phase and scanned count have not changed for more than 960 seconds (a queued step was lost). It changes nothing else and is safe to repeat, so a lost connection is 503 UNAVAILABLE with retryable true. An index that is not in the store\'s index list is 404 INDEX_NOT_FOUND. Rate limit: 10 requests per minute per project, shared by every kv-admin operation (index create, delete and resume; upgrade; export create and resume; ledger declare, raise and drop). Over the limit the answer is 429 RATE_LIMITED with a Retry-After header: clients (for example Terraform) must wait Retry-After seconds, then send the request again.

### Example

```typescript
import {
    KVApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new KVApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)
let storeId: string; //KV store id, as returned by KV_list (default to undefined)
let indexName: string; // (default to undefined)

const { status, data } = await apiInstance.kVIndexesResume(
    organization,
    project,
    storeId,
    indexName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organization** | [**string**] | Organization identifier | defaults to undefined|
| **project** | [**string**] | Project identifier | defaults to undefined|
| **storeId** | [**string**] | KV store id, as returned by KV_list | defaults to undefined|
| **indexName** | [**string**] |  | defaults to undefined|


### Return type

**V2KvIndex**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**202** | Accepted. A step is queued. |  -  |
|**400** | Invalid request: VALIDATION, LIMIT_EXCEEDED, CURSOR_INVALID, REQUIRES_FORMAT_2 and the route-specific 400 codes. |  -  |
|**403** | SCOPE_REQUIRED (the token does not list the scope) or PERMISSION_DENIED (the role does not have the permission). |  -  |
|**404** | KEY_NOT_FOUND, STORE_NOT_FOUND, LEDGER_NOT_FOUND, SUBJECT_NOT_FOUND, EXPORT_NOT_FOUND, VERIFICATION_NOT_FOUND, SHRED_NOT_FOUND, INDEX_NOT_FOUND or NOT_FOUND (no archive, tombstone or purge). |  -  |
|**429** | RATE_LIMITED (retryable): a rate limit is used up. The limits are the per-token limit (api-token, default 240 requests per minute per token and organisation) and, on some operations, the per-project KV limits (kv-admin 10, kv-erase 30, kv-verify 6 requests per minute). Wait for Retry-After seconds, then send the request again. See Rate limits in the API description. |  * Retry-After - Seconds to wait before the next request. <br>  * RateLimit-Limit - The request limit of the window (IETF draft). X-RateLimit-Limit carries the same value. <br>  * RateLimit-Remaining - Requests left in the window: 0 on a 429 (IETF draft). X-RateLimit-Remaining carries the same value. <br>  * RateLimit-Reset - Seconds until the window resets (IETF draft). X-RateLimit-Reset is the same moment as a Unix timestamp. <br>  |
|**500** | INTERNAL: the KV service failed. No detail is given. |  -  |
|**503** | STORE_MIGRATING (retryable, Retry-After) or UNAVAILABLE. UNAVAILABLE with retryable true (for example a new store whose table is still being created, with Retry-After 5) is safe to retry with backoff; honour Retry-After. With retryable false the outcome of a write is unknown: read before you write again. |  * Retry-After -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **kVIndexesShow**
> V2KvIndex kVIndexesShow()

The portal reads the index list and returns the named index. State BUILDING moves to ACTIVE or FAILED; poll this route until ACTIVE. A dropped index answers 404 INDEX_NOT_FOUND once the drop job has finished. A name that does not match the index name pattern is 400 VALIDATION.

### Example

```typescript
import {
    KVApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new KVApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)
let storeId: string; //KV store id, as returned by KV_list (default to undefined)
let indexName: string; // (default to undefined)

const { status, data } = await apiInstance.kVIndexesShow(
    organization,
    project,
    storeId,
    indexName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organization** | [**string**] | Organization identifier | defaults to undefined|
| **project** | [**string**] | Project identifier | defaults to undefined|
| **storeId** | [**string**] | KV store id, as returned by KV_list | defaults to undefined|
| **indexName** | [**string**] |  | defaults to undefined|


### Return type

**V2KvIndex**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The index. |  -  |
|**400** | Invalid request: VALIDATION, LIMIT_EXCEEDED, CURSOR_INVALID, REQUIRES_FORMAT_2 and the route-specific 400 codes. |  -  |
|**403** | SCOPE_REQUIRED (the token does not list the scope) or PERMISSION_DENIED (the role does not have the permission). |  -  |
|**404** | KEY_NOT_FOUND, STORE_NOT_FOUND, LEDGER_NOT_FOUND, SUBJECT_NOT_FOUND, EXPORT_NOT_FOUND, VERIFICATION_NOT_FOUND, SHRED_NOT_FOUND, INDEX_NOT_FOUND or NOT_FOUND (no archive, tombstone or purge). |  -  |
|**429** | RATE_LIMITED (retryable): a rate limit is used up. The limits are the per-token limit (api-token, default 240 requests per minute per token and organisation) and, on some operations, the per-project KV limits (kv-admin 10, kv-erase 30, kv-verify 6 requests per minute). Wait for Retry-After seconds, then send the request again. See Rate limits in the API description. |  * Retry-After - Seconds to wait before the next request. <br>  * RateLimit-Limit - The request limit of the window (IETF draft). X-RateLimit-Limit carries the same value. <br>  * RateLimit-Remaining - Requests left in the window: 0 on a 429 (IETF draft). X-RateLimit-Remaining carries the same value. <br>  * RateLimit-Reset - Seconds until the window resets (IETF draft). X-RateLimit-Reset is the same moment as a Unix timestamp. <br>  |
|**500** | INTERNAL: the KV service failed. No detail is given. |  -  |
|**503** | STORE_MIGRATING (retryable, Retry-After) or UNAVAILABLE. UNAVAILABLE with retryable true (for example a new store whose table is still being created, with Retry-After 5) is safe to retry with backoff; honour Retry-After. With retryable false the outcome of a write is unknown: read before you write again. |  * Retry-After -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **kVItemsBatchGet**
> V2KvBatchGetResponse kVItemsBatchGet(v2KvBatchGetRequest)

Reads 1 to 100 keys. Works on format 1 and format 2 stores. items has one entry per requested key in input order: the entry, or null for a missing or expired key. A response over 4 MiB is 400 LIMIT_EXCEEDED. A ledger entry needs the ledger_read permission (and, for a token with a scope list, the kv:ledger:read scope; a legacy token without a scope list needs the permission only) (else 403 PERMISSION_DENIED for the whole request); personal fields read \"[PERSONAL]\" unless the role has ledger_reveal and reveal is true (logged as kv.ledger.reveal). Secret values are write-only through the API: a value stored as a secret (encrypted true) reads \"[ENCRYPTED]\"; read it in an edge function. A read: a lost connection is 503 UNAVAILABLE with retryable true.

### Example

```typescript
import {
    KVApi,
    Configuration,
    V2KvBatchGetRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new KVApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)
let storeId: string; //KV store id, as returned by KV_list (default to undefined)
let v2KvBatchGetRequest: V2KvBatchGetRequest; //
let reveal: boolean; //Ledger rows only: return personal fields in clear. Needs the ledger_reveal permission; each reveal is logged. Without it, personal fields are redacted. (optional) (default to false)

const { status, data } = await apiInstance.kVItemsBatchGet(
    organization,
    project,
    storeId,
    v2KvBatchGetRequest,
    reveal
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v2KvBatchGetRequest** | **V2KvBatchGetRequest**|  | |
| **organization** | [**string**] | Organization identifier | defaults to undefined|
| **project** | [**string**] | Project identifier | defaults to undefined|
| **storeId** | [**string**] | KV store id, as returned by KV_list | defaults to undefined|
| **reveal** | [**boolean**] | Ledger rows only: return personal fields in clear. Needs the ledger_reveal permission; each reveal is logged. Without it, personal fields are redacted. | (optional) defaults to false|


### Return type

**V2KvBatchGetResponse**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | One entry per key, in input order. |  -  |
|**400** | Invalid request: VALIDATION, LIMIT_EXCEEDED, CURSOR_INVALID, REQUIRES_FORMAT_2 and the route-specific 400 codes. |  -  |
|**403** | SCOPE_REQUIRED (the token does not list the scope) or PERMISSION_DENIED (the role does not have the permission). |  -  |
|**404** | STORE_NOT_FOUND: the store does not exist or is not in this project. |  -  |
|**409** | CONFLICT, UNIQUE_VIOLATION, UPGRADE_CONFLICT, EXPORT_IN_PROGRESS, the LEDGER_* conflicts and the archive purge conflicts STORE_NOT_DELETED, ARCHIVE_RETAINED, PURGE_IN_PROGRESS, PURGE_BLOCKED and PURGE_NOT_COMPLETE (not retryable); CONTENTION, INDEX_NOT_READY, LEDGER_NOT_READY and DIGEST_OWED (retryable). |  -  |
|**429** | RATE_LIMITED (retryable): a rate limit is used up. The limits are the per-token limit (api-token, default 240 requests per minute per token and organisation) and, on some operations, the per-project KV limits (kv-admin 10, kv-erase 30, kv-verify 6 requests per minute). Wait for Retry-After seconds, then send the request again. See Rate limits in the API description. |  * Retry-After - Seconds to wait before the next request. <br>  * RateLimit-Limit - The request limit of the window (IETF draft). X-RateLimit-Limit carries the same value. <br>  * RateLimit-Remaining - Requests left in the window: 0 on a 429 (IETF draft). X-RateLimit-Remaining carries the same value. <br>  * RateLimit-Reset - Seconds until the window resets (IETF draft). X-RateLimit-Reset is the same moment as a Unix timestamp. <br>  |
|**500** | INTERNAL: the KV service failed. No detail is given. |  -  |
|**503** | STORE_MIGRATING (retryable, Retry-After) or UNAVAILABLE. UNAVAILABLE with retryable true (for example a new store whose table is still being created, with Retry-After 5) is safe to retry with backoff; honour Retry-After. With retryable false the outcome of a write is unknown: read before you write again. |  * Retry-After -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **kVItemsCreate**
> KVItemsCreate200Response kVItemsCreate(v2StoreItemRequest)


### Example

```typescript
import {
    KVApi,
    Configuration,
    V2StoreItemRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new KVApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)
let storeId: string; // (default to undefined)
let v2StoreItemRequest: V2StoreItemRequest; //

const { status, data } = await apiInstance.kVItemsCreate(
    organization,
    project,
    storeId,
    v2StoreItemRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v2StoreItemRequest** | **V2StoreItemRequest**|  | |
| **organization** | [**string**] | Organization identifier | defaults to undefined|
| **project** | [**string**] | Project identifier | defaults to undefined|
| **storeId** | [**string**] |  | defaults to undefined|


### Return type

**KVItemsCreate200Response**

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
|**404** | STORE_NOT_FOUND: the store does not exist or is not in this project. |  -  |
|**403** | SCOPE_REQUIRED (the token does not list the scope) or PERMISSION_DENIED (the role does not have the permission). |  -  |
|**422** | Validation error. |  -  |
|**429** | RATE_LIMITED (retryable): a rate limit is used up. The limits are the per-token limit (api-token, default 240 requests per minute per token and organisation) and, on some operations, the per-project KV limits (kv-admin 10, kv-erase 30, kv-verify 6 requests per minute). Wait for Retry-After seconds, then send the request again. See Rate limits in the API description. |  * Retry-After - Seconds to wait before the next request. <br>  * RateLimit-Limit - The request limit of the window (IETF draft). X-RateLimit-Limit carries the same value. <br>  * RateLimit-Remaining - Requests left in the window: 0 on a 429 (IETF draft). X-RateLimit-Remaining carries the same value. <br>  * RateLimit-Reset - Seconds until the window resets (IETF draft). X-RateLimit-Reset is the same moment as a Unix timestamp. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **kVItemsDelete**
> KVItemsDelete200Response kVItemsDelete()


### Example

```typescript
import {
    KVApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new KVApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)
let storeId: string; // (default to undefined)
let key: string; // (default to undefined)

const { status, data } = await apiInstance.kVItemsDelete(
    organization,
    project,
    storeId,
    key
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organization** | [**string**] | Organization identifier | defaults to undefined|
| **project** | [**string**] | Project identifier | defaults to undefined|
| **storeId** | [**string**] |  | defaults to undefined|
| **key** | [**string**] |  | defaults to undefined|


### Return type

**KVItemsDelete200Response**

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
|**404** | STORE_NOT_FOUND: the store does not exist or is not in this project. |  -  |
|**403** | SCOPE_REQUIRED (the token does not list the scope) or PERMISSION_DENIED (the role does not have the permission). |  -  |
|**429** | RATE_LIMITED (retryable): a rate limit is used up. The limits are the per-token limit (api-token, default 240 requests per minute per token and organisation) and, on some operations, the per-project KV limits (kv-admin 10, kv-erase 30, kv-verify 6 requests per minute). Wait for Retry-After seconds, then send the request again. See Rate limits in the API description. |  * Retry-After - Seconds to wait before the next request. <br>  * RateLimit-Limit - The request limit of the window (IETF draft). X-RateLimit-Limit carries the same value. <br>  * RateLimit-Remaining - Requests left in the window: 0 on a 429 (IETF draft). X-RateLimit-Remaining carries the same value. <br>  * RateLimit-Reset - Seconds until the window resets (IETF draft). X-RateLimit-Reset is the same moment as a Unix timestamp. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **kVItemsIncrement**
> V2KvIncrementResponse kVItemsIncrement()

Adds amount (a nonzero safe integer, default 1) to an unencrypted integer value. A missing or expired key starts at 0. ttl (60 to 31,536,000 seconds) applies only when the key is created or reset after expiry. Not available in a collection with any index (400 VALIDATION) or a ledger collection (400 LEDGER_IMMUTABLE). Not idempotent: a lost connection is 503 UNAVAILABLE with retryable false; do not retry automatically.

### Example

```typescript
import {
    KVApi,
    Configuration,
    V2KvIncrementRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new KVApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)
let storeId: string; //KV store id, as returned by KV_list (default to undefined)
let key: string; //The key. It can contain \'/\'. (default to undefined)
let v2KvIncrementRequest: V2KvIncrementRequest; // (optional)

const { status, data } = await apiInstance.kVItemsIncrement(
    organization,
    project,
    storeId,
    key,
    v2KvIncrementRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v2KvIncrementRequest** | **V2KvIncrementRequest**|  | |
| **organization** | [**string**] | Organization identifier | defaults to undefined|
| **project** | [**string**] | Project identifier | defaults to undefined|
| **storeId** | [**string**] | KV store id, as returned by KV_list | defaults to undefined|
| **key** | [**string**] | The key. It can contain \&#39;/\&#39;. | defaults to undefined|


### Return type

**V2KvIncrementResponse**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The value after this increment. |  -  |
|**400** | Invalid request: VALIDATION, LIMIT_EXCEEDED, CURSOR_INVALID, REQUIRES_FORMAT_2 and the route-specific 400 codes. |  -  |
|**403** | SCOPE_REQUIRED (the token does not list the scope) or PERMISSION_DENIED (the role does not have the permission). |  -  |
|**404** | STORE_NOT_FOUND: the store does not exist or is not in this project. |  -  |
|**409** | CONFLICT, UNIQUE_VIOLATION, UPGRADE_CONFLICT, EXPORT_IN_PROGRESS, the LEDGER_* conflicts and the archive purge conflicts STORE_NOT_DELETED, ARCHIVE_RETAINED, PURGE_IN_PROGRESS, PURGE_BLOCKED and PURGE_NOT_COMPLETE (not retryable); CONTENTION, INDEX_NOT_READY, LEDGER_NOT_READY and DIGEST_OWED (retryable). |  -  |
|**429** | RATE_LIMITED (retryable): a rate limit is used up. The limits are the per-token limit (api-token, default 240 requests per minute per token and organisation) and, on some operations, the per-project KV limits (kv-admin 10, kv-erase 30, kv-verify 6 requests per minute). Wait for Retry-After seconds, then send the request again. See Rate limits in the API description. |  * Retry-After - Seconds to wait before the next request. <br>  * RateLimit-Limit - The request limit of the window (IETF draft). X-RateLimit-Limit carries the same value. <br>  * RateLimit-Remaining - Requests left in the window: 0 on a 429 (IETF draft). X-RateLimit-Remaining carries the same value. <br>  * RateLimit-Reset - Seconds until the window resets (IETF draft). X-RateLimit-Reset is the same moment as a Unix timestamp. <br>  |
|**500** | INTERNAL: the KV service failed. No detail is given. |  -  |
|**503** | STORE_MIGRATING (retryable, Retry-After) or UNAVAILABLE. UNAVAILABLE with retryable true (for example a new store whose table is still being created, with Retry-After 5) is safe to retry with backoff; honour Retry-After. With retryable false the outcome of a write is unknown: read before you write again. |  * Retry-After -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **kVItemsList**
> V2StoreItemsListResponse kVItemsList()

Ledger collections are left out (hidden_ledger_collections and notice say how many) when the role lacks the ledger_read permission, or when a token with a scope list lacks the kv:ledger:read scope. A legacy token without a scope list needs the permission only.

### Example

```typescript
import {
    KVApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new KVApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)
let storeId: string; // (default to undefined)
let cursor: string; //Cursor for pagination (optional) (default to undefined)
let limit: number; //Number of items to return (1 to 1000, default 10) (optional) (default to 10)
let search: string; //Search filter for keys (optional) (default to undefined)
let includeValues: boolean; //Include values in the response. Secret values will be redacted as \'[ENCRYPTED]\' for security. (optional) (default to false)

const { status, data } = await apiInstance.kVItemsList(
    organization,
    project,
    storeId,
    cursor,
    limit,
    search,
    includeValues
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organization** | [**string**] | Organization identifier | defaults to undefined|
| **project** | [**string**] | Project identifier | defaults to undefined|
| **storeId** | [**string**] |  | defaults to undefined|
| **cursor** | [**string**] | Cursor for pagination | (optional) defaults to undefined|
| **limit** | [**number**] | Number of items to return (1 to 1000, default 10) | (optional) defaults to 10|
| **search** | [**string**] | Search filter for keys | (optional) defaults to undefined|
| **includeValues** | [**boolean**] | Include values in the response. Secret values will be redacted as \&#39;[ENCRYPTED]\&#39; for security. | (optional) defaults to false|


### Return type

**V2StoreItemsListResponse**

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
|**404** | STORE_NOT_FOUND: the store does not exist or is not in this project. |  -  |
|**403** | SCOPE_REQUIRED (the token does not list the scope) or PERMISSION_DENIED (the role does not have the permission). |  -  |
|**429** | RATE_LIMITED (retryable): a rate limit is used up. The limits are the per-token limit (api-token, default 240 requests per minute per token and organisation) and, on some operations, the per-project KV limits (kv-admin 10, kv-erase 30, kv-verify 6 requests per minute). Wait for Retry-After seconds, then send the request again. See Rate limits in the API description. |  * Retry-After - Seconds to wait before the next request. <br>  * RateLimit-Limit - The request limit of the window (IETF draft). X-RateLimit-Limit carries the same value. <br>  * RateLimit-Remaining - Requests left in the window: 0 on a 429 (IETF draft). X-RateLimit-Remaining carries the same value. <br>  * RateLimit-Reset - Seconds until the window resets (IETF draft). X-RateLimit-Reset is the same moment as a Unix timestamp. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **kVItemsPatch**
> KVItemsCreate200Response kVItemsPatch(v2StoreItemUpdateRequest)


### Example

```typescript
import {
    KVApi,
    Configuration,
    V2StoreItemUpdateRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new KVApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)
let storeId: string; // (default to undefined)
let key: string; // (default to undefined)
let v2StoreItemUpdateRequest: V2StoreItemUpdateRequest; //

const { status, data } = await apiInstance.kVItemsPatch(
    organization,
    project,
    storeId,
    key,
    v2StoreItemUpdateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v2StoreItemUpdateRequest** | **V2StoreItemUpdateRequest**|  | |
| **organization** | [**string**] | Organization identifier | defaults to undefined|
| **project** | [**string**] | Project identifier | defaults to undefined|
| **storeId** | [**string**] |  | defaults to undefined|
| **key** | [**string**] |  | defaults to undefined|


### Return type

**KVItemsCreate200Response**

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
|**404** | STORE_NOT_FOUND: the store does not exist or is not in this project. |  -  |
|**403** | SCOPE_REQUIRED (the token does not list the scope) or PERMISSION_DENIED (the role does not have the permission). |  -  |
|**422** | Validation error. |  -  |
|**429** | RATE_LIMITED (retryable): a rate limit is used up. The limits are the per-token limit (api-token, default 240 requests per minute per token and organisation) and, on some operations, the per-project KV limits (kv-admin 10, kv-erase 30, kv-verify 6 requests per minute). Wait for Retry-After seconds, then send the request again. See Rate limits in the API description. |  * Retry-After - Seconds to wait before the next request. <br>  * RateLimit-Limit - The request limit of the window (IETF draft). X-RateLimit-Limit carries the same value. <br>  * RateLimit-Remaining - Requests left in the window: 0 on a 429 (IETF draft). X-RateLimit-Remaining carries the same value. <br>  * RateLimit-Reset - Seconds until the window resets (IETF draft). X-RateLimit-Reset is the same moment as a Unix timestamp. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **kVItemsPurge**
> KVItemsPurge200Response kVItemsPurge()

Deletes every item matching the filters. With no filters the whole store is cleared. A small purge finishes in the request and returns 200; a large one returns 202 with the counts so far and continues in the background. Idempotent.

### Example

```typescript
import {
    KVApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new KVApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)
let storeId: string; // (default to undefined)
let prefix: string; //Only delete keys that start with this string. (optional) (default to undefined)
let olderThan: string; //Only delete keys last updated before this instant. ISO 8601, or a duration with unit s, m, h or d. (optional) (default to undefined)

const { status, data } = await apiInstance.kVItemsPurge(
    organization,
    project,
    storeId,
    prefix,
    olderThan
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organization** | [**string**] | Organization identifier | defaults to undefined|
| **project** | [**string**] | Project identifier | defaults to undefined|
| **storeId** | [**string**] |  | defaults to undefined|
| **prefix** | [**string**] | Only delete keys that start with this string. | (optional) defaults to undefined|
| **olderThan** | [**string**] | Only delete keys last updated before this instant. ISO 8601, or a duration with unit s, m, h or d. | (optional) defaults to undefined|


### Return type

**KVItemsPurge200Response**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The purge finished. |  -  |
|**202** | The purge continues in the background. |  -  |
|**400** | The server could not understand the request due to invalid syntax. |  -  |
|**404** | STORE_NOT_FOUND: the store does not exist or is not in this project. |  -  |
|**403** | SCOPE_REQUIRED (the token does not list the scope) or PERMISSION_DENIED (the role does not have the permission). |  -  |
|**429** | RATE_LIMITED (retryable): a rate limit is used up. The limits are the per-token limit (api-token, default 240 requests per minute per token and organisation) and, on some operations, the per-project KV limits (kv-admin 10, kv-erase 30, kv-verify 6 requests per minute). Wait for Retry-After seconds, then send the request again. See Rate limits in the API description. |  * Retry-After - Seconds to wait before the next request. <br>  * RateLimit-Limit - The request limit of the window (IETF draft). X-RateLimit-Limit carries the same value. <br>  * RateLimit-Remaining - Requests left in the window: 0 on a 429 (IETF draft). X-RateLimit-Remaining carries the same value. <br>  * RateLimit-Reset - Seconds until the window resets (IETF draft). X-RateLimit-Reset is the same moment as a Unix timestamp. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **kVItemsShow**
> KVItemsShow200Response kVItemsShow()

Retrieves an item from the KV store. **Security Note:** If the item was stored as a secret (secret=true), the value will be redacted and returned as \'[ENCRYPTED]\' for security. Secrets should be accessed directly via the Quant Cloud platform KVStore abstraction.

### Example

```typescript
import {
    KVApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new KVApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)
let storeId: string; // (default to undefined)
let key: string; // (default to undefined)

const { status, data } = await apiInstance.kVItemsShow(
    organization,
    project,
    storeId,
    key
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organization** | [**string**] | Organization identifier | defaults to undefined|
| **project** | [**string**] | Project identifier | defaults to undefined|
| **storeId** | [**string**] |  | defaults to undefined|
| **key** | [**string**] |  | defaults to undefined|


### Return type

**KVItemsShow200Response**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The request has succeeded. |  -  |
|**404** | KEY_NOT_FOUND, STORE_NOT_FOUND, LEDGER_NOT_FOUND, SUBJECT_NOT_FOUND, EXPORT_NOT_FOUND, VERIFICATION_NOT_FOUND, SHRED_NOT_FOUND, INDEX_NOT_FOUND or NOT_FOUND (no archive, tombstone or purge). |  -  |
|**403** | SCOPE_REQUIRED (the token does not list the scope) or PERMISSION_DENIED (the role does not have the permission). |  -  |
|**429** | RATE_LIMITED (retryable): a rate limit is used up. The limits are the per-token limit (api-token, default 240 requests per minute per token and organisation) and, on some operations, the per-project KV limits (kv-admin 10, kv-erase 30, kv-verify 6 requests per minute). Wait for Retry-After seconds, then send the request again. See Rate limits in the API description. |  * Retry-After - Seconds to wait before the next request. <br>  * RateLimit-Limit - The request limit of the window (IETF draft). X-RateLimit-Limit carries the same value. <br>  * RateLimit-Remaining - Requests left in the window: 0 on a 429 (IETF draft). X-RateLimit-Remaining carries the same value. <br>  * RateLimit-Reset - Seconds until the window resets (IETF draft). X-RateLimit-Reset is the same moment as a Unix timestamp. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **kVItemsTransact**
> V2KvTransactResponse kVItemsTransact(v2KvTransactRequest)

Format 2 stores only. Runs 1 to 25 operations on different keys as one transaction: all or none. check: version. set: value, secret, ttl (60 to 31,536,000 s), ifAbsent, ifVersion. delete: ifVersion. increment: amount. Any other field fails VALIDATION. A failed condition is 409 CONFLICT with operation (its index) and reason. With idempotencyKey, a repeat of the same operations within 24 hours returns the first result with replayed true. A lost connection is 503 UNAVAILABLE: retryable is true only when the request has idempotencyKey, and then retry only with the same idempotencyKey; without it the outcome is unknown (retryable false).

### Example

```typescript
import {
    KVApi,
    Configuration,
    V2KvTransactRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new KVApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)
let storeId: string; //KV store id, as returned by KV_list (default to undefined)
let v2KvTransactRequest: V2KvTransactRequest; //

const { status, data } = await apiInstance.kVItemsTransact(
    organization,
    project,
    storeId,
    v2KvTransactRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v2KvTransactRequest** | **V2KvTransactRequest**|  | |
| **organization** | [**string**] | Organization identifier | defaults to undefined|
| **project** | [**string**] | Project identifier | defaults to undefined|
| **storeId** | [**string**] | KV store id, as returned by KV_list | defaults to undefined|


### Return type

**V2KvTransactResponse**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Applied (replayed true: applied by an earlier request with the same idempotencyKey). |  -  |
|**400** | Invalid request: VALIDATION, LIMIT_EXCEEDED, CURSOR_INVALID, REQUIRES_FORMAT_2 and the route-specific 400 codes. |  -  |
|**403** | SCOPE_REQUIRED (the token does not list the scope) or PERMISSION_DENIED (the role does not have the permission). |  -  |
|**404** | STORE_NOT_FOUND: the store does not exist or is not in this project. |  -  |
|**409** | CONFLICT, UNIQUE_VIOLATION, UPGRADE_CONFLICT, EXPORT_IN_PROGRESS, the LEDGER_* conflicts and the archive purge conflicts STORE_NOT_DELETED, ARCHIVE_RETAINED, PURGE_IN_PROGRESS, PURGE_BLOCKED and PURGE_NOT_COMPLETE (not retryable); CONTENTION, INDEX_NOT_READY, LEDGER_NOT_READY and DIGEST_OWED (retryable). |  -  |
|**429** | RATE_LIMITED (retryable): a rate limit is used up. The limits are the per-token limit (api-token, default 240 requests per minute per token and organisation) and, on some operations, the per-project KV limits (kv-admin 10, kv-erase 30, kv-verify 6 requests per minute). Wait for Retry-After seconds, then send the request again. See Rate limits in the API description. |  * Retry-After - Seconds to wait before the next request. <br>  * RateLimit-Limit - The request limit of the window (IETF draft). X-RateLimit-Limit carries the same value. <br>  * RateLimit-Remaining - Requests left in the window: 0 on a 429 (IETF draft). X-RateLimit-Remaining carries the same value. <br>  * RateLimit-Reset - Seconds until the window resets (IETF draft). X-RateLimit-Reset is the same moment as a Unix timestamp. <br>  |
|**500** | INTERNAL: the KV service failed. No detail is given. |  -  |
|**503** | STORE_MIGRATING (retryable, Retry-After) or UNAVAILABLE. UNAVAILABLE with retryable true (for example a new store whose table is still being created, with Retry-After 5) is safe to retry with backoff; honour Retry-After. With retryable false the outcome of a write is unknown: read before you write again. |  * Retry-After -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **kVItemsUpdate**
> KVItemsCreate200Response kVItemsUpdate(v2StoreItemUpdateRequest)


### Example

```typescript
import {
    KVApi,
    Configuration,
    V2StoreItemUpdateRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new KVApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)
let storeId: string; // (default to undefined)
let key: string; // (default to undefined)
let v2StoreItemUpdateRequest: V2StoreItemUpdateRequest; //

const { status, data } = await apiInstance.kVItemsUpdate(
    organization,
    project,
    storeId,
    key,
    v2StoreItemUpdateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v2StoreItemUpdateRequest** | **V2StoreItemUpdateRequest**|  | |
| **organization** | [**string**] | Organization identifier | defaults to undefined|
| **project** | [**string**] | Project identifier | defaults to undefined|
| **storeId** | [**string**] |  | defaults to undefined|
| **key** | [**string**] |  | defaults to undefined|


### Return type

**KVItemsCreate200Response**

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
|**404** | STORE_NOT_FOUND: the store does not exist or is not in this project. |  -  |
|**403** | SCOPE_REQUIRED (the token does not list the scope) or PERMISSION_DENIED (the role does not have the permission). |  -  |
|**422** | Validation error. |  -  |
|**429** | RATE_LIMITED (retryable): a rate limit is used up. The limits are the per-token limit (api-token, default 240 requests per minute per token and organisation) and, on some operations, the per-project KV limits (kv-admin 10, kv-erase 30, kv-verify 6 requests per minute). Wait for Retry-After seconds, then send the request again. See Rate limits in the API description. |  * Retry-After - Seconds to wait before the next request. <br>  * RateLimit-Limit - The request limit of the window (IETF draft). X-RateLimit-Limit carries the same value. <br>  * RateLimit-Remaining - Requests left in the window: 0 on a 429 (IETF draft). X-RateLimit-Remaining carries the same value. <br>  * RateLimit-Reset - Seconds until the window resets (IETF draft). X-RateLimit-Reset is the same moment as a Unix timestamp. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **kVKeysList**
> V2KvKeysPage kVKeysList()

Always cursor mode. limit is 1 to 1000 (default 25). A page can hold fewer than limit rows while has_more is true (4,000,000 byte page budget or the read budget; see page_end): follow next_cursor while has_more is true. Cursors are signed, valid 24 hours and bound to the store and the query. collection lists one collection (the key text before the last \':\'); collection= (empty) is the root collection. index with equals lists the members of a declared index (format 2). A ledger collection with since (inclusive) and until (exclusive) lists ledger entries by server time. prefix, pattern and where are scans, not indexes. Ledger rows: without the ledger_read permission, or with a token that has a scope list without kv:ledger:read, they are left out and hidden_ledger_collections and notice say how many collections were hidden; with it, personal fields read \"[PERSONAL]\". reveal=true (the role needs ledger_reveal) opens personal fields only in a ledger collection list and an index list; rows of a scan (prefix, pattern, where) stay sealed by the KV service, and a reveal that opens nothing is not logged. Each reveal that shows a field in clear is logged as kv.ledger.reveal. A cursor of a ledger collection list with values is bound to the reveal setting: change it and the cursor is 400 CURSOR_INVALID. Secret values are write-only through the API: a value stored as a secret (encrypted true) reads \"[ENCRYPTED]\"; read it in an edge function. A read: a lost connection is 503 UNAVAILABLE with retryable true.

### Example

```typescript
import {
    KVApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new KVApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)
let storeId: string; //KV store id, as returned by KV_list (default to undefined)
let collection: string; //One collection (the key text before the last \':\'). Empty: the root collection. Not with prefix, pattern or index. (optional) (default to undefined)
let prefix: string; //Literal key prefix (a scan). Not with pattern or collection. (optional) (default to undefined)
let pattern: string; //Wildcard pattern such as user_*, *_temp or *session* (a scan). (optional) (default to undefined)
let startsWith: string; //With collection: only ids that start with this text (no \':\'). Not with after or before. (optional) (default to undefined)
let after: string; //Exclusive lower bound: an id with collection, a JSON scalar with index. (optional) (default to undefined)
let before: string; //Exclusive upper bound: an id with collection, a JSON scalar with index. (optional) (default to undefined)
let reverse: boolean; //With collection or index: descending order. Format 2 only (else 400 REQUIRES_FORMAT_2). (optional) (default to false)
let since: string; //Ledger collection only. Epoch milliseconds or ISO 8601 with a zone. Inclusive. (optional) (default to undefined)
let until: string; //Ledger collection only. Epoch milliseconds or ISO 8601 with a zone. Exclusive; after since. (optional) (default to undefined)
let index: string; //List the members of this declared index (format 2). Not with collection, prefix, pattern or starts_with. (optional) (default to undefined)
let equals: string; //With index: a JSON object with exactly the index fields. A filter that names the subjectField of a ledger of the store is refused (400 VALIDATION): use KV_ledgers_subject_entries. (optional) (default to undefined)
let where: string; //A JSON object of 1 to 8 top-level equalities on plaintext object values (a filter, not an index). A filter that names the subjectField of a ledger of the store is refused (400 VALIDATION): use KV_ledgers_subject_entries. (optional) (default to undefined)
let type: 'all' | 'encrypted' | 'plaintext'; //Filter by encryption. (optional) (default to 'all')
let includeValues: boolean; //Return the values. Secret values read [ENCRYPTED] (write-only through the API). (optional) (default to false)
let subjectTag: string; //Ledger collections only: the entries of one subject token, as shown in personal=sealed reads. (optional) (default to undefined)
let limit: number; //The maximum number of items in the page (1-1000, default 25). A page can be shorter while has_more is true (byte or read budget; see page_end). (optional) (default to 25)
let cursor: string; //The next_cursor of the previous page. (optional) (default to undefined)
let reveal: boolean; //Ledger rows only: return personal fields in clear. Needs the ledger_reveal permission; each reveal is logged. Without it, personal fields are redacted. (optional) (default to false)

const { status, data } = await apiInstance.kVKeysList(
    organization,
    project,
    storeId,
    collection,
    prefix,
    pattern,
    startsWith,
    after,
    before,
    reverse,
    since,
    until,
    index,
    equals,
    where,
    type,
    includeValues,
    subjectTag,
    limit,
    cursor,
    reveal
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organization** | [**string**] | Organization identifier | defaults to undefined|
| **project** | [**string**] | Project identifier | defaults to undefined|
| **storeId** | [**string**] | KV store id, as returned by KV_list | defaults to undefined|
| **collection** | [**string**] | One collection (the key text before the last \&#39;:\&#39;). Empty: the root collection. Not with prefix, pattern or index. | (optional) defaults to undefined|
| **prefix** | [**string**] | Literal key prefix (a scan). Not with pattern or collection. | (optional) defaults to undefined|
| **pattern** | [**string**] | Wildcard pattern such as user_*, *_temp or *session* (a scan). | (optional) defaults to undefined|
| **startsWith** | [**string**] | With collection: only ids that start with this text (no \&#39;:\&#39;). Not with after or before. | (optional) defaults to undefined|
| **after** | [**string**] | Exclusive lower bound: an id with collection, a JSON scalar with index. | (optional) defaults to undefined|
| **before** | [**string**] | Exclusive upper bound: an id with collection, a JSON scalar with index. | (optional) defaults to undefined|
| **reverse** | [**boolean**] | With collection or index: descending order. Format 2 only (else 400 REQUIRES_FORMAT_2). | (optional) defaults to false|
| **since** | [**string**] | Ledger collection only. Epoch milliseconds or ISO 8601 with a zone. Inclusive. | (optional) defaults to undefined|
| **until** | [**string**] | Ledger collection only. Epoch milliseconds or ISO 8601 with a zone. Exclusive; after since. | (optional) defaults to undefined|
| **index** | [**string**] | List the members of this declared index (format 2). Not with collection, prefix, pattern or starts_with. | (optional) defaults to undefined|
| **equals** | [**string**] | With index: a JSON object with exactly the index fields. A filter that names the subjectField of a ledger of the store is refused (400 VALIDATION): use KV_ledgers_subject_entries. | (optional) defaults to undefined|
| **where** | [**string**] | A JSON object of 1 to 8 top-level equalities on plaintext object values (a filter, not an index). A filter that names the subjectField of a ledger of the store is refused (400 VALIDATION): use KV_ledgers_subject_entries. | (optional) defaults to undefined|
| **type** | [**&#39;all&#39; | &#39;encrypted&#39; | &#39;plaintext&#39;**]**Array<&#39;all&#39; &#124; &#39;encrypted&#39; &#124; &#39;plaintext&#39;>** | Filter by encryption. | (optional) defaults to 'all'|
| **includeValues** | [**boolean**] | Return the values. Secret values read [ENCRYPTED] (write-only through the API). | (optional) defaults to false|
| **subjectTag** | [**string**] | Ledger collections only: the entries of one subject token, as shown in personal&#x3D;sealed reads. | (optional) defaults to undefined|
| **limit** | [**number**] | The maximum number of items in the page (1-1000, default 25). A page can be shorter while has_more is true (byte or read budget; see page_end). | (optional) defaults to 25|
| **cursor** | [**string**] | The next_cursor of the previous page. | (optional) defaults to undefined|
| **reveal** | [**boolean**] | Ledger rows only: return personal fields in clear. Needs the ledger_reveal permission; each reveal is logged. Without it, personal fields are redacted. | (optional) defaults to false|


### Return type

**V2KvKeysPage**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | One page. |  * X-Quant-KV-Format - The store format. <br>  |
|**400** | Invalid request: VALIDATION, LIMIT_EXCEEDED, CURSOR_INVALID, REQUIRES_FORMAT_2 and the route-specific 400 codes. |  -  |
|**403** | SCOPE_REQUIRED (the token does not list the scope) or PERMISSION_DENIED (the role does not have the permission). |  -  |
|**404** | STORE_NOT_FOUND: the store does not exist or is not in this project. |  -  |
|**409** | CONFLICT, UNIQUE_VIOLATION, UPGRADE_CONFLICT, EXPORT_IN_PROGRESS, the LEDGER_* conflicts and the archive purge conflicts STORE_NOT_DELETED, ARCHIVE_RETAINED, PURGE_IN_PROGRESS, PURGE_BLOCKED and PURGE_NOT_COMPLETE (not retryable); CONTENTION, INDEX_NOT_READY, LEDGER_NOT_READY and DIGEST_OWED (retryable). |  -  |
|**429** | RATE_LIMITED (retryable): a rate limit is used up. The limits are the per-token limit (api-token, default 240 requests per minute per token and organisation) and, on some operations, the per-project KV limits (kv-admin 10, kv-erase 30, kv-verify 6 requests per minute). Wait for Retry-After seconds, then send the request again. See Rate limits in the API description. |  * Retry-After - Seconds to wait before the next request. <br>  * RateLimit-Limit - The request limit of the window (IETF draft). X-RateLimit-Limit carries the same value. <br>  * RateLimit-Remaining - Requests left in the window: 0 on a 429 (IETF draft). X-RateLimit-Remaining carries the same value. <br>  * RateLimit-Reset - Seconds until the window resets (IETF draft). X-RateLimit-Reset is the same moment as a Unix timestamp. <br>  |
|**500** | INTERNAL: the KV service failed. No detail is given. |  -  |
|**503** | STORE_MIGRATING (retryable, Retry-After) or UNAVAILABLE. UNAVAILABLE with retryable true (for example a new store whose table is still being created, with Retry-After 5) is safe to retry with backoff; honour Retry-After. With retryable false the outcome of a write is unknown: read before you write again. |  * Retry-After -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **kVLedgersAppend**
> V2KvLedgerReceipt kVLedgersAppend(v2KvLedgerAppendRequest)

Format 2 stores only. Appends one entry to the ledger declared for collection. The KV service picks the chain, assigns the id, time and sequence, hash-links the entry, seals the personal fields and records the source (type api, principal token:<token id>). The entry can never be changed or deleted (PUT, DELETE, increment and transact on a ledger collection answer 400 LEDGER_IMMUTABLE). Limits: value at most 350,000 bytes (400 LIMIT_EXCEEDED); collection at most 512 UTF-8 bytes. With idempotencyKey a retry within 24 hours returns the first receipt with replayed true. A lost connection (timeout 15 s) is 503 UNAVAILABLE: retryable true only when the request has idempotencyKey; without it the outcome is unknown, so list the collection (KV_keys_list with since) before you append again. A ledger whose writerPolicy excludes API writers (only listed Quant platform services can append) refuses the append with 500 INTERNAL (the KV service answers 403); such a ledger cannot be written through this API.

### Example

```typescript
import {
    KVApi,
    Configuration,
    V2KvLedgerAppendRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new KVApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)
let storeId: string; //KV store id, as returned by KV_list (default to undefined)
let v2KvLedgerAppendRequest: V2KvLedgerAppendRequest; //

const { status, data } = await apiInstance.kVLedgersAppend(
    organization,
    project,
    storeId,
    v2KvLedgerAppendRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v2KvLedgerAppendRequest** | **V2KvLedgerAppendRequest**|  | |
| **organization** | [**string**] | Organization identifier | defaults to undefined|
| **project** | [**string**] | Project identifier | defaults to undefined|
| **storeId** | [**string**] | KV store id, as returned by KV_list | defaults to undefined|


### Return type

**V2KvLedgerReceipt**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Appended, or (replayed true) the first receipt of the same idempotencyKey. |  -  |
|**400** | Invalid request: VALIDATION, LIMIT_EXCEEDED, CURSOR_INVALID, REQUIRES_FORMAT_2 and the route-specific 400 codes. |  -  |
|**403** | SCOPE_REQUIRED (the token does not list the scope) or PERMISSION_DENIED (the role does not have the permission). |  -  |
|**404** | KEY_NOT_FOUND, STORE_NOT_FOUND, LEDGER_NOT_FOUND, SUBJECT_NOT_FOUND, EXPORT_NOT_FOUND, VERIFICATION_NOT_FOUND, SHRED_NOT_FOUND, INDEX_NOT_FOUND or NOT_FOUND (no archive, tombstone or purge). |  -  |
|**409** | CONFLICT, UNIQUE_VIOLATION, UPGRADE_CONFLICT, EXPORT_IN_PROGRESS, the LEDGER_* conflicts and the archive purge conflicts STORE_NOT_DELETED, ARCHIVE_RETAINED, PURGE_IN_PROGRESS, PURGE_BLOCKED and PURGE_NOT_COMPLETE (not retryable); CONTENTION, INDEX_NOT_READY, LEDGER_NOT_READY and DIGEST_OWED (retryable). |  -  |
|**429** | RATE_LIMITED (retryable): a rate limit is used up. The limits are the per-token limit (api-token, default 240 requests per minute per token and organisation) and, on some operations, the per-project KV limits (kv-admin 10, kv-erase 30, kv-verify 6 requests per minute). Wait for Retry-After seconds, then send the request again. See Rate limits in the API description. |  * Retry-After - Seconds to wait before the next request. <br>  * RateLimit-Limit - The request limit of the window (IETF draft). X-RateLimit-Limit carries the same value. <br>  * RateLimit-Remaining - Requests left in the window: 0 on a 429 (IETF draft). X-RateLimit-Remaining carries the same value. <br>  * RateLimit-Reset - Seconds until the window resets (IETF draft). X-RateLimit-Reset is the same moment as a Unix timestamp. <br>  |
|**500** | INTERNAL: the KV service failed. No detail is given. |  -  |
|**503** | STORE_MIGRATING (retryable, Retry-After) or UNAVAILABLE. UNAVAILABLE with retryable true (for example a new store whose table is still being created, with Retry-After 5) is safe to retry with backoff; honour Retry-After. With retryable false the outcome of a write is unknown: read before you write again. |  * Retry-After -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **kVLedgersArchive**
> V2KvLedgerArchive kVLedgersArchive()

Presigned download URLs (each valid for up to 3600 seconds; call again for fresh URLs) for up to 100 archive objects per page. The first page also lists the store\'s digests with their .sig files and the anchor files (.tsr, .anchor.json). Pass next_cursor as cursor for more objects; when digestsTruncated is true (more than 2,000 digest files), pass next_digest_cursor as digest_cursor for more digests. Send cursor or digest_cursor, not both. Download every file under its key path, then run the offline verifier: node verify.mjs --dir ./archive --store <org>/<store> --public-key key.pem. Every key is under the store\'s prefixes ledgers/<org>/<store>/<ledger>/ and digests/<org>/<store>/; the portal drops any other link.

### Example

```typescript
import {
    KVApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new KVApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)
let storeId: string; //KV store id, as returned by KV_list (default to undefined)
let ledgerName: string; // (default to undefined)
let cursor: string; //The next_cursor of the previous page of objects. (optional) (default to undefined)
let digestCursor: string; //The next_digest_cursor of the previous digest page. (optional) (default to undefined)

const { status, data } = await apiInstance.kVLedgersArchive(
    organization,
    project,
    storeId,
    ledgerName,
    cursor,
    digestCursor
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organization** | [**string**] | Organization identifier | defaults to undefined|
| **project** | [**string**] | Project identifier | defaults to undefined|
| **storeId** | [**string**] | KV store id, as returned by KV_list | defaults to undefined|
| **ledgerName** | [**string**] |  | defaults to undefined|
| **cursor** | [**string**] | The next_cursor of the previous page of objects. | (optional) defaults to undefined|
| **digestCursor** | [**string**] | The next_digest_cursor of the previous digest page. | (optional) defaults to undefined|


### Return type

**V2KvLedgerArchive**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | One page of download links. |  -  |
|**400** | Invalid request: VALIDATION, LIMIT_EXCEEDED, CURSOR_INVALID, REQUIRES_FORMAT_2 and the route-specific 400 codes. |  -  |
|**403** | SCOPE_REQUIRED (the token does not list the scope) or PERMISSION_DENIED (the role does not have the permission). |  -  |
|**404** | KEY_NOT_FOUND, STORE_NOT_FOUND, LEDGER_NOT_FOUND, SUBJECT_NOT_FOUND, EXPORT_NOT_FOUND, VERIFICATION_NOT_FOUND, SHRED_NOT_FOUND, INDEX_NOT_FOUND or NOT_FOUND (no archive, tombstone or purge). |  -  |
|**429** | RATE_LIMITED (retryable): a rate limit is used up. The limits are the per-token limit (api-token, default 240 requests per minute per token and organisation) and, on some operations, the per-project KV limits (kv-admin 10, kv-erase 30, kv-verify 6 requests per minute). Wait for Retry-After seconds, then send the request again. See Rate limits in the API description. |  * Retry-After - Seconds to wait before the next request. <br>  * RateLimit-Limit - The request limit of the window (IETF draft). X-RateLimit-Limit carries the same value. <br>  * RateLimit-Remaining - Requests left in the window: 0 on a 429 (IETF draft). X-RateLimit-Remaining carries the same value. <br>  * RateLimit-Reset - Seconds until the window resets (IETF draft). X-RateLimit-Reset is the same moment as a Unix timestamp. <br>  |
|**500** | INTERNAL: the KV service failed. No detail is given. |  -  |
|**503** | STORE_MIGRATING (retryable, Retry-After) or UNAVAILABLE. UNAVAILABLE with retryable true (for example a new store whose table is still being created, with Retry-After 5) is safe to retry with backoff; honour Retry-After. With retryable false the outcome of a write is unknown: read before you write again. |  * Retry-After -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **kVLedgersCreate**
> V2KvLedger kVLedgersCreate(v2KvLedgerAdminDeclareRequest)

Declares an append-only, hash-chained ledger on a collection (or a pattern where * is one whole segment) of a format 2 store. The collection must be empty: no keys and no ledger entries. The ledger is PENDING for 75 seconds (appends answer 409 LEDGER_NOT_READY until activeAfter); then the emptiness check runs again and the ledger becomes ACTIVE, or FAILED when a key was written in that window. Declaring the name of a FAILED ledger replaces it. The answer is 202 with the ledger (state PENDING): the KV service accepts the declaration and finishes it after the wait. A store has at most 20 ledgers (400 LIMIT_EXCEEDED). LEDGER_SUBJECT_REQUIRED has a fixed message. name, collection, personalFields, subjectField, subjectMode, subjectCase, anchor and writerPolicy can never change; chains, retentionDays and lockMode can only go up (KV_ledgers_update). A ledger cannot be dropped before its archive retention ends.\\n\\nNeeds a token with the explicit kv:ledger:admin scope (full_access and tokens without a scope list cannot use it) and the ledger_admin permission. Rate limit: 10 requests per minute per project, shared by every kv-admin operation (index create, delete and resume; upgrade; export create and resume; ledger declare, raise and drop). Over the limit the answer is 429 RATE_LIMITED with a Retry-After header: clients (for example Terraform) must wait Retry-After seconds, then send the request again. Audited (the definition fields and definitionHash, never a value). A lost connection is 503 UNAVAILABLE with retryable false: read the ledger (KV_ledgers_show) before you send it again.

### Example

```typescript
import {
    KVApi,
    Configuration,
    V2KvLedgerAdminDeclareRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new KVApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)
let storeId: string; //KV store id, as returned by KV_list (default to undefined)
let v2KvLedgerAdminDeclareRequest: V2KvLedgerAdminDeclareRequest; //

const { status, data } = await apiInstance.kVLedgersCreate(
    organization,
    project,
    storeId,
    v2KvLedgerAdminDeclareRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v2KvLedgerAdminDeclareRequest** | **V2KvLedgerAdminDeclareRequest**|  | |
| **organization** | [**string**] | Organization identifier | defaults to undefined|
| **project** | [**string**] | Project identifier | defaults to undefined|
| **storeId** | [**string**] | KV store id, as returned by KV_list | defaults to undefined|


### Return type

**V2KvLedger**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**202** | Accepted: the ledger is declared and PENDING until activeAfter, then ACTIVE (or FAILED). Read it with KV_ledgers_show. |  * X-Quant-KV-Format - The store format. <br>  |
|**400** | Invalid request: VALIDATION, LIMIT_EXCEEDED, CURSOR_INVALID, REQUIRES_FORMAT_2 and the route-specific 400 codes. |  -  |
|**403** | SCOPE_REQUIRED (the token does not list the scope) or PERMISSION_DENIED (the role does not have the permission). |  -  |
|**404** | STORE_NOT_FOUND: the store does not exist or is not in this project. |  -  |
|**409** | CONFLICT, UNIQUE_VIOLATION, UPGRADE_CONFLICT, EXPORT_IN_PROGRESS, the LEDGER_* conflicts and the archive purge conflicts STORE_NOT_DELETED, ARCHIVE_RETAINED, PURGE_IN_PROGRESS, PURGE_BLOCKED and PURGE_NOT_COMPLETE (not retryable); CONTENTION, INDEX_NOT_READY, LEDGER_NOT_READY and DIGEST_OWED (retryable). |  -  |
|**429** | RATE_LIMITED (retryable): a rate limit is used up. The limits are the per-token limit (api-token, default 240 requests per minute per token and organisation) and, on some operations, the per-project KV limits (kv-admin 10, kv-erase 30, kv-verify 6 requests per minute). Wait for Retry-After seconds, then send the request again. See Rate limits in the API description. |  * Retry-After - Seconds to wait before the next request. <br>  * RateLimit-Limit - The request limit of the window (IETF draft). X-RateLimit-Limit carries the same value. <br>  * RateLimit-Remaining - Requests left in the window: 0 on a 429 (IETF draft). X-RateLimit-Remaining carries the same value. <br>  * RateLimit-Reset - Seconds until the window resets (IETF draft). X-RateLimit-Reset is the same moment as a Unix timestamp. <br>  |
|**500** | INTERNAL: the KV service failed. No detail is given. |  -  |
|**503** | STORE_MIGRATING (retryable, Retry-After) or UNAVAILABLE. UNAVAILABLE with retryable true (for example a new store whose table is still being created, with Retry-After 5) is safe to retry with backoff; honour Retry-After. With retryable false the outcome of a write is unknown: read before you write again. |  * Retry-After -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **kVLedgersDelete**
> V2KvLedger kVLedgersDelete()

A PENDING or FAILED ledger is removed (the answer shows it as DROPPED). An ACTIVE ledger becomes DROPPED only when every shard is fully archived and the archive retention has ended; the definition is kept, so the entries stay readable and immutable. Otherwise the answer is 409 LEDGER_RETAINED with retainUntil (the retention has not ended), with reason unarchived plus collection and shard (entries are not archived yet), or with reason retention_unknown (the retention date is not recorded yet). Dropping a DROPPED ledger returns it unchanged. The drop is idempotent: after a lost connection (503 UNAVAILABLE, retryable true) or a gateway error, send it again until it answers 200.\\n\\nNeeds a token with the explicit kv:ledger:admin scope (full_access and tokens without a scope list cannot use it) and the ledger_admin permission. Rate limit: 10 requests per minute per project, shared by every kv-admin operation (index create, delete and resume; upgrade; export create and resume; ledger declare, raise and drop). Over the limit the answer is 429 RATE_LIMITED with a Retry-After header: clients (for example Terraform) must wait Retry-After seconds, then send the request again. Audited.

### Example

```typescript
import {
    KVApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new KVApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)
let storeId: string; //KV store id, as returned by KV_list (default to undefined)
let ledgerName: string; // (default to undefined)

const { status, data } = await apiInstance.kVLedgersDelete(
    organization,
    project,
    storeId,
    ledgerName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organization** | [**string**] | Organization identifier | defaults to undefined|
| **project** | [**string**] | Project identifier | defaults to undefined|
| **storeId** | [**string**] | KV store id, as returned by KV_list | defaults to undefined|
| **ledgerName** | [**string**] |  | defaults to undefined|


### Return type

**V2KvLedger**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The dropped ledger (state DROPPED). |  -  |
|**400** | Invalid request: VALIDATION, LIMIT_EXCEEDED, CURSOR_INVALID, REQUIRES_FORMAT_2 and the route-specific 400 codes. |  -  |
|**403** | SCOPE_REQUIRED (the token does not list the scope) or PERMISSION_DENIED (the role does not have the permission). |  -  |
|**404** | KEY_NOT_FOUND, STORE_NOT_FOUND, LEDGER_NOT_FOUND, SUBJECT_NOT_FOUND, EXPORT_NOT_FOUND, VERIFICATION_NOT_FOUND, SHRED_NOT_FOUND, INDEX_NOT_FOUND or NOT_FOUND (no archive, tombstone or purge). |  -  |
|**409** | LEDGER_RETAINED (retainUntil, or reason unarchived with collection and shard, or reason retention_unknown), UPGRADE_CONFLICT, or CONTENTION (retryable). |  -  |
|**429** | RATE_LIMITED (retryable): a rate limit is used up. The limits are the per-token limit (api-token, default 240 requests per minute per token and organisation) and, on some operations, the per-project KV limits (kv-admin 10, kv-erase 30, kv-verify 6 requests per minute). Wait for Retry-After seconds, then send the request again. See Rate limits in the API description. |  * Retry-After - Seconds to wait before the next request. <br>  * RateLimit-Limit - The request limit of the window (IETF draft). X-RateLimit-Limit carries the same value. <br>  * RateLimit-Remaining - Requests left in the window: 0 on a 429 (IETF draft). X-RateLimit-Remaining carries the same value. <br>  * RateLimit-Reset - Seconds until the window resets (IETF draft). X-RateLimit-Reset is the same moment as a Unix timestamp. <br>  |
|**500** | INTERNAL: the KV service failed. No detail is given. |  -  |
|**503** | STORE_MIGRATING (retryable, Retry-After) or UNAVAILABLE. UNAVAILABLE with retryable true (for example a new store whose table is still being created, with Retry-After 5) is safe to retry with backoff; honour Retry-After. With retryable false the outcome of a write is unknown: read before you write again. |  * Retry-After -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **kVLedgersList**
> V2KvLedgerList kVLedgersList()

Every ledger (PENDING, ACTIVE, FAILED and DROPPED) with its definition and a summary (archive lag, broken shards, retention end, anchor failure, last verify). Empty for a format 1 store. A store has at most 20 ledgers, so there is no paging.

### Example

```typescript
import {
    KVApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new KVApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)
let storeId: string; //KV store id, as returned by KV_list (default to undefined)

const { status, data } = await apiInstance.kVLedgersList(
    organization,
    project,
    storeId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organization** | [**string**] | Organization identifier | defaults to undefined|
| **project** | [**string**] | Project identifier | defaults to undefined|
| **storeId** | [**string**] | KV store id, as returned by KV_list | defaults to undefined|


### Return type

**V2KvLedgerList**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The ledgers. |  -  |
|**403** | SCOPE_REQUIRED (the token does not list the scope) or PERMISSION_DENIED (the role does not have the permission). |  -  |
|**404** | STORE_NOT_FOUND: the store does not exist or is not in this project. |  -  |
|**429** | RATE_LIMITED (retryable): a rate limit is used up. The limits are the per-token limit (api-token, default 240 requests per minute per token and organisation) and, on some operations, the per-project KV limits (kv-admin 10, kv-erase 30, kv-verify 6 requests per minute). Wait for Retry-After seconds, then send the request again. See Rate limits in the API description. |  * Retry-After - Seconds to wait before the next request. <br>  * RateLimit-Limit - The request limit of the window (IETF draft). X-RateLimit-Limit carries the same value. <br>  * RateLimit-Remaining - Requests left in the window: 0 on a 429 (IETF draft). X-RateLimit-Remaining carries the same value. <br>  * RateLimit-Reset - Seconds until the window resets (IETF draft). X-RateLimit-Reset is the same moment as a Unix timestamp. <br>  |
|**500** | INTERNAL: the KV service failed. No detail is given. |  -  |
|**503** | STORE_MIGRATING (retryable, Retry-After) or UNAVAILABLE. UNAVAILABLE with retryable true (for example a new store whose table is still being created, with Retry-After 5) is safe to retry with backoff; honour Retry-After. With retryable false the outcome of a write is unknown: read before you write again. |  * Retry-After -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **kVLedgersProof**
> V2KvLedgerProof kVLedgersProof()

status pending until the entry is archived and the digest that covers it is signed (about 10 minutes). status archived: the stored entry (personal fields stay sealed), its hash, the Merkle audit path to the archive object root, the signed digest and its signature. The body is the exact bytes of the KV service (application/json). When the live entry differs from its archived copy the answer is 503 UNAVAILABLE with retryable false: run KV_ledgers_verify.

### Example

```typescript
import {
    KVApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new KVApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)
let storeId: string; //KV store id, as returned by KV_list (default to undefined)
let ledgerName: string; // (default to undefined)
let key: string; //The key of a ledger entry (collection:id), as in the append receipt. (default to undefined)

const { status, data } = await apiInstance.kVLedgersProof(
    organization,
    project,
    storeId,
    ledgerName,
    key
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organization** | [**string**] | Organization identifier | defaults to undefined|
| **project** | [**string**] | Project identifier | defaults to undefined|
| **storeId** | [**string**] | KV store id, as returned by KV_list | defaults to undefined|
| **ledgerName** | [**string**] |  | defaults to undefined|
| **key** | [**string**] | The key of a ledger entry (collection:id), as in the append receipt. | defaults to undefined|


### Return type

**V2KvLedgerProof**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The proof, or pending. |  -  |
|**400** | Invalid request: VALIDATION, LIMIT_EXCEEDED, CURSOR_INVALID, REQUIRES_FORMAT_2 and the route-specific 400 codes. |  -  |
|**403** | SCOPE_REQUIRED (the token does not list the scope) or PERMISSION_DENIED (the role does not have the permission). |  -  |
|**404** | KEY_NOT_FOUND, STORE_NOT_FOUND, LEDGER_NOT_FOUND, SUBJECT_NOT_FOUND, EXPORT_NOT_FOUND, VERIFICATION_NOT_FOUND, SHRED_NOT_FOUND, INDEX_NOT_FOUND or NOT_FOUND (no archive, tombstone or purge). |  -  |
|**429** | RATE_LIMITED (retryable): a rate limit is used up. The limits are the per-token limit (api-token, default 240 requests per minute per token and organisation) and, on some operations, the per-project KV limits (kv-admin 10, kv-erase 30, kv-verify 6 requests per minute). Wait for Retry-After seconds, then send the request again. See Rate limits in the API description. |  * Retry-After - Seconds to wait before the next request. <br>  * RateLimit-Limit - The request limit of the window (IETF draft). X-RateLimit-Limit carries the same value. <br>  * RateLimit-Remaining - Requests left in the window: 0 on a 429 (IETF draft). X-RateLimit-Remaining carries the same value. <br>  * RateLimit-Reset - Seconds until the window resets (IETF draft). X-RateLimit-Reset is the same moment as a Unix timestamp. <br>  |
|**500** | INTERNAL: the KV service failed. No detail is given. |  -  |
|**503** | STORE_MIGRATING (retryable, Retry-After) or UNAVAILABLE. UNAVAILABLE with retryable true (for example a new store whose table is still being created, with Retry-After 5) is safe to retry with backoff; honour Retry-After. With retryable false the outcome of a write is unknown: read before you write again. |  * Retry-After -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **kVLedgersPublicKey**
> V2KvLedgerPublicKey kVLedgersPublicKey()

The public half of the KMS key (ECDSA P-256, SHA-256) that signs the digests, verification reports and shred receipts. The response is application/json; publicKeyPem is the PEM text: save it as key.pem for the offline verifier (node verify.mjs --dir ./archive --store <org>/<store> --public-key key.pem).

### Example

```typescript
import {
    KVApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new KVApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)
let storeId: string; //KV store id, as returned by KV_list (default to undefined)

const { status, data } = await apiInstance.kVLedgersPublicKey(
    organization,
    project,
    storeId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organization** | [**string**] | Organization identifier | defaults to undefined|
| **project** | [**string**] | Project identifier | defaults to undefined|
| **storeId** | [**string**] | KV store id, as returned by KV_list | defaults to undefined|


### Return type

**V2KvLedgerPublicKey**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The key (application/json; the PEM is in publicKeyPem). |  -  |
|**403** | SCOPE_REQUIRED (the token does not list the scope) or PERMISSION_DENIED (the role does not have the permission). |  -  |
|**404** | STORE_NOT_FOUND: the store does not exist or is not in this project. |  -  |
|**429** | RATE_LIMITED (retryable): a rate limit is used up. The limits are the per-token limit (api-token, default 240 requests per minute per token and organisation) and, on some operations, the per-project KV limits (kv-admin 10, kv-erase 30, kv-verify 6 requests per minute). Wait for Retry-After seconds, then send the request again. See Rate limits in the API description. |  * Retry-After - Seconds to wait before the next request. <br>  * RateLimit-Limit - The request limit of the window (IETF draft). X-RateLimit-Limit carries the same value. <br>  * RateLimit-Remaining - Requests left in the window: 0 on a 429 (IETF draft). X-RateLimit-Remaining carries the same value. <br>  * RateLimit-Reset - Seconds until the window resets (IETF draft). X-RateLimit-Reset is the same moment as a Unix timestamp. <br>  |
|**500** | INTERNAL: the KV service failed. No detail is given. |  -  |
|**503** | STORE_MIGRATING (retryable, Retry-After) or UNAVAILABLE. UNAVAILABLE with retryable true (for example a new store whose table is still being created, with Retry-After 5) is safe to retry with backoff; honour Retry-After. With retryable false the outcome of a write is unknown: read before you write again. |  * Retry-After -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **kVLedgersShow**
> V2KvLedgerDetail kVLedgersShow()

The definition, plus retainUntil (an ACTIVE ledger can be dropped after it), lastDigestAt and lastVerify (the latest complete verify result, with the id of its signed report). The chain instances are on KV_ledgers_status.

### Example

```typescript
import {
    KVApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new KVApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)
let storeId: string; //KV store id, as returned by KV_list (default to undefined)
let ledgerName: string; // (default to undefined)

const { status, data } = await apiInstance.kVLedgersShow(
    organization,
    project,
    storeId,
    ledgerName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organization** | [**string**] | Organization identifier | defaults to undefined|
| **project** | [**string**] | Project identifier | defaults to undefined|
| **storeId** | [**string**] | KV store id, as returned by KV_list | defaults to undefined|
| **ledgerName** | [**string**] |  | defaults to undefined|


### Return type

**V2KvLedgerDetail**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The ledger. |  -  |
|**400** | Invalid request: VALIDATION, LIMIT_EXCEEDED, CURSOR_INVALID, REQUIRES_FORMAT_2 and the route-specific 400 codes. |  -  |
|**403** | SCOPE_REQUIRED (the token does not list the scope) or PERMISSION_DENIED (the role does not have the permission). |  -  |
|**404** | KEY_NOT_FOUND, STORE_NOT_FOUND, LEDGER_NOT_FOUND, SUBJECT_NOT_FOUND, EXPORT_NOT_FOUND, VERIFICATION_NOT_FOUND, SHRED_NOT_FOUND, INDEX_NOT_FOUND or NOT_FOUND (no archive, tombstone or purge). |  -  |
|**429** | RATE_LIMITED (retryable): a rate limit is used up. The limits are the per-token limit (api-token, default 240 requests per minute per token and organisation) and, on some operations, the per-project KV limits (kv-admin 10, kv-erase 30, kv-verify 6 requests per minute). Wait for Retry-After seconds, then send the request again. See Rate limits in the API description. |  * Retry-After - Seconds to wait before the next request. <br>  * RateLimit-Limit - The request limit of the window (IETF draft). X-RateLimit-Limit carries the same value. <br>  * RateLimit-Remaining - Requests left in the window: 0 on a 429 (IETF draft). X-RateLimit-Remaining carries the same value. <br>  * RateLimit-Reset - Seconds until the window resets (IETF draft). X-RateLimit-Reset is the same moment as a Unix timestamp. <br>  |
|**500** | INTERNAL: the KV service failed. No detail is given. |  -  |
|**503** | STORE_MIGRATING (retryable, Retry-After) or UNAVAILABLE. UNAVAILABLE with retryable true (for example a new store whose table is still being created, with Retry-After 5) is safe to retry with backoff; honour Retry-After. With retryable false the outcome of a write is unknown: read before you write again. |  * Retry-After -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **kVLedgersShred**
> V2KvLedgerErasureShredResult kVLedgersShred(v2KvLedgerErasureShredRequest)

Crypto-shreds the personal fields of one data subject: appends a shred entry to every collection of the ledger that holds the subject, then destroys the subject key. The entries stay on the chain; their personal fields can never be decrypted again. After fullyErasedAfter (shreddedAt + 35 days) no backup of the key remains. A 200 writes one erasure record (KV_ledgers_shreds_list) with a signed receipt (KV_ledgers_shreds_receipt); the answer has shredId, subjectRef and the receipt.\\n\\n202 in_progress: the time budget of this call ended before every collection had its shred entry. Send the same request again until it answers 200; no entry is written twice. The shred is safe to repeat: a repeat after a 200 answers 200 with alreadyShredded true, and a lost connection is 503 UNAVAILABLE with retryable true. 409 CONTENTION and 503 UNAVAILABLE are retryable: send the same request again.\\n\\nThe subject id is in the body, so it stays out of request paths and access logs; the portal audit keeps only the subjectRef of the answer (and the HMAC of requestedBy). subjectId: a string or a safe integer; the server canonicalises it (trim, NFC, the ledger\'s case rule) and refuses an invalid id with VALIDATION. A SUBJECT_NOT_FOUND error has a fixed message that never names the subject. reason, authority and requestedBy: 1-1000 characters each, not only spaces; they are stored in the shred entries and the receipt.\\n\\nNeeds a token with the explicit kv:ledger:erase scope (full_access and tokens without a scope list cannot use it) and the ledger_erase permission. Rate limit: 30 requests per minute per project (kv-erase). Timeout 60 seconds. Audited.

### Example

```typescript
import {
    KVApi,
    Configuration,
    V2KvLedgerErasureShredRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new KVApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)
let storeId: string; //KV store id, as returned by KV_list (default to undefined)
let ledgerName: string; // (default to undefined)
let v2KvLedgerErasureShredRequest: V2KvLedgerErasureShredRequest; //

const { status, data } = await apiInstance.kVLedgersShred(
    organization,
    project,
    storeId,
    ledgerName,
    v2KvLedgerErasureShredRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v2KvLedgerErasureShredRequest** | **V2KvLedgerErasureShredRequest**|  | |
| **organization** | [**string**] | Organization identifier | defaults to undefined|
| **project** | [**string**] | Project identifier | defaults to undefined|
| **storeId** | [**string**] | KV store id, as returned by KV_list | defaults to undefined|
| **ledgerName** | [**string**] |  | defaults to undefined|


### Return type

**V2KvLedgerErasureShredResult**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The subject is shredded (or was already shredded). |  -  |
|**202** | In progress: send the same request again until it answers 200. |  -  |
|**400** | Invalid request: VALIDATION, LIMIT_EXCEEDED, CURSOR_INVALID, REQUIRES_FORMAT_2 and the route-specific 400 codes. |  -  |
|**403** | SCOPE_REQUIRED (the token does not list the scope) or PERMISSION_DENIED (the role does not have the permission). |  -  |
|**404** | KEY_NOT_FOUND, STORE_NOT_FOUND, LEDGER_NOT_FOUND, SUBJECT_NOT_FOUND, EXPORT_NOT_FOUND, VERIFICATION_NOT_FOUND, SHRED_NOT_FOUND, INDEX_NOT_FOUND or NOT_FOUND (no archive, tombstone or purge). |  -  |
|**409** | CONFLICT, UNIQUE_VIOLATION, UPGRADE_CONFLICT, EXPORT_IN_PROGRESS, the LEDGER_* conflicts and the archive purge conflicts STORE_NOT_DELETED, ARCHIVE_RETAINED, PURGE_IN_PROGRESS, PURGE_BLOCKED and PURGE_NOT_COMPLETE (not retryable); CONTENTION, INDEX_NOT_READY, LEDGER_NOT_READY and DIGEST_OWED (retryable). |  -  |
|**429** | RATE_LIMITED (retryable): a rate limit is used up. The limits are the per-token limit (api-token, default 240 requests per minute per token and organisation) and, on some operations, the per-project KV limits (kv-admin 10, kv-erase 30, kv-verify 6 requests per minute). Wait for Retry-After seconds, then send the request again. See Rate limits in the API description. |  * Retry-After - Seconds to wait before the next request. <br>  * RateLimit-Limit - The request limit of the window (IETF draft). X-RateLimit-Limit carries the same value. <br>  * RateLimit-Remaining - Requests left in the window: 0 on a 429 (IETF draft). X-RateLimit-Remaining carries the same value. <br>  * RateLimit-Reset - Seconds until the window resets (IETF draft). X-RateLimit-Reset is the same moment as a Unix timestamp. <br>  |
|**500** | INTERNAL: the KV service failed. No detail is given. |  -  |
|**503** | STORE_MIGRATING (retryable, Retry-After) or UNAVAILABLE. UNAVAILABLE with retryable true (for example a new store whose table is still being created, with Retry-After 5) is safe to retry with backoff; honour Retry-After. With retryable false the outcome of a write is unknown: read before you write again. |  * Retry-After -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **kVLedgersShredsEntries**
> V2KvLedgerErasureShredEntriesPage kVLedgersShredsEntries()

The shred entries of the erasure record, sorted by key, in pages: pass next_cursor back as cursor (the cursor is bound to the shred). The entries of all pages together, in order, hash to the receipt\'s entriesSha256 (SHA-256 of their JCS), so a receipt without the list can be checked: kv-ledger-verify verify-signed --entries <file>.\\n\\nNeeds kv:ledger:read and the ledger_read permission.

### Example

```typescript
import {
    KVApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new KVApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)
let storeId: string; //KV store id, as returned by KV_list (default to undefined)
let ledgerName: string; // (default to undefined)
let shredId: string; //The shredId of a shred answer, or the id of an erasure record (KV_ledgers_shreds_list). A ULID. (default to undefined)
let cursor: string; //The next_cursor of the previous page. (optional) (default to undefined)

const { status, data } = await apiInstance.kVLedgersShredsEntries(
    organization,
    project,
    storeId,
    ledgerName,
    shredId,
    cursor
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organization** | [**string**] | Organization identifier | defaults to undefined|
| **project** | [**string**] | Project identifier | defaults to undefined|
| **storeId** | [**string**] | KV store id, as returned by KV_list | defaults to undefined|
| **ledgerName** | [**string**] |  | defaults to undefined|
| **shredId** | [**string**] | The shredId of a shred answer, or the id of an erasure record (KV_ledgers_shreds_list). A ULID. | defaults to undefined|
| **cursor** | [**string**] | The next_cursor of the previous page. | (optional) defaults to undefined|


### Return type

**V2KvLedgerErasureShredEntriesPage**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | One page of shred entries. |  -  |
|**400** | Invalid request: VALIDATION, LIMIT_EXCEEDED, CURSOR_INVALID, REQUIRES_FORMAT_2 and the route-specific 400 codes. |  -  |
|**403** | SCOPE_REQUIRED (the token does not list the scope) or PERMISSION_DENIED (the role does not have the permission). |  -  |
|**404** | KEY_NOT_FOUND, STORE_NOT_FOUND, LEDGER_NOT_FOUND, SUBJECT_NOT_FOUND, EXPORT_NOT_FOUND, VERIFICATION_NOT_FOUND, SHRED_NOT_FOUND, INDEX_NOT_FOUND or NOT_FOUND (no archive, tombstone or purge). |  -  |
|**500** | INTERNAL: the KV service failed. No detail is given. |  -  |
|**503** | STORE_MIGRATING (retryable, Retry-After) or UNAVAILABLE. UNAVAILABLE with retryable true (for example a new store whose table is still being created, with Retry-After 5) is safe to retry with backoff; honour Retry-After. With retryable false the outcome of a write is unknown: read before you write again. |  * Retry-After -  <br>  |
|**429** | RATE_LIMITED (retryable): a rate limit is used up. The limits are the per-token limit (api-token, default 240 requests per minute per token and organisation) and, on some operations, the per-project KV limits (kv-admin 10, kv-erase 30, kv-verify 6 requests per minute). Wait for Retry-After seconds, then send the request again. See Rate limits in the API description. |  * Retry-After - Seconds to wait before the next request. <br>  * RateLimit-Limit - The request limit of the window (IETF draft). X-RateLimit-Limit carries the same value. <br>  * RateLimit-Remaining - Requests left in the window: 0 on a 429 (IETF draft). X-RateLimit-Remaining carries the same value. <br>  * RateLimit-Reset - Seconds until the window resets (IETF draft). X-RateLimit-Reset is the same moment as a Unix timestamp. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **kVLedgersShredsList**
> V2KvLedgerErasureShredPage kVLedgersShredsList()

The erasure records of the ledger, newest first (by shreddedAt), at most 50 per page: pass next_cursor back as cursor (the cursor is bound to this store and ledger). Each shred that answers 200 writes one record; a repeated shred adds none. A record names the data subject by subjectRef only, never by the subject id: a keyed hash under a per-store key that only Quant holds. Treat it as a pseudonym. reason, authority and requestedBy are the text of the shred request. entries is the number of shred entries (KV_ledgers_shreds_entries lists them). ledgerForked true: the shred was made on a forked store and no shred entry is recorded; the later re-shred is a new record whose supersedes names the forked record. A failed read is an error, never an empty list.\\n\\nNeeds kv:ledger:read and the ledger_read permission.

### Example

```typescript
import {
    KVApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new KVApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)
let storeId: string; //KV store id, as returned by KV_list (default to undefined)
let ledgerName: string; // (default to undefined)
let cursor: string; //The next_cursor of the previous page. (optional) (default to undefined)

const { status, data } = await apiInstance.kVLedgersShredsList(
    organization,
    project,
    storeId,
    ledgerName,
    cursor
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organization** | [**string**] | Organization identifier | defaults to undefined|
| **project** | [**string**] | Project identifier | defaults to undefined|
| **storeId** | [**string**] | KV store id, as returned by KV_list | defaults to undefined|
| **ledgerName** | [**string**] |  | defaults to undefined|
| **cursor** | [**string**] | The next_cursor of the previous page. | (optional) defaults to undefined|


### Return type

**V2KvLedgerErasureShredPage**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | One page of erasure records. |  -  |
|**400** | Invalid request: VALIDATION, LIMIT_EXCEEDED, CURSOR_INVALID, REQUIRES_FORMAT_2 and the route-specific 400 codes. |  -  |
|**403** | SCOPE_REQUIRED (the token does not list the scope) or PERMISSION_DENIED (the role does not have the permission). |  -  |
|**404** | KEY_NOT_FOUND, STORE_NOT_FOUND, LEDGER_NOT_FOUND, SUBJECT_NOT_FOUND, EXPORT_NOT_FOUND, VERIFICATION_NOT_FOUND, SHRED_NOT_FOUND, INDEX_NOT_FOUND or NOT_FOUND (no archive, tombstone or purge). |  -  |
|**500** | INTERNAL: the KV service failed. No detail is given. |  -  |
|**503** | STORE_MIGRATING (retryable, Retry-After) or UNAVAILABLE. UNAVAILABLE with retryable true (for example a new store whose table is still being created, with Retry-After 5) is safe to retry with backoff; honour Retry-After. With retryable false the outcome of a write is unknown: read before you write again. |  * Retry-After -  <br>  |
|**429** | RATE_LIMITED (retryable): a rate limit is used up. The limits are the per-token limit (api-token, default 240 requests per minute per token and organisation) and, on some operations, the per-project KV limits (kv-admin 10, kv-erase 30, kv-verify 6 requests per minute). Wait for Retry-After seconds, then send the request again. See Rate limits in the API description. |  * Retry-After - Seconds to wait before the next request. <br>  * RateLimit-Limit - The request limit of the window (IETF draft). X-RateLimit-Limit carries the same value. <br>  * RateLimit-Remaining - Requests left in the window: 0 on a 429 (IETF draft). X-RateLimit-Remaining carries the same value. <br>  * RateLimit-Reset - Seconds until the window resets (IETF draft). X-RateLimit-Reset is the same moment as a Unix timestamp. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **kVLedgersShredsReceipt**
> V2KvLedgerErasureShredReceiptDocument kVLedgersShredsReceipt()

The receipt of an erasure, signed with the ledger key (ECDSA P-256 over the SHA-256 of its JCS bytes). It is the same receipt as the shred answer\'s: signed once, stored, never signed again. It names the subject by subjectRef, never by the id. entryCount and entriesSha256 bind the shred entries; entries is left out when the receipt would pass 300 KB (then KV_ledgers_shreds_entries serves them). The body is returned byte for byte: save the whole answer and check it offline with kv-ledger-verify verify-signed and the public key (KV_ledgers_public_key), with --entries for a receipt without the list.\\n\\nNeeds kv:ledger:read and the ledger_read permission.

### Example

```typescript
import {
    KVApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new KVApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)
let storeId: string; //KV store id, as returned by KV_list (default to undefined)
let ledgerName: string; // (default to undefined)
let shredId: string; //The shredId of a shred answer, or the id of an erasure record (KV_ledgers_shreds_list). A ULID. (default to undefined)

const { status, data } = await apiInstance.kVLedgersShredsReceipt(
    organization,
    project,
    storeId,
    ledgerName,
    shredId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organization** | [**string**] | Organization identifier | defaults to undefined|
| **project** | [**string**] | Project identifier | defaults to undefined|
| **storeId** | [**string**] | KV store id, as returned by KV_list | defaults to undefined|
| **ledgerName** | [**string**] |  | defaults to undefined|
| **shredId** | [**string**] | The shredId of a shred answer, or the id of an erasure record (KV_ledgers_shreds_list). A ULID. | defaults to undefined|


### Return type

**V2KvLedgerErasureShredReceiptDocument**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The signed receipt, byte for byte. |  -  |
|**400** | Invalid request: VALIDATION, LIMIT_EXCEEDED, CURSOR_INVALID, REQUIRES_FORMAT_2 and the route-specific 400 codes. |  -  |
|**403** | SCOPE_REQUIRED (the token does not list the scope) or PERMISSION_DENIED (the role does not have the permission). |  -  |
|**404** | KEY_NOT_FOUND, STORE_NOT_FOUND, LEDGER_NOT_FOUND, SUBJECT_NOT_FOUND, EXPORT_NOT_FOUND, VERIFICATION_NOT_FOUND, SHRED_NOT_FOUND, INDEX_NOT_FOUND or NOT_FOUND (no archive, tombstone or purge). |  -  |
|**409** | CONFLICT, UNIQUE_VIOLATION, UPGRADE_CONFLICT, EXPORT_IN_PROGRESS, the LEDGER_* conflicts and the archive purge conflicts STORE_NOT_DELETED, ARCHIVE_RETAINED, PURGE_IN_PROGRESS, PURGE_BLOCKED and PURGE_NOT_COMPLETE (not retryable); CONTENTION, INDEX_NOT_READY, LEDGER_NOT_READY and DIGEST_OWED (retryable). |  -  |
|**500** | INTERNAL: the KV service failed. No detail is given. |  -  |
|**503** | STORE_MIGRATING (retryable, Retry-After) or UNAVAILABLE. UNAVAILABLE with retryable true (for example a new store whose table is still being created, with Retry-After 5) is safe to retry with backoff; honour Retry-After. With retryable false the outcome of a write is unknown: read before you write again. |  * Retry-After -  <br>  |
|**429** | RATE_LIMITED (retryable): a rate limit is used up. The limits are the per-token limit (api-token, default 240 requests per minute per token and organisation) and, on some operations, the per-project KV limits (kv-admin 10, kv-erase 30, kv-verify 6 requests per minute). Wait for Retry-After seconds, then send the request again. See Rate limits in the API description. |  * Retry-After - Seconds to wait before the next request. <br>  * RateLimit-Limit - The request limit of the window (IETF draft). X-RateLimit-Limit carries the same value. <br>  * RateLimit-Remaining - Requests left in the window: 0 on a 429 (IETF draft). X-RateLimit-Remaining carries the same value. <br>  * RateLimit-Reset - Seconds until the window resets (IETF draft). X-RateLimit-Reset is the same moment as a Unix timestamp. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **kVLedgersStatus**
> V2KvLedgerStatus kVLedgersStatus()

The ledger, its chain instances (one per collection and shard that holds entries; 50 per page) with head and archived sequence and archive lag, the retention end, the last digest time, the anchor state, lastVerify, verifyProgress and forked. Pass next_cursor as cursor for the next page of instances.

### Example

```typescript
import {
    KVApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new KVApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)
let storeId: string; //KV store id, as returned by KV_list (default to undefined)
let ledgerName: string; // (default to undefined)
let cursor: string; //The next_cursor of the previous page. (optional) (default to undefined)

const { status, data } = await apiInstance.kVLedgersStatus(
    organization,
    project,
    storeId,
    ledgerName,
    cursor
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organization** | [**string**] | Organization identifier | defaults to undefined|
| **project** | [**string**] | Project identifier | defaults to undefined|
| **storeId** | [**string**] | KV store id, as returned by KV_list | defaults to undefined|
| **ledgerName** | [**string**] |  | defaults to undefined|
| **cursor** | [**string**] | The next_cursor of the previous page. | (optional) defaults to undefined|


### Return type

**V2KvLedgerStatus**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | One page of instances. |  -  |
|**400** | Invalid request: VALIDATION, LIMIT_EXCEEDED, CURSOR_INVALID, REQUIRES_FORMAT_2 and the route-specific 400 codes. |  -  |
|**403** | SCOPE_REQUIRED (the token does not list the scope) or PERMISSION_DENIED (the role does not have the permission). |  -  |
|**404** | KEY_NOT_FOUND, STORE_NOT_FOUND, LEDGER_NOT_FOUND, SUBJECT_NOT_FOUND, EXPORT_NOT_FOUND, VERIFICATION_NOT_FOUND, SHRED_NOT_FOUND, INDEX_NOT_FOUND or NOT_FOUND (no archive, tombstone or purge). |  -  |
|**429** | RATE_LIMITED (retryable): a rate limit is used up. The limits are the per-token limit (api-token, default 240 requests per minute per token and organisation) and, on some operations, the per-project KV limits (kv-admin 10, kv-erase 30, kv-verify 6 requests per minute). Wait for Retry-After seconds, then send the request again. See Rate limits in the API description. |  * Retry-After - Seconds to wait before the next request. <br>  * RateLimit-Limit - The request limit of the window (IETF draft). X-RateLimit-Limit carries the same value. <br>  * RateLimit-Remaining - Requests left in the window: 0 on a 429 (IETF draft). X-RateLimit-Remaining carries the same value. <br>  * RateLimit-Reset - Seconds until the window resets (IETF draft). X-RateLimit-Reset is the same moment as a Unix timestamp. <br>  |
|**500** | INTERNAL: the KV service failed. No detail is given. |  -  |
|**503** | STORE_MIGRATING (retryable, Retry-After) or UNAVAILABLE. UNAVAILABLE with retryable true (for example a new store whose table is still being created, with Retry-After 5) is safe to retry with backoff; honour Retry-After. With retryable false the outcome of a write is unknown: read before you write again. |  * Retry-After -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **kVLedgersSubjectEntries**
> V2KvLedgerSubjectEntries kVLedgersSubjectEntries(v2KvLedgerSubjectEntriesRequest)

Lists the entries of one data subject across the ledger\'s collections, in pages: pass nextToken back in the body to read the next page. The subject id stays in the body, so it never reaches a URL or an access log; a GET with equals or where on the subject field is refused (use this call). subjectId: a string or a safe integer; the server canonicalises it (trim, NFC, the ledger\'s case rule) and refuses an invalid id with VALIDATION. collection narrows the read to one collection; since and until are date-time bounds on the entry time; limit is 1 to 1000 (default 100).\\n\\npersonal defaults to sealed: personal fields read \"[PERSONAL]\", and the subject field shows the subject token. personal decrypted shows the personal fields in clear; it needs the ledger_reveal permission and every such read is logged as kv.ledger.reveal. The answer never holds the subjectId, a subjectRef or a subject token outside the entries. subjectState is live, or shredded (then entries is empty, shreds lists the shred ids and earlierGenerationsShredded counts the earlier key generations that were shredded). A SUBJECT_NOT_FOUND error has a fixed message that never names the subject. The read is safe to repeat: a lost connection is 503 UNAVAILABLE with retryable true. Timeout 60 seconds.\\n\\nNeeds kv:ledger:read and the ledger_read permission.

### Example

```typescript
import {
    KVApi,
    Configuration,
    V2KvLedgerSubjectEntriesRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new KVApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)
let storeId: string; //KV store id, as returned by KV_list (default to undefined)
let ledgerName: string; // (default to undefined)
let v2KvLedgerSubjectEntriesRequest: V2KvLedgerSubjectEntriesRequest; //

const { status, data } = await apiInstance.kVLedgersSubjectEntries(
    organization,
    project,
    storeId,
    ledgerName,
    v2KvLedgerSubjectEntriesRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v2KvLedgerSubjectEntriesRequest** | **V2KvLedgerSubjectEntriesRequest**|  | |
| **organization** | [**string**] | Organization identifier | defaults to undefined|
| **project** | [**string**] | Project identifier | defaults to undefined|
| **storeId** | [**string**] | KV store id, as returned by KV_list | defaults to undefined|
| **ledgerName** | [**string**] |  | defaults to undefined|


### Return type

**V2KvLedgerSubjectEntries**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | One page of the subject\&#39;s entries. |  -  |
|**400** | Invalid request: VALIDATION, LIMIT_EXCEEDED, CURSOR_INVALID, REQUIRES_FORMAT_2 and the route-specific 400 codes. |  -  |
|**403** | SCOPE_REQUIRED (the token does not list the scope) or PERMISSION_DENIED (the role does not have the permission). |  -  |
|**404** | KEY_NOT_FOUND, STORE_NOT_FOUND, LEDGER_NOT_FOUND, SUBJECT_NOT_FOUND, EXPORT_NOT_FOUND, VERIFICATION_NOT_FOUND, SHRED_NOT_FOUND, INDEX_NOT_FOUND or NOT_FOUND (no archive, tombstone or purge). |  -  |
|**409** | CONFLICT, UNIQUE_VIOLATION, UPGRADE_CONFLICT, EXPORT_IN_PROGRESS, the LEDGER_* conflicts and the archive purge conflicts STORE_NOT_DELETED, ARCHIVE_RETAINED, PURGE_IN_PROGRESS, PURGE_BLOCKED and PURGE_NOT_COMPLETE (not retryable); CONTENTION, INDEX_NOT_READY, LEDGER_NOT_READY and DIGEST_OWED (retryable). |  -  |
|**429** | RATE_LIMITED (retryable): a rate limit is used up. The limits are the per-token limit (api-token, default 240 requests per minute per token and organisation) and, on some operations, the per-project KV limits (kv-admin 10, kv-erase 30, kv-verify 6 requests per minute). Wait for Retry-After seconds, then send the request again. See Rate limits in the API description. |  * Retry-After - Seconds to wait before the next request. <br>  * RateLimit-Limit - The request limit of the window (IETF draft). X-RateLimit-Limit carries the same value. <br>  * RateLimit-Remaining - Requests left in the window: 0 on a 429 (IETF draft). X-RateLimit-Remaining carries the same value. <br>  * RateLimit-Reset - Seconds until the window resets (IETF draft). X-RateLimit-Reset is the same moment as a Unix timestamp. <br>  |
|**500** | INTERNAL: the KV service failed. No detail is given. |  -  |
|**503** | STORE_MIGRATING (retryable, Retry-After) or UNAVAILABLE. UNAVAILABLE with retryable true (for example a new store whose table is still being created, with Retry-After 5) is safe to retry with backoff; honour Retry-After. With retryable false the outcome of a write is unknown: read before you write again. |  * Retry-After -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **kVLedgersSubjectPreview**
> V2KvLedgerErasureSubjectPreview kVLedgersSubjectPreview(v2KvLedgerErasureSubjectPreviewRequest)

Shows what a shred of one data subject touches: the entry count per collection (each count means at least N, because reads are eventual; complete is false when the 20 second budget ended first) and the state of the subject key (live, or shredded with shreddedAt). Read-only: nothing is decrypted, returned or written. The subject id is in the body, so it stays out of request paths and access logs; the portal audit keeps only the subjectRef of the answer. subjectId: a string or a safe integer; the server canonicalises it (trim, NFC, the ledger\'s case rule) and refuses an invalid id with VALIDATION. refKeyVersion (optional, a positive integer) is sent to the server unchanged. A SUBJECT_NOT_FOUND error has a fixed message that never names the subject.\\n\\nNeeds a token with the explicit kv:ledger:erase scope (full_access and tokens without a scope list cannot use it) and the ledger_erase permission. Rate limit: 30 requests per minute per project (kv-erase, shared with KV_ledgers_shred). Timeout 60 seconds. Audited.

### Example

```typescript
import {
    KVApi,
    Configuration,
    V2KvLedgerErasureSubjectPreviewRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new KVApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)
let storeId: string; //KV store id, as returned by KV_list (default to undefined)
let ledgerName: string; // (default to undefined)
let v2KvLedgerErasureSubjectPreviewRequest: V2KvLedgerErasureSubjectPreviewRequest; //

const { status, data } = await apiInstance.kVLedgersSubjectPreview(
    organization,
    project,
    storeId,
    ledgerName,
    v2KvLedgerErasureSubjectPreviewRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v2KvLedgerErasureSubjectPreviewRequest** | **V2KvLedgerErasureSubjectPreviewRequest**|  | |
| **organization** | [**string**] | Organization identifier | defaults to undefined|
| **project** | [**string**] | Project identifier | defaults to undefined|
| **storeId** | [**string**] | KV store id, as returned by KV_list | defaults to undefined|
| **ledgerName** | [**string**] |  | defaults to undefined|


### Return type

**V2KvLedgerErasureSubjectPreview**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The impact preview. |  -  |
|**400** | Invalid request: VALIDATION, LIMIT_EXCEEDED, CURSOR_INVALID, REQUIRES_FORMAT_2 and the route-specific 400 codes. |  -  |
|**403** | SCOPE_REQUIRED (the token does not list the scope) or PERMISSION_DENIED (the role does not have the permission). |  -  |
|**404** | KEY_NOT_FOUND, STORE_NOT_FOUND, LEDGER_NOT_FOUND, SUBJECT_NOT_FOUND, EXPORT_NOT_FOUND, VERIFICATION_NOT_FOUND, SHRED_NOT_FOUND, INDEX_NOT_FOUND or NOT_FOUND (no archive, tombstone or purge). |  -  |
|**409** | CONFLICT, UNIQUE_VIOLATION, UPGRADE_CONFLICT, EXPORT_IN_PROGRESS, the LEDGER_* conflicts and the archive purge conflicts STORE_NOT_DELETED, ARCHIVE_RETAINED, PURGE_IN_PROGRESS, PURGE_BLOCKED and PURGE_NOT_COMPLETE (not retryable); CONTENTION, INDEX_NOT_READY, LEDGER_NOT_READY and DIGEST_OWED (retryable). |  -  |
|**429** | RATE_LIMITED (retryable): a rate limit is used up. The limits are the per-token limit (api-token, default 240 requests per minute per token and organisation) and, on some operations, the per-project KV limits (kv-admin 10, kv-erase 30, kv-verify 6 requests per minute). Wait for Retry-After seconds, then send the request again. See Rate limits in the API description. |  * Retry-After - Seconds to wait before the next request. <br>  * RateLimit-Limit - The request limit of the window (IETF draft). X-RateLimit-Limit carries the same value. <br>  * RateLimit-Remaining - Requests left in the window: 0 on a 429 (IETF draft). X-RateLimit-Remaining carries the same value. <br>  * RateLimit-Reset - Seconds until the window resets (IETF draft). X-RateLimit-Reset is the same moment as a Unix timestamp. <br>  |
|**500** | INTERNAL: the KV service failed. No detail is given. |  -  |
|**503** | STORE_MIGRATING (retryable, Retry-After) or UNAVAILABLE. UNAVAILABLE with retryable true (for example a new store whose table is still being created, with Retry-After 5) is safe to retry with backoff; honour Retry-After. With retryable false the outcome of a write is unknown: read before you write again. |  * Retry-After -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **kVLedgersUpdate**
> V2KvLedger kVLedgersUpdate(v2KvLedgerAdminRaiseRequest)

Raises chains (up to 64), retentionDays (up to 36500) or lockMode (governance to compliance). Raise only: a value that would go down is 400 LEDGER_DIRECTION, and compliance never goes back to governance. The archive worker then extends the retention of the existing archive objects. Any other field (name, collection, personalFields, subjectField, subjectMode, subjectCase, anchor, writerPolicy) is refused with 400 VALIDATION before the KV service is called, and so is an empty body. A DROPPED or FAILED ledger cannot be raised.\\n\\nNeeds a token with the explicit kv:ledger:admin scope (full_access and tokens without a scope list cannot use it) and the ledger_admin permission. Rate limit: 10 requests per minute per project, shared by every kv-admin operation (index create, delete and resume; upgrade; export create and resume; ledger declare, raise and drop). Over the limit the answer is 429 RATE_LIMITED with a Retry-After header: clients (for example Terraform) must wait Retry-After seconds, then send the request again. Audited.

### Example

```typescript
import {
    KVApi,
    Configuration,
    V2KvLedgerAdminRaiseRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new KVApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)
let storeId: string; //KV store id, as returned by KV_list (default to undefined)
let ledgerName: string; // (default to undefined)
let v2KvLedgerAdminRaiseRequest: V2KvLedgerAdminRaiseRequest; //

const { status, data } = await apiInstance.kVLedgersUpdate(
    organization,
    project,
    storeId,
    ledgerName,
    v2KvLedgerAdminRaiseRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v2KvLedgerAdminRaiseRequest** | **V2KvLedgerAdminRaiseRequest**|  | |
| **organization** | [**string**] | Organization identifier | defaults to undefined|
| **project** | [**string**] | Project identifier | defaults to undefined|
| **storeId** | [**string**] | KV store id, as returned by KV_list | defaults to undefined|
| **ledgerName** | [**string**] |  | defaults to undefined|


### Return type

**V2KvLedger**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The raised ledger. |  -  |
|**400** | Invalid request: VALIDATION, LIMIT_EXCEEDED, CURSOR_INVALID, REQUIRES_FORMAT_2 and the route-specific 400 codes. |  -  |
|**403** | SCOPE_REQUIRED (the token does not list the scope) or PERMISSION_DENIED (the role does not have the permission). |  -  |
|**404** | KEY_NOT_FOUND, STORE_NOT_FOUND, LEDGER_NOT_FOUND, SUBJECT_NOT_FOUND, EXPORT_NOT_FOUND, VERIFICATION_NOT_FOUND, SHRED_NOT_FOUND, INDEX_NOT_FOUND or NOT_FOUND (no archive, tombstone or purge). |  -  |
|**409** | CONFLICT, UNIQUE_VIOLATION, UPGRADE_CONFLICT, EXPORT_IN_PROGRESS, the LEDGER_* conflicts and the archive purge conflicts STORE_NOT_DELETED, ARCHIVE_RETAINED, PURGE_IN_PROGRESS, PURGE_BLOCKED and PURGE_NOT_COMPLETE (not retryable); CONTENTION, INDEX_NOT_READY, LEDGER_NOT_READY and DIGEST_OWED (retryable). |  -  |
|**429** | RATE_LIMITED (retryable): a rate limit is used up. The limits are the per-token limit (api-token, default 240 requests per minute per token and organisation) and, on some operations, the per-project KV limits (kv-admin 10, kv-erase 30, kv-verify 6 requests per minute). Wait for Retry-After seconds, then send the request again. See Rate limits in the API description. |  * Retry-After - Seconds to wait before the next request. <br>  * RateLimit-Limit - The request limit of the window (IETF draft). X-RateLimit-Limit carries the same value. <br>  * RateLimit-Remaining - Requests left in the window: 0 on a 429 (IETF draft). X-RateLimit-Remaining carries the same value. <br>  * RateLimit-Reset - Seconds until the window resets (IETF draft). X-RateLimit-Reset is the same moment as a Unix timestamp. <br>  |
|**500** | INTERNAL: the KV service failed. No detail is given. |  -  |
|**503** | STORE_MIGRATING (retryable, Retry-After) or UNAVAILABLE. UNAVAILABLE with retryable true (for example a new store whose table is still being created, with Retry-After 5) is safe to retry with backoff; honour Retry-After. With retryable false the outcome of a write is unknown: read before you write again. |  * Retry-After -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **kVLedgersVerificationsReport**
> V2KvLedgerVerificationReport kVLedgersVerificationsReport()

Every verify (API, dashboard or the daily scheduled run) is recorded and kept 400 days. This returns the record signed with the ledger key, as the exact bytes of the KV service (application/json): save it unchanged and check it offline with the public key (kv-ledger-verify verify-signed --doc report.json --public-key key.pem). A record with complete false never states that the ledger is intact.

### Example

```typescript
import {
    KVApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new KVApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)
let storeId: string; //KV store id, as returned by KV_list (default to undefined)
let ledgerName: string; // (default to undefined)
let verificationId: string; //The verificationId of a verify answer, or lastVerify.id of the ledger. (default to undefined)

const { status, data } = await apiInstance.kVLedgersVerificationsReport(
    organization,
    project,
    storeId,
    ledgerName,
    verificationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organization** | [**string**] | Organization identifier | defaults to undefined|
| **project** | [**string**] | Project identifier | defaults to undefined|
| **storeId** | [**string**] | KV store id, as returned by KV_list | defaults to undefined|
| **ledgerName** | [**string**] |  | defaults to undefined|
| **verificationId** | [**string**] | The verificationId of a verify answer, or lastVerify.id of the ledger. | defaults to undefined|


### Return type

**V2KvLedgerVerificationReport**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The signed report, byte for byte. |  -  |
|**400** | Invalid request: VALIDATION, LIMIT_EXCEEDED, CURSOR_INVALID, REQUIRES_FORMAT_2 and the route-specific 400 codes. |  -  |
|**403** | SCOPE_REQUIRED (the token does not list the scope) or PERMISSION_DENIED (the role does not have the permission). |  -  |
|**404** | KEY_NOT_FOUND, STORE_NOT_FOUND, LEDGER_NOT_FOUND, SUBJECT_NOT_FOUND, EXPORT_NOT_FOUND, VERIFICATION_NOT_FOUND, SHRED_NOT_FOUND, INDEX_NOT_FOUND or NOT_FOUND (no archive, tombstone or purge). |  -  |
|**429** | RATE_LIMITED (retryable): a rate limit is used up. The limits are the per-token limit (api-token, default 240 requests per minute per token and organisation) and, on some operations, the per-project KV limits (kv-admin 10, kv-erase 30, kv-verify 6 requests per minute). Wait for Retry-After seconds, then send the request again. See Rate limits in the API description. |  * Retry-After - Seconds to wait before the next request. <br>  * RateLimit-Limit - The request limit of the window (IETF draft). X-RateLimit-Limit carries the same value. <br>  * RateLimit-Remaining - Requests left in the window: 0 on a 429 (IETF draft). X-RateLimit-Remaining carries the same value. <br>  * RateLimit-Reset - Seconds until the window resets (IETF draft). X-RateLimit-Reset is the same moment as a Unix timestamp. <br>  |
|**500** | INTERNAL: the KV service failed. No detail is given. |  -  |
|**503** | STORE_MIGRATING (retryable, Retry-After) or UNAVAILABLE. UNAVAILABLE with retryable true (for example a new store whose table is still being created, with Retry-After 5) is safe to retry with backoff; honour Retry-After. With retryable false the outcome of a write is unknown: read before you write again. |  * Retry-After -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **kVLedgersVerify**
> V2KvLedgerVerifyResult kVLedgersVerify()

Recomputes the hash chain of each shard in the range, compares every archived entry with its archive object and checks each object against its signed digest. Read only, but costly: at most 10,000 entries (maxEntries) and 200 archive objects per call, and 6 calls per minute per project (429 RATE_LIMITED). When next_cursor is not null, send the same collection, since and until with cursor to continue; every page of a run has the same verificationId. A finished run has a signed report (KV_ledgers_verifications_report). Anchors are checked only by the offline verifier. The portal waits up to 60 s; a lost connection is 503 UNAVAILABLE (retryable: repeat with the same cursor).

### Example

```typescript
import {
    KVApi,
    Configuration,
    V2KvLedgerVerifyRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new KVApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)
let storeId: string; //KV store id, as returned by KV_list (default to undefined)
let ledgerName: string; // (default to undefined)
let v2KvLedgerVerifyRequest: V2KvLedgerVerifyRequest; // (optional)

const { status, data } = await apiInstance.kVLedgersVerify(
    organization,
    project,
    storeId,
    ledgerName,
    v2KvLedgerVerifyRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v2KvLedgerVerifyRequest** | **V2KvLedgerVerifyRequest**|  | |
| **organization** | [**string**] | Organization identifier | defaults to undefined|
| **project** | [**string**] | Project identifier | defaults to undefined|
| **storeId** | [**string**] | KV store id, as returned by KV_list | defaults to undefined|
| **ledgerName** | [**string**] |  | defaults to undefined|


### Return type

**V2KvLedgerVerifyResult**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The result of this call. |  -  |
|**400** | Invalid request: VALIDATION, LIMIT_EXCEEDED, CURSOR_INVALID, REQUIRES_FORMAT_2 and the route-specific 400 codes. |  -  |
|**403** | SCOPE_REQUIRED (the token does not list the scope) or PERMISSION_DENIED (the role does not have the permission). |  -  |
|**404** | KEY_NOT_FOUND, STORE_NOT_FOUND, LEDGER_NOT_FOUND, SUBJECT_NOT_FOUND, EXPORT_NOT_FOUND, VERIFICATION_NOT_FOUND, SHRED_NOT_FOUND, INDEX_NOT_FOUND or NOT_FOUND (no archive, tombstone or purge). |  -  |
|**409** | CONFLICT, UNIQUE_VIOLATION, UPGRADE_CONFLICT, EXPORT_IN_PROGRESS, the LEDGER_* conflicts and the archive purge conflicts STORE_NOT_DELETED, ARCHIVE_RETAINED, PURGE_IN_PROGRESS, PURGE_BLOCKED and PURGE_NOT_COMPLETE (not retryable); CONTENTION, INDEX_NOT_READY, LEDGER_NOT_READY and DIGEST_OWED (retryable). |  -  |
|**429** | RATE_LIMITED (retryable): a rate limit is used up. The limits are the per-token limit (api-token, default 240 requests per minute per token and organisation) and, on some operations, the per-project KV limits (kv-admin 10, kv-erase 30, kv-verify 6 requests per minute). Wait for Retry-After seconds, then send the request again. See Rate limits in the API description. |  * Retry-After - Seconds to wait before the next request. <br>  * RateLimit-Limit - The request limit of the window (IETF draft). X-RateLimit-Limit carries the same value. <br>  * RateLimit-Remaining - Requests left in the window: 0 on a 429 (IETF draft). X-RateLimit-Remaining carries the same value. <br>  * RateLimit-Reset - Seconds until the window resets (IETF draft). X-RateLimit-Reset is the same moment as a Unix timestamp. <br>  |
|**500** | INTERNAL: the KV service failed. No detail is given. |  -  |
|**503** | STORE_MIGRATING (retryable, Retry-After) or UNAVAILABLE. UNAVAILABLE with retryable true (for example a new store whose table is still being created, with Retry-After 5) is safe to retry with backoff; honour Retry-After. With retryable false the outcome of a write is unknown: read before you write again. |  * Retry-After -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **kVLinkToProject**
> KVLinkToProject200Response kVLinkToProject(kVLinkToProjectRequest)

Share a KV store from the source project with a target project. The store will be accessible in the target project.

### Example

```typescript
import {
    KVApi,
    Configuration,
    KVLinkToProjectRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new KVApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let project: string; //Source project identifier (default to undefined)
let storeId: string; //KV store identifier (default to undefined)
let kVLinkToProjectRequest: KVLinkToProjectRequest; //

const { status, data } = await apiInstance.kVLinkToProject(
    organization,
    project,
    storeId,
    kVLinkToProjectRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **kVLinkToProjectRequest** | **KVLinkToProjectRequest**|  | |
| **organization** | [**string**] | Organization identifier | defaults to undefined|
| **project** | [**string**] | Source project identifier | defaults to undefined|
| **storeId** | [**string**] | KV store identifier | defaults to undefined|


### Return type

**KVLinkToProject200Response**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Store linked successfully |  -  |
|**400** | Store already linked or invalid request |  -  |
|**404** | STORE_NOT_FOUND (V2KvError body: code, retryable false) when the store is not in this project; the message Target project not found. (no code) when project_id names no project of the organisation. |  -  |
|**403** | SCOPE_REQUIRED (the token does not list the scope) or PERMISSION_DENIED (the role does not have the permission). |  -  |
|**429** | RATE_LIMITED (retryable): a rate limit is used up. The limits are the per-token limit (api-token, default 240 requests per minute per token and organisation) and, on some operations, the per-project KV limits (kv-admin 10, kv-erase 30, kv-verify 6 requests per minute). Wait for Retry-After seconds, then send the request again. See Rate limits in the API description. |  * Retry-After - Seconds to wait before the next request. <br>  * RateLimit-Limit - The request limit of the window (IETF draft). X-RateLimit-Limit carries the same value. <br>  * RateLimit-Remaining - Requests left in the window: 0 on a 429 (IETF draft). X-RateLimit-Remaining carries the same value. <br>  * RateLimit-Reset - Seconds until the window resets (IETF draft). X-RateLimit-Reset is the same moment as a Unix timestamp. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **kVList**
> Array<V2Store> kVList()


### Example

```typescript
import {
    KVApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new KVApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)

const { status, data } = await apiInstance.kVList(
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

**Array<V2Store>**

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
|**403** | SCOPE_REQUIRED (the token does not list the scope) or PERMISSION_DENIED (the role does not have the permission). |  -  |
|**429** | RATE_LIMITED (retryable): a rate limit is used up. The limits are the per-token limit (api-token, default 240 requests per minute per token and organisation) and, on some operations, the per-project KV limits (kv-admin 10, kv-erase 30, kv-verify 6 requests per minute). Wait for Retry-After seconds, then send the request again. See Rate limits in the API description. |  * Retry-After - Seconds to wait before the next request. <br>  * RateLimit-Limit - The request limit of the window (IETF draft). X-RateLimit-Limit carries the same value. <br>  * RateLimit-Remaining - Requests left in the window: 0 on a 429 (IETF draft). X-RateLimit-Remaining carries the same value. <br>  * RateLimit-Reset - Seconds until the window resets (IETF draft). X-RateLimit-Reset is the same moment as a Unix timestamp. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **kVShow**
> V2Store kVShow()

status is ready when the store answers data requests and provisioning while its table is still being created (then data requests are 503 UNAVAILABLE retryable). status is omitted when the KV service gives no clear answer. A ready status is cached for up to one hour.

### Example

```typescript
import {
    KVApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new KVApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)
let storeId: string; // (default to undefined)

const { status, data } = await apiInstance.kVShow(
    organization,
    project,
    storeId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organization** | [**string**] | Organization identifier | defaults to undefined|
| **project** | [**string**] | Project identifier | defaults to undefined|
| **storeId** | [**string**] |  | defaults to undefined|


### Return type

**V2Store**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The request has succeeded. |  -  |
|**404** | STORE_NOT_FOUND: the store does not exist or is not in this project. |  -  |
|**403** | SCOPE_REQUIRED (the token does not list the scope) or PERMISSION_DENIED (the role does not have the permission). |  -  |
|**429** | RATE_LIMITED (retryable): a rate limit is used up. The limits are the per-token limit (api-token, default 240 requests per minute per token and organisation) and, on some operations, the per-project KV limits (kv-admin 10, kv-erase 30, kv-verify 6 requests per minute). Wait for Retry-After seconds, then send the request again. See Rate limits in the API description. |  * Retry-After - Seconds to wait before the next request. <br>  * RateLimit-Limit - The request limit of the window (IETF draft). X-RateLimit-Limit carries the same value. <br>  * RateLimit-Remaining - Requests left in the window: 0 on a 429 (IETF draft). X-RateLimit-Remaining carries the same value. <br>  * RateLimit-Reset - Seconds until the window resets (IETF draft). X-RateLimit-Reset is the same moment as a Unix timestamp. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **kVUnlinkFromProject**
> KVLinkToProject200Response kVUnlinkFromProject()

Remove access to a linked KV store from this project. The store must be linked (not owned by this project).

### Example

```typescript
import {
    KVApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new KVApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)
let storeId: string; //KV store identifier (default to undefined)

const { status, data } = await apiInstance.kVUnlinkFromProject(
    organization,
    project,
    storeId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organization** | [**string**] | Organization identifier | defaults to undefined|
| **project** | [**string**] | Project identifier | defaults to undefined|
| **storeId** | [**string**] | KV store identifier | defaults to undefined|


### Return type

**KVLinkToProject200Response**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Store unlinked successfully |  -  |
|**400** | Store not linked or invalid request |  -  |
|**404** | STORE_NOT_FOUND: the store does not exist or is not in this project. |  -  |
|**403** | Forbidden. SCOPE_REQUIRED (the token needs the kv:write scope) or PERMISSION_DENIED (the role needs kv_admin), with the V2KvError body; or, without a code, the store is owned by this project (use KV_delete instead). |  -  |
|**429** | RATE_LIMITED (retryable): a rate limit is used up. The limits are the per-token limit (api-token, default 240 requests per minute per token and organisation) and, on some operations, the per-project KV limits (kv-admin 10, kv-erase 30, kv-verify 6 requests per minute). Wait for Retry-After seconds, then send the request again. See Rate limits in the API description. |  * Retry-After - Seconds to wait before the next request. <br>  * RateLimit-Limit - The request limit of the window (IETF draft). X-RateLimit-Limit carries the same value. <br>  * RateLimit-Remaining - Requests left in the window: 0 on a 429 (IETF draft). X-RateLimit-Remaining carries the same value. <br>  * RateLimit-Reset - Seconds until the window resets (IETF draft). X-RateLimit-Reset is the same moment as a Unix timestamp. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **kVUpgradeCreate**
> V2KvUpgradeResponse kVUpgradeCreate(v2KvUpgradeRequest)

Runs in the background; poll KV_upgrade_show. start checks every key (preflight), copies the store to a format 2 table and switches; with dryRun true it stops at phase checked and changes nothing. While writes are frozen (about 40 seconds plus the copy time) writes answer 503 STORE_MIGRATING with Retry-After; reads continue. Stores over 100,000 items or 1 GiB cannot be upgraded. rollback is allowed after the switch (409 LEDGER_PRESENT while the store has a ledger; 409 EXPORT_IN_PROGRESS during an export). finalize is allowed after retainUntil (14 days after the switch) and deletes the format 1 table. resume queues the current step again when the phase has not changed for more than 960 seconds (otherwise 409 UPGRADE_CONFLICT). A lost connection is 503 UNAVAILABLE. For start, rollback and finalize, retryable is false: read KV_upgrade_show, then send resume if the phase does not change for 960 seconds. resume only queues the current step again, so for resume retryable is true. Every action is audited. Rate limit: 10 requests per minute per project, shared by every kv-admin operation (index create, delete and resume; upgrade; export create and resume; ledger declare, raise and drop). Over the limit the answer is 429 RATE_LIMITED with a Retry-After header: clients (for example Terraform) must wait Retry-After seconds, then send the request again.

### Example

```typescript
import {
    KVApi,
    Configuration,
    V2KvUpgradeRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new KVApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)
let storeId: string; //KV store id, as returned by KV_list (default to undefined)
let v2KvUpgradeRequest: V2KvUpgradeRequest; //

const { status, data } = await apiInstance.kVUpgradeCreate(
    organization,
    project,
    storeId,
    v2KvUpgradeRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v2KvUpgradeRequest** | **V2KvUpgradeRequest**|  | |
| **organization** | [**string**] | Organization identifier | defaults to undefined|
| **project** | [**string**] | Project identifier | defaults to undefined|
| **storeId** | [**string**] | KV store id, as returned by KV_list | defaults to undefined|


### Return type

**V2KvUpgradeResponse**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**202** | Accepted. The X-Quant-KV-Format header gives the format at the time of the answer. |  -  |
|**400** | Invalid request: VALIDATION, LIMIT_EXCEEDED, CURSOR_INVALID, REQUIRES_FORMAT_2 and the route-specific 400 codes. |  -  |
|**403** | SCOPE_REQUIRED (the token does not list the scope) or PERMISSION_DENIED (the role does not have the permission). |  -  |
|**404** | STORE_NOT_FOUND: the store does not exist or is not in this project. |  -  |
|**409** | CONFLICT, UNIQUE_VIOLATION, UPGRADE_CONFLICT, EXPORT_IN_PROGRESS, the LEDGER_* conflicts and the archive purge conflicts STORE_NOT_DELETED, ARCHIVE_RETAINED, PURGE_IN_PROGRESS, PURGE_BLOCKED and PURGE_NOT_COMPLETE (not retryable); CONTENTION, INDEX_NOT_READY, LEDGER_NOT_READY and DIGEST_OWED (retryable). |  -  |
|**429** | RATE_LIMITED (retryable): a rate limit is used up. The limits are the per-token limit (api-token, default 240 requests per minute per token and organisation) and, on some operations, the per-project KV limits (kv-admin 10, kv-erase 30, kv-verify 6 requests per minute). Wait for Retry-After seconds, then send the request again. See Rate limits in the API description. |  * Retry-After - Seconds to wait before the next request. <br>  * RateLimit-Limit - The request limit of the window (IETF draft). X-RateLimit-Limit carries the same value. <br>  * RateLimit-Remaining - Requests left in the window: 0 on a 429 (IETF draft). X-RateLimit-Remaining carries the same value. <br>  * RateLimit-Reset - Seconds until the window resets (IETF draft). X-RateLimit-Reset is the same moment as a Unix timestamp. <br>  |
|**500** | INTERNAL: the KV service failed. No detail is given. |  -  |
|**503** | STORE_MIGRATING (retryable, Retry-After) or UNAVAILABLE. UNAVAILABLE with retryable true (for example a new store whose table is still being created, with Retry-After 5) is safe to retry with backoff; honour Retry-After. With retryable false the outcome of a write is unknown: read before you write again. |  * Retry-After -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **kVUpgradeShow**
> V2KvUpgradeState kVUpgradeShow()

The store format (1 or 2), state (active, or migrating while writes are frozen), table and the latest upgrade (null if the store was never upgraded). Poll it after KV_upgrade_create.

### Example

```typescript
import {
    KVApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new KVApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)
let storeId: string; //KV store id, as returned by KV_list (default to undefined)

const { status, data } = await apiInstance.kVUpgradeShow(
    organization,
    project,
    storeId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organization** | [**string**] | Organization identifier | defaults to undefined|
| **project** | [**string**] | Project identifier | defaults to undefined|
| **storeId** | [**string**] | KV store id, as returned by KV_list | defaults to undefined|


### Return type

**V2KvUpgradeState**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Format, state, table and the latest upgrade. |  -  |
|**403** | SCOPE_REQUIRED (the token does not list the scope) or PERMISSION_DENIED (the role does not have the permission). |  -  |
|**404** | STORE_NOT_FOUND: the store does not exist or is not in this project. |  -  |
|**429** | RATE_LIMITED (retryable): a rate limit is used up. The limits are the per-token limit (api-token, default 240 requests per minute per token and organisation) and, on some operations, the per-project KV limits (kv-admin 10, kv-erase 30, kv-verify 6 requests per minute). Wait for Retry-After seconds, then send the request again. See Rate limits in the API description. |  * Retry-After - Seconds to wait before the next request. <br>  * RateLimit-Limit - The request limit of the window (IETF draft). X-RateLimit-Limit carries the same value. <br>  * RateLimit-Remaining - Requests left in the window: 0 on a 429 (IETF draft). X-RateLimit-Remaining carries the same value. <br>  * RateLimit-Reset - Seconds until the window resets (IETF draft). X-RateLimit-Reset is the same moment as a Unix timestamp. <br>  |
|**500** | INTERNAL: the KV service failed. No detail is given. |  -  |
|**503** | STORE_MIGRATING (retryable, Retry-After) or UNAVAILABLE. UNAVAILABLE with retryable true (for example a new store whose table is still being created, with Retry-After 5) is safe to retry with backoff; honour Retry-After. With retryable false the outcome of a write is unknown: read before you write again. |  * Retry-After -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **kVUsageShow**
> V2KvUsage kVUsageShow()

Read and write units per UTC day for the last 30 full days, the table size and a list-price estimate. Never returns item values. A CloudWatch or DynamoDB failure is 503 UNAVAILABLE, never zeros.

### Example

```typescript
import {
    KVApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new KVApi(configuration);

let organization: string; //Organization identifier (default to undefined)
let project: string; //Project identifier (default to undefined)
let storeId: string; //KV store id, as returned by KV_list (default to undefined)

const { status, data } = await apiInstance.kVUsageShow(
    organization,
    project,
    storeId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organization** | [**string**] | Organization identifier | defaults to undefined|
| **project** | [**string**] | Project identifier | defaults to undefined|
| **storeId** | [**string**] | KV store id, as returned by KV_list | defaults to undefined|


### Return type

**V2KvUsage**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Usage and estimate. |  -  |
|**400** | Invalid request: VALIDATION, LIMIT_EXCEEDED, CURSOR_INVALID, REQUIRES_FORMAT_2 and the route-specific 400 codes. |  -  |
|**403** | SCOPE_REQUIRED (the token does not list the scope) or PERMISSION_DENIED (the role does not have the permission). |  -  |
|**404** | STORE_NOT_FOUND: the store does not exist or is not in this project. |  -  |
|**429** | RATE_LIMITED (retryable): a rate limit is used up. The limits are the per-token limit (api-token, default 240 requests per minute per token and organisation) and, on some operations, the per-project KV limits (kv-admin 10, kv-erase 30, kv-verify 6 requests per minute). Wait for Retry-After seconds, then send the request again. See Rate limits in the API description. |  * Retry-After - Seconds to wait before the next request. <br>  * RateLimit-Limit - The request limit of the window (IETF draft). X-RateLimit-Limit carries the same value. <br>  * RateLimit-Remaining - Requests left in the window: 0 on a 429 (IETF draft). X-RateLimit-Remaining carries the same value. <br>  * RateLimit-Reset - Seconds until the window resets (IETF draft). X-RateLimit-Reset is the same moment as a Unix timestamp. <br>  |
|**500** | INTERNAL: the KV service failed. No detail is given. |  -  |
|**503** | STORE_MIGRATING (retryable, Retry-After) or UNAVAILABLE. UNAVAILABLE with retryable true (for example a new store whose table is still being created, with Retry-After 5) is safe to retry with backoff; honour Retry-After. With retryable false the outcome of a write is unknown: read before you write again. |  * Retry-After -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

