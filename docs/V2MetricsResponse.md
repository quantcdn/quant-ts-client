# V2MetricsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**meta** | [**V2MetricsMeta**](V2MetricsMeta.md) |  | [default to undefined]
**data** | [**{ [key: string]: V2MetricData; }**](V2MetricData.md) | Metrics data keyed by metric name | [default to undefined]

## Example

```typescript
import { V2MetricsResponse } from '@quantcdn/quant-client';

const instance: V2MetricsResponse = {
    meta,
    data,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
