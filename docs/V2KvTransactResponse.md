# V2KvTransactResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conditional** | **boolean** |  | [default to undefined]
**versions** | **{ [key: string]: string; }** | The new version of each set and increment key. | [default to undefined]
**replayed** | **boolean** | True when an earlier request with the same idempotencyKey applied the operations. | [optional] [default to undefined]

## Example

```typescript
import { V2KvTransactResponse } from '@quantcdn/quant-client';

const instance: V2KvTransactResponse = {
    conditional,
    versions,
    replayed,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
