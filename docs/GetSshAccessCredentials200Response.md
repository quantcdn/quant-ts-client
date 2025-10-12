# GetSshAccessCredentials200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **boolean** |  | [optional] [default to undefined]
**credentials** | [**GetSshAccessCredentials200ResponseCredentials**](GetSshAccessCredentials200ResponseCredentials.md) |  | [optional] [default to undefined]
**clusterName** | **string** |  | [optional] [default to undefined]
**taskArn** | **string** |  | [optional] [default to undefined]
**taskId** | **string** |  | [optional] [default to undefined]
**containerNames** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**region** | **string** |  | [optional] [default to undefined]
**expiresIn** | **number** |  | [optional] [default to undefined]
**organizationScope** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { GetSshAccessCredentials200Response } from '@quantcdn/quant-client';

const instance: GetSshAccessCredentials200Response = {
    success,
    credentials,
    clusterName,
    taskArn,
    taskId,
    containerNames,
    region,
    expiresIn,
    organizationScope,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
