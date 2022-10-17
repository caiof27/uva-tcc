import { UserDelete } from "../../../domain/usecases/user/user-delete"
import { UserDeleteRepository } from "../../protocols/user";

export class DbUserDelete implements UserDelete{

    private readonly userRepository: UserDeleteRepository;

    constructor(userRepository: UserDeleteRepository ){
        this.userRepository = userRepository;

    }

    async delete(id: number): Promise<void> {
        await this.userRepository.delete(id);
    }

}