import { UseCase } from "../../interfaces";
import { Auth, User } from "../models/user.model";
import IUserRepository from "./user.repository";

export default class AuthUseCase implements UseCase<unknown, Auth> {
    constructor(private readonly UserRepository: IUserRepository) {}
    async execute(data?: unknown): Promise<Auth> {
        const d = data as User;
        return await this.UserRepository.auth(d); 
    }
    
}