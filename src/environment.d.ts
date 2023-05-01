declare global {
    namespace NodeJS {
      interface ProcessEnv {
        QUANT_ENDPOINT?: string;
        QUANT_CUSTOMER?: string;
        QUANT_TOKEN?: string;
        QUANT_PROJECT?: string;
      }
    }
  }
  
  // If this file has no import/export statements (i.e. is a script)
  // convert it into a module by adding an empty export statement.
  export {}
  