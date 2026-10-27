# V2Project


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Project ID | [default to undefined]
**uuid** | **string** | Project UUID | [default to undefined]
**name** | **string** | Project name | [default to undefined]
**machine_name** | **string** | Project machine name | [default to undefined]
**write_token** | **string** | Write token for API access | [optional] [default to undefined]
**search_enabled** | **boolean** | Whether the project\&#39;s search index is enabled. Requires an organisation search subscription. | [optional] [default to undefined]
**search_config** | [**V2SearchConfig**](V2SearchConfig.md) |  | [optional] [default to undefined]

## Example

```typescript
import { V2Project } from '@quantcdn/quant-client';

const instance: V2Project = {
    id,
    uuid,
    name,
    machine_name,
    write_token,
    search_enabled,
    search_config,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
