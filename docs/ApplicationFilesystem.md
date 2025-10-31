# ApplicationFilesystem

Filesystem configuration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filesystemId** | **string** | EFS filesystem ID | [optional] [default to undefined]
**mountPath** | **string** | Default mount path in containers | [optional] [default to undefined]

## Example

```typescript
import { ApplicationFilesystem } from '@quantcdn/quant-client';

const instance: ApplicationFilesystem = {
    filesystemId,
    mountPath,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
