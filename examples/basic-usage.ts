import { Configuration, ApplicationsApi } from '../dist';

// Create configuration with your API key and base URL
const config = new Configuration({
  apiKey: 'your-api-key-here',
  basePath: 'https://api.quantcloud.com/v1' // Replace with your API URL
});

// Create an instance of the ApplicationsApi
const applicationsApi = new ApplicationsApi(config);

// Example: List applications
async function listApplications() {
  try {
    const response = await applicationsApi.listApplications();
    console.log('Applications:', response.data);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Run the example
listApplications(); 