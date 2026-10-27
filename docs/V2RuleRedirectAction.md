# V2RuleRedirectAction


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**to** | **string** | Redirect destination URL | [default to undefined]
**status_code** | **string** | HTTP status code for the redirect: 301, 302, 303, 307 or 308. Defaults to 301 when omitted on create. | [optional] [default to '301']

## Example

```typescript
import { V2RuleRedirectAction } from '@quantcdn/quant-client';

const instance: V2RuleRedirectAction = {
    to,
    status_code,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
