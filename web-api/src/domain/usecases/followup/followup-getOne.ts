import { FollowUpModel } from "../../models/followup";

export interface FollowUpGetOne{
    getOne(id:number):Promise<FollowUpModel>
}