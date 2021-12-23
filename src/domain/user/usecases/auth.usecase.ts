import { UseCase } from "../../interfaces";
import { Auth, AuthParams } from "../models/user.model";
import IUserRepository from "./user.repository";

export default class AuthUseCase implements UseCase<unknown, Auth> {
    constructor(private readonly UserRepository: IUserRepository) {}
    async execute(data?: unknown): Promise<Auth | void> {
        const d = data as AuthParams;
        const exist = await this.UserRepository.find(d);
        if(exist){
            const validate = await this.UserRepository.validate(exist.password, d.password);
            if(validate){
                return await this.UserRepository.createToken(exist);
            } else {
                throw new Error('no hemos podido verificar al usuario');
            }
        } else {
            throw new Error('no hemos podido encontrar al usuario');
        }
    }
    
}