# Application


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**appName** | **string** | Application name | [default to undefined]
**organisation** | **string** | Organisation machine name | [default to undefined]
**database** | [**ApplicationDatabase**](ApplicationDatabase.md) |  | [optional] [default to undefined]
**filesystem** | [**ApplicationFilesystem**](ApplicationFilesystem.md) |  | [optional] [default to undefined]
**composeDefinition** | [**Compose**](Compose.md) |  | [optional] [default to undefined]
**status** | **string** | Application status | [optional] [readonly] [default to undefined]
**deploymentInformation** | [**Array&lt;ApplicationDeploymentInformationInner&gt;**](ApplicationDeploymentInformationInner.md) | Deployment history | [optional] [readonly] [default to undefined]
**imageReference** | [**ApplicationImageReference**](ApplicationImageReference.md) |  | [optional] [default to undefined]
**containerNames** | **Array&lt;string&gt;** | List of container names | [optional] [readonly] [default to undefined]
**minCapacity** | **number** | Minimum task count for auto-scaling | [optional] [default to undefined]
**maxCapacity** | **number** | Maximum task count for auto-scaling | [optional] [default to undefined]
**desiredCount** | **number** | Desired task count | [optional] [default to undefined]
**runningCount** | **number** | Currently running task count | [optional] [default to undefined]
**environmentNames** | **Array&lt;string&gt;** | List of environment names (read-only) | [optional] [readonly] [default to undefined]

## Example

```typescript
import { Application } from '@quantcdn/quant-client';

const instance: Application = {
    appName,
    organisation,
    database,
    filesystem,
    composeDefinition,
    status,
    deploymentInformation,
    imageReference,
    containerNames,
    minCapacity,
    maxCapacity,
    desiredCount,
    runningCount,
    environmentNames,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
