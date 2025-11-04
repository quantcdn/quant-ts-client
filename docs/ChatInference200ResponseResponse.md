# ChatInference200ResponseResponse

Assistant\'s response message. May contain text content and/or tool use requests.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**role** | **string** |  | [optional] [default to undefined]
**content** | **string** | Text response content | [optional] [default to undefined]
**toolUse** | [**ChatInference200ResponseResponseToolUse**](ChatInference200ResponseResponseToolUse.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ChatInference200ResponseResponse } from '@quantcdn/quant-client';

const instance: ChatInference200ResponseResponse = {
    role,
    content,
    toolUse,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
