import { DbUserGetOne } from "../../../data/usecases/user/user-getOne";
import { UserRepository } from "../../../infra/db/postgres/repositories/user/user-repository";
import { UserGetOneController } from "../../../presentation/controllers/user/user-getOne";
import { Controller } from "../../../presentation/protocols";

export const makeUserGetOneController = (): Controller =>{
    
    const userRepository = new UserRepository();
    const dbUserGetOne = new DbUserGetOne(userRepository)
    return new UserGetOneController(dbUserGetOne);
}