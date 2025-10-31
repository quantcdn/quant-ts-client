# CreateApplicationRequestFilesystem

Optional filesystem configuration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**required** | **boolean** | Whether to create a shared filesystem | [optional] [default to true]
**mountPath** | **string** | Mount path inside containers | [optional] [default to '/mnt/data']

## Example

```typescript
import { CreateApplicationRequestFilesystem } from '@quantcdn/quant-client';

const instance: CreateApplicationRequestFilesystem = {
    required,
    mountPath,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
