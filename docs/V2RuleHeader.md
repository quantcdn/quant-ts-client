# V2RuleHeader


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mode** | **string** | WAF operation mode | [optional] [default to ModeEnum_Report]
**paranoia_level** | **number** | OWASP paranoia level | [optional] [default to 1]
**allow_rules** | **Array&lt;string&gt;** | WAF rule IDs to allow/whitelist | [optional] [default to undefined]
**allow_ip** | **Array&lt;string&gt;** | IP addresses to allow | [optional] [default to undefined]
**block_ip** | **Array&lt;string&gt;** | IP addresses to block | [optional] [default to undefined]
**block_asn** | **Array&lt;string&gt;** | ASN numbers to block | [optional] [default to undefined]
**block_ua** | **Array&lt;string&gt;** | User agent patterns to block | [optional] [default to undefined]
**block_referer** | **Array&lt;string&gt;** | Referer patterns to block | [optional] [default to undefined]
**notify_slack** | **string** | Slack webhook URL for notifications | [optional] [default to undefined]
**notify_slack_hits_rpm** | **number** | Minimum hits per minute to trigger Slack notification | [optional] [default to undefined]
**notify_email** | **Array&lt;string&gt;** | Email addresses for notifications | [optional] [default to undefined]
**httpbl** | [**WafConfigHttpbl**](WafConfigHttpbl.md) |  | [optional] [default to undefined]
**block_lists** | [**WafConfigBlockLists**](WafConfigBlockLists.md) |  | [optional] [default to undefined]
**thresholds** | [**Array&lt;WafConfigThresholdsInner&gt;**](WafConfigThresholdsInner.md) | Rate limiting thresholds | [optional] [default to undefined]
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
**to** | **string** | Target URL to proxy to | [default to undefined]
**host** | **string** | Host header override | [optional] [default to undefined]
**auth_user** | **string** | Basic auth username | [optional] [default to undefined]
**auth_pass** | **string** | Basic auth password | [optional] [default to undefined]
**disable_ssl_verify** | **boolean** | Disable SSL verification | [optional] [default to false]
**cache_lifetime** | **string** | Cache lifetime | [optional] [default to undefined]
**only_proxy_404** | **boolean** | Only proxy 404 responses | [optional] [default to false]
**inject_headers** | **{ [key: string]: string; }** | Headers to inject | [optional] [default to undefined]
**proxy_strip_headers** | **Array&lt;string&gt;** | Headers to strip from response | [optional] [default to undefined]
**proxy_strip_request_headers** | **Array&lt;string&gt;** | Headers to strip from request | [optional] [default to undefined]
**origin_timeout** | **string** | Origin timeout | [optional] [default to undefined]
**failover_mode** | **boolean** | Enable failover mode | [optional] [default to false]
**failover_origin_ttfb** | **string** | Failover TTFB threshold | [optional] [default to '2000']
**failover_origin_status_codes** | **Array&lt;string&gt;** | Status codes for failover (default: 200,404,301,302,304) | [optional] [default to undefined]
**failover_lifetime** | **string** | Failover cache lifetime | [optional] [default to '300']
**notify** | **string** | Notification type (none, slack) | [optional] [default to NotifyEnum_None]
**notify_config** | [**V2RuleProxyActionAllOfNotifyConfig**](V2RuleProxyActionAllOfNotifyConfig.md) |  | [optional] [default to undefined]
**waf_enabled** | **boolean** | WAF enabled | [optional] [default to false]
**waf_config** | [**WafConfig**](WafConfig.md) |  | [optional] [default to undefined]
**proxy_alert_enabled** | **boolean** | Proxy alert enabled | [optional] [default to undefined]
**proxy_inline_fn_enabled** | **boolean** | Proxy inline function enabled | [optional] [default to false]
**quant_cloud_selection** | [**V2RuleProxyActionAllOfQuantCloudSelection**](V2RuleProxyActionAllOfQuantCloudSelection.md) |  | [optional] [default to undefined]
**action_config** | [**V2RuleHeaderAction**](V2RuleHeaderAction.md) |  | [default to undefined]

## Example

```typescript
import { V2RuleHeader } from '@quantcdn/quant-client';

const instance: V2RuleHeader = {
    mode,
    paranoia_level,
    allow_rules,
    allow_ip,
    block_ip,
    block_asn,
    block_ua,
    block_referer,
    notify_slack,
    notify_slack_hits_rpm,
    notify_email,
    httpbl,
    block_lists,
    thresholds,
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
    to,
    host,
    auth_user,
    auth_pass,
    disable_ssl_verify,
    cache_lifetime,
    only_proxy_404,
    inject_headers,
    proxy_strip_headers,
    proxy_strip_request_headers,
    origin_timeout,
    failover_mode,
    failover_origin_ttfb,
    failover_origin_status_codes,
    failover_lifetime,
    notify,
    notify_config,
    waf_enabled,
    waf_config,
    proxy_alert_enabled,
    proxy_inline_fn_enabled,
    quant_cloud_selection,
    action_config,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
