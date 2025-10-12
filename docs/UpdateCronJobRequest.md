# UpdateCronJobRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **string** |  | [optional] [default to undefined]
**scheduleExpression** | **string** |  | [optional] [default to undefined]
**command** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**targetContainerName** | **string** |  | [optional] [default to undefined]
**isEnabled** | **boolean** |  | [optional] [default to undefined]

## Example

```typescript
import { UpdateCronJobRequest } from '@quantcdn/quant-client';

const instance: UpdateCronJobRequest = {
    description,
    scheduleExpression,
    command,
    targetContainerName,
    isEnabled,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
