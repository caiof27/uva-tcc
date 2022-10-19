import { TaskModel } from "../../../domain/models/task";
import { TaskGetOne } from "../../../domain/usecases/task/task-getOne"
import { TaskGetOneRepository } from "../../protocols/task";

export class DbTaskGetOne implements TaskGetOne{

    private readonly taskRepository: TaskGetOneRepository;

    constructor(taskRepository: TaskGetOneRepository ){
        this.taskRepository = taskRepository;
    }

    async getOne(id: number): Promise<TaskModel> {
        const task = this.taskRepository.getOne(id)
        return task;
    }

}