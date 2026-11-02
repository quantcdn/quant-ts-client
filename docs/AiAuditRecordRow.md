# AiAuditRecordRow


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **string** | Error message | [default to undefined]
**error** | **boolean** | Error flag | [default to undefined]
**key** | **string** |  | [default to undefined]
**date** | **string** |  | [default to undefined]
**summary** | [**AiAuditRecordSummary**](AiAuditRecordSummary.md) |  | [default to undefined]
**record** | **{ [key: string]: any; }** | The stored record. prompt and response are present only when the record has promptStored or responseStored true. | [optional] [default to undefined]
**omitted** | **string** | too-large: read the record with aiAuditRecordGet. | [optional] [default to undefined]

## Example

```typescript
import { AiAuditRecordRow } from '@quantcdn/quant-client';

const instance: AiAuditRecordRow = {
    message,
    error,
    key,
    date,
    summary,
    record,
    omitted,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
