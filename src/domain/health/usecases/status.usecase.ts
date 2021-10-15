import { UseCase } from "../../interfaces";
import HealthResponse from "../models/health.models";

export default class StatusUseCase implements UseCase<HealthResponse, unknown>{
    execute(): HealthResponse {
        return {
            status: "UP",
            timestamp: new Date().toISOString()
        } as HealthResponse;
    }
}