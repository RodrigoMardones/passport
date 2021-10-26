import Server from './infraestructure/server';
import {controllers} from './application/controllers/index';
import { middlewares } from './application/middlewares';
import 'reflect-metadata';
import { config } from 'dotenv';
config();
const server = new Server({
    controllers,
    middlewares
});
server.init();