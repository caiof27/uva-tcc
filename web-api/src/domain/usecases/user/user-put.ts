import { UserModel } from "../../models/user";

export interface UserPut{
    put(user:UserModel,userId:number):Promise<void>
}