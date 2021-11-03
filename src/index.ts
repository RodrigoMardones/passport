import Server from './infraestructure/server';
import {controllers} from './application/controllers/index';
import { middlewares } from './application/middlewares';
import 'reflect-metadata';

const server = new Server({
    controllers,
    middlewares,
    classTransformer: true,
    defaultErrorHandler: false
});
server.init();