# ContainerSecretsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The environment variable name to be set in the container | [default to undefined]
**valueFrom** | **string** | The key of the secret in the environment\&#39;s \&#39;app-secrets\&#39; store | [default to undefined]

## Example

```typescript
import { ContainerSecretsInner } from '@quantcdn/quant-client';

const instance: ContainerSecretsInner = {
    name,
    valueFrom,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
