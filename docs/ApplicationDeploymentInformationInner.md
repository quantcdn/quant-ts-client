# ApplicationDeploymentInformationInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deploymentId** | **string** | Deployment identifier | [optional] [default to undefined]
**taskDefinitionArn** | **string** | Task definition ARN used | [optional] [default to undefined]
**createdAt** | **string** | Deployment creation timestamp | [optional] [default to undefined]
**status** | **string** | Deployment status | [optional] [default to undefined]
**imageTag** | **string** | Image tag deployed | [optional] [default to undefined]

## Example

```typescript
import { ApplicationDeploymentInformationInner } from '@quantcdn/quant-client';

const instance: ApplicationDeploymentInformationInner = {
    deploymentId,
    taskDefinitionArn,
    createdAt,
    status,
    imageTag,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
