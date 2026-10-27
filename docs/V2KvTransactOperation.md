# V2KvTransactOperation

Each type takes only its own fields. check: version. set: value, secret, ttl, ifAbsent, ifVersion. delete: ifVersion. increment: amount (no ttl). Any other field fails VALIDATION.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** |  | [default to undefined]
**key** | **string** |  | [default to undefined]
**version** | **string** | check only: the key must have this version and not be expired. | [optional] [default to undefined]
**value** | **any** | set only. Any JSON value. | [optional] [default to undefined]
**secret** | **boolean** | set only. Encrypt the value. | [optional] [default to undefined]
**ttl** | **number** | set only. Seconds (60 to 31,536,000). | [optional] [default to undefined]
**ifAbsent** | **boolean** | set only. | [optional] [default to undefined]
**ifVersion** | **string** | set and delete. | [optional] [default to undefined]
**amount** | **number** | increment only. Nonzero. | [optional] [default to 1]

## Example

```typescript
import { V2KvTransactOperation } from '@quantcdn/quant-client';

const instance: V2KvTransactOperation = {
    type,
    key,
    version,
    value,
    secret,
    ttl,
    ifAbsent,
    ifVersion,
    amount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
