import { DbRoleGetOne } from "../../../data/usecases/role/role-getOne";
import { DbRolePost } from "../../../data/usecases/role/role-post";
import { DbRolePut } from "../../../data/usecases/role/role-put";
import { RoleRepository } from "../../../infra/db/postgres/repositories/role/role-repository";
import { RolePutController } from "../../../presentation/controllers/role/role-put";
import { Controller } from "../../../presentation/protocols";

export const makeRolePutController = (): Controller =>{
    const roleRepository = new RoleRepository();
    const dbRolePut = new DbRolePut(roleRepository);
    const dbRoleGetOne = new DbRoleGetOne(roleRepository);
    return new RolePutController(dbRolePut,dbRoleGetOne);
}