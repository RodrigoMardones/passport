import Server from './infraestructure/server';
import {controllers} from './application/controllers/index';

const server = new Server({
    controllers,
});
server.init();