# V2CrawlerSchedule


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Schedule ID | [default to undefined]
**name** | **string** | Schedule name | [optional] [default to undefined]
**crawler_config_id** | **number** | Crawler config ID | [default to undefined]
**project_id** | **number** | Project ID | [default to undefined]
**crawler_last_run_id** | **number** | Last run ID | [default to undefined]
**schedule_cron_string** | **string** | Cron schedule string | [default to undefined]
**created_at** | **string** | Creation timestamp | [optional] [default to undefined]
**updated_at** | **string** | Last update timestamp | [optional] [default to undefined]

## Example

```typescript
import { V2CrawlerSchedule } from '@quantcdn/quant-client';

const instance: V2CrawlerSchedule = {
    id,
    name,
    crawler_config_id,
    project_id,
    crawler_last_run_id,
    schedule_cron_string,
    created_at,
    updated_at,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
