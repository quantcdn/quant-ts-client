/**
 * Configuration for the Quant API client
 */
export class Configuration {
    /**
     * API key
     */
    apiKey?: string;
    
    /**
     * Base path for API calls
     */
    basePath?: string = 'http://localhost';
    
    /**
     * Default headers for API calls
     */
    headers: { [key: string]: string } = {};
    
    constructor(config: {
        apiKey?: string;
        basePath?: string;
        headers?: { [key: string]: string };
    } = {}) {
        this.apiKey = config.apiKey;
        
        // To assist with backwards compatibility we need to remove the /api/v3 
        // from the base path if it exists as this update moves basePath to
        // the base of the QuantCDN API to allow v2 resources to be accessed.
        if (config.basePath) {
            if (config.basePath.endsWith('/api/v3')) {
                config.basePath = config.basePath.replace('/api/v3', '');
            }
            this.basePath = config.basePath;
        }
        
        if (config.headers) {
            this.headers = config.headers;
        }
        
        // Set default authentication header if API key is provided
        if (this.apiKey) {
            this.headers['Authorization'] = `Bearer ${this.apiKey}`;
        }
    }
} 