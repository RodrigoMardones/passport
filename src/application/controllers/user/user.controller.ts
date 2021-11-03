import { Body, JsonController, Middleware, Post } from "routing-controllers";
import CreateUserUseCase from "../../../domain/user/usecases/create.usecase";
import UserService from "../../services/user/user.service";
import { UserParams } from "./models/user.model";
import dbProvider from '../../../application/interfaces/providers/mongo';
import AuthUseCase from "../../../domain/user/usecases/auth.usecase";

@JsonController('/user')
export default class UserController {
    @Post('')
    async createUser(@Body({validate: true, type: UserParams}) params: UserParams): Promise<unknown> {
        return await new CreateUserUseCase(new UserService(dbProvider)).execute(params);
    }
    @Post('/auth')
    async authUser(@Body() params: unknown): Promise<unknown> {
        return await new AuthUseCase(new UserService(dbProvider)).execute(params);
    }
}