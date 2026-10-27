# V2KvUpgradeRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **string** | start: preflight, copy and switch to format 2. rollback: copy back to format 1 after the switch. finalize: delete the format 1 table after retainUntil; no rollback is possible after it. resume: queue the current step again when the phase has not changed for more than 960 seconds. | [default to undefined]
**dryRun** | **boolean** | start only: run preflight and stop at phase checked. Must be a JSON boolean. | [optional] [default to false]

## Example

```typescript
import { V2KvUpgradeRequest } from '@quantcdn/quant-client';

const instance: V2KvUpgradeRequest = {
    action,
    dryRun,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
