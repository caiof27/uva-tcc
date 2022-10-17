import { RoleModel } from "../../models/role";

export interface RoleGetAll{
    getAll(task:RoleModel):Promise<RoleModel[]>
}