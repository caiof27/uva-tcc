import { DbFollowUpGetOne } from "../../../data/usecases/followup/followup-getOne";
import { FollowUpRepository } from "../../../infra/db/postgres/repositories/followup/followup-repository";
import { FollowUpGetOneController } from "../../../presentation/controllers/followup/followup-getOne";
import { Controller } from "../../../presentation/protocols";

export const makeFollowUpGetOneController = (): Controller =>{
    const followUpRepository = new FollowUpRepository();
    const dbFollowUpGetOne = new DbFollowUpGetOne(followUpRepository);
    return new FollowUpGetOneController(dbFollowUpGetOne);
}