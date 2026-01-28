# ListFiles200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**files** | [**Array&lt;ListFiles200ResponseFilesInner&gt;**](ListFiles200ResponseFilesInner.md) |  | [optional] [default to undefined]
**nextCursor** | **string** | Cursor for next page | [optional] [default to undefined]
**hasMore** | **boolean** | True if more results available | [optional] [default to undefined]

## Example

```typescript
import { ListFiles200Response } from '@quantcdn/quant-client';

const instance: ListFiles200Response = {
    files,
    nextCursor,
    hasMore,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
