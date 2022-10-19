import { DbRoleGetOne } from "../../../data/usecases/role/role-getOne";
import { RoleRepository } from "../../../infra/db/postgres/repositories/role/role-repository";
import { RoleGetOneController } from "../../../presentation/controllers/role/role-getOne";
import { Controller } from "../../../presentation/protocols";

export const makeRoleGetOneController = (): Controller =>{
    const roleRepository = new RoleRepository();
    const dbRoleGetOne = new DbRoleGetOne(roleRepository)
    return new RoleGetOneController(dbRoleGetOne);
}