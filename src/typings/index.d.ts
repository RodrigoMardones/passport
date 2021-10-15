declare global {
    namespace NodeJS {
      export interface ProcessEnv {
        NODE_ENV: 'development' | 'qa' | 'production';
        PORT: number;
      }
    }
  }
  
  export interface LooseObject {
    [key: string]: never;
  }
  
  export interface IError {
    message: string;
    details: string[];
  }
  
  export interface IErrorResponse {
    status: 400 | 401 | 403 | 404 | 500;
    body: T;
  }
  
  export interface ISuccessResponse<T> {
    status: 200 | 201 | 202 | 204;
    body?: T;
  }
  
  export interface Service {
    name?: string;
    endpoint: string;
    timeout?: number;
  }
  
  export interface ServiceConfig {
    baseURL: string;
    headers?: Record<string, string>;
    timeout?: number;
  }
  