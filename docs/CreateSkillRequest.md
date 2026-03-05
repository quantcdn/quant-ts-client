# CreateSkillRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  | [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**content** | **string** |  | [default to undefined]
**triggerCondition** | **string** |  | [default to undefined]
**tags** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**requiredTools** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**namespace** | **string** |  | [optional] [default to undefined]
**files** | **object** |  | [optional] [default to undefined]
**disableModelInvocation** | **boolean** |  | [optional] [default to undefined]
**allowedTools** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**installedBy** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { CreateSkillRequest } from '@quantcdn/quant-client';

const instance: CreateSkillRequest = {
    name,
    description,
    content,
    triggerCondition,
    tags,
    requiredTools,
    namespace,
    files,
    disableModelInvocation,
    allowedTools,
    installedBy,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
