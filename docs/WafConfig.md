# WafConfig

Web Application Firewall configuration

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
**notify_slack** | **string** | Slack webhook URL for notifications. The deprecated write alias notify_slack_webhook is still accepted | [optional] [default to undefined]
**notify_slack_hits_rpm** | **number** | Minimum hits per minute to trigger Slack notification. Send a positive integer. 0, null or an empty string turns it off (reads back null). Other values return 400. The deprecated write alias notify_slack_rpm is still accepted | [optional] [default to undefined]
**notify_email** | **Array&lt;string&gt;** | Email addresses for notifications | [optional] [default to undefined]
**httpbl** | [**WafConfigHttpbl**](WafConfigHttpbl.md) |  | [optional] [default to undefined]
**block_lists** | [**WafConfigBlockLists**](WafConfigBlockLists.md) |  | [optional] [default to undefined]
**thresholds** | [**Array&lt;WafConfigThresholdsInner&gt;**](WafConfigThresholdsInner.md) | Rate limiting thresholds. Entries are merged by type on update: only the listed types change. A request without thresholds keeps the stored ones. To turn a limit off, send its type with mode disabled. rps, hits and minutes are integers of 1 or more; cooldown is 0 or more. Invalid values return 400. An empty list changes nothing. A request that sets notify_slack copies that webhook into every threshold that the same request does not give its own notify_slack. Deprecated write aliases, still accepted: ip_ratelimit_rps, ip_ratelimit_cooldown, ip_ratelimit_mode, header_ratelimit_rps, header_ratelimit_cooldown, header_ratelimit_value, header_ratelimit_mode, hit_ratelimit_hits, hit_ratelimit_minutes, hit_ratelimit_cooldown, hit_ratelimit_mode. When thresholds and an alias set the same value, thresholds wins. | [optional] [default to undefined]

## Example

```typescript
import { WafConfig } from '@quantcdn/quant-client';

const instance: WafConfig = {
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
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
