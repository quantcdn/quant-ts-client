# V2KvIncrementResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **string** |  | [default to undefined]
**value** | **number** | The value after this increment. | [default to undefined]
**operation** | **string** |  | [default to undefined]
**updated_at** | **string** |  | [default to undefined]
**expires_at** | **number** | Epoch seconds. | [optional] [default to undefined]
**version** | **string** | Format 2 stores only. | [optional] [default to undefined]

## Example

```typescript
import { V2KvIncrementResponse } from '@quantcdn/quant-client';

const instance: V2KvIncrementResponse = {
    key,
    value,
    operation,
    updated_at,
    expires_at,
    version,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
