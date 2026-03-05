# UpdateSkillRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**content** | **string** |  | [optional] [default to undefined]
**triggerCondition** | **string** |  | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**requiredTools** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**source** | **object** |  | [optional] [default to undefined]
**files** | **object** |  | [optional] [default to undefined]
**disableModelInvocation** | **boolean** |  | [optional] [default to undefined]
**allowedTools** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**namespace** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { UpdateSkillRequest } from '@quantcdn/quant-client';

const instance: UpdateSkillRequest = {
    name,
    description,
    content,
    triggerCondition,
    tags,
    requiredTools,
    source,
    files,
    disableModelInvocation,
    allowedTools,
    namespace,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
