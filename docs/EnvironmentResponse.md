# EnvironmentResponse

Environment response schema with runtime details

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**envName** | **string** | Environment name | [default to undefined]
**status** | **string** | Environment status | [optional] [readonly] [default to undefined]
**runningCount** | **number** | Number of running tasks | [optional] [readonly] [default to undefined]
**desiredCount** | **number** | Desired number of tasks | [optional] [readonly] [default to undefined]
**minCapacity** | **number** | Minimum capacity for autoscaling | [optional] [default to undefined]
**maxCapacity** | **number** | Maximum capacity for autoscaling | [optional] [default to undefined]
**publicIpAddress** | **string** | Public IP address for SSH access | [optional] [readonly] [default to undefined]
**deploymentStatus** | **string** | Current deployment status | [optional] [readonly] [default to undefined]
**deploymentFailureType** | **string** | Type of deployment failure | [optional] [readonly] [default to undefined]
**deploymentFailureReason** | **string** | Reason for deployment failure | [optional] [readonly] [default to undefined]
**taskDefinition** | **object** | ECS task definition details | [optional] [readonly] [default to undefined]
**service** | **object** | ECS service details | [optional] [readonly] [default to undefined]
**loadBalancer** | **object** | Load balancer configuration | [optional] [readonly] [default to undefined]
**securityGroup** | **object** | Security group configuration | [optional] [readonly] [default to undefined]
**subnet** | **object** | Subnet configuration | [optional] [readonly] [default to undefined]
**vpc** | **object** | VPC configuration | [optional] [readonly] [default to undefined]
**containerNames** | **Array&lt;string&gt;** | Container name list | [optional] [readonly] [default to undefined]
**volumes** | [**Array&lt;Volume&gt;**](Volume.md) | Persistent storage volumes | [optional] [readonly] [default to undefined]
**cron** | [**Array&lt;Cron&gt;**](Cron.md) | Scheduled cron jobs | [optional] [readonly] [default to undefined]
**albRouting** | **object** | ALB routing configuration | [optional] [readonly] [default to undefined]
**createdAt** | **string** | Creation timestamp | [optional] [readonly] [default to undefined]
**updatedAt** | **string** | Last update timestamp | [optional] [readonly] [default to undefined]

## Example

```typescript
import { EnvironmentResponse } from '@quantcdn/quant-client';

const instance: EnvironmentResponse = {
    envName,
    status,
    runningCount,
    desiredCount,
    minCapacity,
    maxCapacity,
    publicIpAddress,
    deploymentStatus,
    deploymentFailureType,
    deploymentFailureReason,
    taskDefinition,
    service,
    loadBalancer,
    securityGroup,
    subnet,
    vpc,
    containerNames,
    volumes,
    cron,
    albRouting,
    createdAt,
    updatedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
