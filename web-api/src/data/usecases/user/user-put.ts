import { UserModel } from "../../../domain/models/user";
import { UserPut } from "../../../domain/usecases/user/user-put"
import { Encrypter } from "../../protocols/encrypter";
import { UserPutRepository } from "../../protocols/user";

export class DbUserPut implements UserPut{

    private readonly encrypter: Encrypter;
    private readonly userRepository: UserPutRepository;

    constructor(encrypter:Encrypter,userRepository: UserPutRepository ){
        this.encrypter = encrypter;
        this.userRepository = userRepository;

    }

    async put(userData: UserModel, userId: number): Promise<void> {
        const hashedPassword = await this.encrypter.encrypt(userData.password);
        await this.userRepository.put(Object.assign({}, userData, { password: hashedPassword }), userId);
    }

}