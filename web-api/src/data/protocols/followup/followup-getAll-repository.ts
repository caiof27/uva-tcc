import { FollowUpModel } from "../../../domain/models/followup";


export interface FollowUpGetAllRepository {
    getAll(): Promise<FollowUpModel[]>;
}