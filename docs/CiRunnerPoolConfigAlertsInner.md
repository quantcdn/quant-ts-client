# CiRunnerPoolConfigAlertsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** | pool_error: runner VMs failed to start, VMs reported themselves unhealthy, or a job never reached this pool\&#39;s runners (detail says which). labels_unfit: a job asked for labels or an architecture this pool\&#39;s runners do not have, so the pool did not take it. | [optional] [default to undefined]
**since** | **string** |  | [optional] [default to undefined]
**detail** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { CiRunnerPoolConfigAlertsInner } from '@quantcdn/quant-client';

const instance: CiRunnerPoolConfigAlertsInner = {
    type,
    since,
    detail,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
