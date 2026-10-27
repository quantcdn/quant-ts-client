# DNSCreateRecordRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Name relative to the zone; @ denotes the apex | [default to undefined]
**type** | **string** |  | [default to undefined]
**value** | **string** |  | [default to undefined]
**ttl** | **number** |  | [optional] [default to 300]

## Example

```typescript
import { DNSCreateRecordRequest } from '@quantcdn/quant-client';

const instance: DNSCreateRecordRequest = {
    name,
    type,
    value,
    ttl,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
