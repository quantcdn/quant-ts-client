# CreateApplicationRequestDatabase

Optional database configuration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**engine** | **string** | Database engine type (MySQL 8.4, Postgres) | [optional] [default to EngineEnum_Mysql]
**instanceClass** | **string** | RDS instance class | [optional] [default to 'db.t4g.micro']
**storageGb** | **number** | Allocated storage in GiB | [optional] [default to 20]
**multiAz** | **boolean** | Enable Multi-AZ deployment (higher availability and cost) | [optional] [default to false]

## Example

```typescript
import { CreateApplicationRequestDatabase } from '@quantcdn/quant-client';

const instance: CreateApplicationRequestDatabase = {
    engine,
    instanceClass,
    storageGb,
    multiAz,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
