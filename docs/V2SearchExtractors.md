# V2SearchExtractors

XPath expressions that decide what each indexed page contributes to a search record. The defaults take the page body from the meta description, which indexes one sentence per page and matches nothing on body text, so a real deployment should set `content` to the page\'s main content region.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **string** | XPath for the record title | [optional] [default to '//h1[1]']
**content** | **string** | XPath for the record body | [optional] [default to '//meta[@name=\'description\'][1]/@content']
**summary** | **string** | XPath for the record summary | [optional] [default to '//meta[@name=\'description\'][1]/@content']
**image** | **string** | XPath for the record image | [optional] [default to '//meta[@property=\'og:image\'][1]/@content']

## Example

```typescript
import { V2SearchExtractors } from '@quantcdn/quant-client';

const instance: V2SearchExtractors = {
    title,
    content,
    summary,
    image,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
