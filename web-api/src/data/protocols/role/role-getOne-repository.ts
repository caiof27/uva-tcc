import { RoleModel } from "../../../domain/models/role";

export interface RoleGetOneRepository {
    getOne(id: number): Promise<RoleModel>;
}