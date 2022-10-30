import { UserModel } from "../../../domain/models/user";

export interface UserLoginRepository {
    login(username:string,password:string): Promise<UserModel>;
}