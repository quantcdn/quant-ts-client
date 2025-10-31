# WafConfigHttpbl

Project Honey Pot HTTP:BL configuration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**httpbl_enabled** | **boolean** | Enable HTTP:BL | [optional] [default to false]
**block_suspicious** | **boolean** | Block suspicious IPs | [optional] [default to false]
**block_harvester** | **boolean** | Block email harvesters | [optional] [default to false]
**block_spam** | **boolean** | Block spam sources | [optional] [default to false]
**block_search_engine** | **boolean** | Block search engines | [optional] [default to false]
**httpbl_key** | **string** | HTTP:BL API key | [optional] [default to undefined]

## Example

```typescript
import { WafConfigHttpbl } from '@quantcdn/quant-client';

const instance: WafConfigHttpbl = {
    httpbl_enabled,
    block_suspicious,
    block_harvester,
    block_spam,
    block_search_engine,
    httpbl_key,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
