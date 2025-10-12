# Environment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**envName** | **string** |  | [default to undefined]
**status** | **string** |  | [optional] [default to undefined]
**runningCount** | **number** |  | [optional] [default to undefined]
**desiredCount** | **number** |  | [optional] [default to undefined]
**minCapacity** | **number** |  | [optional] [default to undefined]
**maxCapacity** | **number** |  | [optional] [default to undefined]
**cloneConfigurationFrom** | **string** |  | [optional] [default to undefined]
**imageSuffix** | **string** | Image tag suffix for cloning | [optional] [default to undefined]
**taskDefinition** | **object** |  | [optional] [default to undefined]
**service** | **object** |  | [optional] [default to undefined]
**loadBalancer** | **object** |  | [optional] [default to undefined]
**securityGroup** | **object** |  | [optional] [default to undefined]
**subnet** | **object** |  | [optional] [default to undefined]
**vpc** | **object** |  | [optional] [default to undefined]
**volumes** | [**Array&lt;Volume&gt;**](Volume.md) |  | [optional] [default to undefined]
**cron** | [**Array&lt;Cron&gt;**](Cron.md) |  | [optional] [default to undefined]

## Example

```typescript
import { Environment } from '@quantcdn/quant-client';

const instance: Environment = {
    envName,
    status,
    runningCount,
    desiredCount,
    minCapacity,
    maxCapacity,
    cloneConfigurationFrom,
    imageSuffix,
    taskDefinition,
    service,
    loadBalancer,
    securityGroup,
    subnet,
    vpc,
    volumes,
    cron,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
