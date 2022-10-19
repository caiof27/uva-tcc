import { DbRolePost } from "../../../data/usecases/role/role-post";
import { DbRolePut } from "../../../data/usecases/role/role-put";
import { RoleRepository } from "../../../infra/db/postgres/repositories/role/role-repository";
import { RolePostController } from "../../../presentation/controllers/role/role-post";
import { Controller } from "../../../presentation/protocols";

export const makeRolePostController = (): Controller =>{
    const roleRepository = new RoleRepository();
    const dbRolePost = new DbRolePost(roleRepository)
    return new RolePostController(dbRolePost);
}