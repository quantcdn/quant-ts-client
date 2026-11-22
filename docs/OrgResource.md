# OrgResource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**orgName** | **string** |  | [optional] [default to undefined]
**resourceId** | **string** |  | [optional] [default to undefined]
**type** | **string** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**status** | **string** | creating and updating apply to a CI runner pool | [optional] [default to undefined]
**scope** | **string** | org for resources managed by these endpoints. app rows are compatibility records for an application-managed cache and cannot be mutated here. | [optional] [default to undefined]
**config** | **object** | Type-specific settings: dataStorageMaxGb for a cache, and a CiRunnerPoolConfig for a CI runner pool. | [optional] [default to undefined]
**physical** | **object** | Provisioned detail: bucket and region for object storage, cache identifier and endpoint for a cache. Not returned for a CI runner pool. | [optional] [default to undefined]
**effectiveCacheResidency** | **string** | CI runner pool only (absent on other types): the cache residency the pool runs with. It is config.cacheResidency when set; otherwise allow-github for a pool that accepts public repositories, and au-only for every other pool. | [optional] [readonly] [default to undefined]
**createdAt** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { OrgResource } from '@quantcdn/quant-client';

const instance: OrgResource = {
    orgName,
    resourceId,
    type,
    name,
    status,
    scope,
    config,
    physical,
    effectiveCacheResidency,
    createdAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
