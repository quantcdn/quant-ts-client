# V2KvEntryPutRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **any** | Any JSON value. An empty object {} is stored as {}. | [default to undefined]
**secret** | **boolean** | Encrypt the value with KMS. Lists show [ENCRYPTED]. Not in a collection with an index on the value (INDEX_FIELD_ENCRYPTED). | [optional] [default to false]
**ttl** | **number** | Seconds until the key expires (60 to 31,536,000). A write without ttl removes any expiry. | [optional] [default to undefined]
**ifAbsent** | **boolean** | Format 2 only. Write only if the key is missing or expired (201). Not with ifVersion. | [optional] [default to undefined]
**ifVersion** | **string** | Format 2 only. Write only if the current version is this one. | [optional] [default to undefined]

## Example

```typescript
import { V2KvEntryPutRequest } from '@quantcdn/quant-client';

const instance: V2KvEntryPutRequest = {
    value,
    secret,
    ttl,
    ifAbsent,
    ifVersion,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
