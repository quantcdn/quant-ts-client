# ApplicationDatabase

Database configuration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rdsInstanceIdentifier** | **string** | Database instance identifier | [optional] [default to undefined]
**rdsInstanceEndpoint** | **string** | Database instance endpoint address | [optional] [default to undefined]
**rdsInstanceEngine** | **string** | Database engine | [optional] [default to undefined]
**rdsInstanceStatus** | **string** | Database instance status | [optional] [default to undefined]

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
