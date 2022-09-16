import { RolePutController } from "../../../presentation/controllers/role/role-put";
import { Controller } from "../../../presentation/protocols";

export const makeRolePutController = (): Controller =>{
    return new RolePutController();
}