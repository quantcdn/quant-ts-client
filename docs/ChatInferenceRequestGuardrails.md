# ChatInferenceRequestGuardrails

AWS Bedrock guardrails configuration for content filtering and safety.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**guardrailIdentifier** | **string** | Guardrail identifier from AWS Bedrock | [optional] [default to undefined]
**guardrailVersion** | **string** | Guardrail version | [optional] [default to undefined]
**trace** | **string** | Enable guardrail trace output | [optional] [default to undefined]

## Example

```typescript
import { ChatInferenceRequestGuardrails } from '@quantcdn/quant-client';

const instance: ChatInferenceRequestGuardrails = {
    guardrailIdentifier,
    guardrailVersion,
    trace,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
