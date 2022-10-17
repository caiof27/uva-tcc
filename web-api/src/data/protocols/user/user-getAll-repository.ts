import { UserModel } from "../../../domain/models/user";


export interface UserGetAllRepository {
    getAll(): Promise<UserModel[]>;
}