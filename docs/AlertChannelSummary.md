# AlertChannelSummary

An alert channel as the public API returns it. The secret (webhook URL or address list) is never returned.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The channel ID | [default to undefined]
**name** | **string** |  | [default to undefined]
**type** | **string** |  | [default to undefined]
**hint** | **string** | A masked hint of the destination | [default to undefined]

## Example

```typescript
import { AlertChannelSummary } from '@quantcdn/quant-client';

const instance: AlertChannelSummary = {
    id,
    name,
    type,
    hint,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
