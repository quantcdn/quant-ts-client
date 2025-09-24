# Quant TypeScript Client

A comprehensive TypeScript client for the Quant API, providing access to all Quant Cloud services including applications, environments, containers, cron jobs, and more.

## Installation

```bash
npm install quant-ts-client
```

## Usage

```typescript
import { EnvironmentsApi, Configuration } from 'quant-ts-client';

// Create a configuration with your API key
const config = new Configuration({
  apiKey: 'YOUR_API_KEY',
  basePath: 'https://api.quant.example.com' // Replace with your actual API base URL
});

// Initialize an API instance
const environmentsApi = new EnvironmentsApi(config.basePath);
environmentsApi.setDefaultAuthentication({ 
  applyToRequest: (requestOptions) => {
    if (requestOptions && requestOptions.headers) {
      requestOptions.headers["Authorization"] = `Bearer ${config.apiKey}`;
    }
  }
});

// Example: List all environments for an application
environmentsApi.listEnvironments('your-org-id', 'your-app-id')
  .then(response => {
    console.log(response.body);
  })
  .catch(error => {
    console.error(error);
  });
```

## Available APIs

The client provides access to the following API endpoints:

### Core Services
- `ApplicationsApi` - Manage applications
- `EnvironmentsApi` - Manage environments
- `ContainersApi` - Manage containers
- `CommandsApi` - Execute commands
- `ComposeApi` - Docker Compose management

### Scheduling & Automation
- `CronApi` - Manage cron jobs
- `CrawlersApi` - Web crawler management
- `CrawlerSchedulesApi` - Crawler scheduling

### Data & Storage
- `VariablesApi` - Environment variables
- `VolumesApi` - Volume management
- `KVApi` - Key-value storage
- `BackupManagementApi` - Backup operations

### Security & Access
- `SSHAccessApi` - SSH access management
- `OrganizationsApi` - Organization management
- `ProjectsApi` - Project management

### Rules & Traffic Management
- `RulesAuthApi` - Authentication rules
- `RulesBotChallengeApi` - Bot challenge rules
- `RulesContentFilterApi` - Content filtering rules
- `RulesCustomResponseApi` - Custom response rules
- `RulesFunctionApi` - Function-based rules
- `RulesHeadersApi` - Header manipulation rules
- `RulesProxyApi` - Proxy rules
- `RulesRedirectApi` - Redirect rules
- `RulesServeStaticApi` - Static file serving rules

### Infrastructure
- `DomainsApi` - Domain management
- `HeadersApi` - Custom headers
- `PurgeApi` - Cache purging
- `ScalingPolicyApi` - Auto-scaling policies

## Examples

### Working with Applications

```typescript
import { ApplicationsApi } from 'quant-ts-client';

const appsApi = new ApplicationsApi(config.basePath);
appsApi.setDefaultAuthentication(auth);

// List all applications
const apps = await appsApi.listApplications('your-org-id');

// Create a new application
const newApp = await appsApi.createApplication('your-org-id', {
  name: 'my-app',
  description: 'My new application'
});
```

### Managing Environments

```typescript
import { EnvironmentsApi } from 'quant-ts-client';

const envsApi = new EnvironmentsApi(config.basePath);
envsApi.setDefaultAuthentication(auth);

// Create an environment
const env = await envsApi.createEnvironment('org-id', 'app-id', {
  name: 'production',
  region: 'us-east-1'
});

// Get environment logs
const logs = await envsApi.getEnvironmentLogs('org-id', 'app-id', 'env-id');
```

### Working with Cron Jobs

```typescript
import { CronApi } from 'quant-ts-client';

const cronApi = new CronApi(config.basePath);
cronApi.setDefaultAuthentication(auth);

// Create a cron job
const cronJob = await cronApi.createCronJob('org-id', 'app-id', 'env-id', {
  name: 'daily-backup',
  schedule: '0 2 * * *',
  command: 'backup-database'
});
```

## Development

### Prerequisites

- Node.js 16+ 
- TypeScript 4.9+

### Building the package

```bash
npm install
npm run build
```

### Testing locally

To test the package locally in another project:

```bash
# In the SDK directory
npm run build
npm link

# In your project directory
npm link quant-ts-client
```

### Publishing the package

```bash
npm publish
```

## TypeScript Support

This package includes full TypeScript definitions and is built with TypeScript 4.9+. All API methods, request/response types, and configuration options are fully typed.

## Error Handling

The client includes comprehensive error handling with typed error responses:

```typescript
try {
  const response = await environmentsApi.getEnvironment('org', 'app', 'env');
} catch (error) {
  if (error instanceof HttpError) {
    console.error(`HTTP ${error.statusCode}: ${error.message}`);
  } else {
    console.error('Unexpected error:', error);
  }
}
```

## License

MIT 