# ApplicationCache

Managed Valkey cache configuration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cacheEndpoint** | **string** | Cache cluster endpoint | [optional] [default to undefined]
**cacheIdentifier** | **string** | Cache cluster identifier | [optional] [default to undefined]
**dataStorageMaxGb** | **number** | Maximum cache storage in GB | [optional] [default to undefined]

## Example

```typescript
import { ApplicationCache } from '@quantcdn/quant-client';

const instance: ApplicationCache = {
    cacheEndpoint,
    cacheIdentifier,
    dataStorageMaxGb,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
