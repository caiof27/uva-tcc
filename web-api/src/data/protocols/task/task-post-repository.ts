import { TaskModel } from "../../../domain/models/task";

export interface TaskPostRepository {
    post(task: TaskModel): Promise<TaskModel>;
}