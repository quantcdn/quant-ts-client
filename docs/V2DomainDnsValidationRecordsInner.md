# V2DomainDnsValidationRecordsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | DNS record name (host/subdomain) | [optional] [default to undefined]
**type** | **string** | DNS record type (typically CNAME) | [optional] [default to undefined]
**value** | **string** | DNS record value to point to | [optional] [default to undefined]

## Example

```typescript
import { V2DomainDnsValidationRecordsInner } from '@quantcdn/quant-client';

const instance: V2DomainDnsValidationRecordsInner = {
    name,
    type,
    value,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
