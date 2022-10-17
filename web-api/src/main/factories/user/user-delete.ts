import { DbUserDelete } from "../../../data/usecases/user/user-delete";
import { UserRepository } from "../../../infra/db/postgres/repositories/user/user-repository";
import { UserDeleteController } from "../../../presentation/controllers/user/user-delete";
import { Controller } from "../../../presentation/protocols";

export const makeUserDeleteController = (): Controller =>{
    const userRepository = new UserRepository();
    const dbUserDelete= new DbUserDelete(userRepository)
    return new UserDeleteController(dbUserDelete);
}