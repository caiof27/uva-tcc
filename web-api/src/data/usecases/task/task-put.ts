import { TaskModel } from "../../../domain/models/task";
import { TaskPut } from "../../../domain/usecases/task/task-put"
import { TaskPutRepository } from "../../protocols/task";

export class DbTaskPut implements TaskPut{

    private readonly taskRepository: TaskPutRepository;

    constructor(taskRepository: TaskPutRepository ){
        this.taskRepository = taskRepository;

    }

    async put(taskData: TaskModel, taskId: number): Promise<void> {
        await this.taskRepository.put(taskData, taskId);
    }

}