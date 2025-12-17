# ContainerOriginProtectionConfig

Extended origin protection configuration with IP allow list support

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **boolean** | Whether origin protection is enabled. Defaults to true if this config object is provided. | [optional] [default to true]
**ipAllow** | **Array&lt;string&gt;** | List of IP addresses or CIDR ranges that can bypass origin protection for direct access (e.g., VPN IPs) | [optional] [default to undefined]

## Example

```typescript
import { ContainerOriginProtectionConfig } from '@quantcdn/quant-client';

const instance: ContainerOriginProtectionConfig = {
    enabled,
    ipAllow,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
