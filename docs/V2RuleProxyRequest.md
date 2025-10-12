# V2RuleProxyRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **string** | Error message | [default to undefined]
**error** | **boolean** | Error flag | [default to undefined]
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
**to** | **string** | Target URL to proxy to | [default to undefined]
**host** | **string** | Host header override | [optional] [default to undefined]
**auth_user** | **string** | Basic auth username | [optional] [default to '']
**auth_pass** | **string** | Basic auth password | [optional] [default to '']
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
**notify** | **string** | Notification type (none, slack) | [optional] [default to 'none']
**notify_config** | **object** | Notification configuration | [optional] [default to undefined]
**waf_enabled** | **boolean** | WAF enabled | [optional] [default to false]
**waf_config** | **object** | WAF configuration | [optional] [default to undefined]
**proxy_alert_enabled** | **boolean** | Proxy alert enabled | [optional] [default to undefined]
**proxy_inline_fn_enabled** | **boolean** | Proxy inline function enabled | [optional] [default to false]
**quant_cloud_selection** | **object** | QuantCloud selection | [optional] [readonly] [default to undefined]
**static_error_page** | **string** | Static error page | [optional] [default to undefined]
**static_error_page_status_codes** | **Array&lt;string&gt;** | Status codes for static error page | [optional] [default to undefined]
**application_proxy** | **boolean** | Application proxy enabled | [optional] [default to false]
**application_name** | **string** | Application name | [optional] [default to undefined]
**application_environment** | **string** | Application environment | [optional] [default to undefined]
**application_container** | **string** | Application container | [optional] [default to undefined]
**application_port** | **number** | Application port | [optional] [default to undefined]

## Example

```typescript
import { V2RuleProxyRequest } from '@quantcdn/quant-client';

const instance: V2RuleProxyRequest = {
    message,
    error,
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
    static_error_page,
    static_error_page_status_codes,
    application_proxy,
    application_name,
    application_environment,
    application_container,
    application_port,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
