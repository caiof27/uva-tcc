import { FollowUpGetOneController } from "../../../presentation/controllers/followup/followup-getOne";
import { Controller } from "../../../presentation/protocols";

export const makeFollowUpGetOneController = (): Controller =>{
    return new FollowUpGetOneController();
}