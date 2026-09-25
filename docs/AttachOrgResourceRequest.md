# AttachOrgResourceRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application** | **string** |  | [default to undefined]
**environment** | **string** |  | [default to undefined]
**envVarPrefix** | **string** | Namespaces every injected variable, so MEDIA yields MEDIA_S3_BUCKET | [optional] [default to undefined]
**accessLevel** | **string** | Cache only. scoped injects an RBAC user limited to this environment\&#39;s CACHE_PREFIX (plain and {hash-tag} forms) with FLUSHALL and FLUSHDB denied. admin injects the cache-wide credential for integrations that require FLUSHDB, such as Laravel Cache::flush() or the WordPress object cache without selective flush; it can read, write and flush every attached environment\&#39;s keys. | [optional] [default to AccessLevelEnum_Scoped]

## Example

```typescript
import { AttachOrgResourceRequest } from '@quantcdn/quant-client';

const instance: AttachOrgResourceRequest = {
    application,
    environment,
    envVarPrefix,
    accessLevel,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
