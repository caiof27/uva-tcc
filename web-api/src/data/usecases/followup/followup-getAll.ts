import { FollowUpModel } from "../../../domain/models/followup";
import { FollowUpGetAll } from "../../../domain/usecases/followup/followup-getAll"
import { FollowUpGetAllFromOneRepository } from "../../protocols/followup";

export class DbFollowUpGetall implements FollowUpGetAll{

    private readonly followUpRepository: FollowUpGetAllFromOneRepository;

    constructor(followUpRepository: FollowUpGetAllFromOneRepository ){
        this.followUpRepository = followUpRepository;

    }

    async getAllFromOne(task_id: number): Promise<FollowUpModel[]> {
        const user = await this.followUpRepository.getAllFromOne(task_id);
        return user;
    }

}