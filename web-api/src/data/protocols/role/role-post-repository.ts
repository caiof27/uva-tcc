import { RoleModel } from "../../../domain/models/role";

export interface RolePostRepository {
    post(role: RoleModel): Promise<RoleModel>;
}