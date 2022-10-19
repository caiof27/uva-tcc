import { RoleDeleteRepository, RoleGetAllRepository, RoleGetOneRepository, RolePostRepository, RolePutRepository } from "../../../../../data/protocols/role";
import { RoleModel } from "../../../../../domain/models/role";
import db from "../../models";

export class RoleRepository implements RoleDeleteRepository, RoleGetAllRepository, RoleGetOneRepository, RolePostRepository, RolePutRepository {
    async getOne(id: number): Promise<RoleModel> {
        return db.role.findOne({where:{id}})
    }
    async put(role: RoleModel,roleId:number): Promise<void> {
        await db.role.update(role,{where:{id:roleId}})
    }
    async getAll(): Promise<RoleModel[]> {
        return await db.role.findAll();
    }
    async delete(id: number): Promise<void> {
        await db.role.destroy({ where: { id } })
    }
    async post(role: RoleModel): Promise<RoleModel>{
        const result = await db.role.create(role)
        return result;
    }
}