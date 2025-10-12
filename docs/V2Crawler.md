# V2Crawler


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **string** | Error message | [default to undefined]
**error** | **boolean** | Error flag | [default to undefined]
**id** | **number** | Crawler ID | [default to undefined]
**name** | **string** | Crawler name | [optional] [default to undefined]
**project_id** | **number** | Project ID | [default to undefined]
**uuid** | **string** | Crawler UUID | [default to undefined]
**config** | **string** | Crawler configuration (YAML) | [default to undefined]
**domain** | **string** | Crawler domain | [default to undefined]
**domain_verified** | **number** | Domain verification status | [optional] [default to 0]
**urls_list** | **string** | URLs list (YAML) | [optional] [default to undefined]
**created_at** | **string** | Creation timestamp | [optional] [default to undefined]
**updated_at** | **string** | Last update timestamp | [optional] [default to undefined]
**deleted_at** | **string** | Deletion timestamp | [optional] [default to undefined]

## Example

```typescript
import { V2Crawler } from '@quantcdn/quant-client';

const instance: V2Crawler = {
    message,
    error,
    id,
    name,
    project_id,
    uuid,
    config,
    domain,
    domain_verified,
    urls_list,
    created_at,
    updated_at,
    deleted_at,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
