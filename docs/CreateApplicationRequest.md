# CreateApplicationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**appName** | **string** | Application name | [default to undefined]
**composeDefinition** | [**Compose**](Compose.md) |  | [default to undefined]
**minCapacity** | **number** | Minimum task count for auto-scaling | [optional] [default to 1]
**maxCapacity** | **number** | Maximum task count for auto-scaling | [optional] [default to 1]
**database** | [**CreateApplicationRequestDatabase**](CreateApplicationRequestDatabase.md) |  | [optional] [default to undefined]
**filesystem** | [**CreateApplicationRequestFilesystem**](CreateApplicationRequestFilesystem.md) |  | [optional] [default to undefined]
**environment** | [**Array&lt;CreateApplicationRequestEnvironmentInner&gt;**](CreateApplicationRequestEnvironmentInner.md) | Optional. Initial environment variables for the production environment. | [optional] [default to undefined]
**metadata** | **{ [key: string]: string; }** | Free-form key/value metadata. Maximum 50 pairs. Keys are 1-128 characters, values 0-256 characters. Letters, digits, space and + - &#x3D; . _ : / @ only. Keys starting with \&#39;quant:\&#39; are reserved. | [optional] [default to undefined]

## Example

```typescript
import { CreateApplicationRequest } from '@quantcdn/quant-client';

const instance: CreateApplicationRequest = {
    appName,
    composeDefinition,
    minCapacity,
    maxCapacity,
    database,
    filesystem,
    environment,
    metadata,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
