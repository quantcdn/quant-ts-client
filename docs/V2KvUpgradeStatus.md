# V2KvUpgradeStatus

The latest format 1 to format 2 upgrade. Phases with a running step: preflight, creating, freezing, copying, verifying, rollback_freezing, rolling_back. Terminal: checked (dry run), failed, rolled_back, finalized. switched waits for rollback or finalize.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**phase** | **string** | The current upgrade phase. | [default to undefined]
**dryRun** | **boolean** |  | [default to undefined]
**v1Table** | **string** |  | [default to undefined]
**v2Table** | **string** |  | [default to undefined]
**startedAt** | **string** |  | [default to undefined]
**frozenAt** | **string** | When writes were last frozen. | [optional] [default to undefined]
**switchedAt** | **string** |  | [optional] [default to undefined]
**retainUntil** | **string** | The format 1 table is kept until this time (14 days after the switch); finalize is allowed after it. | [optional] [default to undefined]
**total** | **number** | Items counted by preflight. | [optional] [default to undefined]
**copied** | **number** | Items copied so far. | [optional] [default to undefined]
**invalidKeys** | **Array&lt;string&gt;** | Up to 20 keys that are not valid in format 2 (preflight). | [optional] [default to undefined]
**oversizeKeys** | **Array&lt;string&gt;** | Up to 20 keys whose items would exceed the 400 KB item limit in format 2 (preflight). | [optional] [default to undefined]
**error** | **string** | Why the upgrade failed. | [optional] [default to undefined]

## Example

```typescript
import { V2KvUpgradeStatus } from '@quantcdn/quant-client';

const instance: V2KvUpgradeStatus = {
    phase,
    dryRun,
    v1Table,
    v2Table,
    startedAt,
    frozenAt,
    switchedAt,
    retainUntil,
    total,
    copied,
    invalidKeys,
    oversizeKeys,
    error,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
