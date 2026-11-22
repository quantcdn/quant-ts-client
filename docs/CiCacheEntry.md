# CiCacheEntry


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**repoId** | **number** | GitHub repository id. | [default to undefined]
**repo** | **string** | owner/name recorded for repoId, or null when none is recorded. | [default to undefined]
**ref** | **string** | The git ref that saved the entry. A pull request saves to refs/pull/&lt;number&gt;/merge. | [default to undefined]
**key** | **string** | The actions/cache key. | [default to undefined]
**version** | **string** | The cache version (a hash of the paths and compression the job used). | [default to undefined]
**sizeBytes** | **number** |  | [default to undefined]
**createdAt** | **string** | When the entry was saved. Entries expire 14 days after they are saved. | [default to undefined]

## Example

```typescript
import { CiCacheEntry } from '@quantcdn/quant-client';

const instance: CiCacheEntry = {
    repoId,
    repo,
    ref,
    key,
    version,
    sizeBytes,
    createdAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
