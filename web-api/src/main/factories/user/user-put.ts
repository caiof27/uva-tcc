import { DbUserPut } from "../../../data/usecases/user/user-put";
import { BcryptAdapter } from "../../../infra/criptography/bcrypt-adapter";
import { UserRepository } from "../../../infra/db/postgres/repositories/user/user-repository";
import { UserPutController } from "../../../presentation/controllers/user/user-put";
import { Controller } from "../../../presentation/protocols";

export const makeUserPutController = (): Controller =>{
    const bcryptAdapter = new BcryptAdapter();
    const userRepository = new UserRepository();
    const dbUserPost = new DbUserPut(bcryptAdapter,userRepository);
    return new UserPutController(dbUserPost);
}