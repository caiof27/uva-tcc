import { DbUserGetOne } from "../../../data/usecases/user/user-getOne";
import { DbUserPut } from "../../../data/usecases/user/user-put";
import { BcryptAdapter } from "../../../infra/criptography/bcrypt-adapter";
import { UserRepository } from "../../../infra/db/postgres/repositories/user/user-repository";
import { UserPutController } from "../../../presentation/controllers/user/user-put";
import { Controller } from "../../../presentation/protocols";

export const makeUserPutController = (): Controller =>{
    const bcryptAdapter = new BcryptAdapter();
    const userRepository = new UserRepository();
    const dbUserPut = new DbUserPut(bcryptAdapter,userRepository);
    const dbuserGetOne = new DbUserGetOne(userRepository);
    return new UserPutController(dbUserPut,dbuserGetOne);
}