# V2RuleCustomResponseRequest


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
**custom_response_body** | **string** | Custom response body content | [default to undefined]
**custom_response_status_code** | **number** | HTTP status code for custom response | [optional] [default to 200]
**status_code** | **number** | Legacy field for status code (deprecated) | [optional] [default to undefined]
**body** | **string** | Legacy field for response body (deprecated) | [optional] [default to undefined]

## Example

```typescript
import { V2RuleCustomResponseRequest } from '@quantcdn/quant-client';

const instance: V2RuleCustomResponseRequest = {
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
    custom_response_body,
    custom_response_status_code,
    status_code,
    body,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
