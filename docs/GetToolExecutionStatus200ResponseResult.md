# GetToolExecutionStatus200ResponseResult

Tool execution result (only present when status=\'complete\'). Structure varies by tool type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**images** | **Array&lt;string&gt;** | For image generation: Array of base64-encoded data URIs for inline display/preview | [optional] [default to undefined]
**s3Urls** | **Array&lt;string&gt;** | For image generation: Array of signed S3 URLs for high-quality downloads (expire after 1 hour) | [optional] [default to undefined]

## Example

```typescript
import { GetToolExecutionStatus200ResponseResult } from '@quantcdn/quant-client';

const instance: GetToolExecutionStatus200ResponseResult = {
    images,
    s3Urls,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
