import { FollowUpGetAllFromOneRepository,FollowUpGetOneRepository,FollowUpPostRepository } from "../../../../../data/protocols/followup";
import { FollowUpModel } from "../../../../../domain/models/followup";
import db from "../../models";

export class FollowUpRepository implements FollowUpGetAllFromOneRepository,FollowUpGetOneRepository,FollowUpPostRepository {
    async getOne(id: number): Promise<FollowUpModel> {
        const value =  db.sequelize.query(`select followups.*,users.name as "createdBy_name"  from followups left join users on followups."createdBy" = users.id where followups.id = ${id} `)
        return value;
    }
    async getAllFromOne(task_id:number): Promise<FollowUpModel[]> {
        const value =  db.sequelize.query(`select followups.*,users.name as "createdBy_name"  from followups left join users on followups."createdBy" = users.id where task_id = ${task_id} `)
        return value;
    }
    async post(followup: FollowUpModel): Promise<FollowUpModel>{
        return await db.followup.create(followup)
        
    }
}