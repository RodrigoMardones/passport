import CorsMiddleware from './cors/cors.middleware';
import LoggerMiddleware from './logger/logger.middleware';

export const middlewares = [
    CorsMiddleware,
    LoggerMiddleware
];