import { TaskModel } from "../../models/task";

export interface TaskGetAll{
    getAll():Promise<TaskModel[]>
}