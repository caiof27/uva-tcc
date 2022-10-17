import { FollowUpPostController } from "../../../presentation/controllers/followup/followup-post";
import { Controller } from "../../../presentation/protocols";

export const makeFollowUpPostController = (): Controller =>{
    return new FollowUpPostController();
}