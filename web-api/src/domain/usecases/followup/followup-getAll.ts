import { TaskModel } from "../../models/task";

export interface TaskGetAll{
    getAll(task:TaskModel):Promise<TaskModel[]>
}