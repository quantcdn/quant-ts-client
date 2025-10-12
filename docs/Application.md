# Application


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**appName** | **string** |  | [default to undefined]
**organisation** | **string** |  | [default to undefined]
**database** | **object** |  | [optional] [default to undefined]
**filesystem** | **object** |  | [optional] [default to undefined]
**composeDefinition** | **object** |  | [optional] [default to undefined]
**status** | **object** |  | [optional] [default to undefined]
**deploymentInformation** | **object** |  | [optional] [default to undefined]
**imageReference** | **object** |  | [optional] [default to undefined]
**containerNames** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**minCapacity** | **number** |  | [optional] [default to undefined]
**maxCapacity** | **number** |  | [optional] [default to undefined]
**desiredCount** | **object** |  | [optional] [default to undefined]
**runningCount** | **object** |  | [optional] [default to undefined]
**environments** | **object** |  | [optional] [default to undefined]

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
    environments,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
