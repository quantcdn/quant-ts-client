# AISkillsApi

All URIs are relative to *https://dashboard.quantcdn.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createSkill**](#createskill) | **POST** /api/v3/organizations/{organisation}/ai/skills | Create Inline Skill|
|[**deleteSkill**](#deleteskill) | **DELETE** /api/v3/organizations/{organisation}/ai/skills/{skillId} | Delete Skill|
|[**deleteSkillCollection**](#deleteskillcollection) | **DELETE** /api/v3/organizations/{organisation}/ai/skills/collections/{namespace} | Delete Skill Collection|
|[**getSkill**](#getskill) | **GET** /api/v3/organizations/{organisation}/ai/skills/{skillId} | Get Skill Details|
|[**importSkill**](#importskill) | **POST** /api/v3/organizations/{organisation}/ai/skills/import | Import Skill from External Source|
|[**importSkillCollection**](#importskillcollection) | **POST** /api/v3/organizations/{organisation}/ai/skills/import-collection | Import Skill Collection from GitHub|
|[**listSkillCollections**](#listskillcollections) | **GET** /api/v3/organizations/{organisation}/ai/skills/collections | List Skill Collections|
|[**listSkills**](#listskills) | **GET** /api/v3/organizations/{organisation}/ai/skills | List Organization\&#39;s Skills|
|[**syncSkill**](#syncskill) | **POST** /api/v3/organizations/{organisation}/ai/skills/{skillId}/sync | Sync Skill from Source|
|[**syncSkillCollection**](#syncskillcollection) | **POST** /api/v3/organizations/{organisation}/ai/skills/collections/{namespace}/sync | Sync Skill Collection|
|[**updateSkill**](#updateskill) | **PUT** /api/v3/organizations/{organisation}/ai/skills/{skillId} | Update Skill|

# **createSkill**
> CreateSkill201Response createSkill(createSkillRequest)

Creates a new skill with inline content. Use this for custom skills      * that are defined directly in your organization.      *      * **Trigger Conditions:**      * - Natural language description of when to use the skill      * - Used by AI to determine when to suggest or apply the skill      * - Example: \'When the user asks about code review or security analysis\'

### Example

```typescript
import {
    AISkillsApi,
    Configuration,
    CreateSkillRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AISkillsApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let createSkillRequest: CreateSkillRequest; //

const { status, data } = await apiInstance.createSkill(
    organisation,
    createSkillRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createSkillRequest** | **CreateSkillRequest**|  | |
| **organisation** | [**string**] | The organisation ID | defaults to undefined|


### Return type

**CreateSkill201Response**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Skill created successfully |  -  |
|**400** | Invalid request parameters |  -  |
|**403** | Access denied |  -  |
|**500** | Failed to create skill |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteSkill**
> DeleteSkill200Response deleteSkill()

Permanently deletes a skill. This will also remove it from any agents that have it assigned.

### Example

```typescript
import {
    AISkillsApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AISkillsApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let skillId: string; //The skill ID (default to undefined)

const { status, data } = await apiInstance.deleteSkill(
    organisation,
    skillId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] | The organisation ID | defaults to undefined|
| **skillId** | [**string**] | The skill ID | defaults to undefined|


### Return type

**DeleteSkill200Response**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Skill deleted successfully |  -  |
|**403** | Access denied |  -  |
|**404** | Skill not found |  -  |
|**500** | Failed to delete skill |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteSkillCollection**
> DeleteSkillCollection200Response deleteSkillCollection()

Permanently deletes all skills in the specified namespace.

### Example

```typescript
import {
    AISkillsApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AISkillsApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let namespace: string; //Collection namespace (default to undefined)

const { status, data } = await apiInstance.deleteSkillCollection(
    organisation,
    namespace
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] | The organisation ID | defaults to undefined|
| **namespace** | [**string**] | Collection namespace | defaults to undefined|


### Return type

**DeleteSkillCollection200Response**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Collection deleted successfully |  -  |
|**403** | Access denied |  -  |
|**404** | Collection not found |  -  |
|**500** | Failed to delete collection |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getSkill**
> GetSkill200Response getSkill()

Retrieves full details of a skill including its content, source information, and metadata.

### Example

```typescript
import {
    AISkillsApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AISkillsApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let skillId: string; //The skill ID (default to undefined)

const { status, data } = await apiInstance.getSkill(
    organisation,
    skillId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] | The organisation ID | defaults to undefined|
| **skillId** | [**string**] | The skill ID | defaults to undefined|


### Return type

**GetSkill200Response**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Skill details retrieved successfully |  -  |
|**403** | Access denied |  -  |
|**404** | Skill not found |  -  |
|**500** | Failed to retrieve skill |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **importSkill**
> ImportSkill201Response importSkill(importSkillRequest)

Imports a skill from an external source like skills.sh registry or GitHub repository.      *      * **Supported Sources:**      * - `skills.sh`: Import from the skills.sh community registry      * - `github`: Import from a GitHub repository (public or private)      *      * **Version Control:**      * - Skills can be pinned to specific versions      * - Use the sync endpoint to update to latest version

### Example

```typescript
import {
    AISkillsApi,
    Configuration,
    ImportSkillRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AISkillsApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let importSkillRequest: ImportSkillRequest; //

const { status, data } = await apiInstance.importSkill(
    organisation,
    importSkillRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **importSkillRequest** | **ImportSkillRequest**|  | |
| **organisation** | [**string**] | The organisation ID | defaults to undefined|


### Return type

**ImportSkill201Response**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Skill imported successfully |  -  |
|**400** | Invalid request parameters |  -  |
|**403** | Access denied |  -  |
|**502** | Failed to fetch skill from source |  -  |
|**500** | Failed to import skill |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **importSkillCollection**
> ImportSkillCollection201Response importSkillCollection(importSkillCollectionRequest)

Discovers all skill directories under a given path in a GitHub repository      * and imports each as a skill within the specified namespace. Each subdirectory must contain a SKILL.md file.      *      * **Namespace:** Used for grouping and slash-command invocation (e.g., `/superpowers:brainstorming`).      *      * **Idempotent:** If a skill with the same namespace + name already exists, it is updated.

### Example

```typescript
import {
    AISkillsApi,
    Configuration,
    ImportSkillCollectionRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AISkillsApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let importSkillCollectionRequest: ImportSkillCollectionRequest; //

const { status, data } = await apiInstance.importSkillCollection(
    organisation,
    importSkillCollectionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **importSkillCollectionRequest** | **ImportSkillCollectionRequest**|  | |
| **organisation** | [**string**] | The organisation ID | defaults to undefined|


### Return type

**ImportSkillCollection201Response**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Collection imported successfully |  -  |
|**400** | Invalid request parameters |  -  |
|**403** | Access denied |  -  |
|**502** | GitHub API error |  -  |
|**500** | Failed to import collection |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listSkillCollections**
> ListSkillCollections200Response listSkillCollections()

Lists distinct namespaces (collections) for the organization, with skill counts and skill names for each collection.

### Example

```typescript
import {
    AISkillsApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AISkillsApi(configuration);

let organisation: string; //The organisation ID (default to undefined)

const { status, data } = await apiInstance.listSkillCollections(
    organisation
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] | The organisation ID | defaults to undefined|


### Return type

**ListSkillCollections200Response**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Collections retrieved successfully |  -  |
|**403** | Access denied |  -  |
|**500** | Failed to retrieve collections |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listSkills**
> ListSkills200Response listSkills()

Lists all skills available to the organization. Skills are reusable prompts,      * workflows, or instructions that can be assigned to agents or invoked directly.      *      * **Skill Sources:**      * - `inline`: Created directly via the API      * - `skills.sh`: Imported from skills.sh registry      * - `github`: Imported from a GitHub repository      * - `local`: Uploaded from local file

### Example

```typescript
import {
    AISkillsApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AISkillsApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let tag: string; //Filter skills by tag (optional) (default to undefined)
let namespace: string; //Filter skills by collection namespace (e.g. \'superpowers\') (optional) (default to undefined)
let limit: number; //Maximum number of skills to return (optional) (default to 50)

const { status, data } = await apiInstance.listSkills(
    organisation,
    tag,
    namespace,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] | The organisation ID | defaults to undefined|
| **tag** | [**string**] | Filter skills by tag | (optional) defaults to undefined|
| **namespace** | [**string**] | Filter skills by collection namespace (e.g. \&#39;superpowers\&#39;) | (optional) defaults to undefined|
| **limit** | [**number**] | Maximum number of skills to return | (optional) defaults to 50|


### Return type

**ListSkills200Response**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of skills retrieved successfully |  -  |
|**403** | Access denied |  -  |
|**500** | Failed to retrieve skills |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **syncSkill**
> ImportSkill201Response syncSkill()

Re-fetches skill content from its original source.      * Only applicable to skills imported from external sources (skills.sh, github).      * Inline skills cannot be synced.      *      * **Version Behavior:**      * - If version is pinned, fetches that specific version      * - If no version specified, fetches latest

### Example

```typescript
import {
    AISkillsApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AISkillsApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let skillId: string; //The skill ID (default to undefined)

const { status, data } = await apiInstance.syncSkill(
    organisation,
    skillId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] | The organisation ID | defaults to undefined|
| **skillId** | [**string**] | The skill ID | defaults to undefined|


### Return type

**ImportSkill201Response**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Skill synced successfully |  -  |
|**400** | Cannot sync inline skill |  -  |
|**403** | Access denied |  -  |
|**404** | Skill not found |  -  |
|**502** | Failed to fetch skill from source |  -  |
|**500** | Failed to sync skill |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **syncSkillCollection**
> SyncSkillCollection200Response syncSkillCollection()

Re-syncs all skills in a namespace from their GitHub source. Detects new      * skills added to the repository and flags skills removed from the source. Does NOT auto-delete removed skills.

### Example

```typescript
import {
    AISkillsApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AISkillsApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let namespace: string; //Collection namespace (default to undefined)

const { status, data } = await apiInstance.syncSkillCollection(
    organisation,
    namespace
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] | The organisation ID | defaults to undefined|
| **namespace** | [**string**] | Collection namespace | defaults to undefined|


### Return type

**SyncSkillCollection200Response**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Collection synced successfully |  -  |
|**400** | Invalid request |  -  |
|**403** | Access denied |  -  |
|**404** | Collection not found |  -  |
|**502** | GitHub API error |  -  |
|**500** | Failed to sync collection |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateSkill**
> UpdateSkill200Response updateSkill(updateSkillRequest)

Updates an existing skill. For imported skills, this updates      * local overrides (name, tags, triggerCondition) but not the source content.      * Use the sync endpoint to update source content.

### Example

```typescript
import {
    AISkillsApi,
    Configuration,
    UpdateSkillRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AISkillsApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let skillId: string; //The skill ID (default to undefined)
let updateSkillRequest: UpdateSkillRequest; //

const { status, data } = await apiInstance.updateSkill(
    organisation,
    skillId,
    updateSkillRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateSkillRequest** | **UpdateSkillRequest**|  | |
| **organisation** | [**string**] | The organisation ID | defaults to undefined|
| **skillId** | [**string**] | The skill ID | defaults to undefined|


### Return type

**UpdateSkill200Response**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Skill updated successfully |  -  |
|**400** | Invalid request parameters |  -  |
|**403** | Access denied |  -  |
|**404** | Skill not found |  -  |
|**500** | Failed to update skill |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

