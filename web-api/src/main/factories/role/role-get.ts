import { RoleGetController } from "../../../presentation/controllers/role/role-get";
import { Controller } from "../../../presentation/protocols";

export const makeRoleGetController = (): Controller =>{
    return new RoleGetController();
}