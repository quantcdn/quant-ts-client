# CreateAISessionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**model** | **string** | Model ID to use for this session | [default to undefined]
**title** | **string** | Optional session title | [optional] [default to undefined]
**system_prompt** | **string** | Optional system prompt | [optional] [default to undefined]
**max_tokens** | **number** | Optional max tokens | [optional] [default to undefined]
**temperature** | **number** | Optional temperature | [optional] [default to undefined]

## Example

```typescript
import { CreateAISessionRequest } from '@quantcdn/quant-client';

const instance: CreateAISessionRequest = {
    model,
    title,
    system_prompt,
    max_tokens,
    temperature,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
