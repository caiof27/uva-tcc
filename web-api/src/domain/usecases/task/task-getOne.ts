import { TaskModel } from "../../models/task";

export interface TaskGetOne{
    getOne(id:number):Promise<TaskModel>
}