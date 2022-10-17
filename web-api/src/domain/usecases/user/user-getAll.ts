import { UserModel } from "../../models/user";

export interface UserGetAll{
    getAll():Promise<UserModel[]>
}