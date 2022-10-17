import { UserModel } from "../../../domain/models/user";
import { UserGetAll } from "../../../domain/usecases/user/user-getAll"
import { UserGetAllRepository } from "../../protocols/user";

export class DbUserGetall implements UserGetAll{

    private readonly userRepository: UserGetAllRepository;

    constructor(userRepository: UserGetAllRepository ){
        this.userRepository = userRepository;

    }

    async getAll(): Promise<UserModel[]> {
        const user = await this.userRepository.getAll();
        return user;
    }

}