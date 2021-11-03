import {User, Auth} from "../models/user.model";

export default interface IUserRepository {
    create(data: User): User | Promise<User>;
    auth(data: User): Auth | Promise<Auth>;
    find(data: User): User | Promise<User>;
}