import { RoleModel } from "../../models/role";

export interface TaskPost{
    put(task: RoleModel): Promise<RoleModel>
}