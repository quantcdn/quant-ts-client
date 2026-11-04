# PutCiValueRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **string** |  | [default to undefined]
**value** | **string** |  | [default to undefined]
**repo** | **string** | Owner/name. Lower-cased by the server. Leave out for an organisation value. | [optional] [default to undefined]
**branches** | **Array&lt;string&gt;** | Only jobs on these branches get the value. Leave out for every branch. | [optional] [default to undefined]

## Example

```typescript
import { PutCiValueRequest } from '@quantcdn/quant-client';

const instance: PutCiValueRequest = {
    kind,
    value,
    repo,
    branches,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
