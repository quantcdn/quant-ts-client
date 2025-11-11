# EnvironmentResponse

Environment response schema with runtime details

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**envName** | **string** | Environment name | [default to undefined]
**status** | **string** | Environment status | [optional] [default to undefined]
**runningCount** | **number** | Number of running tasks | [optional] [default to undefined]
**desiredCount** | **number** | Desired number of tasks | [optional] [default to undefined]
**minCapacity** | **number** | Minimum capacity for autoscaling | [optional] [default to undefined]
**maxCapacity** | **number** | Maximum capacity for autoscaling | [optional] [default to undefined]
**publicIpAddress** | **string** | Public IP address for SSH access | [optional] [default to undefined]
**deploymentStatus** | **string** | Deployment status | [optional] [default to undefined]
**taskDefinition** | **object** | ECS task definition details | [optional] [default to undefined]
**service** | **object** | ECS service details | [optional] [default to undefined]
**loadBalancer** | **object** | Load balancer configuration | [optional] [default to undefined]
**securityGroup** | **object** | Security group configuration | [optional] [default to undefined]
**subnet** | **object** | Subnet configuration | [optional] [default to undefined]
**vpc** | **object** | VPC configuration | [optional] [default to undefined]
**containers** | **Array&lt;object&gt;** | Container configurations | [optional] [default to undefined]
**volumes** | [**Array&lt;Volume&gt;**](Volume.md) | Persistent storage volumes | [optional] [default to undefined]
**cron** | [**Array&lt;Cron&gt;**](Cron.md) | Scheduled cron jobs | [optional] [default to undefined]
**albRouting** | **object** | ALB routing configuration | [optional] [default to undefined]
**createdAt** | **string** | Creation timestamp | [optional] [default to undefined]
**updatedAt** | **string** | Last update timestamp | [optional] [default to undefined]

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
    taskDefinition,
    service,
    loadBalancer,
    securityGroup,
    subnet,
    vpc,
    containers,
    volumes,
    cron,
    albRouting,
    createdAt,
    updatedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
