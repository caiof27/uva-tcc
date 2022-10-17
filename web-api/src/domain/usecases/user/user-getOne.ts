import { UserModel } from "../../models/user";

export interface UserGetOne{
    getOne(id:number):Promise<UserModel>
}