# ApplicationDatabase

Database configuration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rdsInstanceIdentifier** | **string** | RDS instance identifier | [optional] [default to undefined]
**rdsInstanceEndpoint** | **string** | RDS instance endpoint address | [optional] [default to undefined]
**rdsInstanceEngine** | **string** | Database engine | [optional] [default to undefined]
**rdsInstanceStatus** | **string** | RDS instance status | [optional] [default to undefined]

## Example

```typescript
import { ApplicationDatabase } from '@quantcdn/quant-client';

const instance: ApplicationDatabase = {
    rdsInstanceIdentifier,
    rdsInstanceEndpoint,
    rdsInstanceEngine,
    rdsInstanceStatus,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
