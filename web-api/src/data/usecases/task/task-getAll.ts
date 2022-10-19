import { TaskModel } from "../../../domain/models/task";
import { TaskGetAll } from "../../../domain/usecases/task/task-getAll"
import { TaskGetAllRepository } from "../../protocols/task";

export class DbTaskGetall implements TaskGetAll{

    private readonly taskRepository: TaskGetAllRepository;

    constructor(taskRepository: TaskGetAllRepository ){
        this.taskRepository = taskRepository;

    }

    async getAll(): Promise<TaskModel[]> {
        const task = await this.taskRepository.getAll();
        return task;
    }

}