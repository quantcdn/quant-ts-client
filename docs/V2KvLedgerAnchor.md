# V2KvLedgerAnchor

External witness of the daily digests. Default type none. customer-bucket writes each digest to your S3 bucket (needs bucketArn and accountId); rfc3161 gets a timestamp token from tsaUrl.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** |  | [default to undefined]
**bucketArn** | **string** | customer-bucket only (required on declare). | [optional] [default to undefined]
**prefix** | **string** | customer-bucket only, optional. Anchor keys are &lt;prefix&gt;&lt;org&gt;/&lt;store&gt;/…. | [optional] [default to '']
**accountId** | **string** | customer-bucket only (required on declare): the AWS account that owns the bucket. Every anchor write sends it as ExpectedBucketOwner. | [optional] [default to undefined]
**tsaUrl** | **string** | rfc3161 only. | [optional] [default to undefined]

## Example

```typescript
import { V2KvLedgerAnchor } from '@quantcdn/quant-client';

const instance: V2KvLedgerAnchor = {
    type,
    bucketArn,
    prefix,
    accountId,
    tsaUrl,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
