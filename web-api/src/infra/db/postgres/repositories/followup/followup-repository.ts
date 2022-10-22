import { FollowUpGetAllFromOneRepository,FollowUpGetOneRepository,FollowUpPostRepository } from "../../../../../data/protocols/followup";
import { FollowUpModel } from "../../../../../domain/models/followup";
import db from "../../models";

export class FollowUpRepository implements FollowUpGetAllFromOneRepository,FollowUpGetOneRepository,FollowUpPostRepository {
    async getOne(id: number): Promise<FollowUpModel> {
        return db.followup.findOne({where:{id}})
    }
    async getAllFromOne(task_id:number): Promise<FollowUpModel[]> {
        return await db.followup.find({where:{task_id}});
    }
    async post(followup: FollowUpModel): Promise<FollowUpModel>{
        const result = await db.followup.create(followup)
        return result;
    }
}