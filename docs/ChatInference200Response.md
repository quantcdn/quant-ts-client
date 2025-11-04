# ChatInference200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**response** | [**ChatInference200ResponseResponse**](ChatInference200ResponseResponse.md) |  | [optional] [default to undefined]
**model** | **string** | Model used for generation | [optional] [default to undefined]
**requestId** | **string** | Unique request identifier | [optional] [default to undefined]
**finishReason** | **string** | Why the model stopped generating | [optional] [default to undefined]
**usage** | [**ChatInference200ResponseUsage**](ChatInference200ResponseUsage.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ChatInference200Response } from '@quantcdn/quant-client';

const instance: ChatInference200Response = {
    response,
    model,
    requestId,
    finishReason,
    usage,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
