import { DbRolePut } from "../../../data/usecases/role/role-put";
import { RoleRepository } from "../../../infra/db/postgres/repositories/role/role-repository";
import { RolePutController } from "../../../presentation/controllers/role/role-put";
import { Controller } from "../../../presentation/protocols";

export const makeRolePutController = (): Controller =>{
    const roleRepository = new RoleRepository();
    const dbRolePut = new DbRolePut(roleRepository);
    return new RolePutController(dbRolePut);
}