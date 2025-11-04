# ChatInference200ResponseResponseToolUseOneOf

Single tool request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**toolUseId** | **string** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**input** | **object** |  | [optional] [default to undefined]
**executionId** | **string** | Present for async tools with autoExecute | [optional] [default to undefined]
**status** | **string** | Present for async tools with autoExecute | [optional] [default to undefined]
**result** | [**ChatInference200ResponseResponseToolUseOneOfResult**](ChatInference200ResponseResponseToolUseOneOfResult.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ChatInference200ResponseResponseToolUseOneOf } from '@quantcdn/quant-client';

const instance: ChatInference200ResponseResponseToolUseOneOf = {
    toolUseId,
    name,
    input,
    executionId,
    status,
    result,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
