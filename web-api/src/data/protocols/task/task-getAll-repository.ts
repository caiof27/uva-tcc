import { TaskModel } from "../../../domain/models/task";

export interface TaskGetAllRepository {
    getAll(): Promise<TaskModel[]>;
}