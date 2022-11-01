import { TaskModel } from "../../../domain/models/task";
import { TaskPost } from "../../../domain/usecases/task/task-post"
import { TaskPostRepository } from "../../protocols/task";

export class DbTaskPost implements TaskPost{

    private readonly taskRepository: TaskPostRepository;

    constructor(taskRepository: TaskPostRepository ){
        this.taskRepository = taskRepository;

    }

    async post(taskData: TaskModel): Promise<TaskModel> {
        console.log("Data:")
        console.log(taskData)
        const task = await this.taskRepository.post(taskData);
        console.log(task)
        return task;
    }

}