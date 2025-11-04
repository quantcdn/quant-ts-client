# ChatInferenceRequestToolConfig

Function calling configuration (Claude 3+, Nova Pro)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tools** | [**Array&lt;ChatInferenceRequestToolConfigToolsInner&gt;**](ChatInferenceRequestToolConfigToolsInner.md) |  | [optional] [default to undefined]
**autoExecute** | **boolean** | When true, backend automatically executes tools and feeds results back to AI. For async tools (e.g., image generation), returns executionId for polling. Security: Use allowedTools to whitelist which tools can auto-execute. | [optional] [default to false]
**allowedTools** | **Array&lt;string&gt;** | Whitelist of tool names that can be auto-executed. Required when autoExecute is true for security. Example: [\&#39;get_weather\&#39;, \&#39;generate_image\&#39;] | [optional] [default to undefined]

## Example

```typescript
import { ChatInferenceRequestToolConfig } from '@quantcdn/quant-client';

const instance: ChatInferenceRequestToolConfig = {
    tools,
    autoExecute,
    allowedTools,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
