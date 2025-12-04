# V2DomainDnsGoLiveRecordsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** | DNS record type (CNAME, A, or ALIAS) | [optional] [default to undefined]
**name** | **string** | DNS record name/host (@ for apex/root domains, subdomain name for subdomains) | [optional] [default to undefined]
**value** | **string** | DNS record value (IP addresses for A records, domain name for CNAME/ALIAS) | [optional] [default to undefined]
**description** | **string** | Human-readable instructions for configuring this DNS record | [optional] [default to undefined]

## Example

```typescript
import { V2DomainDnsGoLiveRecordsInner } from '@quantcdn/quant-client';

const instance: V2DomainDnsGoLiveRecordsInner = {
    type,
    name,
    value,
    description,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
