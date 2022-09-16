import { UserPostController } from "../../../presentation/controllers/user/user-post";
import { Controller } from "../../../presentation/protocols";

export const makeUserPostController = (): Controller =>{
    return new UserPostController();
}