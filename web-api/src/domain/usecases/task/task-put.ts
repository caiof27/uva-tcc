import { TaskModel } from "../../models/task";

export interface TaskPut{
    put(task: TaskModel,taskId:number): Promise<void>
}