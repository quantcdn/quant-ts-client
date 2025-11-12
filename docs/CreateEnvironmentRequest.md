# CreateEnvironmentRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**envName** | **string** | Environment name (e.g., \&#39;staging\&#39;, \&#39;development\&#39;) | [default to undefined]
**minCapacity** | **number** | Minimum number of instances | [optional] [default to undefined]
**maxCapacity** | **number** | Maximum number of instances | [optional] [default to undefined]
**cloneConfigurationFrom** | **string** | Clone configuration from an existing environment | [optional] [default to undefined]
**composeDefinition** | [**Compose**](Compose.md) |  | [optional] [default to undefined]
**imageSuffix** | **string** | Optional image tag suffix for cloning | [optional] [default to undefined]
**spotConfiguration** | [**SpotConfiguration**](SpotConfiguration.md) |  | [optional] [default to undefined]
**environment** | [**Array&lt;CreateEnvironmentRequestEnvironmentInner&gt;**](CreateEnvironmentRequestEnvironmentInner.md) | Environment variables to inject | [optional] [default to undefined]
**mergeEnvironment** | **boolean** | Whether to merge environment variables with cloned ones (true) or replace them (false). Default: false | [optional] [default to undefined]

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
    spotConfiguration,
    environment,
    mergeEnvironment,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
