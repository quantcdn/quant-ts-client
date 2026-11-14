# AIAutoModeConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **boolean** |  | [default to undefined]
**orchestratorModel** | **string** | Empty when the setting was saved off without an orchestrator. | [default to undefined]
**group** | [**AIAutoModeConfigGroup**](AIAutoModeConfigGroup.md) |  | [default to undefined]
**watcherIntervalMinutes** | **number** |  | [default to undefined]
**maxParallelTasks** | **number** |  | [optional] [default to undefined]
**enforcement** | **string** |  | [default to undefined]
**autonomousDefault** | **boolean** |  | [default to undefined]
**updatedAt** | **string** |  | [default to undefined]
**updatedBy** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { AIAutoModeConfig } from '@quantcdn/quant-client';

const instance: AIAutoModeConfig = {
    enabled,
    orchestratorModel,
    group,
    watcherIntervalMinutes,
    maxParallelTasks,
    enforcement,
    autonomousDefault,
    updatedAt,
    updatedBy,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
