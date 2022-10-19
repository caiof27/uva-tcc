import { FollowUpGetAllRepository,FollowUpGetOneRepository,FollowUpPostRepository } from "../../../../../data/protocols/followup";
import { FollowUpModel } from "../../../../../domain/models/followup";
import db from "../../models";

export class FollowUpRepository implements FollowUpGetAllRepository,FollowUpGetOneRepository,FollowUpPostRepository {
    async getOne(id: number): Promise<FollowUpModel> {
        return db.followup.findOne({where:{id}})
    }
    async getAll(): Promise<FollowUpModel[]> {
        return await db.followup.findAll();
    }
    async post(followup: FollowUpModel): Promise<FollowUpModel>{
        const result = await db.followup.create(followup)
        return result;
    }
}