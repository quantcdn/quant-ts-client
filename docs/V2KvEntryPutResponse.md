# V2KvEntryPutResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **string** |  | [default to undefined]
**value** | **any** | The stored JSON value. | [optional] [default to undefined]
**status** | **string** |  | [default to undefined]
**message** | **string** |  | [default to undefined]
**created_at** | **string** |  | [optional] [default to undefined]
**updated_at** | **string** |  | [optional] [default to undefined]
**expires_at** | **number** | Epoch seconds. Absent without ttl. | [optional] [default to undefined]
**version** | **string** | Format 2 stores only. The new version. | [optional] [default to undefined]
**conditional** | **boolean** | Format 2 stores. True when the write had ifAbsent or ifVersion. | [optional] [default to undefined]

## Example

```typescript
import { V2KvEntryPutResponse } from '@quantcdn/quant-client';

const instance: V2KvEntryPutResponse = {
    key,
    value,
    status,
    message,
    created_at,
    updated_at,
    expires_at,
    version,
    conditional,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
