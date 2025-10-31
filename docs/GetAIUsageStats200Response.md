# GetAIUsageStats200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total_requests** | **number** | Total number of API requests | [optional] [default to undefined]
**total_tokens** | **number** | Total tokens consumed across all requests | [optional] [default to undefined]
**by_model** | [**{ [key: string]: GetAIUsageStats200ResponseByModelValue; }**](GetAIUsageStats200ResponseByModelValue.md) | Usage breakdown by model ID | [optional] [default to undefined]

## Example

```typescript
import { GetAIUsageStats200Response } from '@quantcdn/quant-client';

const instance: GetAIUsageStats200Response = {
    total_requests,
    total_tokens,
    by_model,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
