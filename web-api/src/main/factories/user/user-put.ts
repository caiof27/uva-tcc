import { UserPutController } from "../../../presentation/controllers/user/user-put";
import { Controller } from "../../../presentation/protocols";

export const makeUserPutController = (): Controller =>{
    return new UserPutController();
}