# SetIdleSleepRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **boolean** | Whether the environment sleeps when idle. | [default to undefined]
**idleMinutes** | **number** | Minutes with no requests before compute sleeps. | [optional] [default to 30]

## Example

```typescript
import { SetIdleSleepRequest } from '@quantcdn/quant-client';

const instance: SetIdleSleepRequest = {
    enabled,
    idleMinutes,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
