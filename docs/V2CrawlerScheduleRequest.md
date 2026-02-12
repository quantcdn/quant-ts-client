# V2CrawlerScheduleRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Schedule name. If not provided, defaults to \&#39;Schedule {crawler_name}\&#39;. | [optional] [default to undefined]
**schedule_cron_string** | **string** | Standard Unix cron expression with 5 space-separated fields: minute, hour, day-of-month, month, day-of-week. Example: 0 2 * * * for daily at 2 AM. | [default to undefined]

## Example

```typescript
import { V2CrawlerScheduleRequest } from '@quantcdn/quant-client';

const instance: V2CrawlerScheduleRequest = {
    name,
    schedule_cron_string,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
