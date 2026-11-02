# AiAuditRecordSummary

Normalised fields of any record type. A field with an unexpected type is left out.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **string** | Error message | [default to undefined]
**error** | **boolean** | Error flag | [default to undefined]
**recordType** | **string** | inference for a record without recordType; tool_denied, tool_proposal, tool_decision, tool_outcome, slack_bot_api, audit_access, ...; unknown for an unreadable object | [default to undefined]
**timestamp** | **string** |  | [optional] [default to undefined]
**userId** | **string** |  | [optional] [default to undefined]
**tokenId** | **string** |  | [optional] [default to undefined]
**modelId** | **string** |  | [optional] [default to undefined]
**_interface** | **string** |  | [optional] [default to undefined]
**tools** | **Array&lt;string&gt;** |  | [default to undefined]
**decision** | **string** |  | [optional] [default to undefined]
**outcome** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { AiAuditRecordSummary } from '@quantcdn/quant-client';

const instance: AiAuditRecordSummary = {
    message,
    error,
    recordType,
    timestamp,
    userId,
    tokenId,
    modelId,
    _interface,
    tools,
    decision,
    outcome,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
