# V2RuleAuth


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Rule name | [optional] [default to undefined]
**uuid** | **string** | Rule UUID | [default to undefined]
**rule_id** | **string** | Rule ID | [optional] [default to undefined]
**weight** | **number** | Rule order. Must be 0 or greater; lower weights are processed first. If omitted on create, the rule is placed last. | [optional] [default to undefined]
**url** | **Array&lt;string&gt;** | URL patterns | [optional] [default to undefined]
**domain** | **Array&lt;string&gt;** | Exact hostnames the rule matches, or \&#39;any\&#39;. Wildcards are not supported. | [optional] [default to undefined]
**disabled** | **boolean** | Whether rule is disabled | [default to false]
**only_with_cookie** | **string** | Only apply with cookie | [optional] [default to undefined]
**method** | **string** | HTTP method | [optional] [default to undefined]
**method_is** | **Array&lt;string&gt;** | Allowed HTTP methods | [optional] [default to undefined]
**method_is_not** | **Array&lt;string&gt;** | Excluded HTTP methods | [optional] [default to undefined]
**ip** | **string** | IP address | [optional] [default to undefined]
**ip_is** | **Array&lt;string&gt;** | Allowed IP addresses | [optional] [default to undefined]
**ip_is_not** | **Array&lt;string&gt;** | Excluded IP addresses | [optional] [default to undefined]
**asn** | **string** | ASN condition type (asn_is, asn_is_not, any) | [optional] [default to undefined]
**asn_is** | **Array&lt;string&gt;** | Allowed AS numbers | [optional] [default to undefined]
**asn_is_not** | **Array&lt;string&gt;** | Excluded AS numbers | [optional] [default to undefined]
**ua** | **string** | User agent condition type (ua_is, ua_is_not, any) | [optional] [default to undefined]
**ua_is** | **Array&lt;string&gt;** | User agent strings to match | [optional] [default to undefined]
**ua_is_not** | **Array&lt;string&gt;** | User agent strings to exclude | [optional] [default to undefined]
**traffic_source** | **string** | Traffic source condition type (traffic_source_is, traffic_source_is_not, any) | [optional] [default to undefined]
**traffic_source_is** | **Array&lt;string&gt;** | Traffic sources to match (cloud, vpn, tor-exit, abuser, crawler) | [optional] [default to undefined]
**traffic_source_is_not** | **Array&lt;string&gt;** | Traffic sources to exclude (cloud, vpn, tor-exit, abuser, crawler) | [optional] [default to undefined]
**country** | **string** | Country code | [optional] [default to undefined]
**country_is** | **Array&lt;string&gt;** | Allowed countries | [optional] [default to undefined]
**country_is_not** | **Array&lt;string&gt;** | Excluded countries | [optional] [default to undefined]
**action** | **string** | Rule action | [default to undefined]
**action_config** | [**V2RuleAuthAction**](V2RuleAuthAction.md) |  | [default to undefined]

## Example

```typescript
import { V2RuleAuth } from '@quantcdn/quant-client';

const instance: V2RuleAuth = {
    name,
    uuid,
    rule_id,
    weight,
    url,
    domain,
    disabled,
    only_with_cookie,
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
    country,
    country_is,
    country_is_not,
    action,
    action_config,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
