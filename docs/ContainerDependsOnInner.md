# ContainerDependsOnInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**containerName** | **string** | The name of the container this container depends on | [default to undefined]
**condition** | **string** | The condition to wait for on the dependency | [optional] [default to undefined]

## Example

```typescript
import { ContainerDependsOnInner } from '@quantcdn/quant-client';

const instance: ContainerDependsOnInner = {
    containerName,
    condition,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
