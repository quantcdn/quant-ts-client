# Compose


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**containers** | [**Array&lt;Container&gt;**](Container.md) |  | [optional] [default to undefined]
**architecture** | **string** |  | [optional] [default to undefined]
**taskCpu** | **number** |  | [optional] [default to undefined]
**taskMemory** | **number** |  | [optional] [default to undefined]
**taskRoleArn** | **string** |  | [optional] [default to undefined]
**minCapacity** | **number** |  | [optional] [default to undefined]
**maxCapacity** | **number** |  | [optional] [default to undefined]

## Example

```typescript
import { Compose } from '@quantcdn/quant-client';

const instance: Compose = {
    containers,
    architecture,
    taskCpu,
    taskMemory,
    taskRoleArn,
    minCapacity,
    maxCapacity,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
