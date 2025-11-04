# ChatInference200ResponseResponseToolUseOneOfResult

Tool execution result (only present when status=\'complete\' for sync auto-executed tools). For async tools, poll /tools/executions/{executionId}

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**images** | **Array&lt;string&gt;** | Base64 data URIs for images | [optional] [default to undefined]
**s3Urls** | **Array&lt;string&gt;** | Signed S3 URLs for downloads | [optional] [default to undefined]

## Example

```typescript
import { ChatInference200ResponseResponseToolUseOneOfResult } from '@quantcdn/quant-client';

const instance: ChatInference200ResponseResponseToolUseOneOfResult = {
    images,
    s3Urls,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
