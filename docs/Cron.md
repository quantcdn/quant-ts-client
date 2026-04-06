# Cron


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**scheduleExpression** | **string** |  | [optional] [default to undefined]
**command** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**targetContainerName** | **string** |  | [optional] [default to undefined]
**isEnabled** | **boolean** |  | [optional] [default to undefined]

## Example

```typescript
import { Cron } from '@quantcdn/quant-client';

const instance: Cron = {
    name,
    description,
    scheduleExpression,
    command,
    targetContainerName,
    isEnabled,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
