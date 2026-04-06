# ChatInference200ResponseUsage

Token usage and cost for this inference call

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inputTokens** | **number** | Number of input tokens | [optional] [default to undefined]
**outputTokens** | **number** | Number of output tokens | [optional] [default to undefined]
**totalTokens** | **number** | Total tokens consumed | [optional] [default to undefined]
**costCents** | **number** | Cost of this inference call in US cents | [optional] [default to undefined]

## Example

```typescript
import { ChatInference200ResponseUsage } from '@quantcdn/quant-client';

const instance: ChatInference200ResponseUsage = {
    inputTokens,
    outputTokens,
    totalTokens,
    costCents,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
