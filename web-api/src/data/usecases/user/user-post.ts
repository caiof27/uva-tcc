import { UserModel } from "../../../domain/models/user";
import { UserPost } from "../../../domain/usecases/user/user-post"
import { Encrypter } from "../../protocols/encrypter";
import { UserPostRepository } from "../../protocols/user";

export class DbUserPost implements UserPost{

    private readonly encrypter: Encrypter;
    private readonly userRepository: UserPostRepository;

    constructor(encrypter:Encrypter,userRepository: UserPostRepository ){
        this.encrypter = encrypter;
        this.userRepository = userRepository;

    }

    async post(userData: UserModel): Promise<UserModel> {
        const hashedPassword = await this.encrypter.encrypt(userData.password);
        const user = await this.userRepository.post(
            Object.assign({}, userData, { password: hashedPassword })
        );
        return user;
    }

}