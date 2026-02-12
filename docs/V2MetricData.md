# V2MetricData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**series** | [**Array&lt;V2MetricDataPoint&gt;**](V2MetricDataPoint.md) | Time series data points | [default to undefined]
**period_total** | **number** | Total value for the period | [default to undefined]
**all_time_total** | **number** | All-time total value | [default to undefined]
**period_average** | **number** | Average value per time unit in the period | [default to undefined]

## Example

```typescript
import { V2MetricData } from '@quantcdn/quant-client';

const instance: V2MetricData = {
    series,
    period_total,
    all_time_total,
    period_average,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
