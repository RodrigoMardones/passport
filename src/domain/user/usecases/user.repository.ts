import {User, Auth, AuthParams} from "../models/user.model";

export default interface IUserRepository {
    create(data: User): User | Promise<User>;
    find(data: AuthParams): User | Promise<User>;
    validate(hash: string, password: string): Promise<boolean>;
    createToken(user:User, _customConfig?:unknown): Promise<Auth>;
}