import { UserPostRepository,UserDeleteRepository,UserGetAllRepository,UserGetOneRepository,UserPutRepository } from "../../../../../data/protocols/user";
import { UserModel } from "../../../../../domain/models/user";
import db from "../../models";

export class UserRepository implements UserPostRepository,UserDeleteRepository,UserGetAllRepository,UserGetOneRepository,UserPutRepository {
    async getOne(id: number): Promise<UserModel> {
        return db.user.findOne({where:{id}})
    }
    async put(user: UserModel): Promise<void> {
        await db.user.update({where:{id:user.id}})
    }
    async getAll(): Promise<UserModel[]> {
        return await db.user.findAll();
    }
    async delete(id: number): Promise<void> {
        await db.user.destroy({ where: { id } })
    }
    async post(user: UserModel): Promise<UserModel>{
        const result = await db.user.create(user)
        return result;
    }
}