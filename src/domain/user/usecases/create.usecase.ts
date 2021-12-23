import { UseCase } from "../../interfaces";
import {User} from "../models/user.model";
import IUserRepository from "./user.repository";

export default class CreateUserUseCase  implements UseCase<unknown, User>{
    constructor(private readonly repository: IUserRepository) {}
    async execute(data?: unknown): Promise<unknown> {
        const d = data as User;
        const exist = await this.repository.find(d);
        if(!exist) {
            await this.repository.create(d);
            return this.repository.find(d);
        } else {
            return;
        }
    }
}