# V2SearchConfig

How the project builds and serves its search index. A PATCH merges one section at a time, so sending only `extractors` leaves `algolia` untouched; within a section a list replaces wholesale.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**extractors** | [**V2SearchExtractors**](V2SearchExtractors.md) |  | [optional] [default to undefined]
**algolia** | [**V2SearchIndexSettings**](V2SearchIndexSettings.md) |  | [optional] [default to undefined]

## Example

```typescript
import { V2SearchConfig } from '@quantcdn/quant-client';

const instance: V2SearchConfig = {
    extractors,
    algolia,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
