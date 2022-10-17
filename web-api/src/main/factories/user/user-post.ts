import { DbUserPost } from "../../../data/usecases/user/user-post";
import { BcryptAdapter } from "../../../infra/criptography/bcrypt-adapter";
import { UserRepository } from "../../../infra/db/postgres/repositories/user/user-repository";
import { UserPostController } from "../../../presentation/controllers/user/user-post";
import { Controller } from "../../../presentation/protocols";

export const makeUserPostController = (): Controller =>{
    const bcryptAdapter = new BcryptAdapter();
    const userRepository = new UserRepository();
    const dbUserPost = new DbUserPost(bcryptAdapter,userRepository)
    return new UserPostController(dbUserPost);
}