import { FollowUpModel } from "../../../domain/models/followup";
import { FollowUpPost } from "../../../domain/usecases/followup/followup-post"
import { FollowUpPostRepository } from "../../protocols/followup";


export class DbFollowUpPost implements FollowUpPost{

    private readonly followUpRepository: FollowUpPostRepository;

    constructor(followUpRepository: FollowUpPostRepository ){
        this.followUpRepository = followUpRepository;

    }

    async post(followUpData: FollowUpModel): Promise<FollowUpModel> {
        const user = await this.followUpRepository.post(followUpData);
        return user;
    }

}