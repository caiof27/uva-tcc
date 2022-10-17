import { UserModel } from "../../../domain/models/user";


export interface UserPostRepository {
    post(user: UserModel): Promise<UserModel>;
}