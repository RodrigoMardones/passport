import { Context } from "koa";
import { Ctx, Middleware } from "routing-controllers";
import { parseError } from "./utils";
import { v4 as uuidv4 } from 'uuid';
import traceLogger from "../../interfaces/logger/logger";

@Middleware({type: 'before'})
export default class ErrorMiddleware {
    public async use(
        @Ctx() context: Context,
        next: (err?: Error) => Promise<Error>
    ): Promise<void> {
        try {
            await next();
        } catch(error: unknown) {

            const parsedErr = parseError(error);
            const traceID = uuidv4();
            traceLogger.info({
                parsedErr,
                traceID
            })
            context.body = {
                message: 'ha ocurrido un error',
                traceID
            }
        }
    }
}