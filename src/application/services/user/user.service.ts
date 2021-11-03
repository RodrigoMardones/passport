import { User, Auth } from "../../../domain/user/models/user.model";
import IUserRepository from "../../../domain/user/usecases/user.repository";
import Bcrypt from 'bcrypt';
import DataProvider from "../interfaces/dataProvider";
import jwt from 'jsonwebtoken';
export default class UserService implements IUserRepository {
    constructor(private readonly dataProvider: DataProvider) { }
    async create(data: User): Promise<User> {
        const fixedUser: User = {
            ...data,
            password: await Bcrypt.hash(data.password, 10),
        };
        await this.dataProvider.collection('user').insertOne(data);
        return fixedUser;
    }

    async auth(data: User): Promise<Auth> {

        const exist = await this.find(data);
        console.log(exist);
        const config = {
            expiresIn: '2hrs',
        }
        const newAuth: Auth = {
            token: jwt.sign(exist, process.env.SECRET_KEY_JWT as string, config),
            ...config,
            timestamp: new Date().toISOString()
        };
        return newAuth;
    }

    async find(data: User): Promise<User> {
        const { dni } = data;
        return await this.dataProvider.collection('user').findOne({ dni: dni }) as User;
    }
}