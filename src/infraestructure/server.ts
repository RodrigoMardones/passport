import { createKoaServer, RoutingControllersOptions } from 'routing-controllers';
import Koa from 'koa';

export default class Server {
    private readonly app: Koa;
    constructor(config: RoutingControllersOptions){
        this.app = createKoaServer(config);
    }
    public async init(): Promise<void> {
        const port: number = parseInt(String(process.env.PORT), 10) || 8082;   
        this.app.listen(port, () => {
            console.log(`server running on port => ${port} 😀`);
        });
        this.app.on('error', (e) => {
            console.log(e.message);
        })
    }   
}