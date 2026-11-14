# RulesIndexList200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**position** | **number** | 0-based index in the stored order. | [optional] [default to undefined]
**managed** | **boolean** | True when a template deploy owns the rule in this project. | [optional] [default to undefined]
**deployment** | [**RulesIndexList200ResponseInnerDeployment**](RulesIndexList200ResponseInnerDeployment.md) |  | [optional] [default to undefined]

## Example

```typescript
import { RulesIndexList200ResponseInner } from '@quantcdn/quant-client';

const instance: RulesIndexList200ResponseInner = {
    position,
    managed,
    deployment,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
