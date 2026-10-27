# GetEnvironmentLogs200ResponsePagination


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**limit** | **number** | Page size that was applied | [optional] [default to undefined]
**hasMore** | **boolean** | True when another page is available | [optional] [default to undefined]
**nextToken** | **string** | Token for the next page. Present only when hasMore is true. | [optional] [default to undefined]
**total** | **number** | Total events in the time range. Present only when includeTotal&#x3D;true. | [optional] [default to undefined]
**totalPages** | **number** | ceil(total / limit). Present only when includeTotal&#x3D;true. | [optional] [default to undefined]

## Example

```typescript
import { GetEnvironmentLogs200ResponsePagination } from '@quantcdn/quant-client';

const instance: GetEnvironmentLogs200ResponsePagination = {
    limit,
    hasMore,
    nextToken,
    total,
    totalPages,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
