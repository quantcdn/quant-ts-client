# AIToolApprovalApi

All URIs are relative to *https://dashboard.quantcdn.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**decideToolProposal**](#decidetoolproposal) | **POST** /api/v3/organizations/{organisation}/ai/tool-proposals/{proposalId}/decision | Decide a tool approval proposal|
|[**getToolProposal**](#gettoolproposal) | **GET** /api/v3/organizations/{organisation}/ai/tool-proposals/{proposalId} | Get a tool approval proposal|

# **decideToolProposal**
> decideToolProposal(decideToolProposalRequest)

Approves or rejects a tool approval proposal. QuantGov AI-governance organisations only; any other organisation gets 404. Only the QuantCode PKCE token with the `ai:approve` scope may call this. Any other token gets 403 with `This token cannot decide tool approvals.` The upstream status and body are returned unchanged.

### Example

```typescript
import {
    AIToolApprovalApi,
    Configuration,
    DecideToolProposalRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AIToolApprovalApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let proposalId: string; //The proposal ID (default to undefined)
let decideToolProposalRequest: DecideToolProposalRequest; //
let xQuantApprovalNonce: string; //One-time approval nonce from the approval prompt. It is forwarded to the platform and never logged. (optional) (default to undefined)

const { status, data } = await apiInstance.decideToolProposal(
    organisation,
    proposalId,
    decideToolProposalRequest,
    xQuantApprovalNonce
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **decideToolProposalRequest** | **DecideToolProposalRequest**|  | |
| **organisation** | [**string**] | The organisation ID | defaults to undefined|
| **proposalId** | [**string**] | The proposal ID | defaults to undefined|
| **xQuantApprovalNonce** | [**string**] | One-time approval nonce from the approval prompt. It is forwarded to the platform and never logged. | (optional) defaults to undefined|


### Return type

void (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The decision result |  -  |
|**403** | This token cannot decide tool approvals. |  -  |
|**404** | Proposal not found, or the organisation is not a QuantGov AI-governance organisation |  -  |
|**409** | The proposal is no longer pending |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getToolProposal**
> getToolProposal()

Returns one of the caller\'s own tool approval proposals. QuantGov AI-governance organisations only; any other organisation gets 404. Only the QuantCode PKCE token with the `ai:approve` scope may call this. Any other token gets 403 with `This token cannot decide tool approvals.` A proposal that belongs to another user is answered as 404.

### Example

```typescript
import {
    AIToolApprovalApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AIToolApprovalApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let proposalId: string; //The proposal ID (default to undefined)

const { status, data } = await apiInstance.getToolProposal(
    organisation,
    proposalId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] | The organisation ID | defaults to undefined|
| **proposalId** | [**string**] | The proposal ID | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The proposal |  -  |
|**403** | This token cannot decide tool approvals. |  -  |
|**404** | Proposal not found, or the organisation is not a QuantGov AI-governance organisation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

