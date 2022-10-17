import { UserModel } from "../../../domain/models/user";


export interface UserGetOneRepository {
    getOne(id: number): Promise<UserModel>;
}