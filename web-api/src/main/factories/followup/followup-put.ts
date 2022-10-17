import { FollowUpPutController } from "../../../presentation/controllers/followup/followup-put";
import { Controller } from "../../../presentation/protocols";

export const makeFollowUpPutController = (): Controller =>{
    return new FollowUpPutController();
}