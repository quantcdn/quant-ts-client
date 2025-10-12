# V2ProjectRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **string** | Error message | [default to undefined]
**error** | **boolean** | Error flag | [default to undefined]
**name** | **string** | Project name | [default to undefined]
**machine_name** | **string** | Project machine name | [default to undefined]
**region** | **string** | Project region | [optional] [default to undefined]
**allow_query_params** | **boolean** | Allow query parameters | [optional] [default to undefined]
**disable_revisions** | **boolean** | Disable revisions | [optional] [default to undefined]
**basic_auth_username** | **string** | Basic auth username | [optional] [default to undefined]
**basic_auth_password** | **string** | Basic auth password | [optional] [default to undefined]

## Example

```typescript
import { V2ProjectRequest } from '@quantcdn/quant-client';

const instance: V2ProjectRequest = {
    message,
    error,
    name,
    machine_name,
    region,
    allow_query_params,
    disable_revisions,
    basic_auth_username,
    basic_auth_password,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
