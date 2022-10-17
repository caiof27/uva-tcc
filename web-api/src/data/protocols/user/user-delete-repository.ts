import { UserModel } from "../../../domain/models/user";


export interface UserDeleteRepository {
    delete(id: number): Promise<void>;
}