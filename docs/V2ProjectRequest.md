# V2ProjectRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Project name | [optional] [default to undefined]
**machine_name** | **string** | Project machine name | [optional] [default to undefined]
**region** | **string** | Project region | [optional] [default to undefined]
**allow_query_params** | **boolean** | Allow query parameters | [optional] [default to undefined]
**disable_revisions** | **boolean** | Disable revisions | [optional] [default to undefined]
**basic_auth_username** | **string** | Basic auth username | [optional] [default to undefined]
**basic_auth_password** | **string** | Basic auth password | [optional] [default to undefined]
**basic_auth_preview_only** | **boolean** | Apply basic auth to preview domain only | [optional] [default to false]
**search_enabled** | **boolean** | Enable the project\&#39;s search index. Rejected when the organisation has no search subscription. | [optional] [default to undefined]
**search_config** | [**V2SearchConfig**](V2SearchConfig.md) |  | [optional] [default to undefined]

## Example

```typescript
import { V2ProjectRequest } from '@quantcdn/quant-client';

const instance: V2ProjectRequest = {
    name,
    machine_name,
    region,
    allow_query_params,
    disable_revisions,
    basic_auth_username,
    basic_auth_password,
    basic_auth_preview_only,
    search_enabled,
    search_config,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
