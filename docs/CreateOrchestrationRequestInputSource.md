# CreateOrchestrationRequestInputSource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** | Input source type (api type not yet supported) | [default to undefined]
**items** | **Array&lt;object&gt;** | Static items (for type&#x3D;static) | [optional] [default to undefined]
**taskQuery** | **object** | Task query filters (for type&#x3D;task_query) | [optional] [default to undefined]
**generatorPrompt** | **string** | AI prompt (for type&#x3D;generator) | [optional] [default to undefined]

## Example

```typescript
import { CreateOrchestrationRequestInputSource } from '@quantcdn/quant-client';

const instance: CreateOrchestrationRequestInputSource = {
    type,
    items,
    taskQuery,
    generatorPrompt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
