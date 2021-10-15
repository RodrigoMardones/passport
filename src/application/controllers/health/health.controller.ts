import { Get, JsonController } from "routing-controllers";
import StatusUseCase from "../../../domain/health/usecases/status.usecase";

@JsonController('/health')
export default class HealthController {
    @Get('')
    healthCheck(){
        return new StatusUseCase().execute();
    }
}