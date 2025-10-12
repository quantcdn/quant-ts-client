# UpdateEnvironmentRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**composeDefinition** | [**Compose**](Compose.md) |  | [default to undefined]
**minCapacity** | **number** | Optional. Minimum number of tasks for auto-scaling. If provided at root level, will be merged into composeDefinition. | [optional] [default to undefined]
**maxCapacity** | **number** | Optional. Maximum number of tasks for auto-scaling. If provided at root level, will be merged into composeDefinition. | [optional] [default to undefined]

## Example

```typescript
import { UpdateEnvironmentRequest } from '@quantcdn/quant-client';

const instance: UpdateEnvironmentRequest = {
    composeDefinition,
    minCapacity,
    maxCapacity,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
