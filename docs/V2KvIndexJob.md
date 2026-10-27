# V2KvIndexJob

The background job of the index (build or drop).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**phase** | **string** | settling: about 75 seconds before the backfill starts; scanning: the backfill reads existing items; cleaning: a drop removes index data; done: no work is left. | [default to undefined]
**scanned** | **number** | Items the job has examined. If phase and scanned do not change for more than 960 seconds, call KV_indexes_resume. | [default to undefined]

## Example

```typescript
import { V2KvIndexJob } from '@quantcdn/quant-client';

const instance: V2KvIndexJob = {
    phase,
    scanned,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
