import { RoleModel } from "../../models/role"
export interface RoleDelete{
    delete(role: RoleModel):Promise<void>
}