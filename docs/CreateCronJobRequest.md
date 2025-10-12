# CreateCronJobRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  | [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**scheduleExpression** | **string** |  | [default to undefined]
**command** | **Array&lt;string&gt;** |  | [default to undefined]
**targetContainerName** | **string** |  | [optional] [default to undefined]
**isEnabled** | **boolean** |  | [optional] [default to true]

## Example

```typescript
import { CreateCronJobRequest } from '@quantcdn/quant-client';

const instance: CreateCronJobRequest = {
    name,
    description,
    scheduleExpression,
    command,
    targetContainerName,
    isEnabled,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
