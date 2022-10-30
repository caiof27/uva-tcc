import { DbUserLogin } from "../../../data/usecases/user/user-login";
import { BcryptAdapter } from "../../../infra/criptography/bcrypt-adapter";
import { UserRepository } from "../../../infra/db/postgres/repositories/user/user-repository";
import { JwtAdapter } from "../../../infra/token/jwt-adapter";
import { UserLoginController } from "../../../presentation/controllers/user/user-login";
import { Controller } from "../../../presentation/protocols";

export const makeUserLoginController = (): Controller =>{
    const bcryptAdapter = new BcryptAdapter();
    const userRepository = new UserRepository();
    const jwtAdapter = new JwtAdapter();
    const dbUserLogin = new DbUserLogin(bcryptAdapter,userRepository)
    return new UserLoginController(dbUserLogin,jwtAdapter);
}