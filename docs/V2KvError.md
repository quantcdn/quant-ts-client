# V2KvError

Error body of every KV v2 route. A superset of V2Error. HTTP 400, 404, 409, 429 and 503 keep the KV service status, code and retryable. A KV service failure that the caller cannot act on is 500 INTERNAL. When retryable is true, the same request can be sent again (after Retry-After when present).  | code | status | retryable | meaning | |---|---|---|---| | VALIDATION | 400 | false | The request is not valid (body, parameter, key or value). | | LIMIT_EXCEEDED | 400 | false | A size or count limit is exceeded (item over 400 KB, batch, transact, value). | | CURSOR_INVALID | 400 | false | The cursor is not valid for this request. Start the list again. | | REQUIRES_FORMAT_2 | 400 | false | The operation needs a format 2 store. Upgrade the store first. | | INDEX_FIELD_ENCRYPTED | 400 | false | An indexed field is in a secret (encrypted) value. | | COUNT_WITH_TTL | 400 | false | A count index cannot include items that have a ttl. | | LEDGER_IMMUTABLE | 400 | false | A ledger entry cannot be changed or deleted. Use append. | | LEDGER_INDEX_KIND | 400 | false | This index kind is not allowed on a ledger collection. | | LEDGER_SUBJECT_REQUIRED | 400 | false | The ledger needs a subject field in each entry. | | LEDGER_DIRECTION | 400 | false | A ledger setting can only be raised, not lowered. | | CONFIRMATION_REQUIRED | 400 | false | confirm is missing or does not equal the store name. | | SCOPE_REQUIRED | 403 | false | The token does not list the scope that the route needs. | | PERMISSION_DENIED | 403 | false | The role of the token user does not have the permission. | | FORBIDDEN | 403 | false | The store is a system store and cannot be purged. | | KEY_NOT_FOUND | 404 | false | The key does not exist or has expired. | | STORE_NOT_FOUND | 404 | false | The store does not exist or is not in this project. | | EXPORT_NOT_FOUND | 404 | false | The store has no export. | | LEDGER_NOT_FOUND | 404 | false | The ledger does not exist. | | SUBJECT_NOT_FOUND | 404 | false | The ledger has no entries for the subject. | | VERIFICATION_NOT_FOUND | 404 | false | The verification run does not exist. | | SHRED_NOT_FOUND | 404 | false | The erasure record does not exist. | | INDEX_NOT_FOUND | 404 | false | The index does not exist. | | NOT_FOUND | 404 | false | No archive, tombstone or purge exists for the store or purge id. | | UPGRADE_CONFLICT | 409 | false | The upgrade action is not valid in the current upgrade state. | | CONFLICT | 409 | false | A condition (ifAbsent, ifVersion, check) failed. See reason, key and currentVersion. | | UNIQUE_VIOLATION | 409 | false | A unique index already has the value. See index and existingKey. | | EXPORT_IN_PROGRESS | 409 | false | An export of the store is already running. | | LEDGER_COLLECTION_NOT_EMPTY | 409 | false | The collection already has items, so it cannot become a ledger. | | LEDGER_RETAINED | 409 | false | The ledger is in its retention period. See retainUntil. | | LEDGER_PRESENT | 409 | false | A ledger blocks the action. See ledgers. | | STORE_NAME_RETAINED | 409 | false | The store name is held by a retained ledger archive. | | LEDGER_FORKED | 409 | false | The ledger chain does not agree with its archive or digest. See reason. | | LEDGER_DROPPED | 409 | false | The ledger was dropped. | | LEDGER_FORMAT_RETIRED | 409 | false | The ledger uses a retired subject format. Declare a new ledger. | | STORE_NOT_DELETED | 409 | false | The store still exists. Delete the store first. | | ARCHIVE_RETAINED | 409 | false | The archive is still locked or in its 24-hour quiet period. See retainedUntil. | | PURGE_IN_PROGRESS | 409 | false | Another purge of the store is running. See purgeId. | | PURGE_BLOCKED | 409 | false | The last purge is blocked and needs Quant support. See purgeId. | | PURGE_NOT_COMPLETE | 409 | false | The purge is not complete, so there is no receipt yet. See state. | | DIGEST_OWED | 409 | true | The last ledger entries are not in a signed digest yet. Send the delete again in a few minutes. | | CONTENTION | 409 | true | Another write changed the same data at the same time. Send again. | | INDEX_NOT_READY | 409 | true | The index is still building. Send again later. | | LEDGER_NOT_READY | 409 | true | The ledger is PENDING. Send again after activeAfter. | | RATE_LIMITED | 429 | true | Too many requests. Wait for Retry-After seconds. Also retryAfter (seconds) on a purge start. | | INTERNAL | 500 | false | The KV service failed. No detail is given. | | STORE_MIGRATING | 503 | true | The store is being upgraded. Wait for Retry-After seconds. | | UNAVAILABLE | 503 | true (false when the outcome of a write is unknown) | The KV service did not answer. With retryable false, read the data before you send the write again. |

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | **boolean** | Always true. | [default to undefined]
**message** | **string** |  | [default to undefined]
**code** | **string** |  | [default to undefined]
**retryable** | **boolean** | True when the same request can be sent again safely. | [default to undefined]
**key** | **string** | CONFLICT: the key the condition named. | [optional] [default to undefined]
**currentVersion** | **string** | CONFLICT: the current version, when the key exists and has not expired. | [optional] [default to undefined]
**reason** | **string** | CONFLICT: why the condition failed. LEDGER_COLLECTION_NOT_EMPTY, LEDGER_RETAINED, LEDGER_FORKED: the cause. | [optional] [default to undefined]
**retainUntil** | **string** | LEDGER_RETAINED: when the archive retention ends. | [optional] [default to undefined]
**activeAfter** | **string** | LEDGER_NOT_READY: when the PENDING ledger can become ACTIVE. | [optional] [default to undefined]
**collection** | **string** | LEDGER_RETAINED (unarchived): the collection with unarchived entries. | [optional] [default to undefined]
**shard** | **string** | LEDGER_RETAINED (unarchived): the shard with unarchived entries. | [optional] [default to undefined]
**operation** | **number** | transact: the index of the failing operation. | [optional] [default to undefined]
**index** | **string** | UNIQUE_VIOLATION: the unique index. | [optional] [default to undefined]
**existingKey** | **string** | UNIQUE_VIOLATION: the key that holds the value. | [optional] [default to undefined]
**ledgers** | [**Array&lt;V2KvErrorLedgersInner&gt;**](V2KvErrorLedgersInner.md) | LEDGER_PRESENT (store delete): the ledgers that block the delete. | [optional] [default to undefined]
**hint** | **string** | What to do next, when the KV service gives a hint. | [optional] [default to undefined]
**state** | **string** | The current state of the store, index, ledger or export, when the error names it. | [optional] [default to undefined]

## Example

```typescript
import { V2KvError } from '@quantcdn/quant-client';

const instance: V2KvError = {
    error,
    message,
    code,
    retryable,
    key,
    currentVersion,
    reason,
    retainUntil,
    activeAfter,
    collection,
    shard,
    operation,
    index,
    existingKey,
    ledgers,
    hint,
    state,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
