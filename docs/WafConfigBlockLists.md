# WafConfigBlockLists

Enable predefined block lists

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user_agent** | **boolean** | Block known bad user agents | [optional] [default to false]
**referer** | **boolean** | Block known bad referers | [optional] [default to false]
**ip** | **boolean** | Block known bad IPs | [optional] [default to false]
**ai** | **boolean** | Block AI crawlers | [optional] [default to false]

## Example

```typescript
import { WafConfigBlockLists } from '@quantcdn/quant-client';

const instance: WafConfigBlockLists = {
    user_agent,
    referer,
    ip,
    ai,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
