# V2RuleCustomResponseAction


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **string** | Error message | [default to undefined]
**error** | **boolean** | Error flag | [default to undefined]
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
    message,
    error,
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
