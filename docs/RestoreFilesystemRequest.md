# RestoreFilesystemRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backupId** | **string** | The backup ID to restore (must match path param) | [default to undefined]
**acknowledgeDataloss** | **boolean** | Must be true. tar extraction overwrites same-named files in the target EFS in place; pre-existing files not in the archive are preserved. | [default to undefined]

## Example

```typescript
import { RestoreFilesystemRequest } from '@quantcdn/quant-client';

const instance: RestoreFilesystemRequest = {
    backupId,
    acknowledgeDataloss,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
