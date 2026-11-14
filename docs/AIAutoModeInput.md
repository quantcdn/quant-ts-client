# AIAutoModeInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **boolean** |  | [default to undefined]
**orchestratorModel** | **string** | Required when enabled is true. May be left out when enabled is false. | [optional] [default to undefined]
**group** | [**AIAutoModeInputGroup**](AIAutoModeInputGroup.md) |  | [default to undefined]
**watcherIntervalMinutes** | **number** |  | [default to undefined]
**maxParallelTasks** | **number** |  | [optional] [default to undefined]
**enforcement** | **string** |  | [default to undefined]
**autonomousDefault** | **boolean** |  | [default to undefined]

## Example

```typescript
import { AIAutoModeInput } from '@quantcdn/quant-client';

const instance: AIAutoModeInput = {
    enabled,
    orchestratorModel,
    group,
    watcherIntervalMinutes,
    maxParallelTasks,
    enforcement,
    autonomousDefault,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
