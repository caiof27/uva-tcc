import { TaskModel } from "../../models/task";

export interface TaskPost{
    put(task: TaskModel): Promise<TaskModel>
}