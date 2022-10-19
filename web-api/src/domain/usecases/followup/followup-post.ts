import { FollowUpModel } from "../../models/followup";

export interface FollowUpPost{
    post(followup: FollowUpModel): Promise<FollowUpModel>
}