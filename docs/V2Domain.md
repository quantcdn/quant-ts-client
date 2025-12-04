# V2Domain


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Domain ID | [default to undefined]
**domain** | **string** | Domain name | [default to undefined]
**dns_engaged** | **number** | DNS engagement status. 1 indicates DNS is properly configured and engaged, 0 indicates DNS configuration is pending or incomplete. | [default to undefined]
**dns_validation_records** | [**Array&lt;V2DomainDnsValidationRecordsInner&gt;**](V2DomainDnsValidationRecordsInner.md) | DNS validation records required for SSL certificate validation. Present for domains pending certificate validation. Each record contains the CNAME information needed to validate domain ownership. | [optional] [default to undefined]
**dns_go_live_records** | [**Array&lt;V2DomainDnsGoLiveRecordsInner&gt;**](V2DomainDnsGoLiveRecordsInner.md) | DNS records required to route traffic to the CDN. These records differ based on domain type (apex vs subdomain). Present when the CDN is configured and ready to receive traffic. | [optional] [default to undefined]

## Example

```typescript
import { V2Domain } from '@quantcdn/quant-client';

const instance: V2Domain = {
    id,
    domain,
    dns_engaged,
    dns_validation_records,
    dns_go_live_records,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
