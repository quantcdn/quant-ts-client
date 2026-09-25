# V2RuleErrorPageRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**domain** | **Array&lt;string&gt;** | Domain patterns (default: any) | [default to undefined]
**name** | **string** | Rule name | [optional] [default to undefined]
**uuid** | **string** | Rule UUID | [optional] [default to undefined]
**weight** | **number** | Rule weight | [optional] [default to 0]
**disabled** | **boolean** | Whether rule is disabled | [optional] [default to false]
**url** | **Array&lt;string&gt;** | URL patterns | [default to undefined]
**country** | **string** | Country filter type (country_is, country_is_not, any) | [optional] [default to undefined]
**country_is** | **Array&lt;string&gt;** | Allowed countries | [optional] [default to undefined]
**country_is_not** | **Array&lt;string&gt;** | Excluded countries | [optional] [default to undefined]
**method** | **string** | Method filter type (method_is, method_is_not, any) | [optional] [default to undefined]
**method_is** | **Array&lt;string&gt;** | Allowed HTTP methods | [optional] [default to undefined]
**method_is_not** | **Array&lt;string&gt;** | Excluded HTTP methods | [optional] [default to undefined]
**ip** | **string** | IP filter type (ip_is, ip_is_not, any) | [optional] [default to undefined]
**ip_is** | **Array&lt;string&gt;** | Allowed IP addresses | [optional] [default to undefined]
**ip_is_not** | **Array&lt;string&gt;** | Excluded IP addresses | [optional] [default to undefined]
**asn** | **string** | ASN filter type (asn_is, asn_is_not, any) | [optional] [default to undefined]
**asn_is** | **Array&lt;string&gt;** | Allowed AS numbers | [optional] [default to undefined]
**asn_is_not** | **Array&lt;string&gt;** | Excluded AS numbers | [optional] [default to undefined]
**error_page_path** | **string** | Published path of the page to serve as the error page | [default to undefined]
**status_codes** | **Array&lt;string&gt;** | Status codes this page is served for | [default to undefined]

## Example

```typescript
import { V2RuleErrorPageRequest } from '@quantcdn/quant-client';

const instance: V2RuleErrorPageRequest = {
    domain,
    name,
    uuid,
    weight,
    disabled,
    url,
    country,
    country_is,
    country_is_not,
    method,
    method_is,
    method_is_not,
    ip,
    ip_is,
    ip_is_not,
    asn,
    asn_is,
    asn_is_not,
    error_page_path,
    status_codes,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
