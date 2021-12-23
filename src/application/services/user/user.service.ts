import { User, Auth, AuthParams } from "../../../domain/user/models/user.model";
import IUserRepository from "../../../domain/user/usecases/user.repository";
import Bcrypt from "bcrypt";
import DataProvider from "../interfaces/dataProvider";
import jwt from "jsonwebtoken";
export default class UserService implements IUserRepository {
  constructor(private readonly dataProvider: DataProvider) {}
  async create(data: User): Promise<User> {
    const hashedPassword = await Bcrypt.hash(
      data.password,
      Number(process.env.SALT_CRYPT_CODE)
    );
    const fixedUser: User = {
      ...data,
      password: hashedPassword,
    };
    await this.dataProvider.collection("user").insertOne(fixedUser);
    return fixedUser;
  }
  async find(data: AuthParams): Promise<User> {
    const { email } = data;
    const query = {
      email,
    };
    return (await this.dataProvider
      .collection("user")
      .findOne(query)) as unknown as User;
  }
  async validate(hash: string, password: string): Promise<boolean> {
    return Bcrypt.compare(password, hash);
  }
  async createToken(
    user: User,
    _customConfig?: Record<any, any>
  ): Promise<Auth> {
    const config = {
      expiresIn: "2hrs",
      ..._customConfig,
    };
    const token = jwt.sign(user, process.env.SECRET_KEY_JWT as string, config);
    return {
      token,
      ...config,
      timestamp: new Date().toISOString(),
    };
  }
}
