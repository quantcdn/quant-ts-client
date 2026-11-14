# RulesIndexList200ResponseInnerDeployment

Present only on a rule that a deploy of `quant/edge-rules.json` wrote, or a copy of one. `namespace` is the file\'s top-level namespace and `id` is the rule\'s id in that file; a later deploy matches its rules to stored rules by this pair. A copy in another project (an environment or a clone) can keep the marker but has `managed` false.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**namespace** | **string** | The &#x60;namespace&#x60; of the edge-rules file that wrote the rule. | [default to undefined]
**id** | **string** | The &#x60;id&#x60; of the rule in that file. | [default to undefined]
**hash** | **string** | Hash of the rule as the deploy last wrote it, used to detect changes by other paths. | [optional] [default to undefined]

## Example

```typescript
import { RulesIndexList200ResponseInnerDeployment } from '@quantcdn/quant-client';

const instance: RulesIndexList200ResponseInnerDeployment = {
    namespace,
    id,
    hash,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
