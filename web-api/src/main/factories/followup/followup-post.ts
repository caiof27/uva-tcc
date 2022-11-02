import { DbFollowUpPost } from "../../../data/usecases/followup/followup-post";
import { FollowUpRepository } from "../../../infra/db/postgres/repositories/followup/followup-repository";
import { JwtAdapter } from "../../../infra/token/jwt-adapter";
import { FollowUpPostController } from "../../../presentation/controllers/followup/followup-post";
import { Controller } from "../../../presentation/protocols";

export const makeFollowUpPostController = (): Controller =>{
    const followUpRepository = new FollowUpRepository();
    const dbfollowUpPost = new DbFollowUpPost(followUpRepository);
    const jwtAdapter = new JwtAdapter();

    return new FollowUpPostController(dbfollowUpPost,jwtAdapter);
}