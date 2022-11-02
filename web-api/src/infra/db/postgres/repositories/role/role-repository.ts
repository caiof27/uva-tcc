import { RoleDeleteRepository, RoleGetAllRepository, RoleGetOneRepository, RolePostRepository, RolePutRepository } from "../../../../../data/protocols/role";
import { RoleModel } from "../../../../../domain/models/role";
import db from "../../models";

export class RoleRepository implements RoleDeleteRepository, RoleGetAllRepository, RoleGetOneRepository, RolePostRepository, RolePutRepository {
    async getOne(id: number): Promise<RoleModel> {
        const return_value = await db.sequelize.query(`select roles.id,roles.role,roles.dependency as dependency_id,dependency.role as dependency_role from roles left join roles as dependency on roles.dependency = dependency.id where roles.id = ${id}`);
        return return_value[0];
    }
    async put(role: RoleModel,roleId:number): Promise<void> {
        await db.role.update(role,{where:{id:roleId}})
    }
    async getAll(): Promise<RoleModel[]> {
        const return_value = await db.sequelize.query("select roles.id,roles.role,roles.dependency as dependency_id,dependency.role as dependency_role from roles left join roles as dependency on roles.dependency = dependency.id");
        return return_value[0];
    }
    async delete(id: number): Promise<void> {
        await db.role.destroy({ where: { id } })
    }
    async post(role: RoleModel): Promise<RoleModel>{
        const result = await db.role.create(role)
        return result;
    }
}