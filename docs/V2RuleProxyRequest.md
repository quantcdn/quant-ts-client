# V2RuleProxyRequest


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
**to** | **string** | Target URL to proxy to | [default to undefined]
**host** | **string** | Host header override | [optional] [default to undefined]
**auth_user** | **string** | Basic auth username | [optional] [default to '']
**auth_pass** | **string** | Basic auth password | [optional] [default to '']
**disable_ssl_verify** | **boolean** | Disable SSL verification | [optional] [default to false]
**cache_lifetime** | **string** | Cache lifetime | [optional] [default to undefined]
**only_proxy_404** | **boolean** | Only proxy 404 responses | [optional] [default to false]
**inject_headers** | **{ [key: string]: string; }** | Headers added to (or replacing headers on) the request sent to the origin. They are not added to the response sent to the visitor. | [optional] [default to undefined]
**proxy_strip_headers** | **Array&lt;string&gt;** | Headers to strip from response | [optional] [default to undefined]
**proxy_strip_request_headers** | **Array&lt;string&gt;** | Headers to strip from request | [optional] [default to undefined]
**origin_timeout** | **string** | Origin timeout in milliseconds. Defaults to 30000 when omitted on create. | [optional] [default to undefined]
**failover_mode** | **boolean** | Enable failover mode | [optional] [default to false]
**failover_origin_ttfb** | **string** | Failover TTFB threshold in milliseconds | [optional] [default to '2000']
**failover_origin_status_codes** | **Array&lt;string&gt;** | Origin status codes that trigger failover | [optional] [default to undefined]
**failover_lifetime** | **string** | Failover cache lifetime in seconds | [optional] [default to '300']
**proxy_alert_enabled** | **boolean** | Proxy alert enabled | [optional] [default to false]
**waf_enabled** | **boolean** | WAF enabled | [optional] [default to false]
**waf_config** | [**WafConfig**](WafConfig.md) |  | [optional] [default to undefined]
**application_proxy** | **boolean** | Enable Quant Cloud application proxy mode | [optional] [default to false]
**application_name** | **string** | Quant Cloud application name (required when application_proxy is true) | [optional] [default to undefined]
**application_environment** | **string** | Quant Cloud application environment (required when application_proxy is true) | [optional] [default to undefined]
**application_container** | **string** | Quant Cloud application container (required when application_proxy is true) | [optional] [default to undefined]
**application_port** | **number** | Quant Cloud application port (required when application_proxy is true) | [optional] [default to undefined]
**static_error_page** | **string** | On/off switch, not page content. Send a string: any non-empty string (for example the text true) turns it on; an empty string or null turns it off. Write the text true to enable and an empty string to disable; do not send the text false, because any non-empty string counts as on. A JSON boolean is rejected on write. A boolean stored by the dashboard reads back as the string true, or an empty string when off. When on, an origin response whose status is in static_error_page_status_codes is replaced by the project\&#39;s published /_quant&lt;status&gt; page (for example /_quant503). | [optional] [default to undefined]
**static_error_page_status_codes** | **Array&lt;string&gt;** | Origin status codes that serve the published /_quant&lt;status&gt; page when static_error_page is on | [optional] [default to undefined]

## Example

```typescript
import { V2RuleProxyRequest } from '@quantcdn/quant-client';

const instance: V2RuleProxyRequest = {
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
    proxy_alert_enabled,
    waf_enabled,
    waf_config,
    application_proxy,
    application_name,
    application_environment,
    application_container,
    application_port,
    static_error_page,
    static_error_page_status_codes,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
