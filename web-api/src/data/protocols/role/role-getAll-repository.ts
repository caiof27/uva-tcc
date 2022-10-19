import { RoleModel } from "../../../domain/models/role";

export interface RoleGetAllRepository {
    getAll(): Promise<RoleModel[]>;
}