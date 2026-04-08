# CreateCustomTool201Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **boolean** |  | [optional] [default to undefined]
**tool** | **object** |  | [optional] [default to undefined]
**edgeFunctionUrl** | **string** | Computed edge function URL (read-only) | [optional] [default to undefined]
**edgeFunctionCode** | **string** | The deployed edge function code | [optional] [default to undefined]
**isUpdate** | **boolean** | Whether this was an update to an existing tool | [optional] [default to undefined]
**message** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { CreateCustomTool201Response } from '@quantcdn/quant-client';

const instance: CreateCustomTool201Response = {
    success,
    tool,
    edgeFunctionUrl,
    edgeFunctionCode,
    isUpdate,
    message,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
