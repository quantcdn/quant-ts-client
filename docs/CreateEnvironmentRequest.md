# CreateEnvironmentRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**envName** | **string** |  | [default to undefined]
**minCapacity** | **number** |  | [optional] [default to undefined]
**maxCapacity** | **number** |  | [optional] [default to undefined]
**cloneConfigurationFrom** | **string** |  | [optional] [default to undefined]
**composeDefinition** | [**Compose**](Compose.md) |  | [optional] [default to undefined]
**imageSuffix** | **string** | Optional image tag suffix for cloning | [optional] [default to undefined]

## Example

```typescript
import { CreateEnvironmentRequest } from '@quantcdn/quant-client';

const instance: CreateEnvironmentRequest = {
    envName,
    minCapacity,
    maxCapacity,
    cloneConfigurationFrom,
    composeDefinition,
    imageSuffix,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
