/**
 * Basic usage examples for the Quant TypeScript SDK (v4.0 - typescript-axios)
 */

import { Configuration, EnvironmentsApi, ApplicationsApi } from '..';

// Create configuration with authentication
const config = new Configuration({
  basePath: 'https://api.quantcdn.io',
  accessToken: 'YOUR_API_KEY_HERE' // or use apiKey
});

// Example 1: List environments
async function listEnvironments() {
  const environmentsApi = new EnvironmentsApi(config);
  
  try {
    const response = await environmentsApi.listEnvironments('your-org-id', 'your-app-id');
    console.log('Environments:', response.data); // Note: .data for axios
    return response.data;
  } catch (error: any) {
    if (error.response) {
      console.error(`Error ${error.response.status}:`, error.response.data);
    } else {
      console.error('Error:', error.message);
    }
    throw error;
  }
}

// Example 2: Get application details
async function getApplication() {
  const applicationsApi = new ApplicationsApi(config);
  
  try {
    const response = await applicationsApi.getApplication('your-org-id', 'your-app-id');
    console.log('Application:', response.data); // Note: .data for axios
    console.log('Response status:', response.status);
    console.log('Response headers:', response.headers);
    return response.data;
  } catch (error: any) {
    if (error.response) {
      // Server responded with error status
      console.error(`Error ${error.response.status}:`, error.response.data);
    } else if (error.request) {
      // Request made but no response
      console.error('No response received');
    } else {
      // Error setting up request
      console.error('Error:', error.message);
    }
    throw error;
  }
}

// Example 3: With custom axios instance
import axios from 'axios';

const customAxios = axios.create({
  timeout: 30000,
  headers: {
    'X-Custom-Header': 'value'
  }
});

const customConfig = new Configuration({
  basePath: 'https://api.quantcdn.io',
  accessToken: 'YOUR_API_KEY_HERE',
  baseOptions: {
    // Pass custom axios instance options
    timeout: 30000
  }
});

// Run examples
if (require.main === module) {
  console.log('Running Quant SDK examples...\n');
  
  listEnvironments()
    .then(() => getApplication())
    .then(() => console.log('\n✓ Examples completed'))
    .catch((error) => {
      console.error('\n✗ Examples failed:', error.message);
      process.exit(1);
    });
}
