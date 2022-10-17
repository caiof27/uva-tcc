import { RoleModel } from "../../models/role";

export interface RoleGetOne{
    getOne(task:RoleModel):Promise<RoleModel>
}