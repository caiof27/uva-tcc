import { DbRoleGetall } from "../../../data/usecases/role/role-getAll";
import { RoleRepository } from "../../../infra/db/postgres/repositories/role/role-repository";
import { RoleGetAllController } from "../../../presentation/controllers/role/role-getAll";
import { Controller } from "../../../presentation/protocols";

export const makeRoleGetController = (): Controller =>{
    const roleRepository = new RoleRepository();
    const dbRoleGetAll = new DbRoleGetall(roleRepository)
    return new RoleGetAllController(dbRoleGetAll);
}