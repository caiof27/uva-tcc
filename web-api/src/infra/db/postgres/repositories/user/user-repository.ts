import { UserPostRepository,UserDeleteRepository,UserGetAllRepository,UserGetOneRepository,UserPutRepository, UserLoginRepository } from "../../../../../data/protocols/user";
import { UserModel } from "../../../../../domain/models/user";
import db from "../../models";

export class UserRepository implements UserPostRepository,UserDeleteRepository,UserGetAllRepository,UserGetOneRepository,UserPutRepository,UserLoginRepository {
    async getOne(id: number): Promise<UserModel> {
        const return_value = await db.sequelize.query(`select users.*,roles.role as role_name from users left join roles on users.role_id = roles.id where users.id = ${id}`);
        return return_value[0];
    }
    async put(user: UserModel,userId:number): Promise<void> {
        await db.user.update(user,{where:{id:userId}})
    }
    async getAll(): Promise<UserModel[]> {
        const return_value = await db.sequelize.query("select users.*,roles.role as role_name from users left join roles on users.role_id = roles.id");
        return return_value[0];
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