# CiCacheDeleteResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deletedEntries** | **number** |  | [default to undefined]
**deletedBytes** | **number** |  | [default to undefined]
**complete** | **boolean** | false when the delete stopped at its time limit (about 12 seconds), a storage call failed or timed out, or storage refused some objects. false means: send the same request again until it is true. If a call returns false with deletedEntries 0, stop and try again later, because a storage call failed, timed out or refused objects. | [default to undefined]

## Example

```typescript
import { CiCacheDeleteResult } from '@quantcdn/quant-client';

const instance: CiCacheDeleteResult = {
    deletedEntries,
    deletedBytes,
    complete,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
