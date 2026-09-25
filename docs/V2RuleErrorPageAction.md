# V2RuleErrorPageAction


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_page_path** | **string** | Published path of the page to serve as the error page | [default to undefined]
**status_codes** | **Array&lt;string&gt;** | Status codes this page is served for | [default to undefined]

## Example

```typescript
import { V2RuleErrorPageAction } from '@quantcdn/quant-client';

const instance: V2RuleErrorPageAction = {
    error_page_path,
    status_codes,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
