# CreateCustomToolRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Unique tool name (alphanumeric and underscores only) | [default to undefined]
**description** | **string** | Human-readable description of what the tool does | [default to undefined]
**edgeFunctionUrl** | **string** | HTTPS URL of the edge function | [default to undefined]
**inputSchema** | **object** | JSON Schema defining the tool\&#39;s input parameters | [default to undefined]
**isAsync** | **boolean** | Whether this tool runs asynchronously (&gt;5 seconds) | [optional] [default to false]
**timeoutSeconds** | **number** | Tool execution timeout | [optional] [default to 30]

## Example

```typescript
import { CreateCustomToolRequest } from '@quantcdn/quant-client';

const instance: CreateCustomToolRequest = {
    name,
    description,
    edgeFunctionUrl,
    inputSchema,
    isAsync,
    timeoutSeconds,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
