import { 
  EnvironmentsApi, 
  ApplicationsApi,
  Configuration 
} from '../api';

// Create a configuration with your API key
const config = new Configuration({
  apiKey: 'YOUR_API_KEY',
  basePath: 'https://api.quant.example.com' // Replace with the actual API base URL
});

// Initialize API instances
const environmentsApi = new EnvironmentsApi(config.basePath);
environmentsApi.setDefaultAuthentication({ 
  applyToRequest: (requestOptions) => {
    if (requestOptions && requestOptions.headers) {
      requestOptions.headers["Authorization"] = `Bearer ${config.apiKey}`;
    }
  }
});

const applicationsApi = new ApplicationsApi(config.basePath);
applicationsApi.setDefaultAuthentication({ 
  applyToRequest: (requestOptions) => {
    if (requestOptions && requestOptions.headers) {
      requestOptions.headers["Authorization"] = `Bearer ${config.apiKey}`;
    }
  }
});

// Example usage: List all environments for an application
async function listEnvironments() {
  try {
    const response = await environmentsApi.listEnvironments(
      'your-organisation-id',
      'your-application-id'
    );
    
    console.log('Environments:', response.body);
  } catch (error) {
    console.error('Error listing environments:', error);
  }
}

// Example usage: Get application details
async function getApplicationDetails() {
  try {
    const response = await applicationsApi.getApplication(
      'your-organisation-id',
      'your-application-id'
    );
    
    console.log('Application details:', response.body);
  } catch (error) {
    console.error('Error getting application details:', error);
  }
}

// Run the examples
(async () => {
  await listEnvironments();
  await getApplicationDetails();
})(); 