import { DbRoleDelete } from "../../../data/usecases/role/role-delete";
import { RoleRepository } from "../../../infra/db/postgres/repositories/role/role-repository";
import { RoleDeleteController } from "../../../presentation/controllers/role/role-delete";
import { Controller } from "../../../presentation/protocols";

export const makeRoleDeleteController = (): Controller =>{
    const roleRepository = new RoleRepository();
    const dbRoleDelete = new DbRoleDelete(roleRepository);
    return new RoleDeleteController(dbRoleDelete);
}