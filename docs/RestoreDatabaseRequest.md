# RestoreDatabaseRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backupId** | **string** | The backup ID to restore (must match path param) | [default to undefined]
**acknowledgeDataloss** | **boolean** | Must be true to confirm existing data will be overwritten | [default to undefined]

## Example

```typescript
import { RestoreDatabaseRequest } from '@quantcdn/quant-client';

const instance: RestoreDatabaseRequest = {
    backupId,
    acknowledgeDataloss,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
