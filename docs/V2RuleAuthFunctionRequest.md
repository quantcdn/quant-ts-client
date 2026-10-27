# V2RuleAuthFunctionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**domain** | **Array&lt;string&gt;** | Exact hostnames the rule matches, or \&#39;any\&#39; (the default). Wildcards such as *.example.com are not supported. | [default to undefined]
**name** | **string** | Rule name | [optional] [default to undefined]
**uuid** | **string** | Rule UUID | [optional] [default to undefined]
**weight** | **number** | Rule order. Must be 0 or greater; lower weights are processed first. If omitted on create, the rule is placed last. | [optional] [default to undefined]
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
**asn** | **string** | ASN filter type (asn_is, asn_is_not, any). A PATCH that omits it keeps the current value. Invalid values return 422. | [optional] [default to undefined]
**asn_is** | **Array&lt;string&gt;** | Allowed AS numbers. Positive integers up to 4294967295, stored as strings. A PATCH replaces the list. | [optional] [default to undefined]
**asn_is_not** | **Array&lt;string&gt;** | Excluded AS numbers. Positive integers up to 4294967295, stored as strings. A PATCH replaces the list. | [optional] [default to undefined]
**ua** | **string** | User agent filter type (ua_is, ua_is_not, any). Invalid values return 422. | [optional] [default to undefined]
**ua_is** | **Array&lt;string&gt;** | User agent strings to match. Each item has at most 255 characters. A PATCH replaces the list. | [optional] [default to undefined]
**ua_is_not** | **Array&lt;string&gt;** | User agent strings to exclude. Each item has at most 255 characters. A PATCH replaces the list. | [optional] [default to undefined]
**traffic_source** | **string** | Traffic source filter type (traffic_source_is, traffic_source_is_not, any). Invalid values return 422. | [optional] [default to undefined]
**traffic_source_is** | **Array&lt;string&gt;** | Traffic sources to match. A PATCH replaces the list. | [optional] [default to undefined]
**traffic_source_is_not** | **Array&lt;string&gt;** | Traffic sources to exclude. A PATCH replaces the list. | [optional] [default to undefined]
**cookie_name** | **string** | Write name of only_with_cookie: the rule applies only when this cookie is present. Empty string clears it. | [optional] [default to undefined]
**fn_uuid** | **string** | UUID of a published function of type edge_auth in this project. A create, or a change of fn_uuid, that names any other function returns 422. | [default to undefined]

## Example

```typescript
import { V2RuleAuthFunctionRequest } from '@quantcdn/quant-client';

const instance: V2RuleAuthFunctionRequest = {
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
    ua,
    ua_is,
    ua_is_not,
    traffic_source,
    traffic_source_is,
    traffic_source_is_not,
    cookie_name,
    fn_uuid,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
