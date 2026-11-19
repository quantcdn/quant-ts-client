# ContainerLoadBalancerHealthCheck

Load balancer health check for the ports this container exposes. Null or omitted uses the platform default (GET / every 45 seconds). Each property is optional; an omitted or null property takes its default. The check passes when the response status is 2xx or one of 300, 301, 302, 304, 308, 400, 401, 403 and 404, so it confirms the container answers, not that the application is correct. A change applies to the load balancer when it is saved. Distinct from healthCheck, which is the container-level command check. Quant base images (app-apache-php and images built on it) serve /_quant/health as a static response without running the application or reading shared volumes: use it when rendering the home page is expensive. On a container update, the object replaces the stored one; null resets it to the default. Compose import maps the service labels quant.healthcheck.path and quant.healthcheck.interval to it.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**path** | **string** | Path the load balancer requests. Starts with /. | [optional] [default to '/']
**intervalSeconds** | **number** | Seconds between checks. | [optional] [default to 45]

## Example

```typescript
import { ContainerLoadBalancerHealthCheck } from '@quantcdn/quant-client';

const instance: ContainerLoadBalancerHealthCheck = {
    path,
    intervalSeconds,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
