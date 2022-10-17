
import { FollowUpGetController } from "../../../presentation/controllers/followup/followup-get";
import { Controller } from "../../../presentation/protocols";

export const makeFollowUpGetController = (): Controller =>{
    return new FollowUpGetController();
}