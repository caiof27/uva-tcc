import { FollowUpModel } from "../../../domain/models/followup";


export interface FollowUpGetOneRepository {
    getOne(id: number): Promise<FollowUpModel>;
}