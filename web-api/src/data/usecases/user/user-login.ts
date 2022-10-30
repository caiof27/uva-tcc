import { UserModel } from "../../../domain/models/user";
import { UserLogin } from "../../../domain/usecases/user/user-login";
import { Encrypter } from "../../protocols/encrypter";
import { UserLoginRepository } from "../../protocols/user";

export class DbUserLogin implements UserLogin{

    private readonly userLoginRepository: UserLoginRepository;
    private readonly encrypter: Encrypter;

    constructor(encrypter:Encrypter,userLoginRepository: UserLoginRepository ){
        this.userLoginRepository = userLoginRepository;
        this.encrypter = encrypter;

    }

    async login(username:string,password:string): Promise<any> {
        const user = await this.userLoginRepository.login(username,password);
        if(user){
            const compare = await this.encrypter.compare(password,user.password);
            if(compare === true){
                return user;
            }
            else{
                return null;
            }
        }
        else{
            return null;
        }
        
    }

}