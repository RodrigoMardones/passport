import { Body, JsonController, Post } from "routing-controllers";
import CreateUserUseCase from "../../../domain/user/usecases/create.usecase";
import UserService from "../../services/user/user.service";
import { IUserParams } from "./models/user.model";
import dbProvider from '../../../application/interfaces/providers/mongo';
@JsonController('/user')
export default class UserController {
    @Post('')
    async createUser(@Body() params: IUserParams): Promise<unknown> {
        return await new CreateUserUseCase(new UserService(dbProvider)).execute(params);
    }
}