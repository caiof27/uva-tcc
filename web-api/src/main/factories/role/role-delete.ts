import { RoleDeleteController } from "../../../presentation/controllers/role/role-delete";
import { Controller } from "../../../presentation/protocols";

export const makeRoleDeleteController = (): Controller =>{
    return new RoleDeleteController();
}