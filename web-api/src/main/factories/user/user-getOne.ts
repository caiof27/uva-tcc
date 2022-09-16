import { UserGetOneController } from "../../../presentation/controllers/user/user-getOne";
import { Controller } from "../../../presentation/protocols";

export const makeUserGetOneController = (): Controller =>{
    return new UserGetOneController();
}