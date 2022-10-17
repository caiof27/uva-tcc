import { UserModel } from "../../../domain/models/user";
import { UserGetOne } from "../../../domain/usecases/user/user-getOne"
import { UserGetOneRepository } from "../../protocols/user";

export class DbUserGetOne implements UserGetOne{

    private readonly userRepository: UserGetOneRepository;

    constructor(userRepository: UserGetOneRepository ){
        this.userRepository = userRepository;
    }

    async getOne(id: number): Promise<UserModel> {
        const user = this.userRepository.getOne(id)
        return user;
    }

}