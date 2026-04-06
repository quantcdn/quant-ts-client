# GetMyUsage200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**userId** | **string** |  | [optional] [default to undefined]
**currentMonth** | **string** |  | [optional] [default to undefined]
**monthly** | [**GetMyUsage200ResponseMonthly**](GetMyUsage200ResponseMonthly.md) |  | [optional] [default to undefined]
**daily** | [**GetMyUsage200ResponseDaily**](GetMyUsage200ResponseDaily.md) |  | [optional] [default to undefined]
**quota** | [**GetMyUsage200ResponseQuota**](GetMyUsage200ResponseQuota.md) |  | [optional] [default to undefined]

## Example

```typescript
import { GetMyUsage200Response } from '@quantcdn/quant-client';

const instance: GetMyUsage200Response = {
    userId,
    currentMonth,
    monthly,
    daily,
    quota,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
