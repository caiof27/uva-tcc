import { UserModel } from "../../models/user"; 

export interface UserLogin{
    login(username:string,password:string):Promise<UserModel>
}