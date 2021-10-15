import { Get, JsonController } from "routing-controllers";

@JsonController('/health')
export default class HealthController {
    @Get('')
    async healthCheck(){
        return {
            status : 'UP',
            timestamp: new Date().toISOString()
        }
    }
}