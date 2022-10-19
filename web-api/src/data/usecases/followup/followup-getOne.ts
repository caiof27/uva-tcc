import { FollowUpModel } from "../../../domain/models/followup";
import { FollowUpGetOne } from "../../../domain/usecases/followup/followup-getOne"
import { FollowUpGetOneRepository } from "../../protocols/followup";

export class DbFollowUpGetOne implements FollowUpGetOne{

    private readonly followUpRepository: FollowUpGetOneRepository;

    constructor(followUpRepository: FollowUpGetOneRepository ){
        this.followUpRepository = followUpRepository;
    }

    async getOne(id: number): Promise<FollowUpModel> {
        const user = this.followUpRepository.getOne(id)
        return user;
    }

}