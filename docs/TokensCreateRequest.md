# TokensCreateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Name for the token | [default to undefined]
**preset** | **string** | Preset scope bundle | [optional] [default to undefined]
**scopes** | **Array&lt;string&gt;** | Individual scopes (mutually exclusive with preset) | [optional] [default to undefined]
**projects** | **Array&lt;number&gt;** | Project IDs to restrict this token to | [optional] [default to undefined]
**expires_in** | **string** | Token expiration period | [optional] [default to undefined]

## Example

```typescript
import { TokensCreateRequest } from '@quantcdn/quant-client';

const instance: TokensCreateRequest = {
    name,
    preset,
    scopes,
    projects,
    expires_in,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
