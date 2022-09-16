import { RolePostController } from "../../../presentation/controllers/role/role-post";
import { Controller } from "../../../presentation/protocols";

export const makeRolePostController = (): Controller =>{
    return new RolePostController();
}