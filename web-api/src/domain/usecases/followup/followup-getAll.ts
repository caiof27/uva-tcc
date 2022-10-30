import { FollowUpModel } from "../../models/followup";

export interface FollowUpGetAll{
    getAllFromOne(task_id:number):Promise<FollowUpModel[]>
}