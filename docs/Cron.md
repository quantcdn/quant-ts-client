# Cron


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**scheduleExpression** | **string** |  | [optional] [default to undefined]
**command** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**targetContainerName** | **string** |  | [optional] [default to undefined]
**isEnabled** | **boolean** |  | [optional] [default to undefined]
**lastRun** | [**CronLastRun**](CronLastRun.md) | The newest run of the job. Null when the job has never run. Sent by the cron list. | [optional] [default to undefined]
**consecutiveFailures** | **number** | Failed runs (FAILED or FAILED_TO_START) from the newest run back to the first run that did not fail, counted over the latest 10 runs. 0 when the newest run did not fail. Sent by the cron list. | [optional] [default to undefined]

## Example

```typescript
import { Cron } from '@quantcdn/quant-client';

const instance: Cron = {
    name,
    description,
    scheduleExpression,
    command,
    targetContainerName,
    isEnabled,
    lastRun,
    consecutiveFailures,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
