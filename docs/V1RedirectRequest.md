# V1RedirectRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **string** | The redirect from URL | [default to undefined]
**redirect_url** | **string** | The destination URL | [default to undefined]
**redirect_http_code** | **number** | The HTTP code to send with the redirect | [default to undefined]
**published** | **boolean** | If the redirect is published | [default to undefined]
**content_timestamp** | **number** | User defined timestamp for this content item | [optional] [default to undefined]
**info** | [**V1Info**](V1Info.md) |  | [optional] [default to undefined]
**transitions** | [**Array&lt;V1Transition&gt;**](V1Transition.md) |  | [optional] [default to undefined]

## Example

```typescript
import { V1RedirectRequest } from '@quantcdn/quant-client';

const instance: V1RedirectRequest = {
    url,
    redirect_url,
    redirect_http_code,
    published,
    content_timestamp,
    info,
    transitions,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
