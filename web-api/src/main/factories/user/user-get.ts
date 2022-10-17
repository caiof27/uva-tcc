import { DbUserGetall } from "../../../data/usecases/user/user-getAll";
import { UserRepository } from "../../../infra/db/postgres/repositories/user/user-repository";
import { UserGetController } from "../../../presentation/controllers/user/user-get";
import { Controller } from "../../../presentation/protocols";

export const makeUserGetController = (): Controller =>{
    const userRepository = new UserRepository();
    const dbUserGetAll = new DbUserGetall(userRepository)
    return new UserGetController(dbUserGetAll);
}