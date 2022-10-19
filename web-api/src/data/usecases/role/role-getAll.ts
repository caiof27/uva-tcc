import { RoleModel } from "../../../domain/models/role";
import { RoleGetAll } from "../../../domain/usecases/role/role-getAll"
import { RoleGetAllRepository } from "../../protocols/role";

export class DbRoleGetall implements RoleGetAll{

    private readonly roleRepository: RoleGetAllRepository;

    constructor(roleRepository: RoleGetAllRepository ){
        this.roleRepository = roleRepository;

    }

    async getAll(): Promise<RoleModel[]> {
        const user = await this.roleRepository.getAll();
        return user;
    }

}