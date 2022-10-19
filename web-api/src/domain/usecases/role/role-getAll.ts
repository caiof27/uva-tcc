import { RoleModel } from "../../models/role";

export interface RoleGetAll{
    getAll():Promise<RoleModel[]>
}