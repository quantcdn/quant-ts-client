# V2CrawlerRun


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Run ID | [default to undefined]
**crawler_config_id** | **number** | Crawler config ID | [default to undefined]
**project_id** | **number** | Project ID | [default to undefined]
**last_status** | **string** | Run status | [default to undefined]
**task_id** | **string** | Task ID | [default to undefined]
**started_at** | **number** | Start time (Unix timestamp) | [optional] [default to undefined]
**completed_at** | **number** | Completion time (Unix timestamp) | [optional] [default to undefined]
**created_at** | **string** | Creation timestamp | [optional] [default to undefined]
**updated_at** | **string** | Last update timestamp | [optional] [default to undefined]

## Example

```typescript
import { V2CrawlerRun } from '@quantcdn/quant-client';

const instance: V2CrawlerRun = {
    id,
    crawler_config_id,
    project_id,
    last_status,
    task_id,
    started_at,
    completed_at,
    created_at,
    updated_at,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
