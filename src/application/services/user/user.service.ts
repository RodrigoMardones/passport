import { User, Auth } from "../../../domain/user/models/user.model";
import IUserRepository from "../../../domain/user/usecases/user.repository";
import Bcrypt from 'bcrypt';
import DataProvider from "../interfaces/dataProvider";

export default class UserService implements IUserRepository{
    constructor(private readonly dataProvider: DataProvider) {}
    async create(data: User): Promise<User> {
        const fixedUser : User = {
            ...data,
            password : await Bcrypt.hash(data.password, 10),
        };
        await this.dataProvider.collection('user').insertOne(data);
        return fixedUser;
    }
    // terminar esta parte
    async auth() : Promise<Auth> { 
        return {
           expires_in: '10',
           token: 'mytoken',
           timestamp: new Date().toISOString()
        } as Auth;
    }
}