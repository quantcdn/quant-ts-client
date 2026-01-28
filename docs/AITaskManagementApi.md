# AITaskManagementApi

All URIs are relative to *https://dashboard.quantcdn.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createTask**](#createtask) | **POST** /api/v3/organizations/{organisation}/ai/tasks | Create a new task|
|[**deleteTask**](#deletetask) | **DELETE** /api/v3/organizations/{organisation}/ai/tasks/{taskId} | Delete a task|
|[**getDependencyGraph**](#getdependencygraph) | **GET** /api/v3/organizations/{organisation}/ai/tasks/{taskListId}/dependency-graph | Get dependency graph for a task list|
|[**getTask**](#gettask) | **GET** /api/v3/organizations/{organisation}/ai/tasks/{taskId} | Get task details|
|[**listTasks**](#listtasks) | **GET** /api/v3/organizations/{organisation}/ai/tasks | List tasks with optional filtering|
|[**updateTask**](#updatetask) | **PUT** /api/v3/organizations/{organisation}/ai/tasks/{taskId} | Update a task|

# **createTask**
> CreateTask201Response createTask(createTaskRequest)

Creates a new task for multi-agent coordination and workflow orchestration.      *      * **Key Features:**      * - **Persistent State**: Tasks survive across conversations and sessions      * - **Agent Assignment**: Pre-assign tasks to specific agents      * - **Task Lists**: Group related tasks using taskListId (implicit - no need to create lists first)      * - **Dependencies**: Define task dependencies for workflow orchestration      * - **Metadata**: Store flexible JSON metadata for task-specific data      * - **Progress Tracking**: Track progress from 0.0 to 1.0      *      * **Use Cases:**      * - Break down complex requests into manageable steps      * - Assign work to specialized agents      * - Track long-running operations      * - Coordinate multi-agent workflows

### Example

```typescript
import {
    AITaskManagementApi,
    Configuration,
    CreateTaskRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AITaskManagementApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let createTaskRequest: CreateTaskRequest; //

const { status, data } = await apiInstance.createTask(
    organisation,
    createTaskRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createTaskRequest** | **CreateTaskRequest**|  | |
| **organisation** | [**string**] | The organisation ID | defaults to undefined|


### Return type

**CreateTask201Response**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Task created successfully |  -  |
|**400** | Invalid request |  -  |
|**500** | Failed to create task |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteTask**
> DeleteTask200Response deleteTask()

Permanently deletes a task. This action cannot be undone.      *      * **Dependency Protection:**      * By default, deletion is blocked if other tasks depend on this task (TASK_HAS_DEPENDENTS error).      * This prevents breaking workflows.      *      * **Cascade Delete:**      * Use `?cascade=true` to delete the task AND all tasks that depend on it recursively.      * Useful for cleaning up entire dependency chains.      *      * **Examples:**      * - DELETE /tasks/{id} - Deletes task if no dependents, otherwise returns 409 error      * - DELETE /tasks/{id}?cascade=true - Deletes task and all dependent tasks

### Example

```typescript
import {
    AITaskManagementApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AITaskManagementApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let taskId: string; //The task UUID (default to undefined)
let cascade: boolean; //If true, delete task and all dependent tasks recursively (optional) (default to false)

const { status, data } = await apiInstance.deleteTask(
    organisation,
    taskId,
    cascade
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] | The organisation ID | defaults to undefined|
| **taskId** | [**string**] | The task UUID | defaults to undefined|
| **cascade** | [**boolean**] | If true, delete task and all dependent tasks recursively | (optional) defaults to false|


### Return type

**DeleteTask200Response**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Task deleted successfully |  -  |
|**409** | Task has dependents - cannot delete without cascade |  -  |
|**404** | Task not found |  -  |
|**500** | Failed to delete task |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getDependencyGraph**
> GetDependencyGraph200Response getDependencyGraph()

Returns the full dependency graph for all tasks in a task list.      *      * **Use Cases:**      * - Visualize task dependencies in a UI (DAG diagram)      * - Analyze workflow structure and critical paths      * - Find starting tasks (roots) and terminal tasks (leaves)      * - Plan parallel execution by identifying independent task groups      *      * **Response Structure:**      * - `taskCount`: Total number of tasks in the list      * - `roots`: Task IDs with no dependencies (starting points)      * - `leaves`: Task IDs with no dependents (terminal tasks)      * - `graph`: Adjacency list with each task\'s dependencies and dependents

### Example

```typescript
import {
    AITaskManagementApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AITaskManagementApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let taskListId: string; //The task list ID to get the dependency graph for (default to undefined)

const { status, data } = await apiInstance.getDependencyGraph(
    organisation,
    taskListId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] | The organisation ID | defaults to undefined|
| **taskListId** | [**string**] | The task list ID to get the dependency graph for | defaults to undefined|


### Return type

**GetDependencyGraph200Response**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Dependency graph retrieved successfully |  -  |
|**500** | Failed to get dependency graph |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getTask**
> GetTask200Response getTask()

Retrieves detailed information about a specific task including status, progress, dependencies, and results.

### Example

```typescript
import {
    AITaskManagementApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AITaskManagementApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let taskId: string; //The task UUID (default to undefined)

const { status, data } = await apiInstance.getTask(
    organisation,
    taskId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] | The organisation ID | defaults to undefined|
| **taskId** | [**string**] | The task UUID | defaults to undefined|


### Return type

**GetTask200Response**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Task details retrieved successfully |  -  |
|**404** | Task not found |  -  |
|**500** | Failed to get task |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listTasks**
> ListTasks200Response listTasks()

Lists tasks for an organization with optional filtering. Filters can be combined for powerful queries.      *      * **Filter Examples:**      * - All tasks in a list: ?taskListId=world-1      * - Pending tasks in a list: ?taskListId=world-1&status=pending      * - Tasks assigned to an agent: ?assignedAgentId=agent-code-reviewer      * - Combined: ?taskListId=world-1&status=in_progress&assignedAgentId=agent-1      *      * **Reverse Dependency Lookup:**      * Use `dependsOn` to find tasks that depend on a specific task (waiting for it to complete):      * - ?dependsOn=task-123 - Returns task IDs only (lightweight)      * - ?dependsOn=task-123&includeDetails=true - Returns full task objects      * - ?dependsOn=task-123&status=pending - Pending tasks waiting for task-123      *      * **Ordering:**      * Tasks are returned in reverse chronological order (most recent first).

### Example

```typescript
import {
    AITaskManagementApi,
    Configuration
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AITaskManagementApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let taskListId: string; //Filter tasks by task list ID. Task lists are implicit groupings - any string can be used. (optional) (default to undefined)
let status: 'pending' | 'in_progress' | 'completed' | 'failed' | 'cancelled' | 'blocked'; //Filter tasks by status (optional) (default to undefined)
let assignedAgentId: string; //Filter tasks by assigned agent ID (optional) (default to undefined)
let limit: number; //Maximum number of tasks to return (default 50, max 100) (optional) (default to 50)
let dependsOn: string; //Reverse lookup: find tasks that depend on this task ID. Returns tasks waiting for the specified task to complete. (optional) (default to undefined)
let includeDetails: boolean; //When using dependsOn, return full task objects in addition to IDs. Default false (IDs only for lightweight responses). (optional) (default to false)

const { status, data } = await apiInstance.listTasks(
    organisation,
    taskListId,
    status,
    assignedAgentId,
    limit,
    dependsOn,
    includeDetails
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisation** | [**string**] | The organisation ID | defaults to undefined|
| **taskListId** | [**string**] | Filter tasks by task list ID. Task lists are implicit groupings - any string can be used. | (optional) defaults to undefined|
| **status** | [**&#39;pending&#39; | &#39;in_progress&#39; | &#39;completed&#39; | &#39;failed&#39; | &#39;cancelled&#39; | &#39;blocked&#39;**]**Array<&#39;pending&#39; &#124; &#39;in_progress&#39; &#124; &#39;completed&#39; &#124; &#39;failed&#39; &#124; &#39;cancelled&#39; &#124; &#39;blocked&#39;>** | Filter tasks by status | (optional) defaults to undefined|
| **assignedAgentId** | [**string**] | Filter tasks by assigned agent ID | (optional) defaults to undefined|
| **limit** | [**number**] | Maximum number of tasks to return (default 50, max 100) | (optional) defaults to 50|
| **dependsOn** | [**string**] | Reverse lookup: find tasks that depend on this task ID. Returns tasks waiting for the specified task to complete. | (optional) defaults to undefined|
| **includeDetails** | [**boolean**] | When using dependsOn, return full task objects in addition to IDs. Default false (IDs only for lightweight responses). | (optional) defaults to false|


### Return type

**ListTasks200Response**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Tasks retrieved successfully. Response format varies: standard returns {tasks, count}, with dependsOn returns {taskIds, count, dependsOn}, with dependsOn+includeDetails returns {taskIds, tasks, count, dependsOn} |  -  |
|**500** | Failed to list tasks |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateTask**
> UpdateTask200Response updateTask(updateTaskRequest)

Updates an existing task. All fields are optional - only provided fields will be updated.      *      * **Status Transitions:**      * - Changing from **pending** to **in_progress** automatically sets startedAt timestamp      * - Changing to **completed**, **failed**, or **cancelled** automatically sets completedAt timestamp      * - Changing to **blocked** automatically sets blockedAt timestamp      * - Changing from **blocked** to **in_progress** or **pending** clears blocked fields      * - Completed tasks get a 30-day TTL for automatic cleanup      *      * **Progress Updates:**      * - Update progress (0.0 to 1.0) to track completion percentage      * - Update progressMessage for human-readable status updates      * - Set result object when task completes successfully      * - Set error string when task fails      * - Set blockedReason and blockedByTaskIds when blocking a task

### Example

```typescript
import {
    AITaskManagementApi,
    Configuration,
    UpdateTaskRequest
} from '@quantcdn/quant-client';

const configuration = new Configuration();
const apiInstance = new AITaskManagementApi(configuration);

let organisation: string; //The organisation ID (default to undefined)
let taskId: string; //The task UUID (default to undefined)
let updateTaskRequest: UpdateTaskRequest; //

const { status, data } = await apiInstance.updateTask(
    organisation,
    taskId,
    updateTaskRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateTaskRequest** | **UpdateTaskRequest**|  | |
| **organisation** | [**string**] | The organisation ID | defaults to undefined|
| **taskId** | [**string**] | The task UUID | defaults to undefined|


### Return type

**UpdateTask200Response**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Task updated successfully |  -  |
|**400** | Invalid request |  -  |
|**404** | Task not found |  -  |
|**500** | Failed to update task |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

