# QueryVectorCollectionRequestFilter

Filter results by metadata fields. Applied AFTER semantic search (or alone in listByMetadata mode). All conditions use AND logic.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exact** | **{ [key: string]: any; }** | Exact match on metadata fields. Keys are metadata field names, values are expected values. | [optional] [default to undefined]
**contains** | **{ [key: string]: Array&lt;string&gt;; }** | Array contains filter for array metadata fields (like tags). Returns documents where the metadata array contains ANY of the specified values. | [optional] [default to undefined]

## Example

```typescript
import { QueryVectorCollectionRequestFilter } from '@quantcdn/quant-client';

const instance: QueryVectorCollectionRequestFilter = {
    exact,
    contains,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
