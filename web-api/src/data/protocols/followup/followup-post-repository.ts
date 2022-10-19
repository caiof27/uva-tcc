import { FollowUpModel } from "../../../domain/models/followup";

export interface FollowUpPostRepository {
    post(followup: FollowUpModel): Promise<FollowUpModel>;
}