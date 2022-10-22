import { FollowUpModel } from "../../../domain/models/followup";


export interface FollowUpGetAllFromOneRepository {
    getAllFromOne(task_id:number): Promise<FollowUpModel[]>;
}