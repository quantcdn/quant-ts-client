# V2Domain


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
**id** | **number** | Domain ID | [default to undefined]
**domain** | **string** | Domain name | [default to undefined]
**dns_engaged** | **number** | DNS engagement status | [default to undefined]

## Example

```typescript
import { V2Domain } from '@quantcdn/quant-client';

const instance: V2Domain = {
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
    id,
    domain,
    dns_engaged,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
