# ChatInferenceRequestResponseFormat

Structured JSON output (Claude 3.5 Sonnet v1/v2, Nova Pro)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** |  | [optional] [default to undefined]
**jsonSchema** | **object** | JSON Schema defining expected structure | [optional] [default to undefined]

## Example

```typescript
import { ChatInferenceRequestResponseFormat } from '@quantcdn/quant-client';

const instance: ChatInferenceRequestResponseFormat = {
    type,
    jsonSchema,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
