export interface FollowUpModel {
    id?: number;
    description: string;
    task_id: number;
    createdBy?:number;
    createdBy_name?: string;
}