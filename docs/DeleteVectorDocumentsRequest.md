# DeleteVectorDocumentsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**purgeAll** | **boolean** | Delete ALL documents in collection | [optional] [default to undefined]
**documentIds** | **Array&lt;string&gt;** | Delete specific documents by UUID | [optional] [default to undefined]
**metadata** | [**DeleteVectorDocumentsRequestMetadata**](DeleteVectorDocumentsRequestMetadata.md) |  | [optional] [default to undefined]

## Example

```typescript
import { DeleteVectorDocumentsRequest } from '@quantcdn/quant-client';

const instance: DeleteVectorDocumentsRequest = {
    purgeAll,
    documentIds,
    metadata,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
