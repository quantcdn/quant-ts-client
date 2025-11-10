# V2RuleCustomResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Rule name | [optional] [default to undefined]
**uuid** | **string** | Rule UUID | [default to undefined]
**rule_id** | **string** | Rule ID | [optional] [default to undefined]
**weight** | **number** | Rule weight | [optional] [default to 0]
**url** | **Array&lt;string&gt;** | URL patterns | [optional] [default to undefined]
**domain** | **Array&lt;string&gt;** | Domain patterns | [optional] [default to undefined]
**disabled** | **boolean** | Whether rule is disabled | [default to false]
**only_with_cookie** | **string** | Only apply with cookie | [optional] [default to undefined]
**method** | **string** | HTTP method | [optional] [default to undefined]
**method_is** | **Array&lt;string&gt;** | Allowed HTTP methods | [optional] [default to undefined]
**method_is_not** | **Array&lt;string&gt;** | Excluded HTTP methods | [optional] [default to undefined]
**ip** | **string** | IP address | [optional] [default to undefined]
**ip_is** | **Array&lt;string&gt;** | Allowed IP addresses | [optional] [default to undefined]
**ip_is_not** | **Array&lt;string&gt;** | Excluded IP addresses | [optional] [default to undefined]
**country** | **string** | Country code | [optional] [default to undefined]
**country_is** | **Array&lt;string&gt;** | Allowed countries | [optional] [default to undefined]
**country_is_not** | **Array&lt;string&gt;** | Excluded countries | [optional] [default to undefined]
**action** | **string** | Rule action | [default to undefined]
**message** | **string** | Error message | [default to undefined]
**error** | **boolean** | Error flag | [default to undefined]
**action_config** | [**V2RuleCustomResponseAction**](V2RuleCustomResponseAction.md) |  | [optional] [default to undefined]

## Example

```typescript
import { V2RuleCustomResponse } from '@quantcdn/quant-client';

const instance: V2RuleCustomResponse = {
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
    country,
    country_is,
    country_is_not,
    action,
    message,
    error,
    action_config,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
