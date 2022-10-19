import { RoleModel } from "../../../domain/models/role";
import { RolePost } from "../../../domain/usecases/role/role-post"
import { RolePostRepository } from "../../protocols/role";

export class DbRolePost implements RolePost{

    private readonly roleRepository: RolePostRepository;

    constructor(roleRepository: RolePostRepository ){
        this.roleRepository = roleRepository;

    }

    async post(roleData: RoleModel): Promise<RoleModel> {
        const user = await this.roleRepository.post(roleData);
        return user;
    }

}