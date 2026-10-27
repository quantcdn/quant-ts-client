# V2KvEntry

One key with its metadata. A ledger entry adds ledger and has no version. On a ledger entry, personal fields read \"[PERSONAL]\" and personal names them, unless the caller revealed them (reveal=true with the ledger_reveal permission). Unless revealed, the subject field of a pseudonym ledger shows the subject token (or \"[PERSONAL]\", listed in personal). A shredded personal field reads {\"$shredded\": true}.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **string** |  | [default to undefined]
**value** | **any** | The stored JSON value (any JSON type), decrypted when it was stored as a secret. In a key list a secret value reads [ENCRYPTED]. | [optional] [default to undefined]
**encrypted** | **boolean** | True when the value was stored as a secret. | [optional] [default to undefined]
**status** | **string** | Single-key reads only. | [optional] [default to undefined]
**message** | **string** | Single-key reads only. | [optional] [default to undefined]
**created_at** | **string** |  | [optional] [default to undefined]
**updated_at** | **string** |  | [optional] [default to undefined]
**expires_at** | **number** | Epoch seconds when the key expires. Absent when the key does not expire. | [optional] [default to undefined]
**version** | **string** | Format 2 stores only. A ULID, new on every write. Absent on ledger entries. | [optional] [default to undefined]
**ledger** | [**V2KvLedgerMeta**](V2KvLedgerMeta.md) |  | [optional] [default to undefined]
**personal** | **Array&lt;string&gt;** | Ledger entries only: the personal fields that read \&quot;[PERSONAL]\&quot;. [\&quot;*\&quot;] when the whole value is hidden (the ledger definition could not be read). | [optional] [default to undefined]

## Example

```typescript
import { V2KvEntry } from '@quantcdn/quant-client';

const instance: V2KvEntry = {
    key,
    value,
    encrypted,
    status,
    message,
    created_at,
    updated_at,
    expires_at,
    version,
    ledger,
    personal,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
