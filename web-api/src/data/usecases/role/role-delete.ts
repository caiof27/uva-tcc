import { RoleDelete } from "../../../domain/usecases/role/role-delete"
import { RoleDeleteRepository } from "../../protocols/role";

export class DbRoleDelete implements RoleDelete{

    private readonly roleRepository: RoleDeleteRepository;

    constructor(roleRepository: RoleDeleteRepository ){
        this.roleRepository = roleRepository;

    }

    async delete(id: number): Promise<void> {
        await this.roleRepository.delete(id);
    }

}