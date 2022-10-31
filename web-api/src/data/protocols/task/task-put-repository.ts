import { TaskModel } from "../../../domain/models/task";

export interface TaskPutRepository {
    put(task: TaskModel, taskId:number): Promise<void>;
}