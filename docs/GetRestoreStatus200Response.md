# GetRestoreStatus200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**restoreId** | **string** |  | [optional] [default to undefined]
**orgName** | **string** |  | [optional] [default to undefined]
**appName** | **string** |  | [optional] [default to undefined]
**envName** | **string** |  | [optional] [default to undefined]
**backupId** | **string** |  | [optional] [default to undefined]
**status** | **string** |  | [optional] [default to undefined]
**startedAt** | **string** |  | [optional] [default to undefined]
**completedAt** | **string** |  | [optional] [default to undefined]
**errorMessage** | **string** |  | [optional] [default to undefined]
**taskArn** | **string** |  | [optional] [default to undefined]
**ttl** | **number** |  | [optional] [default to undefined]

## Example

```typescript
import { GetRestoreStatus200Response } from '@quantcdn/quant-client';

const instance: GetRestoreStatus200Response = {
    restoreId,
    orgName,
    appName,
    envName,
    backupId,
    status,
    startedAt,
    completedAt,
    errorMessage,
    taskArn,
    ttl,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
