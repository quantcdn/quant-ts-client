# V2StoreRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Store name | [default to undefined]
**format** | **number** | Store format. Format 1 is a plain key-value store. Format 2 enables indexes, ledgers, conditional writes, transactions and the cursor key list. The format is chosen when the store is created and cannot be changed by this request; omit the field for format 1. | [optional] [default to FormatEnum_NUMBER_1]

## Example

```typescript
import { V2StoreRequest } from '@quantcdn/quant-client';

const instance: V2StoreRequest = {
    name,
    format,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
