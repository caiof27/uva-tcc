import { UserModel } from "../../../domain/models/user";


export interface UserPutRepository {
    put(user: UserModel,userId:number): Promise<void>;
}