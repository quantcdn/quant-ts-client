# AIAuditApi

All URIs are relative to *https://dashboard.quantcdn.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**aiAuditExport**](#aiauditexport) | **GET** /api/v3/organizations/{organisation}/ai/audit/export | Export AI audit records as JSON Lines|
|[**aiAuditLedgerEntries**](#aiauditledgerentries) | **GET** /api/v3/organizations/{organisation}/ai/audit/ledger/entries | List AI governance ledger entries|
|[**aiAuditLedgerProof**](#aiauditledgerproof) | **GET** /api/v3/organizations/{organisation}/ai/audit/ledger/proof | Get the inclusion proof of a governance ledger entry|
|[**aiAuditLedgerPublicKey**](#aiauditledgerpublickey) | **GET** /api/v3/organizations/{organisation}/ai/audit/ledger/public-key | Get the governance ledger public key|
|[**aiAuditLedgerStatus**](#aiauditledgerstatus) | **GET** /api/v3/organizations/{organisation}/ai/audit/ledger | Get the AI governance ledger status|
|[**aiAuditRecordGet**](#aiauditrecordget) | **GET** /api/v3/organizations/{organisation}/ai/audit/record | Get one AI audit record|
|[**aiAuditRecordsList**](#aiauditrecordslist) | **GET** /api/v3/organizations/{organisation}/ai/audit/records | List AI audit records|

# **aiAuditExport**
> string aiAuditExport()

Every record of the range that matches the filters (the filters of aiAuditRecordsList), one JSON object per line (the row: key, date, summary, record). At most 100 pages of 200 records; a longer export ends with an error line. A failed page ends the file with an error line. Each page read is recorded in the audit log (action export). Needs view_ai_audit and, for a scoped token, ai:audit:read. Limit: 10 requests per minute.

### Example

```typescript
import {
    AIAuditApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AIAuditApi(configuration);

let organisation: string; //The organisation machine name (default to undefined)
let startDate: string; // (default to undefined)
let endDate: string; // (default to undefined)
let userId: string; // (optional) (default to undefined)
let modelId: string; // (optional) (default to undefined)
let recordType: string; // (optional) (default to undefined)
let decision: string; // (optional) (default to undefined)
let tool: string; // (optional) (default to undefined)
let outcome: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.aiAuditExport(
    organisation,
    startDate,
    endDate,
    userId,
    modelId,
    recordType,
    decision,
    tool,
    outcome
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] | The organisation machine name | defaults to undefined|
| **startDate** | [**string**] |  | defaults to undefined|
| **endDate** | [**string**] |  | defaults to undefined|
| **userId** | [**string**] |  | (optional) defaults to undefined|
| **modelId** | [**string**] |  | (optional) defaults to undefined|
| **recordType** | [**string**] |  | (optional) defaults to undefined|
| **decision** | [**string**] |  | (optional) defaults to undefined|
| **tool** | [**string**] |  | (optional) defaults to undefined|
| **outcome** | [**string**] |  | (optional) defaults to undefined|


### Return type

**string**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/x-ndjson, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | JSON Lines. |  -  |
|**400** | Invalid range. |  -  |
|**403** | PERMISSION_DENIED or SCOPE_REQUIRED |  -  |
|**429** | Too many exports. See Retry-After. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **aiAuditLedgerEntries**
> V2KvKeysPage aiAuditLedgerEntries()

The entries of the collection events:governance, with values, in pages: follow next_cursor while has_more is true. Each entry has its ledger block (seq, hash, prevHash, shard) for verification; open a proof with aiAuditLedgerProof and check entries offline with kv-ledger-verify and aiAuditLedgerPublicKey. Events are hash-only (no prompt or response). The read is recorded in the audit log first (503 UNAVAILABLE when it cannot be). Needs view_ai_audit and, for a scoped token, ai:audit:read.

### Example

```typescript
import {
    AIAuditApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AIAuditApi(configuration);

let organisation: string; //The organisation machine name (default to undefined)
let since: string; //Epoch milliseconds or ISO 8601 with a zone. Inclusive. (optional) (default to undefined)
let until: string; //Epoch milliseconds or ISO 8601 with a zone. Exclusive. (optional) (default to undefined)
let limit: number; // (optional) (default to 100)
let cursor: string; //The next_cursor of the previous page. (optional) (default to undefined)

const { status, data } = await apiInstance.aiAuditLedgerEntries(
    organisation,
    since,
    until,
    limit,
    cursor
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] | The organisation machine name | defaults to undefined|
| **since** | [**string**] | Epoch milliseconds or ISO 8601 with a zone. Inclusive. | (optional) defaults to undefined|
| **until** | [**string**] | Epoch milliseconds or ISO 8601 with a zone. Exclusive. | (optional) defaults to undefined|
| **limit** | [**number**] |  | (optional) defaults to 100|
| **cursor** | [**string**] | The next_cursor of the previous page. | (optional) defaults to undefined|


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
|**200** | One page. |  -  |
|**400** | Invalid request: VALIDATION, LIMIT_EXCEEDED, CURSOR_INVALID, REQUIRES_FORMAT_2 and the route-specific 400 codes. |  -  |
|**403** | PERMISSION_DENIED or SCOPE_REQUIRED |  -  |
|**404** | KEY_NOT_FOUND, STORE_NOT_FOUND, LEDGER_NOT_FOUND, SUBJECT_NOT_FOUND, EXPORT_NOT_FOUND, VERIFICATION_NOT_FOUND, SHRED_NOT_FOUND, INDEX_NOT_FOUND or NOT_FOUND (no archive, tombstone or purge). |  -  |
|**503** | STORE_MIGRATING (retryable, Retry-After) or UNAVAILABLE. UNAVAILABLE with retryable true (for example a new store whose table is still being created, with Retry-After 5) is safe to retry with backoff; honour Retry-After. With retryable false the outcome of a write is unknown: read before you write again. |  * Retry-After -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **aiAuditLedgerProof**
> V2KvLedgerProof aiAuditLedgerProof()

The Merkle inclusion proof of one entry (key events:governance:...): entry, hash, period, merkleRoot, auditPath, the signed digest and keyId, or status pending until the entry is archived. Returned byte for byte, as KV_ledgers_proof. The read is recorded in the audit log first (503 UNAVAILABLE when it cannot be). Needs view_ai_audit and, for a scoped token, ai:audit:read.

### Example

```typescript
import {
    AIAuditApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AIAuditApi(configuration);

let organisation: string; //The organisation machine name (default to undefined)
let key: string; // (default to undefined)

const { status, data } = await apiInstance.aiAuditLedgerProof(
    organisation,
    key
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] | The organisation machine name | defaults to undefined|
| **key** | [**string**] |  | defaults to undefined|


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
|**403** | PERMISSION_DENIED or SCOPE_REQUIRED |  -  |
|**404** | KEY_NOT_FOUND, STORE_NOT_FOUND, LEDGER_NOT_FOUND, SUBJECT_NOT_FOUND, EXPORT_NOT_FOUND, VERIFICATION_NOT_FOUND, SHRED_NOT_FOUND, INDEX_NOT_FOUND or NOT_FOUND (no archive, tombstone or purge). |  -  |
|**503** | STORE_MIGRATING (retryable, Retry-After) or UNAVAILABLE. UNAVAILABLE with retryable true (for example a new store whose table is still being created, with Retry-After 5) is safe to retry with backoff; honour Retry-After. With retryable false the outcome of a write is unknown: read before you write again. |  * Retry-After -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **aiAuditLedgerPublicKey**
> V2KvLedgerPublicKey aiAuditLedgerPublicKey()

The public key that verifies the ledger digests and receipts offline (kv-ledger-verify). The same answer as KV_ledgers_public_key. Needs view_ai_audit and, for a scoped token, ai:audit:read.

### Example

```typescript
import {
    AIAuditApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AIAuditApi(configuration);

let organisation: string; //The organisation machine name (default to undefined)

const { status, data } = await apiInstance.aiAuditLedgerPublicKey(
    organisation
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] | The organisation machine name | defaults to undefined|


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
|**200** | The key (the PEM is in publicKeyPem). |  -  |
|**403** | PERMISSION_DENIED or SCOPE_REQUIRED |  -  |
|**404** | KEY_NOT_FOUND, STORE_NOT_FOUND, LEDGER_NOT_FOUND, SUBJECT_NOT_FOUND, EXPORT_NOT_FOUND, VERIFICATION_NOT_FOUND, SHRED_NOT_FOUND, INDEX_NOT_FOUND or NOT_FOUND (no archive, tombstone or purge). |  -  |
|**503** | STORE_MIGRATING (retryable, Retry-After) or UNAVAILABLE. UNAVAILABLE with retryable true (for example a new store whose table is still being created, with Retry-After 5) is safe to retry with backoff; honour Retry-After. With retryable false the outcome of a write is unknown: read before you write again. |  * Retry-After -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **aiAuditLedgerStatus**
> V2KvLedgerStatus aiAuditLedgerStatus()

The organisation\'s AI governance ledger (store int-ai-governance, ledger governance): definition, retention, instances and shards with head sequence, archive lag, last digest and last verify. The same answer as KV_ledgers_status. 404 STORE_NOT_FOUND or LEDGER_NOT_FOUND when the organisation has no governance ledger. The read is recorded in the audit log first (503 UNAVAILABLE when it cannot be). Needs view_ai_audit and, for a scoped token, ai:audit:read.

### Example

```typescript
import {
    AIAuditApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AIAuditApi(configuration);

let organisation: string; //The organisation machine name (default to undefined)
let cursor: string; //The next_cursor of the previous page. (optional) (default to undefined)

const { status, data } = await apiInstance.aiAuditLedgerStatus(
    organisation,
    cursor
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] | The organisation machine name | defaults to undefined|
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
|**403** | PERMISSION_DENIED or SCOPE_REQUIRED |  -  |
|**404** | KEY_NOT_FOUND, STORE_NOT_FOUND, LEDGER_NOT_FOUND, SUBJECT_NOT_FOUND, EXPORT_NOT_FOUND, VERIFICATION_NOT_FOUND, SHRED_NOT_FOUND, INDEX_NOT_FOUND or NOT_FOUND (no archive, tombstone or purge). |  -  |
|**503** | STORE_MIGRATING (retryable, Retry-After) or UNAVAILABLE. UNAVAILABLE with retryable true (for example a new store whose table is still being created, with Retry-After 5) is safe to retry with backoff; honour Retry-After. With retryable false the outcome of a write is unknown: read before you write again. |  * Retry-After -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **aiAuditRecordGet**
> AiAuditRecordGet200Response aiAuditRecordGet()

One record by key (a key from aiAuditRecordsList). A key of another organisation is 400. prompt and response are returned only when the record stores them. The read is recorded in the audit log first (503 when it cannot be). Needs view_ai_audit and, for a scoped token, ai:audit:read.

### Example

```typescript
import {
    AIAuditApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AIAuditApi(configuration);

let organisation: string; //The organisation machine name (default to undefined)
let key: string; // (default to undefined)

const { status, data } = await apiInstance.aiAuditRecordGet(
    organisation,
    key
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] | The organisation machine name | defaults to undefined|
| **key** | [**string**] |  | defaults to undefined|


### Return type

**AiAuditRecordGet200Response**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The record. |  -  |
|**400** | The key is not a record key of this organisation. |  -  |
|**403** | PERMISSION_DENIED or SCOPE_REQUIRED |  -  |
|**404** | Not found, or archived (older than 365 days). |  -  |
|**503** | UNAVAILABLE: the read could not be recorded, so it was not made. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **aiAuditRecordsList**
> AiAuditRecordsPage aiAuditRecordsList()

One page of the organisation\'s AI audit records (inference, tool approvals and denials, Slack bot API calls, audit log reads). Filters match exactly. A page stops at limit rows, at 1,000 scanned records or at 20 seconds, so it can hold fewer rows than limit while hasMore is true: pass nextCursor back as cursor until hasMore is false. Order: by day, then by key. prompt and response are returned only when the record stores them. Records older than 365 days are archived (skippedArchived). Each call is recorded in the audit log (recordType audit_access) before it reads; when that record cannot be written the answer is 503 and nothing is read. Needs the view_ai_audit permission and, for a scoped token, ai:audit:read.

### Example

```typescript
import {
    AIAuditApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AIAuditApi(configuration);

let organisation: string; //The organisation machine name (default to undefined)
let startDate: string; //First UTC day (inclusive). At most 31 days, not in the future, not older than 365 days. (default to undefined)
let endDate: string; //Last UTC day (inclusive). (default to undefined)
let since: string; //Record time from (inclusive). (optional) (default to undefined)
let until: string; //Record time to (exclusive). (optional) (default to undefined)
let userId: string; //Portal user id (also matches the requester, approver and reader of tool and access records). (optional) (default to undefined)
let tokenId: string; // (optional) (default to undefined)
let modelId: string; // (optional) (default to undefined)
let recordType: string; // (optional) (default to undefined)
let decision: string; //approved, rejected, expired, or denied (tool_denied). (optional) (default to undefined)
let tool: string; // (optional) (default to undefined)
let outcome: string; //outcome or status: succeeded, failed, blocked, ok, refused, error. (optional) (default to undefined)
let _interface: string; // (optional) (default to undefined)
let limit: number; // (optional) (default to 50)
let cursor: string; //nextCursor of the previous page (same organisation and range). (optional) (default to undefined)

const { status, data } = await apiInstance.aiAuditRecordsList(
    organisation,
    startDate,
    endDate,
    since,
    until,
    userId,
    tokenId,
    modelId,
    recordType,
    decision,
    tool,
    outcome,
    _interface,
    limit,
    cursor
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] | The organisation machine name | defaults to undefined|
| **startDate** | [**string**] | First UTC day (inclusive). At most 31 days, not in the future, not older than 365 days. | defaults to undefined|
| **endDate** | [**string**] | Last UTC day (inclusive). | defaults to undefined|
| **since** | [**string**] | Record time from (inclusive). | (optional) defaults to undefined|
| **until** | [**string**] | Record time to (exclusive). | (optional) defaults to undefined|
| **userId** | [**string**] | Portal user id (also matches the requester, approver and reader of tool and access records). | (optional) defaults to undefined|
| **tokenId** | [**string**] |  | (optional) defaults to undefined|
| **modelId** | [**string**] |  | (optional) defaults to undefined|
| **recordType** | [**string**] |  | (optional) defaults to undefined|
| **decision** | [**string**] | approved, rejected, expired, or denied (tool_denied). | (optional) defaults to undefined|
| **tool** | [**string**] |  | (optional) defaults to undefined|
| **outcome** | [**string**] | outcome or status: succeeded, failed, blocked, ok, refused, error. | (optional) defaults to undefined|
| **_interface** | [**string**] |  | (optional) defaults to undefined|
| **limit** | [**number**] |  | (optional) defaults to 50|
| **cursor** | [**string**] | nextCursor of the previous page (same organisation and range). | (optional) defaults to undefined|


### Return type

**AiAuditRecordsPage**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | One page. |  -  |
|**400** | Invalid range, filter, limit or cursor. |  -  |
|**401** | Invalid or expired token |  -  |
|**403** | PERMISSION_DENIED or SCOPE_REQUIRED |  -  |
|**502** | The AI audit log could not be reached. |  -  |
|**503** | UNAVAILABLE: the read could not be recorded, so it was not made. Retry. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

