# ChatInference200ResponseResponseToolUseOneOf1Inner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**toolUseId** | **string** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**input** | **object** |  | [optional] [default to undefined]
**executionId** | **string** | Present for async tools with autoExecute | [optional] [default to undefined]
**status** | **string** | Present for async tools with autoExecute | [optional] [default to undefined]
**result** | **object** | Present when status&#x3D;\&#39;complete\&#39; for sync tools | [optional] [default to undefined]

## Example

```typescript
import { ChatInference200ResponseResponseToolUseOneOf1Inner } from '@quantcdn/quant-client';

const instance: ChatInference200ResponseResponseToolUseOneOf1Inner = {
    toolUseId,
    name,
    input,
    executionId,
    status,
    result,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
