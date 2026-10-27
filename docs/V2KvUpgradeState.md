# V2KvUpgradeState


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**format** | **number** |  | [default to undefined]
**state** | **string** | migrating while writes are frozen (an upgrade copy or a rollback). | [default to undefined]
**table** | **string** | The table that serves the store. | [default to undefined]
**upgrade** | [**V2KvUpgradeStatus**](V2KvUpgradeStatus.md) | Null when the store was never upgraded. | [default to undefined]

## Example

```typescript
import { V2KvUpgradeState } from '@quantcdn/quant-client';

const instance: V2KvUpgradeState = {
    format,
    state,
    table,
    upgrade,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
