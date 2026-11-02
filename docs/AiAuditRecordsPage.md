# AiAuditRecordsPage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **string** | Error message | [default to undefined]
**error** | **boolean** | Error flag | [default to undefined]
**orgId** | **string** |  | [default to undefined]
**startDate** | **string** |  | [default to undefined]
**endDate** | **string** |  | [default to undefined]
**count** | **number** |  | [default to undefined]
**records** | [**Array&lt;AiAuditRecordRow&gt;**](AiAuditRecordRow.md) |  | [default to undefined]
**scanned** | **number** | Keys examined by this call | [default to undefined]
**skippedArchived** | **number** | Records older than 365 days (archived) that this call left out | [default to undefined]
**hasMore** | **boolean** |  | [default to undefined]
**nextCursor** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { AiAuditRecordsPage } from '@quantcdn/quant-client';

const instance: AiAuditRecordsPage = {
    message,
    error,
    orgId,
    startDate,
    endDate,
    count,
    records,
    scanned,
    skippedArchived,
    hasMore,
    nextCursor,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
