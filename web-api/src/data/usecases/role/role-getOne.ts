import { RoleModel } from "../../../domain/models/role";
import { RoleGetOne } from "../../../domain/usecases/role/role-getOne"
import { RoleGetOneRepository } from "../../protocols/role";

export class DbRoleGetOne implements RoleGetOne{

    private readonly roleRepository: RoleGetOneRepository;

    constructor(roleRepository: RoleGetOneRepository ){
        this.roleRepository = roleRepository;

    }

    async getOne(id: number): Promise<RoleModel> {
        const user = this.roleRepository.getOne(id)
        return user;
    }

}