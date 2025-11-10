# V2RuleProxyActionQuantCloudSelection

Quant Cloud application proxy selection (only present for Quant Cloud App proxies)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app** | **string** | Application name | [optional] [default to undefined]
**env** | **string** | Environment name | [optional] [default to undefined]
**container** | **string** | Container name | [optional] [default to undefined]
**port** | **number** | Container port | [optional] [default to undefined]

## Example

```typescript
import { V2RuleProxyActionQuantCloudSelection } from '@quantcdn/quant-client';

const instance: V2RuleProxyActionQuantCloudSelection = {
    app,
    env,
    container,
    port,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
