import { RoleModel } from "../../../domain/models/role";
import { RolePut } from "../../../domain/usecases/role/role-put"
import { RolePutRepository } from "../../protocols/role";

export class DbRolePut implements RolePut{

    private readonly roleRepository: RolePutRepository;

    constructor(roleRepository: RolePutRepository ){
        this.roleRepository = roleRepository;

    }

    async put(roleData: RoleModel, roleId: number): Promise<void> {
        await this.roleRepository.put(roleData, roleId);
    }

}