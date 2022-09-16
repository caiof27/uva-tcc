import { UserDeleteController } from "../../../presentation/controllers/user/user-delete";
import { Controller } from "../../../presentation/protocols";

export const makeUserDeleteController = (): Controller =>{
    return new UserDeleteController();
}