import { TaskModel } from "../../models/task";

export interface TaskGetOne{
    getOne(task:TaskModel):Promise<TaskModel>
}