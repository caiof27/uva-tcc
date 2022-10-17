import { RoleModel } from "../../models/role";

export interface RolePost{
    post(task: RoleModel): Promise<RoleModel>
}