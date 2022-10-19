import { FollowUpModel } from "../../../domain/models/followup";
import { FollowUpGetAll } from "../../../domain/usecases/followup/followup-getAll"
import { FollowUpGetAllRepository } from "../../protocols/followup";

export class DbFollowUpGetall implements FollowUpGetAll{

    private readonly followUpRepository: FollowUpGetAllRepository;

    constructor(followUpRepository: FollowUpGetAllRepository ){
        this.followUpRepository = followUpRepository;

    }

    async getAll(): Promise<FollowUpModel[]> {
        const user = await this.followUpRepository.getAll();
        return user;
    }

}