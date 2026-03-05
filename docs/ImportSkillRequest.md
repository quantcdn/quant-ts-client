# ImportSkillRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source** | [**ImportSkillRequestSource**](ImportSkillRequestSource.md) |  | [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**triggerCondition** | **string** |  | [optional] [default to undefined]
**requiredTools** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**disableModelInvocation** | **boolean** |  | [optional] [default to undefined]
**allowedTools** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**installedBy** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { ImportSkillRequest } from '@quantcdn/quant-client';

const instance: ImportSkillRequest = {
    source,
    name,
    description,
    tags,
    triggerCondition,
    requiredTools,
    disableModelInvocation,
    allowedTools,
    installedBy,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
