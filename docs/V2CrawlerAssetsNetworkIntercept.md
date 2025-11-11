# V2CrawlerAssetsNetworkIntercept

Network intercept configuration for asset collection

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **boolean** | Enable network intercept | [optional] [default to undefined]
**timeout** | **number** | Request timeout in seconds | [optional] [default to undefined]
**execute_js** | **boolean** | Execute JavaScript during asset collection | [optional] [default to undefined]

## Example

```typescript
import { V2CrawlerAssetsNetworkIntercept } from '@quantcdn/quant-client';

const instance: V2CrawlerAssetsNetworkIntercept = {
    enabled,
    timeout,
    execute_js,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
