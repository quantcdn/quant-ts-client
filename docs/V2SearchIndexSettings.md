# V2SearchIndexSettings

Index settings. Named `algolia` for historical reasons; they are applied to whichever backend the project\'s platform_mode selects, including Typesense.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**facets** | **Array&lt;string&gt;** | Fields offered as facets | [optional] [default to undefined]
**searchable_attributes** | **Array&lt;string&gt;** | Fields a query matches against | [optional] [default to undefined]
**sortable_attributes** | **Array&lt;string&gt;** | Fields results may be sorted by | [optional] [default to undefined]
**custom_ranking** | **Array&lt;string&gt;** | Ranking rules, e.g. asc(title) | [optional] [default to undefined]
**synonyms** | **string** | Newline-separated synonym groups, each a comma-separated list of terms | [optional] [default to undefined]

## Example

```typescript
import { V2SearchIndexSettings } from '@quantcdn/quant-client';

const instance: V2SearchIndexSettings = {
    facets,
    searchable_attributes,
    sortable_attributes,
    custom_ranking,
    synonyms,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
