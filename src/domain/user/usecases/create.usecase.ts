import { UseCase } from "../../interfaces";
import {User} from "../models/user.model";
import IUserRepository from "./user.repository";

export default class CreateUserUseCase  implements UseCase<unknown, User>{
    constructor(private readonly repository: IUserRepository) {}
    async execute(data?: unknown): Promise<User> {
        const d = data as User;
        return await this.repository.create(d);
    }
}