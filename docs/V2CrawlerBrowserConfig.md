# V2CrawlerBrowserConfig

Browser-mode behaviour. Only applies when browser_mode is true.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**capture_api_responses** | **boolean** | Store XHR/fetch responses as files, so a static copy can serve a site whose navigation or content is rendered client-side from a JSON endpoint | [optional] [default to undefined]
**wait_for_network_idle** | **number** | Wait for the network to settle before capture, in milliseconds. Useful for API-driven sites | [optional] [default to undefined]
**use_rendered_html** | **boolean** | Store the JavaScript-modified DOM instead of the original HTML response | [optional] [default to undefined]

## Example

```typescript
import { V2CrawlerBrowserConfig } from '@quantcdn/quant-client';

const instance: V2CrawlerBrowserConfig = {
    capture_api_responses,
    wait_for_network_idle,
    use_rendered_html,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
