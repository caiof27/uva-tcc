import { RoleModel } from "../../models/role";

export interface RoleGetOne{
    getOne(id:number):Promise<RoleModel>
}