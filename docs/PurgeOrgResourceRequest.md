# PurgeOrgResourceRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**scope** | **string** |  | [default to undefined]
**application** | **string** | scope environment only | [optional] [default to undefined]
**environment** | **string** | scope environment only | [optional] [default to undefined]
**confirm** | **boolean** | scope all only; must be true | [optional] [default to undefined]
**cursor** | **string** | scope environment only; resume a partial purge | [optional] [default to undefined]

## Example

```typescript
import { PurgeOrgResourceRequest } from '@quantcdn/quant-client';

const instance: PurgeOrgResourceRequest = {
    scope,
    application,
    environment,
    confirm,
    cursor,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
