import { TaskModel } from "../../../domain/models/task";

export interface TaskGetOneRepository {
    getOne(id: number): Promise<TaskModel>;
}