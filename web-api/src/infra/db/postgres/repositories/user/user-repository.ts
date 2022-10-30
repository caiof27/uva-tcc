import { UserPostRepository,UserDeleteRepository,UserGetAllRepository,UserGetOneRepository,UserPutRepository, UserLoginRepository } from "../../../../../data/protocols/user";
import { UserModel } from "../../../../../domain/models/user";
import db from "../../models";

export class UserRepository implements UserPostRepository,UserDeleteRepository,UserGetAllRepository,UserGetOneRepository,UserPutRepository,UserLoginRepository {
    async getOne(id: number): Promise<UserModel> {
        return db.user.findOne({where:{id}})
    }
    async put(user: UserModel,userId:number): Promise<void> {
        await db.user.update(user,{where:{id:userId}})
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
    async login(username: string): Promise<UserModel>{
        const result = await db.user.findOne({where:{username}});
        return result;
    }
}