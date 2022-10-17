import { UserModel } from "../../models/user"; 

export interface UserPost{
    post(user: UserModel):Promise<UserModel>
}