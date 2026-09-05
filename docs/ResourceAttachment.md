# ResourceAttachment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**appName** | **string** |  | [optional] [default to undefined]
**envName** | **string** |  | [optional] [default to undefined]
**envVarPrefix** | **string** | Namespaces every injected variable, so MEDIA yields MEDIA_S3_BUCKET | [optional] [default to undefined]
**accessKeyId** | **string** | Object storage only. The secret half is written to the environment\&#39;s secrets and never returned. | [optional] [default to undefined]
**injectedKeys** | **Array&lt;string&gt;** | The exact variable names this attachment wrote, removed precisely on detach | [optional] [default to undefined]
**createdAt** | **string** |  | [optional] [default to undefined]
**note** | **string** | When the credentials take effect | [optional] [default to undefined]

## Example

```typescript
import { ResourceAttachment } from '@quantcdn/quant-client';

const instance: ResourceAttachment = {
    appName,
    envName,
    envVarPrefix,
    accessKeyId,
    injectedKeys,
    createdAt,
    note,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
