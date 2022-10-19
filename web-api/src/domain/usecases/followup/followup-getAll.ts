import { FollowUpModel } from "../../models/followup";

export interface FollowUpGetAll{
    getAll():Promise<FollowUpModel[]>
}