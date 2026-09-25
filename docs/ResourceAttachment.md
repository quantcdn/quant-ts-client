# ResourceAttachment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**appName** | **string** |  | [optional] [default to undefined]
**envName** | **string** |  | [optional] [default to undefined]
**envVarPrefix** | **string** | Namespaces every injected variable, so MEDIA yields MEDIA_S3_BUCKET | [optional] [default to undefined]
**accessKeyId** | **string** | Object storage only. The secret half is written to the environment\&#39;s secrets and never returned. | [optional] [default to undefined]
**cacheUserId** | **string** | Cache only. This environment\&#39;s own RBAC user, limited to its CACHE_PREFIX with FLUSHALL and FLUSHDB denied, so it cannot touch another environment\&#39;s keys. | [optional] [default to undefined]
**accessLevel** | **string** | Cache only. scoped: the environment holds its own RBAC user. admin: it holds the cache-wide credential and can read, write and flush every attached environment\&#39;s keys. Absent on attachments made before access levels existed (treated as scoped). | [optional] [default to undefined]
**injectedKeys** | **Array&lt;string&gt;** | The exact variable names this attachment wrote, removed precisely on detach | [optional] [default to undefined]
**createdAt** | **string** |  | [optional] [default to undefined]
**note** | **string** | When the credentials take effect | [optional] [default to undefined]

## Example

```typescript
import { ResourceAttachment } from '@quantcdn/quant-client';

const instance: ResourceAttachment = {
    appName,
    envName,
    envVarPrefix,
    accessKeyId,
    cacheUserId,
    accessLevel,
    injectedKeys,
    createdAt,
    note,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
