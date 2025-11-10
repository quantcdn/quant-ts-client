# V2RuleProxyRequest


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
**failover_s3_bucket** | **string** | Failover S3 bucket | [optional] [default to undefined]
**failover_s3_region** | **string** | Failover S3 region | [optional] [default to undefined]

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
    failover_s3_bucket,
    failover_s3_region,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
