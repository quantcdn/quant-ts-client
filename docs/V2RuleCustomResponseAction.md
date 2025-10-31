# V2RuleCustomResponseAction


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
**custom_response_body** | **string** | Custom response body content | [default to undefined]
**custom_response_status_code** | **number** | HTTP status code for custom response | [optional] [default to 200]

## Example

```typescript
import { V2RuleCustomResponseAction } from '@quantcdn/quant-client';

const instance: V2RuleCustomResponseAction = {
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
    custom_response_body,
    custom_response_status_code,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
