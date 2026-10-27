# V2KvExport

An export of the whole store to gzip JSON Lines files (key, value, createdAt, updatedAt and, when present, expiresAt, version, encrypted). Secret values are exported as [ENCRYPTED]; ledger personal fields as [PERSONAL] (the row adds personal). Expired items are left out. Files are kept until expiresAt (7 days).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | ULID of the export. | [default to undefined]
**phase** | **string** |  | [default to undefined]
**requestedAt** | **string** |  | [default to undefined]
**updatedAt** | **string** | Moves on every step. An export in progress whose updatedAt is older than 960 seconds can be resumed. | [default to undefined]
**exportTime** | **string** | The point in time the export reads. | [optional] [default to undefined]
**completedAt** | **string** |  | [optional] [default to undefined]
**itemCount** | **number** |  | [optional] [default to undefined]
**skipped** | [**V2KvExportSkipped**](V2KvExportSkipped.md) |  | [optional] [default to undefined]
**sizeBytes** | **number** | Total size of the compressed files. | [optional] [default to undefined]
**parts** | **number** |  | [optional] [default to undefined]
**expiresAt** | **string** |  | [optional] [default to undefined]
**error** | **string** |  | [optional] [default to undefined]
**downloads** | [**Array&lt;V2KvExportDownload&gt;**](V2KvExportDownload.md) | Phase done only. | [optional] [default to undefined]

## Example

```typescript
import { V2KvExport } from '@quantcdn/quant-client';

const instance: V2KvExport = {
    id,
    phase,
    requestedAt,
    updatedAt,
    exportTime,
    completedAt,
    itemCount,
    skipped,
    sizeBytes,
    parts,
    expiresAt,
    error,
    downloads,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
