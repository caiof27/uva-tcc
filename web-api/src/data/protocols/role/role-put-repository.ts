import { RoleModel } from "../../../domain/models/role";

export interface RolePutRepository {
    put(role: RoleModel, roleId:number): Promise<void>;
}