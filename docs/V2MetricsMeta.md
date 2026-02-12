# V2MetricsMeta


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**period** | **string** | The period type for this data | [default to undefined]
**granularity** | **string** | The granularity of data points | [default to undefined]
**start_time** | **string** | Start time of the data range (ISO8601 or Unix timestamp based on timestamp_format parameter) | [default to undefined]
**end_time** | **string** | End time of the data range (ISO8601 or Unix timestamp based on timestamp_format parameter) | [default to undefined]
**metrics** | **Array&lt;string&gt;** | List of metrics included in the response | [default to undefined]
**domain** | **string** | Domain filter applied (if any) | [optional] [default to undefined]

## Example

```typescript
import { V2MetricsMeta } from '@quantcdn/quant-client';

const instance: V2MetricsMeta = {
    period,
    granularity,
    start_time,
    end_time,
    metrics,
    domain,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
