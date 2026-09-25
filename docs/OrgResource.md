# OrgResource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**orgName** | **string** |  | [optional] [default to undefined]
**resourceId** | **string** |  | [optional] [default to undefined]
**type** | **string** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**status** | **string** |  | [optional] [default to undefined]
**scope** | **string** | org for resources managed by these endpoints. app rows are compatibility records for an application-managed cache and cannot be mutated here. | [optional] [default to undefined]
**config** | **object** | Type-specific settings, such as dataStorageMaxGb for a cache | [optional] [default to undefined]
**physical** | **object** | Provisioned detail: bucket and region for object storage, cache identifier and endpoint for a cache | [optional] [default to undefined]
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
    createdAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
