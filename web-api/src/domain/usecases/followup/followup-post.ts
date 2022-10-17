import { TaskModel } from "../../models/task";

export interface TaskPost{
    post(task: TaskModel): Promise<TaskModel>
}