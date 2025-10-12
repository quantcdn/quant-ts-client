# V1Revision


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**md5** | **string** |  | [optional] [default to undefined]
**type** | **string** |  | [optional] [default to undefined]
**byte_length** | **number** |  | [optional] [default to undefined]
**revision_number** | **number** |  | [optional] [default to undefined]
**date_timestamp** | **number** |  | [optional] [default to undefined]
**deleted** | **boolean** |  | [optional] [default to undefined]
**deleted_timestamp** | **number** |  | [optional] [default to undefined]
**transitions** | [**Array&lt;V1Transition&gt;**](V1Transition.md) |  | [optional] [default to undefined]
**info** | [**V1Info**](V1Info.md) |  | [optional] [default to undefined]

## Example

```typescript
import { V1Revision } from '@quantcdn/quant-client';

const instance: V1Revision = {
    md5,
    type,
    byte_length,
    revision_number,
    date_timestamp,
    deleted,
    deleted_timestamp,
    transitions,
    info,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
