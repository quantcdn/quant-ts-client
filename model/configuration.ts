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
        
        if (config.basePath) {
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