import { Middleware, Ctx, KoaMiddlewareInterface } from "routing-controllers";
import { Context } from "koa";
import logger from 'koa-pino-logger';
import pino from "pino";
@Middleware({type: 'before'})
export default class LoggerMiddleware implements KoaMiddlewareInterface{
    
    use(
        @Ctx() ctx: Context, 
        next: (err?: any) => Promise<any>
        ): Promise<any> {
        
        const basePath = `${process.cwd()}/logs/info.log`;
        
        const streams = [
            { stream : process.stdout },
            { stream : pino.destination(basePath)}
        ]
        const middleware = logger({
            logger : pino({level: 'info'}, pino.multistream(streams)),
        });
        return middleware(ctx, next);
    }
}