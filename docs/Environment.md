# Environment

Environment creation/update request schema

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**envName** | **string** |  | [default to undefined]
**desiredCount** | **number** |  | [optional] [default to undefined]
**minCapacity** | **number** |  | [optional] [default to undefined]
**maxCapacity** | **number** |  | [optional] [default to undefined]
**cloneConfigurationFrom** | **string** |  | [optional] [default to undefined]
**imageSuffix** | **string** | Image tag suffix for cloning | [optional] [default to undefined]

## Example

```typescript
import { Environment } from '@quantcdn/quant-client';

const instance: Environment = {
    envName,
    desiredCount,
    minCapacity,
    maxCapacity,
    cloneConfigurationFrom,
    imageSuffix,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
