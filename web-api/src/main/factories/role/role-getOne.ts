import { RoleGetOneController } from "../../../presentation/controllers/role/role-getOne";
import { Controller } from "../../../presentation/protocols";

export const makeRoleGetOneController = (): Controller =>{
    return new RoleGetOneController();
}