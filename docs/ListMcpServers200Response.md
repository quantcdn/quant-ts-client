# ListMcpServers200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gatewayBaseUrl** | **string** | Origin of the MCP gateway host (scheme://host[:port]) — clients treat gateway URLs on this origin as bearer-authenticated with the end user\&#39;s Quant token | [optional] [default to undefined]
**servers** | [**Array&lt;ListMcpServers200ResponseServersInner&gt;**](ListMcpServers200ResponseServersInner.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ListMcpServers200Response } from '@quantcdn/quant-client';

const instance: ListMcpServers200Response = {
    gatewayBaseUrl,
    servers,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
