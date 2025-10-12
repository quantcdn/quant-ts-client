# V1RevisionsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**revisions** | **object** | Revision objects, mapped by revision number | [optional] [default to undefined]
**url** | **string** | The url of the asset | [optional] [default to undefined]
**published** | **boolean** | Published state of the asset | [optional] [default to undefined]
**published_revision** | **number** | Published revision number of the asset | [optional] [default to undefined]
**transitions** | [**Array&lt;V1Transition&gt;**](V1Transition.md) |  | [optional] [default to undefined]
**highest_revision_number** | **number** | Last revision number | [optional] [default to undefined]
**transition_revision** | **number** | The transition number, if set | [optional] [default to undefined]

## Example

```typescript
import { V1RevisionsResponse } from '@quantcdn/quant-client';

const instance: V1RevisionsResponse = {
    revisions,
    url,
    published,
    published_revision,
    transitions,
    highest_revision_number,
    transition_revision,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
