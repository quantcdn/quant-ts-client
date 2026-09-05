# AttachOrgResourceRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application** | **string** |  | [default to undefined]
**environment** | **string** |  | [default to undefined]
**envVarPrefix** | **string** | Namespaces every injected variable, so MEDIA yields MEDIA_S3_BUCKET | [optional] [default to undefined]

## Example

```typescript
import { AttachOrgResourceRequest } from '@quantcdn/quant-client';

const instance: AttachOrgResourceRequest = {
    application,
    environment,
    envVarPrefix,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
