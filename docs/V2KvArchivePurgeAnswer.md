# V2KvArchivePurgeAnswer

The one answer of KV_archives_purge, for 200 and 202; no property is required. A dry run answers 200 with dryRun true and the counts (nothing is deleted). A start answers 202 with purgeId and state (the purge was accepted, or a repeat with the same Idempotency-Key found the existing one); read it with KV_archives_purge_show. For a dry run, eligible is false when any version is locked, a legal hold is on, a delete marker exists, or the quiet period (24 hours after deletedAt) has not passed. At most 100,000 versions are counted inline (partial true past that).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**purgeId** | **string** | Set on a start (202). | [optional] [default to undefined]
**state** | **string** | Set on a start (202). | [optional] [default to undefined]
**dryRun** | **boolean** |  | [optional] [default to undefined]
**store** | **string** |  | [optional] [default to undefined]
**eligible** | **boolean** |  | [optional] [default to undefined]
**partial** | **boolean** |  | [optional] [default to undefined]
**versions** | **number** |  | [optional] [default to undefined]
**bytes** | **number** |  | [optional] [default to undefined]
**ledgerObjects** | **number** |  | [optional] [default to undefined]
**digestObjects** | **number** |  | [optional] [default to undefined]
**anchorObjects** | **number** |  | [optional] [default to undefined]
**deleteMarkers** | **number** |  | [optional] [default to undefined]
**latestRetainUntil** | **string** |  | [optional] [default to undefined]
**earliestPurgeAt** | **string** |  | [optional] [default to undefined]
**quietUntil** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { V2KvArchivePurgeAnswer } from '@quantcdn/quant-client';

const instance: V2KvArchivePurgeAnswer = {
    purgeId,
    state,
    dryRun,
    store,
    eligible,
    partial,
    versions,
    bytes,
    ledgerObjects,
    digestObjects,
    anchorObjects,
    deleteMarkers,
    latestRetainUntil,
    earliestPurgeAt,
    quietUntil,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
