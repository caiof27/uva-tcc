import { UserGetController } from "../../../presentation/controllers/user/user-get";
import { Controller } from "../../../presentation/protocols";

export const makeUserGetController = (): Controller =>{
    return new UserGetController();
}