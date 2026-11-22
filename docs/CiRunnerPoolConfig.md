# CiRunnerPoolConfig

The config of a ci-runner-pool resource. connection and alerts are set by Quant: they are ignored on input and kept on update.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tier** | **string** | Hard cap on concurrent jobs: small 2, medium 4, large 8. When the pool is full, jobs wait. | [default to undefined]
**architectures** | **Set&lt;string&gt;** |  | [optional] [default to undefined]
**networkMode** | **string** |  | [optional] [default to NetworkModeEnum_Public]
**egressAllowlist** | **Array&lt;string&gt;** | Domains allowed when networkMode is restricted. Wildcard only as a leading *. label. | [optional] [default to undefined]
**idleTimeoutMinutes** | **number** |  | [optional] [default to 15]
**businessHoursWarm** | [**CiRunnerPoolConfigBusinessHoursWarm**](CiRunnerPoolConfigBusinessHoursWarm.md) |  | [optional] [default to undefined]
**connection** | [**CiRunnerPoolConfigConnection**](CiRunnerPoolConfigConnection.md) |  | [optional] [default to undefined]
**cacheResidency** | **string** | Where the pool\&#39;s GitHub Actions build cache may live. au-only keeps cache data in Australia; if the pool\&#39;s cache is unavailable, jobs run without a cache. allow-github lets jobs use GitHub\&#39;s cache when the pool\&#39;s cache is unavailable. When not set, a pool that accepts public repositories uses allow-github and every other pool uses au-only. A change applies to the next job each runner machine starts. | [optional] [default to undefined]
**alerts** | [**Array&lt;CiRunnerPoolConfigAlertsInner&gt;**](CiRunnerPoolConfigAlertsInner.md) |  | [optional] [readonly] [default to undefined]

## Example

```typescript
import { CiRunnerPoolConfig } from '@quantcdn/quant-client';

const instance: CiRunnerPoolConfig = {
    tier,
    architectures,
    networkMode,
    egressAllowlist,
    idleTimeoutMinutes,
    businessHoursWarm,
    connection,
    cacheResidency,
    alerts,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
