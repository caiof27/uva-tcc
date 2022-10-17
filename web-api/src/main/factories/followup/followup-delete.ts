import { FollowUpDeleteController } from "../../../presentation/controllers/followup/followup-delete";
import { Controller } from "../../../presentation/protocols";

export const makeFollowUpDeleteController = (): Controller =>{
    return new FollowUpDeleteController();
}