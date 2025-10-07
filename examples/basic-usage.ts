import { 
  EnvironmentsApi, 
  ApplicationsApi
} from '../api';

const API_KEY = 'YOUR_API_KEY';
const BASE_PATH = 'https://dashboard.quantcdn.io';

// Initialize API instances
const environmentsApi = new EnvironmentsApi(BASE_PATH);
environmentsApi.setDefaultAuthentication({ 
  applyToRequest: (requestOptions) => {
    if (requestOptions && requestOptions.headers) {
      requestOptions.headers["Quant-Token"] = API_KEY;
    }
  }
});

const applicationsApi = new ApplicationsApi(BASE_PATH);
applicationsApi.setDefaultAuthentication({ 
  applyToRequest: (requestOptions) => {
    if (requestOptions && requestOptions.headers) {
      requestOptions.headers["Quant-Token"] = API_KEY;
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