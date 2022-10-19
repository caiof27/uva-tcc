import { RoleModel } from "../../models/role";

export interface RolePut{
    put(role: RoleModel,roleId:number): Promise<void>
}