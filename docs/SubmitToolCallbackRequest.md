# SubmitToolCallbackRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**callbackId** | **string** | The callbackId from the waiting_callback status response | [default to undefined]
**toolResults** | [**Array&lt;SubmitToolCallbackRequestToolResultsInner&gt;**](SubmitToolCallbackRequestToolResultsInner.md) | Results of client-executed tools | [default to undefined]

## Example

```typescript
import { SubmitToolCallbackRequest } from '@quantcdn/quant-client';

const instance: SubmitToolCallbackRequest = {
    callbackId,
    toolResults,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
