
import { DbFollowUpGetall } from "../../../data/usecases/followup/followup-getAll";
import { FollowUpRepository } from "../../../infra/db/postgres/repositories/followup/followup-repository";
import { FollowUpGetAllController } from "../../../presentation/controllers/followup/followup-getAll";
import { Controller } from "../../../presentation/protocols";

export const makeFollowUpGetAllController = (): Controller =>{
    const followUpRepository = new FollowUpRepository();
    const dbFollowUpGetALl = new DbFollowUpGetall(followUpRepository);
    return new FollowUpGetAllController(dbFollowUpGetALl);
}