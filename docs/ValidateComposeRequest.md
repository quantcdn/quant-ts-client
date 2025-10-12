# ValidateComposeRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**compose** | **string** | The docker-compose.yml file content as a string | [default to undefined]
**imageSuffix** | **string** | Optional image tag suffix (query parameter takes precedence) | [optional] [default to undefined]
**application** | **string** | Optional application name for context | [optional] [default to undefined]

## Example

```typescript
import { ValidateComposeRequest } from '@quantcdn/quant-client';

const instance: ValidateComposeRequest = {
    compose,
    imageSuffix,
    application,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
