# V2KvIndexLookup

The key that holds the value, with the same body as a key read. A ledger entry adds ledger; its personal fields are [PERSONAL] (listed in personal) unless the caller has ledger_reveal and sends reveal=true.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **string** |  | [default to undefined]
**value** | **any** | The stored JSON value (any JSON type). | [optional] [default to undefined]
**status** | **string** |  | [default to undefined]
**message** | **string** |  | [default to undefined]
**created_at** | **string** |  | [optional] [default to undefined]
**updated_at** | **string** |  | [optional] [default to undefined]
**expires_at** | **number** | Epoch seconds. Absent when the key does not expire. | [optional] [default to undefined]
**encrypted** | **boolean** |  | [optional] [default to undefined]
**version** | **string** | ULID, new on every write. Absent on ledger entries. | [optional] [default to undefined]
**ledger** | [**V2KvLedgerMeta**](V2KvLedgerMeta.md) |  | [optional] [default to undefined]
**personal** | **Array&lt;string&gt;** | Ledger entries only: the personal fields the portal replaced with [PERSONAL] (* &#x3D; the whole value). | [optional] [default to undefined]

## Example

```typescript
import { V2KvIndexLookup } from '@quantcdn/quant-client';

const instance: V2KvIndexLookup = {
    key,
    value,
    status,
    message,
    created_at,
    updated_at,
    expires_at,
    encrypted,
    version,
    ledger,
    personal,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
