import { RoleModel } from "../../models/role";

export interface RolePost{
    post(role: RoleModel): Promise<RoleModel>
}