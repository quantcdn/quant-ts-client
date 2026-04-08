# CreateCustomToolRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Unique tool name (alphanumeric and underscores only) | [default to undefined]
**description** | **string** | Human-readable description of what the tool does | [default to undefined]
**edgeFunctionCode** | **string** | JavaScript source code for the edge function | [default to undefined]
**inputSchema** | **object** | JSON Schema defining the tool\&#39;s input parameters | [default to undefined]
**isAsync** | **boolean** | Whether this tool runs asynchronously (&gt;5 seconds) | [optional] [default to false]
**timeoutSeconds** | **number** | Tool execution timeout | [optional] [default to 30]
**outputSchema** | **object** | JSON Schema defining the tool\&#39;s output structure | [optional] [default to undefined]
**outputSchemaDescription** | **string** | Human-readable description of the tool\&#39;s output | [optional] [default to undefined]
**category** | **string** | Category to group related tools | [optional] [default to undefined]
**responseMode** | **string** | How the tool response is handled: llm (passed back to model) or direct (returned to user) | [optional] [default to undefined]

## Example

```typescript
import { CreateCustomToolRequest } from '@quantcdn/quant-client';

const instance: CreateCustomToolRequest = {
    name,
    description,
    edgeFunctionCode,
    inputSchema,
    isAsync,
    timeoutSeconds,
    outputSchema,
    outputSchemaDescription,
    category,
    responseMode,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
