# Quant TypeScript Client

A TypeScript client for the Quant API.

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
  basePath: 'YOUR_BASE_URL' // Optional if using the default base URL
});

// Initialize an API instance
const environmentsApi = new EnvironmentsApi(config);

// Example: Get all environments
environmentsApi.getAllEnvironments()
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
```

## Available APIs

The client provides access to the following API endpoints:

- `ApplicationsApi`
- `CommandsApi`
- `ComposeApi`
- `ContainersApi`
- `CronApi`
- `EnvironmentsApi`
- `ScalingPolicyApi`
- `VariablesApi`
- `VolumesApi`

## Development

### Building the package

```bash
npm run build
```

### Publishing the package

```bash
npm publish
```

## License

MIT 