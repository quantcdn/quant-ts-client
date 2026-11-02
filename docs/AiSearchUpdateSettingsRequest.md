# AiSearchUpdateSettingsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**publicAccess** | **object** |  | [optional] [default to undefined]
**rateLimits** | **object** |  | [optional] [default to undefined]
**queryTextRetention** | **string** | What analytics keeps of a visitor\&#39;s query. default: the organisation default (store, or hash for strict organisations). | [optional] [default to undefined]

## Example

```typescript
import { AiSearchUpdateSettingsRequest } from '@quantcdn/quant-client';

const instance: AiSearchUpdateSettingsRequest = {
    publicAccess,
    rateLimits,
    queryTextRetention,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
