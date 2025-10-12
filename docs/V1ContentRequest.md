# V1ContentRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **string** | The content URL. Must be relative and start with a leading \&#39;/\&#39; | [default to undefined]
**content** | **string** | The content (e.g. html) | [default to undefined]
**published** | **boolean** | If the asset should be published | [default to undefined]
**content_timestamp** | **number** | User defined timestamp for this content item | [optional] [default to undefined]
**info** | [**V1Info**](V1Info.md) |  | [optional] [default to undefined]
**transitions** | [**Array&lt;V1Transition&gt;**](V1Transition.md) |  | [optional] [default to undefined]

## Example

```typescript
import { V1ContentRequest } from '@quantcdn/quant-client';

const instance: V1ContentRequest = {
    url,
    content,
    published,
    content_timestamp,
    info,
    transitions,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
