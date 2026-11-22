# CiValue


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  | [optional] [default to undefined]
**kind** | **string** |  | [optional] [default to undefined]
**scope** | **string** |  | [optional] [default to undefined]
**repo** | **string** | Lower-case owner/name. Present when scope is repo. | [optional] [default to undefined]
**branches** | **Array&lt;string&gt;** | The branch rule. Absent when the value applies to every branch. | [optional] [default to undefined]
**updatedAt** | **string** |  | [optional] [default to undefined]
**updatedBy** | **string** |  | [optional] [default to undefined]
**value** | **string** | Variables only. A secret value is never returned. | [optional] [default to undefined]
**withheldReason** | **string** | Present on a repository value that jobs do not get. repo_identity_unproven: the value was saved before values were bound to repository IDs, and its repository was created after the value was last saved. Save the value again to fix this. | [optional] [default to undefined]
**withheldAt** | **string** | When the value was first withheld. Present with withheldReason. | [optional] [default to undefined]

## Example

```typescript
import { CiValue } from '@quantcdn/quant-client';

const instance: CiValue = {
    name,
    kind,
    scope,
    repo,
    branches,
    updatedAt,
    updatedBy,
    value,
    withheldReason,
    withheldAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
