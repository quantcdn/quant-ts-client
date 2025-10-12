# V1RedirectItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **string** | * @OA\\Schema(   schema&#x3D;\&quot;V1RedirectItem\&quot;,   type&#x3D;\&quot;object\&quot;,   required&#x3D;{\&quot;url\&quot;,\&quot;redirect_url\&quot;,\&quot;redirect_http_code\&quot;,\&quot;date_timestamp\&quot;,\&quot;published\&quot;,\&quot;revision_count\&quot;}, | [default to undefined]
**redirect_url** | **string** |  | [default to undefined]
**redirect_http_code** | **number** |  | [default to undefined]
**date_timestamp** | **string** |  | [default to undefined]
**published** | **string** |  | [default to undefined]
**revision_count** | **number** |  | [default to undefined]

## Example

```typescript
import { V1RedirectItem } from '@quantcdn/quant-client';

const instance: V1RedirectItem = {
    url,
    redirect_url,
    redirect_http_code,
    date_timestamp,
    published,
    revision_count,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
