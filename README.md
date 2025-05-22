# QuantCloud TypeScript Client

A TypeScript client for interacting with the QuantCloud API.

## Installation

```bash
npm install quant-ts-client
```

## Authentication

The client supports multiple authentication methods:

```typescript
import { HttpBasicAuth, HttpBearerAuth, ApiKeyAuth } from 'quant-ts-client';

// Basic Auth
const basicAuth = new HttpBasicAuth();
basicAuth.username = 'your-username';
basicAuth.password = 'your-password';

// Bearer Token
const bearerAuth = new HttpBearerAuth();
bearerAuth.accessToken = 'your-token';

// API Key
const apiKeyAuth = new ApiKeyAuth('header', 'X-API-Key');
apiKeyAuth.apiKey = 'your-api-key';
```

## API Overview

The client provides access to the following APIs:

### Applications
- List applications
- Get application details
- Create applications
- Update applications
- Delete applications

### Environments
- List environments
- Get environment details
- Create environments
- Update environments
- Delete environments

### Containers
- List containers
- Get container details
- Manage container lifecycle

### Cron Jobs
- List cron jobs
- Create cron jobs
- Update cron jobs
- Delete cron jobs
- View cron job runs

### Commands
- Execute commands
- List command history
- Get command details

### Compose
- Get compose configuration
- Update compose configuration
- Validate compose files

### Variables
- List environment variables
- Set environment variables
- Delete environment variables

### Volumes
- List volumes
- Create volumes
- Delete volumes

## Example Usage

```typescript
import { ApplicationsApi, EnvironmentsApi } from 'quant-ts-client';

// Create API instances
const applicationsApi = new ApplicationsApi();
const environmentsApi = new EnvironmentsApi();

// Set authentication
applicationsApi.setDefaultAuthentication(bearerAuth);
environmentsApi.setDefaultAuthentication(bearerAuth);

// Get application details
const app = await applicationsApi.getApplication('org-id', 'app-id');

// Get environment details
const env = await environmentsApi.getEnvironment('org-id', 'app-id', 'env-id');

// List applications
const apps = await applicationsApi.listApplications('org-id');

// Create application
const newApp = await applicationsApi.createApplication('org-id', {
  appName: 'my-app',
  // ... other application properties
});
```

## API Structure

All API endpoints follow the pattern:
`/organisations/{organisation}/applications/{application}/environments/{environment}/...`

### Common Endpoints

#### Applications
- `GET /organisations/{org}/applications` - List applications
- `GET /organisations/{org}/applications/{app}` - Get application details
- `POST /organisations/{org}/applications` - Create application
- `PATCH /organisations/{org}/applications/{app}` - Update application
- `DELETE /organisations/{org}/applications/{app}` - Delete application

#### Environments
- `GET /organisations/{org}/applications/{app}/environments` - List environments
- `GET /organisations/{org}/applications/{app}/environments/{env}` - Get environment details
- `POST /organisations/{org}/applications/{app}/environments` - Create environment
- `PATCH /organisations/{org}/applications/{app}/environments/{env}` - Update environment
- `DELETE /organisations/{org}/applications/{app}/environments/{env}` - Delete environment

#### Cron Jobs
- `GET /organisations/{org}/applications/{app}/environments/{env}/cron` - List cron jobs
- `POST /organisations/{org}/applications/{app}/environments/{env}/cron` - Create cron job
- `PATCH /organisations/{org}/applications/{app}/environments/{env}/cron/{cron}` - Update cron job
- `DELETE /organisations/{org}/applications/{app}/environments/{env}/cron/{cron}` - Delete cron job

#### Commands
- `POST /organisations/{org}/applications/{app}/environments/{env}/commands` - Execute command
- `GET /organisations/{org}/applications/{app}/environments/{env}/commands` - List commands
- `GET /organisations/{org}/applications/{app}/environments/{env}/commands/{cmd}` - Get command details

## Error Handling

The client uses standard HTTP status codes and returns detailed error messages when requests fail. Common error scenarios include:

- 400 Bad Request - Invalid parameters
- 401 Unauthorized - Authentication required
- 403 Forbidden - Insufficient permissions
- 404 Not Found - Resource doesn't exist
- 500 Internal Server Error - Server-side error

## TypeScript Support

This client is written in TypeScript and provides full type definitions for all API responses and requests. This includes:

- Request/response types
- Authentication types
- Error types
- Model types for all resources 