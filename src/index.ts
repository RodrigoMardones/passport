import Server from './infraestructure/server';
import {controllers} from './application/controllers/index';
import { middlewares } from './application/middlewares';
const server = new Server({
    controllers,
    middlewares
});
server.init();