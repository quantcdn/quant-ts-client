# CronLastRun

Summary of the newest run of a cron job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**runId** | **string** |  | [optional] [default to undefined]
**status** | **string** | FAILED_TO_START: the task could not be launched, so the command never ran (for example, the job targets a container that no longer exists). | [optional] [default to undefined]
**createdAt** | **string** |  | [optional] [default to undefined]
**exitCode** | **number** |  | [optional] [default to undefined]
**errorMessage** | **string** | Why the run failed, in plain text. Set when the status is FAILED_TO_START. | [optional] [default to undefined]

## Example

```typescript
import { CronLastRun } from '@quantcdn/quant-client';

const instance: CronLastRun = {
    runId,
    status,
    createdAt,
    exitCode,
    errorMessage,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
