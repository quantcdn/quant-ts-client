# CreateApplicationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**appName** | **string** | Application name | [default to undefined]
**composeDefinition** | [**Compose**](Compose.md) |  | [default to undefined]
**minCapacity** | **number** | Minimum task count for auto-scaling | [optional] [default to 1]
**maxCapacity** | **number** | Maximum task count for auto-scaling | [optional] [default to 1]
**database** | [**CreateApplicationRequestDatabase**](CreateApplicationRequestDatabase.md) |  | [optional] [default to undefined]
**filesystem** | [**CreateApplicationRequestFilesystem**](CreateApplicationRequestFilesystem.md) |  | [optional] [default to undefined]

## Example

```typescript
import { CreateApplicationRequest } from '@quantcdn/quant-client';

const instance: CreateApplicationRequest = {
    appName,
    composeDefinition,
    minCapacity,
    maxCapacity,
    database,
    filesystem,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
