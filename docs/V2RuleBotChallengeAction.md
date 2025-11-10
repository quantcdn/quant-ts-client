# V2RuleBotChallengeAction


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**robot_challenge_type** | **string** | Challenge type (invisible or checkbox) | [default to undefined]
**robot_challenge_verification_ttl** | **number** | Verification TTL in seconds | [optional] [default to 10800]
**robot_challenge_challenge_ttl** | **number** | Challenge TTL in seconds | [optional] [default to 30]

## Example

```typescript
import { V2RuleBotChallengeAction } from '@quantcdn/quant-client';

const instance: V2RuleBotChallengeAction = {
    robot_challenge_type,
    robot_challenge_verification_ttl,
    robot_challenge_challenge_ttl,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
