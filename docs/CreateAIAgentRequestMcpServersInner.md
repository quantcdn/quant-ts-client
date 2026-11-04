# CreateAIAgentRequestMcpServersInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**server** | **string** | The registered server name | [default to undefined]
**tools** | **Array&lt;string&gt;** | Optional. Only these tools of the server. Omit for every tool the server allows; an empty array allows none. | [optional] [default to undefined]

## Example

```typescript
import { CreateAIAgentRequestMcpServersInner } from '@quantcdn/quant-client';

const instance: CreateAIAgentRequestMcpServersInner = {
    server,
    tools,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
